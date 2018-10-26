import { SFC, HTMLProps, FormEvent } from 'react';
import { Omit } from '../../typeUtils';

export interface TextInputProps extends Omit<HTMLProps<HTMLInputElement>, 'type' | 'onChange' | 'disabled'> {
  className?: string;
  isRequired?: boolean;
  type?: string;
  value?: string | number;
  isValid?: boolean;
  isDisabled?: boolean;
  isAlt?: boolean;
  onChange?(checked: boolean, event: FormEvent<HTMLInputElement>): void;
  isReadOnly?: boolean;
  'aria-label'?: string;
}

declare const TextInput: SFC<TextInputProps>;

export default TextInput;
