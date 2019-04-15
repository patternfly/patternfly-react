import { HTMLProps, FormEvent } from 'react';
import { Omit } from '../../helpers/typeUtils';

export interface CheckboxSelectOptionProps extends Omit<HTMLProps<HTMLOptionElement>, 'disabled'> {
  value?: string;
  isDisabled?: boolean;
  isChecked?: boolean;
}

declare const CheckboxSelectOption: React.FunctionComponent<CheckboxSelectOptionProps>;

export default CheckboxSelectOption;
