import { HTMLAttributes, SFC } from 'react';
import { TABLE_ALIGN, TABLE_SORT_DIRECTION } from './TableConstants';

export interface TableHeadingProps
  extends HTMLAttributes<HTMLTableHeaderCellElement> {
  align?: TABLE_ALIGN;
  sort?: boolean;
  sortDirection?: TABLE_SORT_DIRECTION;
}

declare const TableHeading: SFC<TableHeadingProps>;

export default TableHeading;
