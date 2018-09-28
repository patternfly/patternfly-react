import { SFC, HTMLProps, FormEvent } from 'react';
import { Omit } from '../../typeUtils';

export interface TextAreaProps extends Omit<HTMLProps<HTMLInputElement>, 'onChange'> {
  className?: string;
  isRequired?: boolean;
  isValid?: boolean;
  value?: string | number;
  onChange(checked: boolean, event: FormEvent<HTMLInputElement>): void;
  'aria-label'?: string;
}

declare const TextArea: SFC<TextAreaProps>;

export default TextArea;
