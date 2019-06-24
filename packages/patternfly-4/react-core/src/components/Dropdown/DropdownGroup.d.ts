import { FunctionComponent, HTMLProps, ReactNode } from 'react';
import { Omit } from '../../helpers/typeUtils';

export interface DropdownGroupProps extends Omit<React.HTMLProps<HTMLDivElement>, 'label'> {
  children?: ReactNode;
  label?: ReactNode;
}

declare const DropdownGroup: FunctionComponent<DropdownGroupProps>;

export default DropdownGroup;
