import * as React from 'react';

export interface AccordionItemProps {
  /** Content rendered inside the Accordion item  */
  children?: React.ReactNode;
}

/**
 *
 */
export function AccordionItem({ children = null }: AccordionItemProps) {
  return <React.Fragment>{children}</React.Fragment>;
}
