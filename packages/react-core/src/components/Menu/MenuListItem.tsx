import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { css } from '@patternfly/react-styles';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/js/icons/external-link-alt-icon';
import StarIcon from '@patternfly/react-icons/dist/js/icons/star-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/js/icons/angle-right-icon';
import CheckIcon from '@patternfly/react-icons/dist/js/icons/check-icon';
import { MenuContext } from './MenuContext';

export interface MenuListItemProps extends Omit<React.HTMLProps<HTMLLIElement>, 'action' | 'onClick'> {
  /** Content rendered inside the menu list item. If React.isValidElement(children) props onClick, className and aria-current will be injected. */
  children?: React.ReactNode;
  /** Additional classes added to the menu list item */
  className?: string;
  /** Identifies the component in the Menu onSelect or onFavorite callback */
  itemId?: any;
  /** Target navigation link */
  to?: string;
  /** Flag indicating whether the item is active */
  isActive?: boolean;
  /** Callback for item click */
  onClick?: (event: React.MouseEvent) => void;
  /** Component used to render the menu item */
  component?: React.ReactNode;
  /** Render item as disabled option */
  isDisabled?: boolean;
  /** Render item with icon */
  icon?: React.ReactNode;
  /** Render item with action */
  action?: React.ReactNode;
  /** Description of the menu item */
  description?: string | React.ReactNode;
  /** Render external link icon */
  isExternalLink?: boolean;
  /** Internal flag indicating if the option is selected */
  isSelected?: boolean;
  /** Render expandable icon */
  isExpandable?: boolean;
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
  /** Accessibility label */
  'aria-label'?: string;
  /** Forwarded ref */
  innerRef?: React.Ref<any>;
}

const MenuListItemBase: React.FunctionComponent<MenuListItemProps> = ({
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
  isFavorite,
  ariaIsFavoriteLabel,
  ariaIsNotFavoriteLabel,
  onShowFlyout,
  innerRef,
  ...props
}: MenuListItemProps) => {
  const Component = component || to ? 'a' : 'button';
  const [flyoutVisible, setFlyoutVisible] = React.useState(false);

  const showFlyout = (displayFlyout: boolean) => {
    setFlyoutVisible(displayFlyout);
    onShowFlyout && displayFlyout && onShowFlyout();
  };

  const onItemSelect = (event: React.MouseEvent, onSelect: any) => {
    // Trigger callback for Menu onSelect
    onSelect(event, itemId);
    // Trigger callback for item onClick
    onClick(event);
  };

  const renderDefaultLink = (onSelect: any): React.ReactNode => {
    const additionalProps =
      Component === 'a'
        ? {
            href: to
          }
        : {};
    return (
      <>
        <Component
          onClick={(event: React.MouseEvent) => onItemSelect(event, onSelect)}
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
      ref={innerRef}
      {...props}
    >
      <MenuContext.Consumer>
        {({ onSelect, onFavorite }) => (
          <>
            {renderDefaultLink(onSelect)}
            {onFavorite && (
              <button
                className={css(
                  styles.menuItemAction,
                  styles.modifiers.favorite,
                  onFavorite && isFavorite && styles.modifiers.favorited
                )}
                aria-label={isFavorite ? ariaIsFavoriteLabel : ariaIsNotFavoriteLabel}
                onClick={(event: React.MouseEvent) => onFavorite(event, itemId)}
              >
                <StarIcon className={css(styles.menuItemActionIcon)} />
              </button>
            )}
          </>
        )}
      </MenuContext.Consumer>
      {action}
    </li>
  );
};

export const MenuListItem = React.forwardRef((props: MenuListItemProps, ref: React.Ref<HTMLElement>) => (
  <MenuListItemBase {...props} innerRef={ref} />
));
MenuListItem.displayName = 'MenuListItem';
