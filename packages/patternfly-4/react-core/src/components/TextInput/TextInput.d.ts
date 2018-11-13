import { FormEvent, FunctionComponent, HTMLProps } from 'react';
import { Omit } from '../../helpers/typeUtils';

export interface TextInputProps extends Omit<HTMLProps<HTMLInputElement>, 'onChange' | 'disabled'> {
  isRequired?: boolean;
  isValid?: boolean;
  isDisabled?: boolean;
  onChange?(value: string, event: FormEvent<HTMLInputElement>): void;
  isReadOnly?: boolean;
  innerRef?: RefObject<HTMLInputElement>;
}

declare const TextInput: FunctionComponent<TextInputProps>;

export default TextInput;
