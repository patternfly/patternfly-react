import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { css } from '@patternfly/react-styles';
import { MenuContext, MenuSelectClickHandler } from './Menu';

export interface MenuItemProps extends Omit<React.HTMLProps<HTMLAnchorElement>, 'onClick'> {
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
  onClick?: MenuSelectClickHandler;
  /** Component used to render NavItems */
  component?: React.ReactNode;
}

export const MenuItem: React.FunctionComponent<MenuItemProps> = ({
  children,
  styleChildren = true,
  className,
  to,
  isActive = false,
  groupId = null as string,
  itemId = null as string,
  preventDefault = false,
  onClick = null as MenuSelectClickHandler,
  component = 'a',
  ...props
}: MenuItemProps) => {
  const Component = component as any;

  const renderDefaultLink = (context: any): React.ReactNode => {
    const preventLinkDefault = preventDefault || !to;
    return (
      <Component
        href={to}
        onClick={(e: any) => context.onSelect(e, groupId, itemId, to, preventLinkDefault, onClick)}
        className={css(styles.menuItem, isActive, className)}
        aria-current={isActive ? 'page' : null}
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
        className: css(styles.menuItem, isActive, child.props && child.props.className)
      })
    });

  return (
    <li className={css(styles.menuListItem, className)}>
      <button className={css(styles.menuItem)}>
        <MenuContext.Consumer>
          {context =>
            React.isValidElement(children)
              ? renderClonedChild(context, children as React.ReactElement)
              : renderDefaultLink(context)
          }
        </MenuContext.Consumer>
      </button>
    </li>
  );
};
MenuItem.displayName = 'MenuItem';
