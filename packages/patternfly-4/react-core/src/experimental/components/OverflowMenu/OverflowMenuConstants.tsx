import * as React from 'react';

export const OverflowMenuContext = React.createContext<{
  breakpoint: string
}>({
  breakpoint: ''
});

export const OverflowMenuContentContext = React.createContext<{
  isHidden: boolean
}>({
  isHidden: false
});
