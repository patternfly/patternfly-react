import { SFC, HTMLAttributes } from 'react';

export interface FilterItemProps<D = {}> extends HTMLAttributes<HTMLLIElement> {
  /** Data to pass to onRemove function */
  filterData?: D;
  /** callback when filter is removed  */
  onRemove?(filterData: D): void;
}

declare const FilterItem: SFC<FilterItemProps>;

export default FilterItem;
