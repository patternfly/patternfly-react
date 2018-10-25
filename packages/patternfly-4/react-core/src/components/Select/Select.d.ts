import { HTMLProps, FormEvent } from 'react';
import { Omit } from '../../typeUtils';

export interface SelectProps extends Omit<HTMLProps<HTMLInputElement>, 'onChange' | 'onBlur' | 'onFocus' | 'disabled'> {
  children: any;
  value?: any;
  isValid?: boolean;
  isDisabled?: boolean;
  onBlur?(event: React.FormEvent<HTMLSelectElement>): void;
  onFocus?(event: React.FormEvent<HTMLSelectElement>): void;
  onChange?(event: React.FormEvent<HTMLSelectElement>): void;
}

declare const Select: React.SFC<SelectProps>;

export default Select;
