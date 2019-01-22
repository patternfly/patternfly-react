import { HTMLProps, FormEvent } from 'react';
import { Omit } from '../../typeUtils';

export interface FormSelectOptionGroupProps extends Omit<HTMLProps<HTMLOptGroupElement>, 'disabled'> {
  children: any;
  label: string;
  isDisabled?: boolean;
}

declare const FormSelectOptionGroup: React.SFC<FormSelectOptionGroupProps>;

export default FormSelectOptionGroup;
