import { ReactNode } from 'react';
import { IRow, IExtra } from '../Table';

export interface ISortable {
  className: string;
  children: ReactNode;
}

export const sortable: (label: string, extra: IExtra) => ISortable;
export const headerCol: () => { component: string };
export const cellWidth: (width: string | number) => () => { className: string };
export const expandable: (value: ReactNode, extra: IExtra) => ReactNode;
export const isRowExpanded: (row: IRow, rows: Array<IRow>) => boolean | undefined;
