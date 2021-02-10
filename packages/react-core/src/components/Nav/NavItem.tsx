import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Nav/nav';
import { css } from '@patternfly/react-styles';
import { NavContext, NavSelectClickHandler } from './Nav';
import { PageSidebarContext } from '../Page/PageSidebar';
import { useOUIAProps, OUIAProps } from '../../helpers';

export interface NavItemProps extends Omit<React.HTMLProps<HTMLAnchorElement>, 'onClick'>, OUIAProps {
  /** Content rendered inside the nav item. If React.isValidElement(children) props onClick, className and aria-current will be injected. */
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
  /** Component used to render NavItems */
  component?: React.ReactNode;
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
  ouiaId,
  ouiaSafe,
  ...props
}: NavItemProps) => {
  const Component = component as any;
  const { isNavOpen } = React.useContext(PageSidebarContext);
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
      </Component>
    );
  };

  const renderClonedChild = (context: any, child: React.ReactElement): React.ReactNode =>
    React.cloneElement(child, {
      onClick: (e: MouseEvent) => context.onSelect(e, groupId, itemId, to, preventDefault, onClick),
      'aria-current': isActive ? 'page' : null,
      ...(styleChildren && {
        className: css(styles.navLink, isActive && styles.modifiers.current, child.props && child.props.className)
      })
    });

  const ouiaProps = useOUIAProps(NavItem.displayName, ouiaId, ouiaSafe);

  return (
    <li className={css(styles.navItem, className)} {...ouiaProps}>
      <NavContext.Consumer>
        {context =>
          React.isValidElement(children)
            ? renderClonedChild(context, children as React.ReactElement)
            : renderDefaultLink(context)
        }
      </NavContext.Consumer>
    </li>
  );
};
NavItem.displayName = 'NavItem';
