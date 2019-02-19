import { HTMLProps, FormEvent } from 'react';

export interface SelectProps extends HTMLProps<HTMLOptionElement> {
  isExpanded?: boolean;
  onToggle(value: boolean): void;
  placeholderText?: string;
  selections?: string;
  variant?: string;
  width?: string | number;
}

declare const Select: React.FunctionComponent<SelectProps>;

export default Select;
