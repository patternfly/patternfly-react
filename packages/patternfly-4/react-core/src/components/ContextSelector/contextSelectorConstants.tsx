import * as React from 'react';

export const ContextSelectorContext = React.createContext({
  onSelect: (event: any, value: React.ReactNode): any => undefined
});
