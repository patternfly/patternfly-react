import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { css } from '@patternfly/react-styles';
import topOffset from '@patternfly/react-tokens/dist/esm/c_menu_m_flyout__menu_top_offset';
import rightOffset from '@patternfly/react-tokens/dist/esm/c_menu_m_flyout__menu_m_left_right_offset';
import leftOffset from '@patternfly/react-tokens/dist/esm/c_menu_m_flyout__menu_left_offset';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';
import CheckIcon from '@patternfly/react-icons/dist/esm/icons/check-icon';
import { Checkbox } from '../Checkbox';
import { MenuContext, MenuItemContext } from './MenuContext';
import { MenuItemAction } from './MenuItemAction';
import { Tooltip, TooltipProps } from '../Tooltip';
import { canUseDOM } from '../../helpers/util';
import { useIsomorphicLayoutEffect } from '../../helpers/useIsomorphicLayout';
import { GenerateId } from '../../helpers/GenerateId/GenerateId';

export interface MenuItemProps extends Omit<React.HTMLProps<HTMLLIElement>, 'onClick'> {
  /** Content rendered inside the menu list item. */
  children?: React.ReactNode;
  /** Additional classes added to the menu list item */
  className?: string;
  /** Identifies the component in the Menu onSelect or onActionClick callback */
  itemId?: any;
  /** Target navigation link. Should not be used if the flyout prop is defined. */
  to?: string;
  /** Navigation link target. Only set when the to property is present. If isExternalLink is also passed in, this property will be set to "_blank". */
  target?: string;
  /** Navigation link relationship. Only set when the to property is present. */
  rel?: string;
  /** Navigation link download. Only set when the to property is present. */
  download?: string;
  /** Flag indicating the item has a checkbox */
  hasCheckbox?: boolean;
  /** Flag indicating whether the item is active */
  isActive?: boolean;
  /** Flag indicating if the item is favorited */
  isFavorited?: boolean;
  /** Flag indicating if the item causes a load */
  isLoadButton?: boolean;
  /** Flag indicating a loading state */
  isLoading?: boolean;
  /** Callback for item click */
  onClick?: (event?: any) => void;
  /** Component used to render the menu item */
  component?: React.ElementType<any> | React.ComponentType<any>;
  /** Render item as disabled option */
  isDisabled?: boolean;
  /** Render item as aria-disabled option */
  isAriaDisabled?: boolean;
  /** Props for adding a tooltip to a menu item */
  tooltipProps?: TooltipProps;
  /** Render item with icon */
  icon?: React.ReactNode;
  /** Render item with one or more actions */
  actions?: React.ReactNode;
  /** Description of the menu item */
  description?: React.ReactNode;
  /** Render an external link icon on focus or hover, and set the link's
   * "target" attribute to a value of "_blank".
   */
  isExternalLink?: boolean;
  /** Flag indicating if the option is selected */
  isSelected?: boolean;
  /** Flag indicating the item is focused */
  isFocused?: boolean;
  /** Flag indicating the item is in danger state */
  isDanger?: boolean;
  /** Flyout menu. Should not be used if the to prop is defined. */
  flyoutMenu?: React.ReactElement;
  /** Callback function when mouse leaves trigger */
  onShowFlyout?: (event?: any) => void;
  /** Drilldown menu of the item. Should be a Menu or DrilldownMenu type. */
  drilldownMenu?: React.ReactNode | (() => React.ReactNode);
  /** Sub menu direction */
  direction?: 'down' | 'up';
  /** True if item is on current selection path */
  isOnPath?: boolean;
  /** Adds an accessible name to the menu item. */
  'aria-label'?: string;
  /** @hide Forwarded ref */
  innerRef?: React.Ref<HTMLAnchorElement | HTMLButtonElement>;
  /** Sets the id attribute on the menu item component. */
  id?: string;
}

const FlyoutContext = React.createContext({
  direction: 'right' as 'left' | 'right'
});

const MenuItemBase: React.FunctionComponent<MenuItemProps> = ({
  children,
  className,
  itemId = null,
  to,
  hasCheckbox = false,
  isActive = null,
  isFavorited = null,
  isLoadButton = false,
  isLoading = false,
  flyoutMenu,
  direction,
  description = null as string,
  onClick = () => {},
  component = 'button',
  isDisabled = false,
  isAriaDisabled = false,
  isExternalLink = false,
  isSelected = null,
  isFocused,
  isDanger = false,
  icon,
  actions,
  onShowFlyout,
  drilldownMenu,
  isOnPath,
  innerRef,
  id,
  'aria-label': ariaLabel,
  tooltipProps,
  rel,
  target,
  download,
  ...props
}: MenuItemProps) => {
  const {
    menuId,
    parentMenu,
    onSelect,
    onActionClick,
    activeItemId,
    selected,
    drilldownItemPath,
    onDrillIn,
    onDrillOut,
    flyoutRef,
    setFlyoutRef,
    disableHover,
    role: menuRole
  } = React.useContext(MenuContext);
  let Component = (to ? 'a' : component) as any;
  if (hasCheckbox && !to) {
    Component = 'label' as any;
  }
  const [flyoutTarget, setFlyoutTarget] = React.useState(null);
  const flyoutContext = React.useContext(FlyoutContext);
  const [flyoutXDirection, setFlyoutXDirection] = React.useState(flyoutContext.direction);
  const ref = React.useRef<HTMLLIElement>();
  const flyoutVisible = ref === flyoutRef;

  const hasFlyout = flyoutMenu !== undefined;
  const showFlyout = (show: boolean) => {
    if (!flyoutVisible && show) {
      setFlyoutRef(ref);
    } else if (flyoutVisible && !show) {
      setFlyoutRef(null);
    }
    onShowFlyout && show && onShowFlyout();
  };

  useIsomorphicLayoutEffect(() => {
    if (hasFlyout && ref.current && canUseDOM) {
      const flyoutMenu = ref.current.lastElementChild as HTMLElement;
      if (flyoutMenu && flyoutMenu.classList.contains(styles.menu)) {
        const origin = ref.current.getClientRects()[0];
        const rect = flyoutMenu.getClientRects()[0];
        if (origin && rect) {
          const spaceLeftLeft = origin.x - rect.width;
          const spaceLeftRight = window.innerWidth - origin.x - origin.width - rect.width;
          let xDir = flyoutXDirection as 'left' | 'right' | 'none';
          if (spaceLeftRight < 0 && xDir !== 'left') {
            setFlyoutXDirection('left');
            xDir = 'left';
          } else if (spaceLeftLeft < 0 && xDir !== 'right') {
            setFlyoutXDirection('right');
            xDir = 'right';
          }
          let xOffset = 0;
          if (spaceLeftLeft < 0 && spaceLeftRight < 0) {
            xOffset = xDir === 'right' ? -spaceLeftRight : -spaceLeftLeft;
          }
          if (xDir === 'left') {
            flyoutMenu.classList.add(styles.modifiers.left);
            flyoutMenu.style.setProperty(rightOffset.name, `-${xOffset}px`);
          } else {
            flyoutMenu.style.setProperty(leftOffset.name, `-${xOffset}px`);
          }

          const spaceLeftBot = window.innerHeight - origin.y - rect.height;
          const spaceLeftTop = window.innerHeight - rect.height;
          if (spaceLeftTop < 0 && spaceLeftBot < 0) {
            // working idea: page can usually scroll down, but not up
            // TODO: proper scroll buttons
          } else if (spaceLeftBot < 0) {
            flyoutMenu.style.setProperty(topOffset.name, `${spaceLeftBot}px`);
          }
        }
      }
    }
  }, [flyoutVisible, flyoutMenu]);

  React.useEffect(() => {
    setFlyoutXDirection(flyoutContext.direction);
  }, [flyoutContext]);

  React.useEffect(() => {
    if (flyoutTarget) {
      if (flyoutVisible) {
        const flyoutMenu = (flyoutTarget as HTMLElement).nextElementSibling;
        const flyoutItems = Array.from(flyoutMenu.getElementsByTagName('UL')[0].children).filter(
          (el) => !(el.classList.contains('pf-m-disabled') || el.classList.contains(styles.divider))
        );
        (flyoutItems[0].firstChild as HTMLElement).focus();
      } else {
        flyoutTarget.focus();
      }
    }
  }, [flyoutVisible, flyoutTarget]);

  const handleFlyout = (event: React.KeyboardEvent | React.MouseEvent) => {
    const key = (event as React.KeyboardEvent).key;
    const target = event.target;
    const type = event.type;

    if (key === ' ' || key === 'Enter' || key === 'ArrowRight' || type === 'click') {
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
        showFlyout(false);
      }
    }
  };

  const onItemSelect = (event: any, onSelect: any) => {
    if (!isAriaDisabled) {
      // Trigger callback for Menu onSelect
      onSelect && onSelect(event, itemId);
      // Trigger callback for item onClick
      onClick && onClick(event);
    }
  };
  const _isOnPath = (isOnPath && isOnPath) || (drilldownItemPath && drilldownItemPath.includes(itemId)) || false;
  let drill: (event: React.KeyboardEvent | React.MouseEvent) => void;
  if (direction) {
    if (direction === 'down') {
      drill = (event) =>
        onDrillIn &&
        onDrillIn(
          event,
          menuId,
          typeof drilldownMenu === 'function'
            ? (drilldownMenu() as any).props.id
            : (drilldownMenu as React.ReactElement).props.id,
          itemId
        );
    } else {
      drill = (event) => onDrillOut && onDrillOut(event, parentMenu, itemId);
    }
  }
  let additionalProps = {} as any;
  if (Component === 'a') {
    additionalProps = {
      href: to,
      'aria-disabled': isDisabled || isAriaDisabled ? true : null,
      // prevent invalid 'disabled' attribute on <a> tags
      disabled: null,
      target: isExternalLink ? '_blank' : target,
      rel,
      download
    };
  } else if (Component === 'button') {
    additionalProps = {
      type: 'button',
      'aria-disabled': isAriaDisabled ? true : null
    };
  }

  if (isOnPath) {
    additionalProps['aria-expanded'] = true;
  } else if (hasFlyout) {
    additionalProps['aria-haspopup'] = 'menu';
    additionalProps['aria-expanded'] = flyoutVisible;
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
  const onMouseOver = () => {
    if (disableHover) {
      return;
    }
    if (hasFlyout) {
      showFlyout(true);
    } else {
      setFlyoutRef(null);
    }
  };

  React.useEffect(() => {
    if (isFocused && ref.current) {
      const itemEl = ref.current;
      const parentListEl = itemEl.parentElement;

      if (parentListEl) {
        const isAboveTop = itemEl.offsetTop - parentListEl.offsetTop < parentListEl.scrollTop;
        const isBelowBottom = itemEl.offsetTop - parentListEl.offsetTop + itemEl.clientHeight;

        if (isAboveTop || isBelowBottom) {
          itemEl.scrollIntoView({ behavior: 'auto', block: 'nearest' });
        }
      }
    }
  }, [isFocused]);

  const isSelectMenu = menuRole === 'listbox';

  const renderItem = (
    <>
      <GenerateId>
        {(randomId) => (
          <Component
            id={id}
            tabIndex={-1}
            className={css(styles.menuItem, getIsSelected() && !hasCheckbox && styles.modifiers.selected, className)}
            aria-current={getAriaCurrent()}
            {...(!hasCheckbox && { disabled: isDisabled, 'aria-label': ariaLabel })}
            {...(!hasCheckbox && !flyoutMenu && { role: isSelectMenu ? 'option' : 'menuitem' })}
            {...(!hasCheckbox && !flyoutMenu && isSelectMenu && { 'aria-selected': getIsSelected() })}
            ref={innerRef}
            {...(!hasCheckbox && {
              onClick: (event: React.KeyboardEvent | React.MouseEvent) => {
                if (!isAriaDisabled) {
                  onItemSelect(event, onSelect);
                  drill && drill(event);
                  flyoutMenu && handleFlyout(event);
                } else {
                  event.preventDefault();
                }
              }
            })}
            {...(hasCheckbox && { htmlFor: randomId })}
            {...additionalProps}
          >
            <span className={css(styles.menuItemMain)}>
              {direction === 'up' && (
                <span className={css(styles.menuItemToggleIcon)}>
                  <AngleLeftIcon aria-hidden />
                </span>
              )}
              {icon && <span className={css(styles.menuItemIcon)}>{icon}</span>}
              {hasCheckbox && (
                <span className={css(styles.menuItemCheck)}>
                  <Checkbox
                    id={randomId}
                    component="span"
                    isChecked={isSelected || false}
                    onChange={(event) => onItemSelect(event, onSelect)}
                    isDisabled={isDisabled}
                    aria-disabled={isAriaDisabled}
                  />
                </span>
              )}
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
        )}
      </GenerateId>
      {flyoutVisible && (
        <MenuContext.Provider value={{ disableHover }}>
          <FlyoutContext.Provider value={{ direction: flyoutXDirection }}>{flyoutMenu}</FlyoutContext.Provider>
        </MenuContext.Provider>
      )}
      {typeof drilldownMenu === 'function' ? drilldownMenu() : drilldownMenu}
      <MenuItemContext.Provider value={{ itemId, isDisabled }}>
        {actions}
        {isFavorited !== null && (
          <MenuItemAction
            icon="favorites"
            isFavorited={isFavorited}
            aria-label={isFavorited ? 'starred' : 'not starred'}
            onClick={(event) => onActionClick(event, itemId)}
            tabIndex={-1}
            actionId="fav"
          />
        )}
      </MenuItemContext.Provider>
    </>
  );

  return (
    <li
      className={css(
        styles.menuListItem,
        isDisabled && styles.modifiers.disabled,
        isAriaDisabled && styles.modifiers.ariaDisabled,
        _isOnPath && styles.modifiers.currentPath,
        isLoadButton && styles.modifiers.load,
        isLoading && styles.modifiers.loading,
        isFocused && 'pf-m-focus',
        isDanger && styles.modifiers.danger,
        className
      )}
      onMouseOver={() => {
        if (!isAriaDisabled) {
          onMouseOver();
        }
      }}
      {...(flyoutMenu && !isAriaDisabled && { onKeyDown: handleFlyout })}
      ref={ref}
      role={!hasCheckbox ? 'none' : 'menuitem'}
      {...(hasCheckbox && { 'aria-label': ariaLabel })}
      {...props}
    >
      {tooltipProps ? <Tooltip {...tooltipProps}>{renderItem}</Tooltip> : renderItem}
    </li>
  );
};

export const MenuItem = React.forwardRef((props: MenuItemProps, ref: React.Ref<any>) => (
  <MenuItemBase {...props} innerRef={ref} />
));

MenuItem.displayName = 'MenuItem';
