import { HTMLProps, FormEvent, ReactNode } from 'react';
import { Omit } from '../../typeUtils';

export interface CheckboxProps extends Omit<HTMLProps<HTMLInputElement>, 'type' | 'onChange' | 'disabled' | 'label'> {
  isDisabled?: boolean;
  isValid?: boolean;
  isChecked?: boolean;
  onChange?(checked: boolean, event: FormEvent<HTMLInputElement>): void;
  id: string;
  'aria-label': string;
  label?: ReactNode;
}

declare const Checkbox: React.SFC<CheckboxProps>;

export default Checkbox;
