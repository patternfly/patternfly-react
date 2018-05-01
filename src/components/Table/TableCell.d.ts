import { SFC, HTMLAttributes } from 'react';
import { TABLE_ALIGN } from './TableConstants';

export interface TableCellProps
  extends HTMLAttributes<HTMLTableDataCellElement> {
  align?: TABLE_ALIGN;
}

declare const TableCell: SFC<TableCellProps>;

export default TableCell;
