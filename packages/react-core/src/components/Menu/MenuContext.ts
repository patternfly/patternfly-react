import * as React from 'react';

export const MenuContext = React.createContext<{
  onSelect?: (
    event: React.FormEvent<HTMLInputElement>,
    groupId: number | string,
    itemId: number | string,
    to: string,
    preventDefault: boolean,
    isSelected: boolean,
    onClick: (
      e: React.FormEvent<HTMLInputElement>,
      itemId: number | string,
      groupId: number | string,
      to: string,
      isSelected: boolean
    ) => void
  ) => void;
  onToggle?: (event: React.MouseEvent<HTMLInputElement>, groupId: number | string, expanded: boolean) => void;
  onSearchInputChange?: (event: React.FormEvent<HTMLInputElement>, value: string) => void;
  updateIsScrollable?: (isScrollable: boolean) => void;
  onFavorite?: (itemId: string, isFavorite: boolean) => void;
}>({});
