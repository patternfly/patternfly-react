import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/JumpLinks/jump-links';
import { JumpLinksItem, JumpLinksItemProps } from './JumpLinksItem';
import { JumpLinksList } from './JumpLinksList';

export interface JumpLinksProps extends Omit<React.HTMLProps<HTMLElement>, 'label'> {
  /** Whether to center children. */
  isCentered?: boolean;
  /** Whether the layout of children is vertical or horizontal. */
  isVertical?: boolean;
  /** Label to add to nav element. */
  label?: React.ReactNode;
  /** Aria-label to add to nav element. Defaults to label. */
  'aria-label'?: string;
  /** Selector for the scrollable element to spy on. Not passing a selector disables spying. */
  scrollableSelector?: string;
  /** The index of the child Jump link to make active. */
  activeIndex?: number;
  /** Children nodes */
  children?: React.ReactNode;
  /** Offset to add to `scrollPosition`, potentially for a masthead which content scrolls under. */
  offset?: number;
}

// Recursively find JumpLinkItems and return an array of all their scrollNodes
const getScrollItems = (children: React.ReactNode, res: HTMLElement[]) => {
  React.Children.forEach(children, (child: any) => {
    if (typeof document !== 'undefined' && child.type === JumpLinksItem) {
      const scrollNode = child.props.node || child.props.href;
      if (typeof scrollNode === 'string') {
        if (scrollNode.startsWith('#')) {
          // Allow spaces and other special characters as `id`s to be nicer to consumers
          // https://stackoverflow.com/questions/70579/what-are-valid-values-for-the-id-attribute-in-html
          res.push(document.getElementById(scrollNode.substr(1)) as HTMLElement);
        }
        return document.querySelector(scrollNode) as HTMLElement;
      } else if (scrollNode instanceof HTMLElement) {
        res.push(scrollNode);
      }
    }
    if (child.type === React.Fragment || child.type === JumpLinksList) {
      getScrollItems(child.props.children, res);
    }
  });
  return res;
};

export const JumpLinks: React.FunctionComponent<JumpLinksProps> = ({
  isCentered,
  isVertical,
  children,
  label,
  'aria-label': ariaLabel = typeof label === 'string' ? label : null,
  scrollableSelector,
  activeIndex: activeIndexProp = 0,
  offset = 0,
  ...props
}: JumpLinksProps) => {
  const hasScrollSpy = Boolean(scrollableSelector);
  const [scrollItems, setScrollItems] = React.useState(hasScrollSpy ? getScrollItems(children, []) : []);
  const [activeIndex, setActiveIndex] = React.useState(activeIndexProp);
  if (hasScrollSpy) {
    React.useEffect(() => {
      if (typeof window === 'undefined') {
        return;
      }
      const scrollableElement = document.querySelector(scrollableSelector) as HTMLElement;
      if (!(scrollableElement instanceof HTMLElement)) {
        return;
      }

      function scrollSpy() {
        const scrollPosition = scrollableElement.scrollTop + offset;
        window.requestAnimationFrame(() => {
          let newScrollItems = scrollItems;
          // Items might have rendered after this component. Do a quick refresh.
          if (!newScrollItems[0]) {
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
      }
      if (scrollableElement) {
        scrollSpy();
        scrollableElement.addEventListener('scroll', scrollSpy);
      }

      return () => scrollableElement.removeEventListener('scroll', scrollSpy);
    }, [scrollItems, hasScrollSpy]);
  }

  let jumpLinkIndex = 0;
  const cloneChildren = (children: React.ReactNode): React.ReactNode =>
    !hasScrollSpy
      ? children
      : React.Children.map(children, (child: any, i: number) => {
          if (child.type === JumpLinksItem) {
            const { onClick: onClickProp, isActive: isActiveProp } = child.props;
            const scrollItem = scrollItems[i];
            return React.cloneElement(child as React.ReactElement<JumpLinksItemProps>, {
              onClick(ev: React.MouseEvent<HTMLAnchorElement>) {
                // Items might have rendered after this component. Do a quick refresh.
                let newScrollItems;
                if (!scrollItem) {
                  newScrollItems = getScrollItems(children, []);
                  setScrollItems(newScrollItems);
                }
                const newScrollItem = scrollItem || newScrollItems[i];

                if (newScrollItem) {
                  newScrollItem.scrollIntoView();
                  newScrollItem.focus();
                  ev.preventDefault();
                }
                if (onClickProp) {
                  onClickProp(ev);
                }
              },
              isActive: isActiveProp || activeIndex === jumpLinkIndex++
            });
          } else if (child.type === React.Fragment) {
            return cloneChildren(child.props.children);
          } else if (child.type === JumpLinksList) {
            return React.cloneElement(child, { children: cloneChildren(child.props.children) });
          }
          return child;
        });

  return (
    <nav
      className={css(styles.jumpLinks, isCentered && styles.modifiers.center, isVertical && styles.modifiers.vertical)}
      aria-label={ariaLabel}
      {...props}
    >
      <div className={styles.jumpLinksMain}>
        {label && <div className={styles.jumpLinksLabel}>{label}</div>}
        <ul className={styles.jumpLinksList}>{cloneChildren(children)}</ul>
      </div>
    </nav>
  );
};
JumpLinks.displayName = 'JumpLinks';
