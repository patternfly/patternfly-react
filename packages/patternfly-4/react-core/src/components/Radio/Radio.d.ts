import { HTMLProps, FormEvent } from 'react';
import { Omit } from '../../typeUtils';

export interface RadioProps
  extends Omit<HTMLProps<HTMLInputElement>, 'type' | 'onChange' | 'disabled'> {
  isDisabled: boolean;
  isValid: boolean;
  onChange(checked: boolean, event: FormEvent<HTMLInputElement>): void;
}

declare const Radio: React.SFC<RadioProps>;

export default Radio;
