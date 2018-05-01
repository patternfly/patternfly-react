import { SFC, HTMLAttributes } from 'react';
import { FilterType } from './FilterType';

export interface FilterValueSelectorProps
  extends HTMLAttributes<HTMLDivElement> {
  /** Array of valid values to select from, each can be a string or an object with a 'title' field */
  filterValues: FilterType[];
  /** Currently selected value */
  currentValue?: FilterType;
  /** Placeholder text when no value is selected */
  placeholder?: string;
  /** Callback to call when a value is selected */
  onFilterValueSelected?(filterValue: FilterType): void;
}

export const FilterValueSelector: SFC<FilterValueSelectorProps>;

export default FilterValueSelector;
