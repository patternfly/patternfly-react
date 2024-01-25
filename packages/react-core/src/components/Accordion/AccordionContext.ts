import * as React from 'react';

interface AccordionContextProps {
  ContentContainer: React.ElementType;
  ToggleContainer: React.ElementType;
  togglePosition: 'start' | 'end';
}

interface AccordionItemContextProps {
  isExpanded?: boolean;
}

export const AccordionContext = React.createContext<Partial<AccordionContextProps>>({});
export const AccordionItemContext = React.createContext({} as AccordionItemContextProps);
