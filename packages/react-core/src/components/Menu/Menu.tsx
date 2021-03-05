import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { css } from '@patternfly/react-styles';
import { getOUIAProps, OUIAProps, getDefaultOUIAId } from '../../helpers';
import { MenuContext } from './MenuContext';

export interface MenuProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'ref' | 'onSelect'>, OUIAProps {
  /** Anything that can be rendered inside of the Menu */
  children?: React.ReactNode;
  /** Additional classes added to the Menu */
  className?: string;
  /** ID of the menu */
  id?: string;
  /** Callback for updating when item selection changes. You can also specify onClick on the MenuItem. */
  onSelect?: (event?: React.MouseEvent, itemId?: string | number) => void;
  /** Single itemId for single select menus, or array of itemIds for multi select. You can also specify isSelected on the MenuItem. */
  selected?: any | any[];
  /** Callback called when an MenuItems's action button is clicked. You can also specify it within a MenuItemAction. */
  onActionClick?: (event?: any, itemId?: any, actionId?: any) => void;
  /** Search input of menu */
  hasSearchInput?: boolean;
  /** A callback for when the input value changes. */
  onSearchInputChange?: (
    event: React.FormEvent<HTMLInputElement> | React.SyntheticEvent<HTMLButtonElement>,
    value: string
  ) => void;
  /** Accessibility label */
  'aria-label'?: string;
  /** Indicates if menu contains a flyout menu */
  containsFlyout?: boolean;
  /** Indicates if menu contains a drilldown menu */
  containsDrilldown?: boolean;
  /** Indicates if a menu is drilled into */
  isMenuDrilledIn?: boolean;
  /** Indicates the path of drilled in menu itemIds */
  drilldownItemPath?: string[];
  /** Array of menus that are drilled in */
  drilledInMenus?: string[];
  /** Callback for drilling into a submenu */
  onDrillIn?: (fromItemId: string, toItemId: string, itemId: string) => void;
  /** Callback for drilling out of a submenu */
  onDrillOut?: (toItemId: string, itemId: string) => void;
  /** Callback for collecting menu heights */
  onGetMenuHeight?: (menuId: string, height: number) => void;
  /** ID of parent menu for drilldown menus */
  parentMenu?: string;
  /** itemId of the currently active item. You can also specify isActive on the MenuItem. */
  activeItemId?: string | number;
  /** Forwarded ref */
  innerRef?: React.Ref<any>;
}

export interface MenuState {
  searchInputValue: string | null;
  ouiaStateId: string;
}

class MenuBase extends React.Component<MenuProps, MenuState> {
  static defaultProps: MenuProps = {
    ouiaSafe: true
  };

  state: MenuState = {
    ouiaStateId: getDefaultOUIAId(Menu.displayName),
    searchInputValue: ''
  };

  render() {
    const {
      'aria-label': ariaLabel,
      id,
      children,
      className,
      onSelect,
      selected = null,
      onActionClick,
      ouiaId,
      ouiaSafe,
      containsFlyout,
      containsDrilldown,
      isMenuDrilledIn,
      drilldownItemPath,
      drilledInMenus,
      onDrillIn,
      onDrillOut,
      onGetMenuHeight,
      parentMenu = null,
      activeItemId = null,
      innerRef,
      ...props
    } = this.props;
    const _isMenuDrilledIn =
      (isMenuDrilledIn && isMenuDrilledIn) || (drilledInMenus && drilledInMenus.includes(id)) || false;
    return (
      <MenuContext.Provider
        value={{
          menuId: id,
          parentMenu: parentMenu ? parentMenu : id,
          onSelect,
          onActionClick,
          activeItemId,
          selected,
          drilledInMenus,
          drilldownItemPath,
          onDrillIn,
          onDrillOut,
          onGetMenuHeight
        }}
      >
        <div
          id={id}
          className={css(
            styles.menu,
            containsFlyout && styles.modifiers.flyout,
            containsDrilldown && styles.modifiers.drilldown,
            _isMenuDrilledIn && styles.modifiers.drilledIn,
            className
          )}
          aria-label={ariaLabel || containsFlyout ? 'Local' : 'Global'}
          ref={innerRef}
          {...getOUIAProps(Menu.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe)}
          {...props}
        >
          {children}
        </div>
      </MenuContext.Provider>
    );
  }
}

export const Menu = React.forwardRef((props: MenuProps, ref: React.Ref<HTMLDivElement>) => (
  <MenuBase {...props} innerRef={ref} />
));
Menu.displayName = 'Menu';
