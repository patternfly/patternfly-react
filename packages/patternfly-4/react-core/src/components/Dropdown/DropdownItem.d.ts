import { FunctionComponent } from 'react';
import { InternalDropdownItemProps } from './InternalDropdownItem';

export interface DropdownItemProps extends InternalDropdownItemProps {
}

declare const DropdownItem: FunctionComponent<DropdownItemProps>;

export default DropdownItem;
