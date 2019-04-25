import { FormEvent, FunctionComponent, HTMLProps, ReactNode } from 'react';
import { Omit } from '../../helpers/typeUtils';

export interface DropdownToggleCheckboxProps extends Omit<HTMLProps<HTMLInputElement>, 'type' | 'onChange' | 'disabled'> {
  isDisabled?: boolean;
  isValid?: boolean;
  isChecked?: boolean;
  onChange?(checked: boolean, event: FormEvent<HTMLInputElement>): void;
  id: string;
  'aria-label': string;
}

declare const DropdownToggleCheckbox: FunctionComponent<DropdownToggleCheckboxProps>;

export default DropdownToggleCheckbox;
