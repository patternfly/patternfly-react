import {
  createContext,
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent as ReactMouseEvent,
  type Ref
} from 'react';

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
    event: ReactKeyboardEvent | ReactMouseEvent,
    fromItemId: string,
    toItemId: string,
    itemId: string
  ) => void;
  onDrillOut?: (event: ReactKeyboardEvent | ReactMouseEvent, toItemId: string, itemId: string) => void;
  onGetMenuHeight?: (menuId: string, height: number) => void;
  flyoutRef?: Ref<HTMLLIElement>;
  setFlyoutRef?: (ref: Ref<HTMLLIElement>) => void;
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
