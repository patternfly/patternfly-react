import { FunctionComponent, HTMLProps } from 'react';
import { Omit } from '../../helpers/typeUtils';

export interface FormSelectOptionProps extends Omit<HTMLProps<HTMLOptionElement>, 'disabled'> {
  value?: any;
  label: string;
  isValid?: boolean;
  isDisabled?: boolean;
}

declare const FormSelectOption: FunctionComponent<FormSelectOptionProps>;

export default FormSelectOption;
