import { SFC, HTMLProps, ReactType, ReactNode } from 'react';

export interface TableBodyProps extends HTMLProps<HTMLTableRowElement> {
  rowKey?: string;
  onRowClick?: Function;
}

declare const TableBody: SFC<TableBodyProps>;

export default TableBody;
