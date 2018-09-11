import { HTMLProps, FormEvent } from 'react';
import { Omit } from '../../typeUtils';

export interface SelectOptionProps extends Omit<HTMLProps<HTMLOptionElement>, 'disabled'> {
  value?: any;
  label: string;
  isValid?: boolean;
  isDisabled?: boolean;
}

declare const SelectOption: React.SFC<SelectOptionProps>;

export default SelectOption;
