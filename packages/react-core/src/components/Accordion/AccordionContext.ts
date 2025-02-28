import { createContext } from 'react';
interface AccordionContextProps {
  ContentContainer: React.ElementType;
  ToggleContainer: React.ElementType;
  togglePosition: 'start' | 'end';
}

interface AccordionItemContextProps {
  isExpanded?: boolean;
}

export const AccordionContext = createContext<Partial<AccordionContextProps>>({});
export const AccordionItemContext = createContext({} as AccordionItemContextProps);
