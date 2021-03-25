import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { css } from '@patternfly/react-styles';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/js/icons/external-link-alt-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/js/icons/angle-right-icon';
import AngleLeftIcon from '@patternfly/react-icons/dist/js/icons/angle-left-icon';
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
  /** Drilldown menu of the item. Should be a Menu or DrilldownMenu type. */
  drilldownMenu?: React.ReactNode;
  /** Sub menu direction */
  direction?: 'down' | 'up';
  /** True if item is on current selection path */
  isOnPath?: boolean;
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
  direction,
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
  drilldownMenu,
  isOnPath,
  ...props
}: MenuItemProps) => {
  const Component = component || to ? 'a' : 'button';
  const [flyoutVisible, setFlyoutVisible] = React.useState(false);
  const [flyoutTarget, setFlyoutTarget] = React.useState(null);

  const showFlyout = (displayFlyout: boolean) => {
    setFlyoutVisible(displayFlyout);
    onShowFlyout && displayFlyout && onShowFlyout();
  };

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
    const target = event.target;

    if (key === ' ' || key === 'Enter' || key === 'ArrowRight') {
      event.stopPropagation();
      if (!flyoutVisible) {
        showFlyout(true);
        setFlyoutTarget(target as HTMLElement);
      }
    }

    if (key === 'Escape' || key === 'ArrowLeft') {
      event.stopPropagation();
      showFlyout(false);
    }
  };

  const onItemSelect = (event: any, onSelect: any) => {
    // Trigger callback for Menu onSelect
    onSelect && onSelect(event, itemId);
    // Trigger callback for item onClick
    onClick && onClick(event);
  };

  const renderItem = (
    onSelect: any,
    activeItemId: any,
    selected: any | any[],
    isOnPath: boolean,
    drill: () => void
  ): React.ReactNode => {
    let additionalProps = {};
    if (Component === 'a') {
      additionalProps = {
        href: to,
        'aria-disabled': isDisabled ? true : null
      };
    } else if (Component === 'button') {
      additionalProps = {
        type: 'button'
      };
    }
    if (isOnPath) {
      (additionalProps as any)['aria-expanded'] = true;
    }
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
          onClick={(event: any) => {
            onItemSelect(event, onSelect);
            drill && drill();
          }}
          className={css(styles.menuItem, getIsSelected() && styles.modifiers.selected, className)}
          aria-current={getAriaCurrent()}
          tabIndex={-1}
          {...(isDisabled && { disabled: true })}
          {...additionalProps}
        >
          <span className={css(styles.menuItemMain)}>
            {direction === 'up' && (
              <span className={css(styles.menuItemToggleIcon)}>
                <AngleLeftIcon aria-hidden />
              </span>
            )}
            {icon && <span className={css(styles.menuItemIcon)}>{icon}</span>}
            <span className={css(styles.menuItemText)}>{children}</span>
            {isExternalLink && (
              <span className={css(styles.menuItemExternalIcon)}>
                <ExternalLinkAltIcon aria-hidden />
              </span>
            )}
            {(flyoutMenu || direction === 'down') && (
              <span className={css(styles.menuItemToggleIcon)}>
                <AngleRightIcon aria-hidden />
              </span>
            )}
            {getIsSelected() && (
              <span className={css(styles.menuItemSelectIcon)}>
                <CheckIcon aria-hidden />
              </span>
            )}
          </span>
          {description && direction !== 'up' && (
            <span className={css(styles.menuItemDescription)}>
              <span>{description}</span>
            </span>
          )}
        </Component>
        {flyoutVisible && flyoutMenu}
        {drilldownMenu}
      </>
    );
  };

  return (
    <MenuContext.Consumer>
      {({
        menuId,
        parentMenu,
        onSelect,
        onActionClick,
        activeItemId,
        selected,
        drilldownItemPath,
        onDrillIn,
        onDrillOut
      }) => {
        const _isOnPath = (isOnPath && isOnPath) || (drilldownItemPath && drilldownItemPath.includes(itemId)) || false;
        let _drill: () => void;
        if (direction) {
          if (direction === 'down') {
            _drill = () => onDrillIn && onDrillIn(menuId, (drilldownMenu as React.ReactElement).props.id, itemId);
          } else {
            _drill = () => onDrillOut && onDrillOut(parentMenu, itemId);
          }
        }
        return (
          <li
            className={css(
              styles.menuListItem,
              isDisabled && styles.modifiers.disabled,
              _isOnPath && styles.modifiers.currentPath,
              className
            )}
            onMouseOver={flyoutMenu !== undefined ? () => showFlyout(true) : undefined}
            onMouseLeave={flyoutMenu !== undefined ? () => showFlyout(false) : undefined}
            {...(flyoutMenu && { onKeyDown: handleFlyout })}
            tabIndex={-1}
            ref={innerRef}
            {...props}
          >
            {renderItem(onSelect, activeItemId, selected, _isOnPath, _drill)}
            <MenuItemContext.Provider value={{ itemId, isDisabled }}>
              {actions}
              {isFavorited !== null && (
                <MenuItemAction
                  icon="favorites"
                  isFavorited={isFavorited}
                  aria-label={isFavorited ? 'starred' : 'not starred'}
                  onClick={event => onActionClick(event, itemId)}
                  tabIndex={-1}
                  actionId="fav"
                />
              )}
            </MenuItemContext.Provider>
          </li>
        );
      }}
    </MenuContext.Consumer>
  );
};

export const MenuItem = React.forwardRef((props: MenuItemProps, ref: React.Ref<HTMLElement>) => (
  <MenuItemBase {...props} innerRef={ref} />
));
MenuItem.displayName = 'MenuItem';
