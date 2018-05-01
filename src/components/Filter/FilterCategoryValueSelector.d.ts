import { SFC, HTMLAttributes } from 'react';
import { FilterType } from './FilterType';

export interface FilterCategoryValueSelectorProps
  extends HTMLAttributes<HTMLDivElement> {
  /** Array of valid values for the category to select from, each can be a string or an object with a 'title' field */
  categoryValues: FilterType[];
  /** Currently selected category value */
  currentValue?: FilterType;
  /** Placeholder text when no category value is selected */
  placeholder?: string;
  /** Callback to call when a category value is selected */
  onCategoryValueSelected?(categoryValue: FilterType): void;
}

declare const FilterCategoryValueSelector: SFC<
  FilterCategoryValueSelectorProps
>;

export default FilterCategoryValueSelector;
