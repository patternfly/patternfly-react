import { HTMLProps, FormEvent } from 'react';
import { Omit } from '../../typeUtils';

export interface FormSelectProps
  extends Omit<HTMLProps<HTMLInputElement>, 'onChange' | 'onBlur' | 'onFocus' | 'disabled'> {
  value?: any;
  isValid?: boolean;
  isDisabled?: boolean;
  onBlur?(event: React.FormEvent<HTMLSelectElement>): void;
  onFocus?(event: React.FormEvent<HTMLSelectElement>): void;
  onChange?(event: React.FormEvent<HTMLSelectElement>): void;
}

declare const FormSelect: React.SFC<FormSelectProps>;

export default FormSelect;
