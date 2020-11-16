import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { css } from '@patternfly/react-styles';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/js/icons/external-link-alt-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/js/icons/angle-right-icon';
import CheckIcon from '@patternfly/react-icons/dist/js/icons/check-icon';
import { MenuContext, MenuItemContext } from './MenuContext';

export interface MenuItemProps extends Omit<React.HTMLProps<HTMLLIElement>, 'action' | 'onClick'> {
  /** Content rendered inside the menu list item. */
  children?: React.ReactNode;
  /** Additional classes added to the menu list item */
  className?: string;
  /** Identifies the component in the Menu onSelect or onActionClick callback */
  itemId?: any;
  /** Target navigation link */
  to?: string;
  /** Flag indicating whether the item is active */
  isActive?: boolean;
  /** Callback for item click */
  onClick?: (event?: any) => void;
  /** Component used to render the menu item */
  component?: React.ReactNode;
  /** Render item as disabled option */
  isDisabled?: boolean;
  /** Render item with icon */
  icon?: React.ReactNode;
  /** Render item with action */
  action?: React.ReactNode;
  /** Description of the menu item */
  description?: React.ReactNode;
  /** Render external link icon */
  isExternalLink?: boolean;
  /** Internal flag indicating if the option is selected */
  isSelected?: boolean;
  /** Render expandable icon */
  isExpandable?: boolean;
  /** Flyout menu */
  flyoutMenu?: React.ReactNode;
  /** Callback function when mouse leaves trigger */
  onShowFlyout?: (event?: any) => void;
  /** Accessibility label */
  'aria-label'?: string;
  /** Forwarded ref */
  innerRef?: React.Ref<any>;
}

const MenuItemBase: React.FunctionComponent<MenuItemProps> = ({
  children,
  className,
  itemId,
  to,
  isActive = false,
  flyoutMenu,
  description = null as string,
  onClick = () => {},
  component,
  isDisabled = false,
  isExternalLink = false,
  isExpandable = false,
  isSelected = false,
  icon,
  action,
  onShowFlyout,
  innerRef,
  ...props
}: MenuItemProps) => {
  const Component = component || to ? 'a' : 'button';
  const [flyoutVisible, setFlyoutVisible] = React.useState(false);

  const showFlyout = (displayFlyout: boolean) => {
    setFlyoutVisible(displayFlyout);
    onShowFlyout && displayFlyout && onShowFlyout();
  };

  const onItemSelect = (event: any, onSelect: any) => {
    // Trigger callback for Menu onSelect
    onSelect && onSelect(event, itemId);
    // Trigger callback for item onClick
    onClick && onClick(event);
  };

  const renderItem = (onSelect: any): React.ReactNode => {
    const additionalProps =
      Component === 'a'
        ? {
            href: to,
            'aria-disabled': isDisabled ? true : null,
            tabIndex: isDisabled ? -1 : null
          }
        : {};
    return (
      <>
        <Component
          onClick={(event: any) => onItemSelect(event, onSelect)}
          className={css(styles.menuItem, isSelected && styles.modifiers.selected, className)}
          aria-current={isActive ? 'page' : null}
          {...(isDisabled && { disabled: true })}
          {...additionalProps}
        >
          <div className={css(styles.menuItemMain)}>
            {icon && <span className={css(styles.menuItemIcon)}>{icon}</span>}
            <span className={css(styles.menuItemText)}>{children}</span>
            {isExternalLink && (
              <span className={css(styles.menuItemExternalIcon)}>
                <ExternalLinkAltIcon aria-hidden />
              </span>
            )}
            {isExpandable && (
              <span className={css(styles.menuItemToggleIcon)}>
                <AngleRightIcon aria-hidden />
              </span>
            )}
            {isSelected && (
              <span className={css(styles.menuItemSelectIcon)}>
                <CheckIcon aria-hidden />
              </span>
            )}
          </div>
          {description && (
            <div className={css(styles.menuItemDescription)}>
              <span>{description}</span>
            </div>
          )}
        </Component>
        {flyoutVisible && flyoutMenu}
      </>
    );
  };

  return (
    <li
      className={css(styles.menuListItem, isDisabled && styles.modifiers.disabled, className)}
      onMouseOver={flyoutMenu !== undefined ? () => showFlyout(true) : undefined}
      onMouseLeave={flyoutMenu !== undefined ? () => showFlyout(false) : undefined}
      ref={innerRef}
      {...props}
    >
      <MenuContext.Consumer>
        {({ onSelect }) => (
          <>
            {renderItem(onSelect)}
            <MenuItemContext.Provider value={{ itemId, isDisabled }}>{action}</MenuItemContext.Provider>
          </>
        )}
      </MenuContext.Consumer>
    </li>
  );
};

export const MenuItem = React.forwardRef((props: MenuItemProps, ref: React.Ref<HTMLElement>) => (
  <MenuItemBase {...props} innerRef={ref} />
));
MenuItem.displayName = 'MenuItem';
