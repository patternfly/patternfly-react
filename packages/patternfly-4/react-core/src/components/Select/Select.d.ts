import { HTMLProps, FormEvent, ReactNode } from 'react';
import { Omit } from '../../helpers/typeUtils';

export const SelectVariant: {
  single: 'single';
  checkbox: 'checkbox';
  typeahead: 'typeahead';
  typeaheadMulti: 'typeaheadmulti';
};

export interface SelectProps extends Omit<React.HTMLProps<HTMLOptionElement>, 'onSelect'> {
  isExpanded?: boolean;
  isGrouped?: boolean;
  onToggle(value: boolean): void;
  onSelect(event: React.SyntheticEvent<HTMLOptionElement, Event>, element: string, isPlaceholder: boolean): void;
  onClear?() : void;
  placeholderText?: string | ReactNode;
  selections?: string | Array<string> | null;
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
