import { SFC, HTMLProps, ReactType, ReactNode } from 'react';
import { OneOf, Omit } from '../../../react-core/src/typeUtils';

export interface TableBodyProps extends Omit<HTMLProps<HTMLTableRowElement>, 'onSelect'> {
  children?: ReactNode;
  className?: string;
  rowKey?: string;
}

declare const TableBody: SFC<TableBodyProps>;

export default TableBody;
