import {
  createContext,
  type ReactNode,
  type MouseEvent as ReactMouseEvent,
  type ChangeEvent as ReactChangeEvent,
  type KeyboardEvent as ReactKeyboardEvent
} from 'react';

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
  onOptionSelect?: (e: ReactMouseEvent | ReactChangeEvent | ReactKeyboardEvent, index: number, id: string) => void;
  options?: ReactNode[];
  isDisabled?: boolean;
}>({});

export const DualListSelectorPaneContext = createContext<{
  isChosen: boolean;
}>({ isChosen: false });
