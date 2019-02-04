import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export const SortByDirection: {
  asc: 'asc',
  desc: 'desc'
};

export interface SortColumn extends HTMLProps<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  isSortedBy?: Boolean;
  onSort?: Function;
  sortDirection?: string;
}

declare const Table: FunctionComponent<SortColumn>;

export default Table;
