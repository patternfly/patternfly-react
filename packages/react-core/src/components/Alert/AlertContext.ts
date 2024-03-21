import { ReactNode, createContext } from 'react';

interface AlertContext {
  title: ReactNode;
  variantLabel?: string;
}

export const AlertContext = createContext<AlertContext>(null);
