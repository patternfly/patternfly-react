import * as React from 'react';

export const MenuContext = React.createContext<{
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

export const MenuItemContext = React.createContext<{
  itemId?: any;
  isDisabled?: boolean;
}>({
  itemId: null,
  isDisabled: false
});
