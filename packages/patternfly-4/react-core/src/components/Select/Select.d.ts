import { HTMLProps, FormEvent, ReactNode } from 'react';

export const SelectVariant: {
  single: 'single';
  checkbox: 'checkbox';
  typeahead: 'typeahead';
  typeaheadMulti: 'typeaheadmulti';
};

export interface SelectProps extends HTMLProps<HTMLOptionElement> {
  isExpanded?: boolean;
  isGrouped?: boolean;
  onToggle(value: boolean): void;
  onClear?() : void;
  placeholderText?: string | ReactNode;
  selections?: string | Array<string>;
  variant?: string;
  width?: string | number;
  ariaLabelledBy?: string;
  ariaLabelTypeAhead?: string;
  ariaLabelClear?: string;
  ariaLabelToggle?: string;
  ariaLabelRemove?: string;
}

declare const Select: React.FunctionComponent<SelectProps>;

export default Select;
