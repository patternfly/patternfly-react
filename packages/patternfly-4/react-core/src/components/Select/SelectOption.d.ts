import { HTMLProps, FormEvent } from 'react';
import { Omit } from '../../helpers/typeUtils';

export interface SelectOptionProps extends Omit<HTMLProps<HTMLOptionElement>, 'disabled'> {
  value?: string;
  index?: number;
  isValid?: boolean;
  isDisabled?: boolean;
  isPlaceholder?: boolean;
  isSelected?: boolean;
  sendRef?: Function;
  keyHandler?: Function;
}

declare const SelectOption: React.FunctionComponent<SelectOptionProps>;

export default SelectOption;
