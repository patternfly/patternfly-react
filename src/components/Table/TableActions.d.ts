import { SFC, HTMLAttributes } from 'react';

export interface TableActionsProps
  extends HTMLAttributes<HTMLTableDataCellElement> {}

declare const TableActions: SFC<TableActionsProps>;

export default TableActions;
