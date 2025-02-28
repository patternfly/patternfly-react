import * as React from 'react';

interface AlertGroupContext {
  hasAnimations?: boolean;
  updateTransitionEnd?: (onTransitionEnd: React.Dispatch<React.SetStateAction<() => void>>) => void;
}

export const AlertGroupContext = React.createContext<AlertGroupContext>({
  hasAnimations: false,
  updateTransitionEnd: () => {}
});
