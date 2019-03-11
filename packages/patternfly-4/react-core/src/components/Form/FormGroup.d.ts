import { FunctionComponent, HTMLProps, ReactNode } from 'react';
import { Omit } from '../../helpers/typeUtils'

export interface FormGroupProps extends Omit<HTMLProps<HTMLDivElement>, 'label'> {
  isValid?: boolean;
  isRequired?: boolean;
  label?: ReactNode;
  helperText?: ReactNode;
  helperTextInvalid?: ReactNode;
  fieldId: string;
  isInline?: boolean;
}

declare const FormGroup: FunctionComponent<FormGroupProps>;

export default FormGroup;
