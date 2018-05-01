import { DropdownButtonProps } from '../Button';
import { SFC } from 'react';

export interface SortTypeObject {
  title: string;
  id?: string;
}

export type SortType = SortTypeObject | string;

export interface SortTypeSelectorProps extends DropdownButtonProps {
  /** Array of sort types, can be a string or an object */
  sortTypes: SortType[];
  /** Current selected sort type */
  currentSortType?: SortType;
  /** Callback to call when a sort type is selected */
  onSortTypeSelected?(sortType: SortType): void;
}

declare const SortTypeSelector: SFC<SortTypeSelectorProps>;

export default SortTypeSelector;
