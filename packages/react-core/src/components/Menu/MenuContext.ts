import { createContext } from 'react';
export const MenuContext = createContext<{
  menuId?: string;
  parentMenu?: string;
  onSelect?: (event?: any, itemId?: any) => void;
  onActionClick?: (event?: any, itemId?: any, actionId?: any) => void;
  activeItemId?: any;
  selected?: any | any[];
  drilldownItemPath?: string[];
  drilledInMenus?: string[];
  onDrillIn?: (
    event: React.KeyboardEvent | React.MouseEvent,
    fromItemId: string,
    toItemId: string,
    itemId: string
  ) => void;
  onDrillOut?: (event: React.KeyboardEvent | React.MouseEvent, toItemId: string, itemId: string) => void;
  onGetMenuHeight?: (menuId: string, height: number) => void;
  flyoutRef?: React.Ref<HTMLLIElement>;
  setFlyoutRef?: (ref: React.Ref<HTMLLIElement>) => void;
  disableHover?: boolean;
  role?: string;
}>({
  menuId: null,
  parentMenu: null,
  onActionClick: () => null,
  onSelect: () => null,
  activeItemId: null,
  selected: null,
  drilledInMenus: [],
  drilldownItemPath: [],
  onDrillIn: null,
  onDrillOut: null,
  onGetMenuHeight: () => null,
  flyoutRef: null,
  setFlyoutRef: () => null,
  disableHover: false,
  role: 'menu'
});

export const MenuItemContext = createContext<{
  itemId?: any;
  isDisabled?: boolean;
}>({
  itemId: null,
  isDisabled: false
});

/** Returns the ARIA role for a menu item's interactive element based on the parent menu role. */
export const getMenuItemInteractiveRole = (menuRole?: string): string | undefined => {
  if (menuRole === 'listbox') {
    return 'option';
  }
  if (menuRole === 'list') {
    return undefined;
  }
  return 'menuitem';
};

/** Returns the ARIA role for a menu item's list item wrapper based on the parent menu role. */
export const getMenuListItemRole = (menuRole: string | undefined, hasCheckbox: boolean): string | undefined => {
  if (menuRole === 'list') {
    return undefined;
  }
  return hasCheckbox ? 'menuitem' : 'none';
};
