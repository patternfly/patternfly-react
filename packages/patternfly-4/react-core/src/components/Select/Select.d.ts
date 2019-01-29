import { HTMLProps, FormEvent } from 'react';
import { Omit } from '../../typeUtils';

export interface SelectProps extends Omit<HTMLProps<HTMLOptionElement>> {
  isExpanded?: boolean;
  onSelect(event: React.SyntheticEvent<HTMLDivElement>): void;
  onToggle: Function;
  placeholderText?: string;
  selectOptions?: array;
  selections?: string;
  variant?: string;
}

declare const Select: React.SFC<SelectProps>;

export default Select;
