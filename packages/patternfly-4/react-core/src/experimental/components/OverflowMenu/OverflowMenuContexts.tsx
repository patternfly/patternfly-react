import * as React from 'react';

export const OverflowMenuContext = React.createContext<{
  breakpoint?: 'md' | 'lg' | 'xl'
}>({
  breakpoint: null
});

export const OverflowMenuContentContext = React.createContext<{
  isHidden: boolean
}>({
  isHidden: false
});
