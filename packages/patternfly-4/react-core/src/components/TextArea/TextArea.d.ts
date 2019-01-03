import { SFC, HTMLProps, FormEvent } from 'react';
import { Omit } from '../../typeUtils';

export interface TextAreaProps extends Omit<HTMLProps<HTMLInputElement>, 'onChange'> {
  isRequired?: boolean;
  isValid?: boolean;
  onChange?(value: string, event: FormEvent<HTMLInputElement>): void;
}

declare const TextArea: SFC<TextAreaProps>;

export default TextArea;
