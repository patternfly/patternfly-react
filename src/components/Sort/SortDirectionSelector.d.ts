import { ButtonProps } from '../Button';
import { SFC } from 'react';

export interface SortDirectionSelectorProps extends ButtonProps {
  /** Boolean if current sort type is numeric */
  isNumeric?: boolean;
  /** Boolean if current sort direction is ascending */
  isAscending?: boolean;
}

declare const SortDirectionSelector: SFC<SortDirectionSelectorProps>;

export default SortDirectionSelector;
