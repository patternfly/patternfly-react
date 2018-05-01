import { SFC, HTMLAttributes } from 'react';

export interface TableCheckboxProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
}

declare const TableCheckbox: SFC<TableCheckboxProps>;

export default TableCheckbox;
