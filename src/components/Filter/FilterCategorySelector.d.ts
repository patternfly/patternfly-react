import { SFC, HTMLAttributes } from 'react';
import { FilterType } from './FilterType';

export interface FilterCategorySelectorProps
  extends HTMLAttributes<HTMLDivElement> {
  /** Array of filter categories, each can be a string or an object with a 'title' field */
  filterCategories: FilterType[];
  /** Current selected category */
  currentCategory?: FilterType;
  /** Placeholder text when no category is selected */
  placeholder?: string;
  /** Callback to call when a category is added */
  onFilterCategorySelected?(filterCategory: FilterType): void;
}

declare const FilterCategorySelector: SFC<FilterCategorySelectorProps>;

export default FilterCategorySelector;
