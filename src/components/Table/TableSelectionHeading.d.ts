import { HTMLAttributes, SFC } from 'react';

export interface TableSelectionHeadingProps
  extends HTMLAttributes<HTMLTableHeaderCellElement> {}

declare const TableSelectionHeading: SFC<TableSelectionHeadingProps>;

export default TableSelectionHeading;
