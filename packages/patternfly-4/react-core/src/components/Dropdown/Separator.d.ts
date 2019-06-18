import { FunctionComponent } from 'react';
import { InternalDropdownItemProps } from './InternalDropdownItem';

export interface SeparatorProps extends InternalDropdownItemProps {
}

declare const Separator: FunctionComponent<SeparatorProps>;

export default Separator;