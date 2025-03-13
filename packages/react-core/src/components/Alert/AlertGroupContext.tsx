import { createContext } from 'react';

interface AlertGroupContext {
  hasAnimations?: boolean;
  updateTransitionEnd?: (onTransitionEnd: () => void) => void;
}

export const AlertGroupContext = createContext<AlertGroupContext>({
  hasAnimations: false,
  updateTransitionEnd: () => {}
});
