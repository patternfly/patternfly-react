import * as React from 'react';

export const MenuContext = React.createContext<{
  onSelect?: (event: React.MouseEvent, itemId: any) => void;
  onFavorite?: (event: React.MouseEvent, itemId: any) => void;
}>({
  onSelect: () => {},
  onFavorite: () => {}
});
