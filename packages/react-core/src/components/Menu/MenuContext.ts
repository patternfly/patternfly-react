import * as React from 'react';

export const MenuContext = React.createContext<{
  onSelect?: (event?: any, itemId?: any) => void;
  onActionClick?: (event?: any, itemId?: any, actionId?: any) => void;
  activeItemId?: any;
  selected?: any | any[];
}>({
  onActionClick: () => null,
  onSelect: () => null,
  activeItemId: null,
  selected: null
});

export const MenuItemContext = React.createContext<{
  itemId?: any;
  isDisabled?: boolean;
}>({
  itemId: null,
  isDisabled: false
});
