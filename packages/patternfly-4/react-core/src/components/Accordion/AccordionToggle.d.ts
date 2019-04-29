import { FunctionComponent, HTMLProps } from 'react';
import { Omit } from '../../typeUtils';

export interface AccordionToggleProps extends Omit<HTMLProps<HTMLDivElement>, 'aria-labelledby' | 'aria-label' | 'id'> {
  isExpanded: boolean;
  'aria-controls'?: string;
  'aria-labelledby'?: string;
  'aria-label'?: string;
  id: string;
}

declare const AccordionToggle: FunctionComponent<AccordionToggleProps>;

export default AccordionToggle;
