import { HTMLProps, FormEvent } from 'react';

export interface SelectProps extends HTMLProps<HTMLOptionElement> {
  isExpanded?: boolean;
  onToggle(value: boolean): void;
  placeholderText?: string;
  selectOptions?: ReactNode[];
  selections?: string;
  variant?: string;
}

declare const Select: React.FunctionComponent<SelectProps>;

export default Select;
