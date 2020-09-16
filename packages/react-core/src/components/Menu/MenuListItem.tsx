import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { css } from '@patternfly/react-styles';
import { MenuContext, MenuSelectClickHandler } from './Menu';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/js/icons/external-link-alt-icon';

export interface MenuListItemProps extends Omit<React.HTMLProps<HTMLAnchorElement>, 'onClick'> {
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
  /** Render item as disabled option */
  isDisabled?: boolean;
  /** Render item with icon */
  icon?: React.ReactNode;
  /** Description of the menu item */
  description?: string | React.ReactNode;
  /** Render external link icon */
  isExternalLink?: boolean;
}

export const MenuListItem: React.FunctionComponent<MenuListItemProps> = ({
  children,
  styleChildren = true,
  className,
  to,
  isActive = false,
  groupId = null as string,
  itemId = null as string,
  description = null as string,
  preventDefault = false,
  onClick = null as MenuSelectClickHandler,
  component = 'a',
  isDisabled = false,
  isExternalLink = false,
  icon,
  ...props
}: MenuListItemProps) => {
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
        <div className={css(styles.menuItemMain)}>
          {icon && <span className={css(styles.menuItemIcon)}>{icon}</span>}
          <span className={css(styles.menuItemText)}>{children}</span>
          {isExternalLink && (
            <span className={css(styles.menuItemExternalIcon)}>
              <ExternalLinkAltIcon />
            </span>
          )}
        </div>
        {description && (
          <div className={css(styles.menuItemDescription)}>
            <span>{description}</span>
          </div>
        )}
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
    <li className={css(styles.menuListItem, isDisabled && styles.modifiers.disabled, className)}>
      <MenuContext.Consumer>
        {context =>
          React.isValidElement(children)
            ? renderClonedChild(context, children as React.ReactElement)
            : renderDefaultLink(context)
        }
      </MenuContext.Consumer>
    </li>
  );
};
MenuListItem.displayName = 'MenuListItem';
