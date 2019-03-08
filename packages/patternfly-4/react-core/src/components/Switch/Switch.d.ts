import { FormEvent, FunctionComponent, HTMLProps } from 'react';
import { Omit } from '../../helpers/typeUtils';

export interface SwitchProps extends Omit<HTMLProps<HTMLInputElement>, 'type' | 'onChange' | 'disabled' | 'label'> {
  isDisabled?: boolean;
  isChecked?: boolean;
  onChange?(checked: boolean, event: FormEvent<HTMLInputElement>): void;
  id?: string;
  'aria-label': string;
  label?: string;
  className?: string;
}

declare const Switch: FunctionComponent<SwitchProps>;

export default Switch;
