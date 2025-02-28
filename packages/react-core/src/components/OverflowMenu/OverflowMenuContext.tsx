import { createContext } from 'react';

export const OverflowMenuContext = createContext<{
  isBelowBreakpoint?: boolean;
}>({
  isBelowBreakpoint: false
});
