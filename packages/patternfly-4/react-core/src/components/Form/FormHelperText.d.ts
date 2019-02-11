import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface FormHelperTextProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  isError?: boolean;
  isActive?: boolean;
  className?: string;
}

declare const FormHelperText: FunctionComponent<FormHelperTextProps>;

export default FormHelperText;