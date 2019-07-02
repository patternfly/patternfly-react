import * as React from 'react';

interface AccordionContextProps {
  AccordionHeadingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  asDefinitionList: boolean;
}

export const AccordionContext = React.createContext<Partial<AccordionContextProps>>({});
