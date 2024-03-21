import { ReactNode, FunctionComponent, Fragment } from 'react';

export interface AccordionItemProps {
  /** Content rendered inside the Accordion item  */
  children?: ReactNode;
}

export const AccordionItem: FunctionComponent<AccordionItemProps> = ({ children = null }: AccordionItemProps) => (
  <Fragment>{children}</Fragment>
);
AccordionItem.displayName = 'AccordionItem';
