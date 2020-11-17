import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { css } from '@patternfly/react-styles';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/js/icons/external-link-alt-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/js/icons/angle-right-icon';
import CheckIcon from '@patternfly/react-icons/dist/js/icons/check-icon';
import { MenuContext, MenuItemContext } from './MenuContext';
import { MenuItemAction } from './MenuItemAction';

export interface MenuItemProps extends Omit<React.HTMLProps<HTMLLIElement>, 'onClick'> {
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
  /** Flag indicating if the item is favorited */
  isFavorited?: boolean;
  /** Callback for item click */
  onClick?: (event?: any) => void;
  /** Component used to render the menu item */
  component?: React.ReactNode;
  /** Render item as disabled option */
  isDisabled?: boolean;
  /** Render item with icon */
  icon?: React.ReactNode;
  /** Render item with one or more actions */
  actions?: React.ReactNode;
  /** Description of the menu item */
  description?: React.ReactNode;
  /** Render external link icon */
  isExternalLink?: boolean;
  /** Flag indicating if the option is selected */
  isSelected?: boolean;
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
  itemId = null,
  to,
  isActive = null,
  isFavorited = null,
  flyoutMenu,
  description = null as string,
  onClick = () => {},
  component,
  isDisabled = false,
  isExternalLink = false,
  isSelected = null,
  icon,
  actions,
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

  const renderItem = (onSelect: any, activeItemId: any, selected: any | any[]): React.ReactNode => {
    const additionalProps =
      Component === 'a'
        ? {
            href: to,
            'aria-disabled': isDisabled ? true : null,
            tabIndex: isDisabled ? -1 : null
          }
        : {};
    const getAriaCurrent = () => {
      if (isActive !== null) {
        if (isActive) {
          return 'page';
        } else {
          return null;
        }
      } else if (itemId !== null && activeItemId !== null) {
        return itemId === activeItemId;
      }
      return null;
    };
    const getIsSelected = () => {
      if (isSelected !== null) {
        return isSelected;
      } else if (selected !== null && itemId !== null) {
        return (Array.isArray(selected) && selected.includes(itemId)) || itemId === selected;
      }
      return false;
    };
    return (
      <>
        <Component
          onClick={(event: any) => onItemSelect(event, onSelect)}
          className={css(styles.menuItem, getIsSelected() && styles.modifiers.selected, className)}
          aria-current={getAriaCurrent()}
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
            {flyoutMenu && (
              <span className={css(styles.menuItemToggleIcon)}>
                <AngleRightIcon aria-hidden />
              </span>
            )}
            {getIsSelected() && (
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
        {({ onSelect, onActionClick, activeItemId, selected }) => (
          <>
            {renderItem(onSelect, activeItemId, selected)}
            <MenuItemContext.Provider value={{ itemId, isDisabled }}>
              {actions}
              {isFavorited !== null && (
                <MenuItemAction
                  icon="favorites"
                  isFavorited={isFavorited}
                  aria-label={isFavorited ? 'starred' : 'not starred'}
                  onClick={event => onActionClick(event, itemId)}
                  actionId="fav"
                />
              )}
            </MenuItemContext.Provider>
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
