import * as React from 'react';

interface AlertGroupContext {
  hasAnimations?: boolean;
}

export const AlertGroupContext = React.createContext<AlertGroupContext>({ hasAnimations: false });
