import { FunctionComponent, HTMLProps } from 'react';
import { Omit } from '../../helpers/typeUtils';

export interface AccordionContentProps extends Omit<HTMLProps<HTMLElement>, 'aria-label'> {
  isHidden: boolean;
  isFixed: boolean;
  'aria-label': string;
}

declare const AccordionContent: FunctionComponent<AccordionContentProps>;

export default AccordionContent;
