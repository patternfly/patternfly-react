import * as React from 'react';

export interface TabsContextProps {
  variant: 'default' | 'light300';
}

const TabsContext = React.createContext<TabsContextProps>({
  variant: 'default'
});

export const TabsContextProvider = TabsContext.Provider;
export const TabsContextConsumer = TabsContext.Consumer;
