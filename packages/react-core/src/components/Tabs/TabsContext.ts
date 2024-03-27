import { MouseEvent as ReactMouseEvent, createContext, type RefObject } from 'react';

export interface TabsContextProps {
  variant: 'default' | 'light300';
  mountOnEnter: boolean;
  unmountOnExit: boolean;
  localActiveKey: string | number;
  uniqueId: string;
  handleTabClick: (
    event: ReactMouseEvent<HTMLElement, MouseEvent>,
    eventKey: number | string,
    tabContentRef: RefObject<any>
  ) => void;
  handleTabClose?: (
    event: ReactMouseEvent<HTMLElement, MouseEvent>,
    eventKey: number | string,
    tabContentRef?: RefObject<any>
  ) => void;
}

export const TabsContext = createContext<TabsContextProps>({
  variant: 'default',
  mountOnEnter: false,
  unmountOnExit: false,
  localActiveKey: '',
  uniqueId: '',
  handleTabClick: () => null,
  handleTabClose: undefined
});

export const TabsContextProvider = TabsContext.Provider;
export const TabsContextConsumer = TabsContext.Consumer;
