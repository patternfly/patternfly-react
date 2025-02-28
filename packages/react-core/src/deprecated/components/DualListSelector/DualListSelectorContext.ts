import { createContext } from 'react';

export const DualListSelectorContext = createContext<{
  isTree?: boolean;
}>({ isTree: false });

export const DualListSelectorListContext = createContext<{
  setFocusedOption?: (id: string) => void;
  isTree?: boolean;
  ariaLabelledBy?: string;
  focusedOption?: string;
  displayOption?: (option: React.ReactNode) => boolean;
  selectedOptions?: string[] | number[];
  id?: string;
  onOptionSelect?: (e: React.MouseEvent | React.ChangeEvent | React.KeyboardEvent, index: number, id: string) => void;
  options?: React.ReactNode[];
  isDisabled?: boolean;
}>({});

export const DualListSelectorPaneContext = createContext<{
  isChosen: boolean;
}>({ isChosen: false });
