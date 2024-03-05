import * as React from 'react';

export const DualListSelectorContext = React.createContext<{
  isTree?: boolean;
}>({ isTree: false });

export const DualListSelectorListContext = React.createContext<{
  setFocusedOption?: (id: string) => void;
  isTree?: boolean;
  ariaLabelledBy?: string;
  focusedOption?: string;
  displayOption?: (option: React.ReactNode) => boolean;
  selectedOptions?: string[] | number[];
  id?: string;
  options?: React.ReactNode[];
  isDisabled?: boolean;
}>({});

export const DualListSelectorPaneContext = React.createContext<{
  isChosen: boolean;
}>({ isChosen: false });
