import { SFC, HTMLProps, FormEvent } from 'react';
import { Omit } from '../../typeUtils';

export interface TextInputProps extends Omit<HTMLProps<HTMLInputElement>, 'onChange' | 'disabled'> {
  isRequired?: boolean;
  isValid?: boolean;
  isDisabled?: boolean;
  onChange?(value: string, event: FormEvent<HTMLInputElement>): void;
  isReadOnly?: boolean;
}

declare const TextInput: SFC<TextInputProps>;

export default TextInput;
