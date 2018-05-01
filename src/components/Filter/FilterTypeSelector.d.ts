import { SFC, HTMLAttributes } from 'react';
import { FilterType } from './FilterType';

export interface FilterTypeSelectorProps
  extends HTMLAttributes<HTMLDivElement> {
  /** Array of filter types, can be a string or an object with a 'title' field */
  filterTypes: FilterType[];
  /** Current selected filter type */
  currentFilterType?: FilterType;
  /** Placeholder text when no filter type is selected */
  placeholder?: string;
  /** Callback to call when a filter type is selected */
  onFilterTypeSelected?(filterType: FilterType): void;
}

declare const FilterTypeSelector: SFC<FilterTypeSelectorProps>;

export default FilterTypeSelector;
