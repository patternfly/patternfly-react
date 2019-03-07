import { FunctionComponent, HTMLProps } from 'react';
import { Omit } from '../../helpers/typeUtils';

export interface FormSelectProps
  extends Omit<HTMLProps<HTMLInputElement>, 'onChange' | 'onBlur' | 'onFocus' | 'disabled'> {
  value?: any;
  isValid?: boolean;
  isDisabled?: boolean;
  onBlur?(event: React.FormEvent<HTMLSelectElement>): void;
  onFocus?(event: React.FormEvent<HTMLSelectElement>): void;
  onChange?(value: string, event: React.FormEvent<HTMLSelectElement>): void;
}

declare const FormSelect: FunctionComponent<FormSelectProps>;

export default FormSelect;
