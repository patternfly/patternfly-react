import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { css } from '@patternfly/react-styles';
import { MenuSelectClickHandler } from './Menu';
import { MenuContext } from './MenuContext';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/js/icons/external-link-alt-icon';
import StarIcon from '@patternfly/react-icons/dist/js/icons/star-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/js/icons/angle-right-icon';
import CheckIcon from '@patternfly/react-icons/dist/js/icons/check-icon';
import { useState } from 'react';

export interface MenuListItemProps {
  /** Content rendered inside the menu list item. If React.isValidElement(children) props onClick, className and aria-current will be injected. */
  children?: React.ReactNode;
  /** Additional classes added to the menu list item */
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
  /** Render item with action icon */
  menuItemAction?: React.ReactNode;
  /** Description of the menu item */
  description?: string | React.ReactNode;
  /** Render external link icon */
  isExternalLink?: boolean;
  /** Internal flag indicating if the option is selected */
  isSelected?: boolean;
  /** Render expandable icon */
  isExpandable?: boolean;
  /** ID of the item. Required for tracking favorites. */
  id?: string;
  /** Flag indicating if the item is favorited */
  isFavorite?: boolean;
  /** Aria label text for favoritable button when favorited */
  ariaIsFavoriteLabel?: string;
  /** Aria label text for favoritable button when not favorited */
  ariaIsNotFavoriteLabel?: string;
  /** Flyout menu */
  flyoutMenu?: React.ReactNode;
  /** Callback function when mouse leaves trigger */
  onShowFlyout?: (event?: MouseEvent) => void;
}

export const MenuListItem: React.FunctionComponent<MenuListItemProps> = ({
  children,
  className,
  to,
  isActive = false,
  flyoutMenu,
  groupId = null as string,
  itemId = null as string,
  description = null as string,
  preventDefault = false,
  onClick = null as MenuSelectClickHandler,
  component = 'a',
  isDisabled = false,
  isExternalLink = false,
  isExpandable = false,
  isSelected = false,
  icon,
  menuItemAction,
  id,
  isFavorite,
  ariaIsFavoriteLabel,
  ariaIsNotFavoriteLabel,
  onShowFlyout,
  ...props
}: MenuListItemProps) => {
  const Component = component as any;
  const [flyoutVisible, setFlyoutVisible] = useState(false);

  const showFlyout = (displayFlyout: boolean) => {
    setFlyoutVisible(displayFlyout);
    onShowFlyout && displayFlyout && onShowFlyout();
  };

  const renderDefaultLink = (context: any): React.ReactNode => {
    const preventLinkDefault = preventDefault || !to;
    const additionalProps =
      Component === 'a'
        ? {
            href: to
          }
        : {};
    return (
      <>
        <Component
          id={id}
          onClick={(e: any) => context.onSelect(e, groupId, itemId, to, preventLinkDefault, onClick, isSelected)}
          className={css(
            styles.menuItem,
            isFavorite && styles.modifiers.favorited,
            isSelected && styles.modifiers.selected,
            className
          )}
          aria-current={isActive ? 'page' : null}
          {...additionalProps}
        >
          <div className={css(styles.menuItemMain)}>
            {icon && <span className={css(styles.menuItemIcon)}>{icon}</span>}
            <span className={css(styles.menuItemText)}>{children}</span>
            {isExternalLink && (
              <span className={css(styles.menuItemExternalIcon)}>
                <ExternalLinkAltIcon />
              </span>
            )}
            {isExpandable && (
              <span className={css(styles.menuItemToggleIcon)}>
                <AngleRightIcon />
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
      {...props}
    >
      <MenuContext.Consumer>
        {context => (
          <>
            {renderDefaultLink(context)}
            {context.onFavorite && (
              <button
                className={css(
                  styles.menuItemAction,
                  styles.modifiers.favorite,
                  context.onFavorite && isFavorite && styles.modifiers.favorited
                )}
                aria-label={isFavorite ? ariaIsFavoriteLabel : ariaIsNotFavoriteLabel}
                onClick={() => {
                  context.onFavorite(id, isFavorite);
                }}
              >
                <StarIcon className={css(styles.menuItemActionIcon)} />
              </button>
            )}
          </>
        )}
      </MenuContext.Consumer>
      {menuItemAction && (
        <button className={css(styles.menuItemAction)}>
          <span className={css(styles.menuItemActionIcon)}>{menuItemAction}</span>
        </button>
      )}
    </li>
  );
};
MenuListItem.displayName = 'MenuListItem';
