import { HTMLProps, FormEvent } from 'react';
import { Omit } from '../../typeUtils';

export interface SelectOptionProps extends Omit<HTMLProps<HTMLOptionElement>, 'disabled'> {
  value?: string;
  isValid?: boolean;
  isDisabled?: boolean;
  isPlaceholder?: boolean;
  onClick?: Function;
  sendRef?: Function;
}

declare const SelectOption: React.FunctionComponent<SelectOptionProps>;

export default SelectOption;
