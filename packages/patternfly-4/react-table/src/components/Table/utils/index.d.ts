import { ReactNode } from 'react';
import { ISortBy } from '../Table';

export interface ISortable {
  className: string;
  children: ReactNode
}

export interface IExtra {
  column: {
    extraParams: {
      sortBy: ISortBy;
      onSort: Function;
    }
  };
  columnIndex: number;
}

export const sortable: (label: string, extra: IExtra) => ISortable;
export const headerCol: () => { component: string };
export const cellWidth: (width: string) => () => { className: string };
