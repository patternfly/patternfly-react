import * as React from 'react';

export const DualListSelectorContext = React.createContext<{
  isTree?: boolean;
}>({ isTree: false });

export const DualListSelectorListContext = React.createContext<{
  setFocusedOption?: (id: string) => void;
}>({});

export const DualListSelectorPaneContext = React.createContext<{
  isChosen: boolean;
}>({ isChosen: false });
