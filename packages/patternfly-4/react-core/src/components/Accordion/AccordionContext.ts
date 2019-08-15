import * as React from 'react';

interface AccordionContextProps {
  HeadingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  ContentContainer: React.ElementType;
  ToggleContainer: React.ElementType;
}

export const AccordionContext = React.createContext<Partial<AccordionContextProps>>({});
