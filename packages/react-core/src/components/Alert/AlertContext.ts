import { createContext } from 'react';
interface AlertContext {
  title: React.ReactNode;
  variantLabel?: string;
}

export const AlertContext = createContext<AlertContext>(null);
