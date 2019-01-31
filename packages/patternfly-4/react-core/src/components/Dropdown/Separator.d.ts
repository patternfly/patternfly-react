import { FunctionComponent } from 'react';
import { DropdownItemProps } from './DropdownItem';

export interface SeparatorProps extends DropdownItemProps {
}

declare const Separator: FunctionComponent<SeparatorProps>;

export default Separator;