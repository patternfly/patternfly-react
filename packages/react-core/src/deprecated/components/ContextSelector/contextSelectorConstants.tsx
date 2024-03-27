import { ReactNode, createContext } from 'react';

export const ContextSelectorContext = createContext({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onSelect: (event: any, value: ReactNode): any => undefined
});
