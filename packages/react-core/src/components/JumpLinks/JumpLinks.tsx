import { Children, cloneElement, Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/JumpLinks/jump-links';
import sidebarStyles from '@patternfly/react-styles/css/components/Sidebar/sidebar';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import cssToggleDisplayVar from '@patternfly/react-tokens/dist/esm/c_jump_links__toggle_Display';
import { Button } from '../Button';
import { JumpLinksItem, JumpLinksItemProps } from './JumpLinksItem';
import { JumpLinksList } from './JumpLinksList';
import { canUseDOM, formatBreakpointMods, getUniqueId } from '../../helpers/util';

export interface JumpLinksProps extends Omit<React.HTMLProps<HTMLElement>, 'label'> {
  /** Whether to center children. */
  isCentered?: boolean;
  /** Whether the layout of children is vertical or horizontal. */
  isVertical?: boolean;
  /** Label to add to nav element. */
  label?: React.ReactNode;
  /** Flag to always show the label when using `expandable` */
  alwaysShowLabel?: boolean;
  /** Adds an accessible label to the internal nav element. Defaults to the value of the label prop. */
  'aria-label'?: string;
  /** Reference to the scrollable element to spy on. Takes precedence over scrollableSelector. Not passing a scrollableRef or scrollableSelector disables spying. */
  scrollableRef?: HTMLElement | (() => HTMLElement) | React.RefObject<HTMLElement | null>;
  /** Selector for the scrollable element to spy on. Not passing a scrollableSelector or scrollableRef disables spying. */
  scrollableSelector?: string;
  /** The index of the child Jump link to make active. */
  activeIndex?: number;
  /** Children nodes */
  children?: React.ReactNode;
  /** Offset to add to `scrollPosition`, potentially for a masthead which content scrolls under. */
  offset?: number;
  /** When to collapse/expand at different breakpoints */
  expandable?: {
    default?: 'expandable' | 'nonExpandable';
    sm?: 'expandable' | 'nonExpandable';
    md?: 'expandable' | 'nonExpandable';
    lg?: 'expandable' | 'nonExpandable';
    xl?: 'expandable' | 'nonExpandable';
    '2xl'?: 'expandable' | 'nonExpandable';
  };
  /** On mobile whether or not the JumpLinks starts out expanded */
  isExpanded?: boolean;
  /** Aria label for expandable toggle */
  toggleAriaLabel?: string;
  /** Class for nav */
  className?: string;
  /** Whether the current entry in the navigation history should be replaced when a JumpLinksItem is clicked. By default a new entry will be pushed to the navigation history. */
  shouldReplaceNavHistory?: boolean;
  /** Custom ID applied to label if alwaysShowLabel is applied, or expandable toggle. This is used for internal logic related to aria-label and aria-labelledby */
  labelId?: string;
}

// Recursively find JumpLinkItems and return an array of all their scrollNodes
const getScrollItems = (children: React.ReactNode, res: HTMLElement[]) => {
  Children.forEach(children, (child: any) => {
    if (canUseDOM && document.getElementById && document.querySelector && child.type === JumpLinksItem) {
      const scrollNode = child.props.node || child.props.href;
      if (typeof scrollNode === 'string') {
        if (scrollNode.startsWith('#')) {
          // Allow spaces and other special characters as `id`s to be nicer to consumers
          // https://stackoverflow.com/questions/70579/what-are-valid-values-for-the-id-attribute-in-html
          res.push(document.getElementById(scrollNode.substr(1)) as HTMLElement);
        } else {
          res.push(document.querySelector(scrollNode) as HTMLElement);
        }
      } else if (scrollNode instanceof HTMLElement) {
        res.push(scrollNode);
      }
    }
    if ([Fragment, JumpLinksList, JumpLinksItem].includes(child.type)) {
      getScrollItems(child.props.children, res);
    }
  });
  return res;
};

function isResponsive(jumpLinks: HTMLElement) {
  // https://github.com/patternfly/patternfly/blob/main/src/patternfly/components/JumpLinks/jump-links.scss#L103
  return jumpLinks && getComputedStyle(jumpLinks).getPropertyValue(cssToggleDisplayVar.name).includes('block');
}

export const JumpLinks: React.FunctionComponent<JumpLinksProps> = ({
  isCentered,
  isVertical,
  children,
  label,
  'aria-label': ariaLabel = typeof label === 'string' ? label : null,
  scrollableRef,
  scrollableSelector,
  activeIndex: activeIndexProp = 0,
  offset = 0,
  expandable,
  isExpanded: isExpandedProp = false,
  alwaysShowLabel = true,
  toggleAriaLabel = 'Toggle jump links',
  className,
  shouldReplaceNavHistory = false,
  labelId,
  ...props
}: JumpLinksProps) => {
  const hasScrollSpy = Boolean(scrollableRef || scrollableSelector);
  const [scrollItems, setScrollItems] = useState(hasScrollSpy ? getScrollItems(children, []) : []);
  const [activeIndex, setActiveIndex] = useState(activeIndexProp);
  const [isExpanded, setIsExpanded] = useState(isExpandedProp);
  // Boolean to disable scroll listener from overriding active state of clicked jumplink
  const isLinkClicked = useRef(false);
  const navRef = useRef<HTMLElement>(undefined);

  let scrollableElement: HTMLElement;

  if (!label && !ariaLabel) {
    // eslint-disable-next-line no-console
    console.warn('JumpLinks: for accessibility reasons, an aria-label should be specified if no label is provided');
  }
  if (!label && !toggleAriaLabel && expandable) {
    // eslint-disable-next-line no-console
    console.warn('JumpLinks: for accessibility reasons, a toggleAriaLabel should be specified if no label is provided');
  }

  const getScrollableElement = () => {
    if (scrollableRef) {
      if (scrollableRef instanceof HTMLElement) {
        return scrollableRef;
      } else if (typeof scrollableRef === 'function') {
        return scrollableRef();
      }
      return (scrollableRef as React.RefObject<HTMLElement | null>).current;
    } else if (scrollableSelector) {
      return document.querySelector(scrollableSelector) as HTMLElement;
    }
  };

  const scrollSpy = useCallback(() => {
    if (!canUseDOM || !hasScrollSpy || !(scrollableElement instanceof HTMLElement)) {
      return;
    }
    if (isLinkClicked.current) {
      isLinkClicked.current = false;
      return;
    }
    const scrollPosition = Math.ceil(scrollableElement.scrollTop + offset);
    window.requestAnimationFrame(() => {
      let newScrollItems = scrollItems;
      // Items might have rendered after this component or offsetTop values may need
      // to be updated. Do a quick refresh.
      const requiresRefresh =
        newScrollItems.every((e) => !e?.offsetTop) || !newScrollItems[0] || newScrollItems.includes(null);
      if (requiresRefresh) {
        newScrollItems = getScrollItems(children, []);
        setScrollItems(newScrollItems);
      }

      const scrollElements = newScrollItems
        .map((e, index) => ({
          y: e ? e.offsetTop : null,
          index
        }))
        .filter(({ y }) => y !== null)
        .sort((e1, e2) => e2.y - e1.y);
      for (const { y, index } of scrollElements) {
        if (scrollPosition >= y) {
          return setActiveIndex(index);
        }
      }
    });
  }, [scrollItems, hasScrollSpy, scrollableElement, offset]);

  useEffect(() => {
    scrollableElement = getScrollableElement();
    if (!(scrollableElement instanceof HTMLElement)) {
      return;
    }
    scrollableElement.addEventListener('scroll', scrollSpy);

    return () => scrollableElement.removeEventListener('scroll', scrollSpy);
  }, [scrollableElement, scrollSpy, getScrollableElement]);

  useEffect(() => {
    scrollSpy();
  }, []);

  let jumpLinkIndex = 0;
  const cloneChildren = (children: React.ReactNode): React.ReactNode =>
    !hasScrollSpy
      ? children
      : Children.map(children, (child: any) => {
          if (child.type === JumpLinksItem) {
            const { onClick: onClickProp, isActive: isActiveProp } = child.props;
            const itemIndex = jumpLinkIndex++;
            const scrollItem = scrollItems[itemIndex];
            return cloneElement(child as React.ReactElement<JumpLinksItemProps>, {
              onClick(ev: React.MouseEvent) {
                isLinkClicked.current = true;
                // Items might have rendered after this component. Do a quick refresh.
                let newScrollItems;
                if (!scrollItem) {
                  newScrollItems = getScrollItems(children, []);
                  setScrollItems(newScrollItems);
                }
                const newScrollItem = scrollItem || newScrollItems[itemIndex];

                if (newScrollItem) {
                  // we have to support scrolling to an offset due to sticky sidebar
                  const scrollableElement = getScrollableElement() as HTMLElement;
                  if (scrollableElement instanceof HTMLElement) {
                    if (isResponsive(navRef.current)) {
                      // Remove class immediately so we can get collapsed height
                      if (navRef.current) {
                        navRef.current.classList.remove(styles.modifiers.expanded);
                      }
                      let stickyParent = navRef.current && navRef.current.parentElement;
                      while (stickyParent && !stickyParent.classList.contains(sidebarStyles.modifiers.sticky)) {
                        stickyParent = stickyParent.parentElement;
                      }
                      setIsExpanded(false);
                      if (stickyParent) {
                        offset += stickyParent.scrollHeight;
                      }
                    }
                    scrollableElement.scrollTo(0, newScrollItem.offsetTop - offset);
                  }
                  newScrollItem.focus();
                  if (shouldReplaceNavHistory) {
                    window.history.replaceState('', '', (ev.currentTarget as HTMLAnchorElement).href);
                  } else {
                    window.history.pushState('', '', (ev.currentTarget as HTMLAnchorElement).href);
                  }
                  ev.preventDefault();
                  setActiveIndex(itemIndex);
                }
                if (onClickProp) {
                  onClickProp(ev);
                }
              },
              isActive: isActiveProp || activeIndex === itemIndex,
              children: cloneChildren(child.props.children)
            });
          } else if (child.type === Fragment) {
            return cloneChildren(child.props.children);
          } else if (child.type === JumpLinksList) {
            return cloneElement(child, { children: cloneChildren(child.props.children) });
          }
          return child;
        });

  const id = labelId ?? getUniqueId();
  const hasAriaLabelledBy = expandable || (label && alwaysShowLabel);
  const computedAriaLabel = hasAriaLabelledBy ? null : ariaLabel;
  const computedAriaLabelledBy = hasAriaLabelledBy ? id : null;

  return (
    <nav
      className={css(
        styles.jumpLinks,
        isCentered && styles.modifiers.center,
        isVertical && styles.modifiers.vertical,
        formatBreakpointMods(expandable, styles),
        isExpanded && styles.modifiers.expanded,
        className
      )}
      aria-label={computedAriaLabel}
      ref={navRef}
      aria-labelledby={computedAriaLabelledBy}
      {...props}
    >
      <div className={styles.jumpLinksMain}>
        <div className={css(`${styles.jumpLinks}__header`)}>
          {expandable && (
            <div className={styles.jumpLinksToggle}>
              <Button
                variant="plain"
                onClick={() => setIsExpanded(!isExpanded)}
                aria-label={label ? null : toggleAriaLabel}
                aria-expanded={isExpanded}
                icon={
                  <span className={styles.jumpLinksToggleIcon}>
                    <AngleRightIcon />
                  </span>
                }
                id={id}
              >
                {label && label}
              </Button>
            </div>
          )}
          {label && alwaysShowLabel && !expandable && (
            <div className={css(styles.jumpLinksLabel)} id={id}>
              {label}
            </div>
          )}
        </div>
        <ul
          aria-label={computedAriaLabel}
          aria-labelledby={computedAriaLabelledBy}
          className={styles.jumpLinksList}
          role="list"
        >
          {cloneChildren(children)}
        </ul>
      </div>
    </nav>
  );
};
JumpLinks.displayName = 'JumpLinks';
