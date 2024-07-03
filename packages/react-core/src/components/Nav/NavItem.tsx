import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Nav/nav';
import menuStyles from '@patternfly/react-styles/css/components/Menu/menu';
import dividerStyles from '@patternfly/react-styles/css/components/Divider/divider';
import { css } from '@patternfly/react-styles';
import { NavContext, NavSelectClickHandler } from './Nav';
import { PageSidebarContext } from '../Page/PageSidebar';
import { useOUIAProps, OUIAProps } from '../../helpers';
import { Popper } from '../../helpers/Popper/Popper';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';

export interface NavItemProps extends Omit<React.HTMLProps<HTMLAnchorElement>, 'onClick'>, OUIAProps {
  /** Content rendered inside the nav item. */
  children?: React.ReactNode;
  /** Whether to set className on children when React.isValidElement(children) */
  styleChildren?: boolean;
  /** Additional classes added to the nav item */
  className?: string;
  /** Target navigation link. Should not be used if the flyout prop is defined. */
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
  component?: React.ElementType<any> | React.ComponentType<any>;
  /** Flyout of a nav item. This should be a Menu component. Should not be used if the to prop is defined. */
  flyout?: React.ReactElement;
  /** Callback when flyout is opened or closed */
  onShowFlyout?: () => void;
  /** z-index of the flyout nav item */
  zIndex?: number;
  /** Icon added before the nav item children. */
  icon?: React.ReactNode;
  /** Value to overwrite the randomly generated data-ouia-component-id.*/
  ouiaId?: number | string;
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe?: boolean;
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
  onClick,
  component = 'a',
  flyout,
  onShowFlyout,
  ouiaId,
  ouiaSafe,
  zIndex = 9999,
  icon,
  ...props
}: NavItemProps) => {
  const { flyoutRef, setFlyoutRef, navRef } = React.useContext(NavContext);
  const { isSidebarOpen } = React.useContext(PageSidebarContext);
  const [flyoutTarget, setFlyoutTarget] = React.useState(null);
  const [isHovered, setIsHovered] = React.useState(false);
  const ref = React.useRef<HTMLLIElement>();
  const flyoutVisible = ref === flyoutRef;
  const popperRef = React.useRef<HTMLDivElement>();
  const hasFlyout = flyout !== undefined;
  const Component = hasFlyout ? 'button' : (component as any);

  // A NavItem should not be both a link and a flyout
  if (to && hasFlyout) {
    // eslint-disable-next-line no-console
    console.error('NavItem cannot have both "to" and "flyout" props.');
  }

  const showFlyout = (show: boolean, override?: boolean) => {
    if ((!flyoutVisible || override) && show) {
      setFlyoutRef(ref);
    } else if ((flyoutVisible || override) && !show) {
      setFlyoutRef(null);
    }

    onShowFlyout && show && onShowFlyout();
  };

  const onMouseOver = (event: React.MouseEvent) => {
    const evtContainedInFlyout = (event.target as HTMLElement).closest(`.${styles.navItem}.pf-m-flyout`);
    if (hasFlyout && !flyoutVisible) {
      showFlyout(true);
    } else if (flyoutRef !== null && !evtContainedInFlyout) {
      setFlyoutRef(null);
    }
  };

  const onFlyoutClick = (event: MouseEvent) => {
    const target = event.target;
    const closestItem = (target as HTMLElement).closest('.pf-m-flyout');
    if (!closestItem) {
      if (hasFlyout) {
        showFlyout(false, true);
      } else if (flyoutRef !== null) {
        setFlyoutRef(null);
      }
    }
  };

  const handleFlyout = (event: KeyboardEvent) => {
    const key = event.key;
    const target = event.target as HTMLElement;

    if ((key === ' ' || key === 'Enter' || key === 'ArrowRight') && hasFlyout && ref?.current?.contains(target)) {
      event.stopPropagation();
      event.preventDefault();
      if (!flyoutVisible) {
        showFlyout(true);
        setFlyoutTarget(target as HTMLElement);
      }
    }

    // We only want the NavItem to handle closing a flyout menu if only the first level flyout is open.
    // Otherwise, MenuItem should handle closing its flyouts
    if (
      (key === 'Escape' || key === 'ArrowLeft') &&
      popperRef?.current?.querySelectorAll(`.${menuStyles.menu}`).length === 1
    ) {
      if (flyoutVisible) {
        event.stopPropagation();
        event.preventDefault();
        showFlyout(false);
      }
    }
  };

  React.useEffect(() => {
    if (hasFlyout) {
      window.addEventListener('click', onFlyoutClick);
    }
    return () => {
      if (hasFlyout) {
        window.removeEventListener('click', onFlyoutClick);
      }
    };
  }, []);

  React.useEffect(() => {
    if (flyoutTarget) {
      if (flyoutVisible) {
        const flyoutItems = Array.from(
          (popperRef.current as HTMLElement).getElementsByTagName('UL')[0].children
        ).filter((el) => !(el.classList.contains('pf-m-disabled') || el.classList.contains(dividerStyles.divider)));
        (flyoutItems[0].firstChild as HTMLElement).focus();
      } else {
        flyoutTarget.focus();
      }
    }
  }, [flyoutVisible, flyoutTarget]);

  const flyoutButton = (
    <span className={css(styles.navToggle)}>
      <span className={css(styles.navToggleIcon)}>
        <AngleRightIcon aria-hidden />
      </span>
    </span>
  );

  const ariaFlyoutProps = {
    'aria-haspopup': 'menu',
    'aria-expanded': flyoutVisible
  };

  const tabIndex = isSidebarOpen ? null : -1;

  const renderDefaultLink = (context: any): React.ReactNode => {
    const preventLinkDefault = preventDefault || !to;
    return (
      <Component
        href={to}
        onClick={(e: any) => context.onSelect(e, groupId, itemId, to, preventLinkDefault, onClick)}
        className={css(
          styles.navLink,
          isActive && styles.modifiers.current,
          isHovered && styles.modifiers.hover,
          className
        )}
        aria-current={isActive ? 'page' : null}
        tabIndex={tabIndex}
        {...(hasFlyout && { ...ariaFlyoutProps })}
        {...props}
      >
        {icon && <span className={css(styles.navLinkIcon)}>{icon}</span>}
        <span className={css(`${styles.nav}__link-text`)}>{children}</span>
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
      tabIndex: child.props.tabIndex || tabIndex,
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

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const flyoutPopper = (
    <Popper
      triggerRef={ref}
      popper={
        <div ref={popperRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {flyout}
        </div>
      }
      popperRef={popperRef}
      placement="right-start"
      isVisible={flyoutVisible}
      onDocumentKeyDown={handleFlyout}
      zIndex={zIndex}
      appendTo={navRef?.current}
    />
  );

  const navItem = (
    <>
      <li
        onMouseOver={onMouseOver}
        className={css(styles.navItem, hasFlyout && styles.modifiers.flyout, className)}
        ref={ref}
        {...ouiaProps}
      >
        <NavContext.Consumer>
          {(context) =>
            React.isValidElement(children)
              ? renderClonedChild(context, children as React.ReactElement)
              : renderDefaultLink(context)
          }
        </NavContext.Consumer>
      </li>
      {flyout && flyoutPopper}
    </>
  );

  return navItem;
};
NavItem.displayName = 'NavItem';
