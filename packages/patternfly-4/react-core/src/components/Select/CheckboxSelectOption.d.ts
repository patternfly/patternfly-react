import { HTMLProps, FormEvent } from 'react';
import { Omit } from '../../typeUtils';

export interface CheckboxSelectOptionProps extends Omit<HTMLProps<HTMLOptionElement>, 'disabled'> {
  value?: string;
  index?: number;
  isDisabled?: boolean;
  isChecked?: boolean;
  onClick?: Function;
  sendRef?: Function;
  keyHandler?: Function;
}

declare const CheckboxSelectOption: React.FunctionComponent<CheckboxSelectOptionProps>;

export default CheckboxSelectOption;
