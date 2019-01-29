import { HTMLProps, FormEvent } from 'react';
import { Omit } from '../../typeUtils';

export interface SelectOptionProps extends Omit<HTMLProps<HTMLOptionElement>, 'disabled'> {
  value?: string;
  isValid?: boolean;
  isDisabled?: boolean;
  onClick?: Function;
}

declare const SelectOption: React.SFC<SelectOptionProps>;

export default SelectOption;
