import { SFC, ReactNode } from 'react';

export interface ListViewCheckboxProps {
  children?: ReactNode;
  className?: string;
}

declare const ListViewCheckbox: SFC<ListViewCheckboxProps>;

export default ListViewCheckbox;
