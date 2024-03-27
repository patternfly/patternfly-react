import { ElementType, createContext } from 'react';

interface AccordionContextProps {
  ContentContainer: ElementType;
  ToggleContainer: ElementType;
  togglePosition: 'start' | 'end';
}

export const AccordionContext = createContext<Partial<AccordionContextProps>>({});
