import * as React from 'react';

interface AccordionContextProps {
  ContentContainer: React.ElementType;
  ToggleContainer: React.ElementType;
  togglePosition: 'start' | 'end';
}

export const AccordionContext = React.createContext<Partial<AccordionContextProps>>({});
