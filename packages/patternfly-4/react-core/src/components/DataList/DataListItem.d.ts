import { SFC, HTMLProps } from 'react';
import { Omit } from '../../typeUtils';

export interface DataListItemProps extends Omit<HTMLProps<HTMLLIElement>, 'aria-label'> {
  isExpanded: boolean;
  'aria-labelledby': string;
}

declare const DataListItem: SFC<DataListItemProps>;

export default DataListItem;
