import { HTMLAttributes, SFC } from 'react';

export interface TableSelectionCellProps
  extends HTMLAttributes<HTMLTableDataCellElement> {}

declare const TableSelectionCell: SFC<TableSelectionCellProps>;

export default TableSelectionCell;
