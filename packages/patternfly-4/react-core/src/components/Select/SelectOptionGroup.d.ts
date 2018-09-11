import { HTMLProps, FormEvent } from 'react';
import { Omit } from '../../typeUtils';

export interface SelectOptionGroupProps extends Omit<HTMLProps<HTMLOptGroupElement>, 'disabled'> {
  children: any;
  label: string;
  isDisabled?: boolean;
}

declare const SelectOptionGroup: React.SFC<SelectOptionGroupProps>;

export default SelectOptionGroup;
