import { SFC, HTMLProps, ReactType, ReactNode } from 'react';
import { OneOf, Omit } from '../../../../react-core/src/typeUtils';

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

declare const Table: SFC<SortColumn>;

export default Table;
