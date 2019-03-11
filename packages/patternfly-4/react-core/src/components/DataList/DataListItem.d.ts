import { FunctionComponent, HTMLProps } from 'react';
import { Omit } from '../../helpers/typeUtils';

export interface DataListItemProps extends Omit<HTMLProps<HTMLLIElement>, 'aria-label'> {
  isExpanded: boolean;
  'aria-labelledby': string;
}

declare const DataListItem: FunctionComponent<DataListItemProps>;

export default DataListItem;
