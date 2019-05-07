import { FunctionComponent, HTMLProps } from 'react';
import { Omit } from '../../helpers/typeUtils';

export interface AccordionToggleProps extends Omit<HTMLProps<HTMLDivElement>, 'aria-labelledby' | 'aria-label' | 'id'> {
  isExpanded: boolean;
  id: string;
}

declare const AccordionToggle: FunctionComponent<AccordionToggleProps>;

export default AccordionToggle;
