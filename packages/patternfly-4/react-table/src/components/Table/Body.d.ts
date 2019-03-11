import { FunctionComponent, HTMLProps } from 'react';

export interface TableBodyProps extends HTMLProps<HTMLTableRowElement> {
  rowKey?: string;
  onRowClick?: Function;
}

declare const TableBody: FunctionComponent<TableBodyProps>;

export default TableBody;
