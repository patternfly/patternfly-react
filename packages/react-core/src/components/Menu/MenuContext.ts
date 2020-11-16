import * as React from 'react';

export const MenuContext = React.createContext<{
  onSelect?: (event?: any, itemId?: any) => void;
  onActionClick?: (event?: any, itemId?: any) => void;
}>({
  onActionClick: () => null,
  onSelect: () => null
});

export const MenuItemContext = React.createContext<{
  itemId?: any;
  isDisabled?: boolean;
}>({
  itemId: null,
  isDisabled: false
});
