import { SFC, HTMLProps, ReactType } from 'react';
import { DropdownItemProps } from './DropdownItem';

export interface SeparatorProps extends DropdownItemProps {
}

declare const Separator: SFC<SeparatorProps>;

export default Separator;