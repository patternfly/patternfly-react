import { createContext, type ReactNode } from 'react';

export const DualListSelectorContext = createContext<{
  isTree?: boolean;
}>({ isTree: false });

export const DualListSelectorListContext = createContext<{
  setFocusedOption?: (id: string) => void;
  isTree?: boolean;
  ariaLabelledBy?: string;
  focusedOption?: string;
  displayOption?: (option: ReactNode) => boolean;
  selectedOptions?: string[] | number[];
  id?: string;
  options?: ReactNode[];
  isDisabled?: boolean;
}>({});

export const DualListSelectorPaneContext = createContext<{
  isChosen: boolean;
}>({ isChosen: false });
