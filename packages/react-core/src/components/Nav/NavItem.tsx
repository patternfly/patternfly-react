import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Nav/nav';
import menuStyles from '@patternfly/react-styles/css/components/Menu/menu';
import { css } from '@patternfly/react-styles';
import { NavContext, NavSelectClickHandler } from './Nav';
import { PageSidebarContext } from '../Page/PageSidebar';
import { useOUIAProps, OUIAProps } from '../../helpers';
import { useIsomorphicLayoutEffect } from '../../helpers/useIsomorphicLayout';
import { canUseDOM } from '../../helpers/util';
import topOffset from '@patternfly/react-tokens/dist/esm/c_menu_m_flyout__menu_top_offset';
import rightOffset from '@patternfly/react-tokens/dist/esm/c_menu_m_flyout__menu_m_left_right_offset';
import leftOffset from '@patternfly/react-tokens/dist/esm/c_menu_m_flyout__menu_left_offset';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';

export interface NavItemProps extends Omit<React.HTMLProps<HTMLAnchorElement>, 'onClick'>, OUIAProps {
  /** Content rendered inside the nav item. */
  children?: React.ReactNode;
  /** Whether to set className on children when React.isValidElement(children) */
  styleChildren?: boolean;
  /** Additional classes added to the nav item */
  className?: string;
  /** Target navigation link */
  to?: string;
  /** Flag indicating whether the item is active */
  isActive?: boolean;
  /** Group identifier, will be returned with the onToggle and onSelect callback passed to the Nav component */
  groupId?: string | number | null;
  /** Item identifier, will be returned with the onToggle and onSelect callback passed to the Nav component */
  itemId?: string | number | null;
  /** If true prevents the default anchor link action to occur. Set to true if you want to handle navigation yourself. */
  preventDefault?: boolean;
  /** Callback for item click */
  onClick?: NavSelectClickHandler;
  /** Component used to render NavItems if  React.isValidElement(children) is false */
  component?: React.ReactNode;
  /** Flyout sub-navigation of a nav item */
  flyout?: React.ReactNode;
  /** Callback when flyout is opened or closed */
  onShowFlyout?: () => void;
}

const FlyoutContext = React.createContext({
  direction: 'right' as 'left' | 'right'
});

export const NavItem: React.FunctionComponent<NavItemProps> = ({
  children,
  styleChildren = true,
  className,
  to,
  isActive = false,
  groupId = null as string,
  itemId = null as string,
  preventDefault = false,
  onClick = null as NavSelectClickHandler,
  component = 'a',
  flyout,
  onShowFlyout,
  ouiaId,
  ouiaSafe,
  ...props
}: NavItemProps) => {
  const { flyoutRef, setFlyoutRef } = React.useContext(NavContext);
  const { isNavOpen } = React.useContext(PageSidebarContext);
  const flyoutContext = React.useContext(FlyoutContext);
  const [flyoutXDirection, setFlyoutXDirection] = React.useState(flyoutContext.direction);
  const ref = React.useRef<HTMLLIElement>();
  const flyoutVisible = ref === flyoutRef;
  const Component = component as any;
  const hasFlyout = flyout !== undefined;

  const showFlyout = (show: boolean) => {
    if (!flyoutVisible && show) {
      setFlyoutRef(ref);
    } else if (flyoutVisible && !show) {
      setFlyoutRef(null);
    }
    onShowFlyout && show && onShowFlyout();
  };

  useIsomorphicLayoutEffect(() => {
    if (hasFlyout && ref.current && canUseDOM) {
      const flyoutMenu = ref.current.lastElementChild as HTMLElement;
      if (flyoutMenu && flyoutMenu.classList.contains(styles.navSubnav)) {
        const origin = ref.current.getClientRects()[0];
        const rect = flyoutMenu.getClientRects()[0];
        if (origin && rect) {
          const spaceLeftLeft = origin.x - rect.width;
          const spaceLeftRight = window.innerWidth - origin.x - origin.width - rect.width;
          let xDir = flyoutXDirection as 'left' | 'right' | 'none';
          if (spaceLeftRight < 0 && xDir !== 'left') {
            setFlyoutXDirection('left');
            xDir = 'left';
          } else if (spaceLeftLeft < 0 && xDir !== 'right') {
            setFlyoutXDirection('right');
            xDir = 'right';
          }
          let xOffset = 0;
          if (spaceLeftLeft < 0 && spaceLeftRight < 0) {
            xOffset = xDir === 'right' ? -spaceLeftRight : -spaceLeftLeft;
          }
          if (xDir === 'left') {
            // console.log("Something here isn't working");
            flyoutMenu.classList.add(menuStyles.modifiers.left);
            flyoutMenu.style.setProperty(rightOffset.name, `-${xOffset}px`);
          } else {
            flyoutMenu.style.setProperty(leftOffset.name, `-${xOffset}px`);
          }

          const spaceLeftBot = window.innerHeight - origin.y - rect.height;
          const spaceLeftTop = window.innerHeight - rect.height;
          if (spaceLeftTop < 0 && spaceLeftBot < 0) {
            // working idea: page can usually scroll down, but not up
            // TODO: proper scroll buttons
          } else if (spaceLeftBot < 0) {
            flyoutMenu.style.setProperty(topOffset.name, `${spaceLeftBot}px`);
          }
        }
      }
    }
  }, [flyoutVisible, flyout]);

  React.useEffect(() => {
    setFlyoutXDirection(flyoutContext.direction);
  }, [flyoutContext]);

  const onMouseOver = () => {
    if (hasFlyout) {
      showFlyout(true);
    } else {
      setFlyoutRef(null);
    }
  };

  const onFlyoutClick = (event: MouseEvent) => {
    const target = event.target;
    const closestItem = (target as HTMLElement).closest('.pf-c-nav__item');
    if (!closestItem) {
      if (hasFlyout) {
        showFlyout(true);
      } else {
        setFlyoutRef(null);
      }
    }
  };

  React.useEffect(() => {
    window.addEventListener('click', onFlyoutClick);
    return () => {
      window.removeEventListener('click', onFlyoutClick);
    };
  }, []);

  const handleFlyout = (event: React.KeyboardEvent) => {
    const key = event.key;
    const target = event.target as HTMLElement;

    if (!hasFlyout) {
      return;
    }

    if (key === ' ' || key === 'ArrowRight') {
      event.stopPropagation();
      event.preventDefault();
      if (!flyoutVisible) {
        showFlyout(true);
      }
    }

    if (key === 'Escape' || key === 'ArrowLeft') {
      if (flyoutVisible) {
        event.stopPropagation();
        event.preventDefault();
        let closestFlyout = target.closest('.pf-c-nav__item.pf-m-flyout');
        if (target.parentElement === closestFlyout) {
          closestFlyout = closestFlyout.parentElement.closest('.pf-c-nav__item.pf-m-flyout');
        }

        if (closestFlyout) {
          (closestFlyout.firstChild as HTMLElement).focus();
        }

        showFlyout(false);
      }
    }
  };

  const flyoutButton = (
    <span className={css(styles.navToggle)}>
      <span className={css(styles.navToggleIcon)}>
        <AngleRightIcon aria-hidden />
      </span>
    </span>
  );

  const renderDefaultLink = (context: any): React.ReactNode => {
    const preventLinkDefault = preventDefault || !to;
    return (
      <Component
        href={to}
        onClick={(e: any) => context.onSelect(e, groupId, itemId, to, preventLinkDefault, onClick)}
        className={css(styles.navLink, isActive && styles.modifiers.current, className)}
        aria-current={isActive ? 'page' : null}
        tabIndex={isNavOpen ? null : '-1'}
        {...props}
      >
        {children}
        {flyout && flyoutButton}
      </Component>
    );
  };

  const renderClonedChild = (context: any, child: React.ReactElement): React.ReactNode =>
    React.cloneElement(child, {
      onClick: (e: MouseEvent) => context.onSelect(e, groupId, itemId, to, preventDefault, onClick),
      'aria-current': isActive ? 'page' : null,
      ...(styleChildren && {
        className: css(styles.navLink, isActive && styles.modifiers.current, child.props && child.props.className)
      }),
      tabIndex: child.props.tabIndex || isNavOpen ? null : -1,
      children: hasFlyout ? (
        <React.Fragment>
          {child.props.children}
          {flyoutButton}
        </React.Fragment>
      ) : (
        child.props.children
      )
    });

  const ouiaProps = useOUIAProps(NavItem.displayName, ouiaId, ouiaSafe);

  return (
    <li
      {...(hasFlyout && {
        onKeyDown: handleFlyout
      })}
      onMouseOver={onMouseOver}
      className={css(styles.navItem, hasFlyout && styles.modifiers.flyout, className)}
      ref={ref}
      {...ouiaProps}
    >
      <NavContext.Consumer>
        {context =>
          React.isValidElement(children)
            ? renderClonedChild(context, children as React.ReactElement)
            : renderDefaultLink(context)
        }
      </NavContext.Consumer>
      {flyoutVisible && (
        <FlyoutContext.Provider value={{ direction: flyoutXDirection }}>{flyout}</FlyoutContext.Provider>
      )}
    </li>
  );
};
NavItem.displayName = 'NavItem';
