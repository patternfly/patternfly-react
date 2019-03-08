import { FormEvent, FunctionComponent, HTMLProps } from 'react';
import { Omit } from '../../helpers/typeUtils';

export interface TextAreaProps extends Omit<HTMLProps<HTMLInputElement>, 'onChange'> {
  isRequired?: boolean;
  isValid?: boolean;
  onChange?(value: string, event: FormEvent<HTMLInputElement>): void;
}

declare const TextArea: FunctionComponent<TextAreaProps>;

export default TextArea;
