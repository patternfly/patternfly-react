import { FunctionComponent, HTMLProps } from 'react';
import { Omit } from '../../helpers/typeUtils';

export interface FormSelectOptionGroupProps extends Omit<HTMLProps<HTMLOptGroupElement>, 'disabled'> {
  label: string;
  isDisabled?: boolean;
}

declare const FormSelectOptionGroup: FunctionComponent<FormSelectOptionGroupProps>;

export default FormSelectOptionGroup;
