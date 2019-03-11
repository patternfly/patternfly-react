import { FormEvent, FunctionComponent, HTMLProps, ReactNode } from 'react';
import { Omit } from '../../helpers/typeUtils';

export interface RadioProps extends Omit<HTMLProps<HTMLInputElement>, 'type' | 'onChange' | 'disabled' | 'label'> {
  isDisabled?: boolean;
  isValid?: boolean;
  isChecked?: boolean;
  onChange?(checked: boolean, event: FormEvent<HTMLInputElement>): void;
  id: string;
  'aria-label'?: string;
  label?: ReactNode;
  name: string;
}

declare const Radio: FunctionComponent<RadioProps>;

export default Radio;
