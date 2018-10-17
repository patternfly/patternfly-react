import { SFC, HTMLProps, ReactNode } from 'react';

export interface FormGroupProps extends React.Component<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  isValid?: boolean;
  isRequired?: boolean;
  label?: ReactNode;
  helperText?: ReactNode;
  helperTextInvalid?: ReactNode;
  fieldId: string;
  isInline?: boolean;
}

declare const FormGroup: SFC<FormGroupProps>;

export default FormGroup;
