import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Nav/nav';
import { css } from '@patternfly/react-styles';
import { NavContext, NavSelectClickHandler } from './Nav';
import { PageSidebarContext } from '../Page/PageSidebar';
import { useOUIAProps, OUIAProps } from '../../helpers';
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
  const [flyoutTarget, setFlyoutTarget] = React.useState(null);
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

  React.useEffect(() => {
    if (flyoutTarget) {
      if (flyoutVisible) {
        const flyoutMenu = (flyoutTarget as HTMLElement).nextElementSibling;
        const flyoutItems = Array.from(flyoutMenu.getElementsByTagName('UL')[0].children).filter(
          el => !(el.classList.contains('pf-m-disabled') || el.classList.contains('pf-c-divider'))
        );
        (flyoutItems[0].firstChild as HTMLElement).focus();
      } else {
        flyoutTarget.focus();
      }
    }
  }, [flyoutVisible, flyoutTarget]);

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
        setFlyoutTarget(target as HTMLElement);
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
      {flyoutVisible && flyout}
    </li>
  );
};
NavItem.displayName = 'NavItem';
