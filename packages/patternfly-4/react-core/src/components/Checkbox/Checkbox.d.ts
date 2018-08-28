import { HTMLProps, FormEvent } from 'react';
import { Omit } from '../../typeUtils';

export interface CheckboxProps
  extends Omit<HTMLProps<HTMLInputElement>, 'type' | 'onChange' | 'disabled'> {
  isDisabled: boolean;
  isValid: boolean;
  onChange(checked: boolean, event: FormEvent<HTMLInputElement>): void;
}

declare const Checkbox: React.SFC<CheckboxProps>;

export default Checkbox;
