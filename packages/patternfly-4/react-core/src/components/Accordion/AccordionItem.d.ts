import { FunctionComponent, HTMLProps } from 'react';
import { Omit } from '../../helpers/typeUtils';

export interface AccordionItemProps extends Omit<HTMLProps<HTMLLIElement>, 'aria-label'> {
}

declare const AccordionItem: FunctionComponent<AccordionItemProps>;

export default AccordionItem;
