import { FunctionComponent, HTMLProps } from 'react';
import { Omit } from '../../typeUtils';

export interface AccordionProps extends Omit<HTMLProps<HTMLUListElement>, 'aria-label'> {
  'aria-label': string;
}

declare const Accordion: FunctionComponent<AccordionProps>;

export default Accordion;
