import { FunctionComponent, HTMLProps, ReactNode } from 'react';
import { Omit } from '../../helpers/typeUtils';

export interface DataListItemProps extends Omit<HTMLProps<HTMLLIElement>, 'aria-label' | 'children'> {
  children: ReactNode;
  isExpanded?: boolean;
  'aria-labelledby': string;
}

declare const DataListItem: FunctionComponent<DataListItemProps>;

export default DataListItem;
