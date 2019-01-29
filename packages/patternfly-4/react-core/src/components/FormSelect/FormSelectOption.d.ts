import { HTMLProps, FormEvent } from 'react';
import { Omit } from '../../typeUtils';

export interface FormSelectOptionProps extends Omit<HTMLProps<HTMLOptionElement>, 'disabled'> {
  value?: any;
  label: string;
  isValid?: boolean;
  isDisabled?: boolean;
}

declare const FormSelectOption: React.SFC<FormSelectOptionProps>;

export default FormSelectOption;
