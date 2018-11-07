import { SFC, HTMLProps, ReactType, ReactNode } from 'react';
import { OneOf, Omit } from '../../../react-core/src/typeUtils';
import { SortByDirection } from './SortColumn';

export interface ISortBy {
  index?: Number;
  direction?: OneOf<typeof SortByDirection, keyof typeof SortByDirection>;
}

export const TableGridBreakpoint: {
  grid: 'grid',
  gridMd: 'grid-md',
  gridLg: 'grid-lg'
};

export const TableVariant: {
  'compact': 'compact'
}

export interface IAction {
  title: String;
  onClick: Function;
}

export interface ISeparator {
  isSeparator: Boolean
}

export interface TableProps extends Omit<HTMLProps<HTMLTableElement>, 'onSelect'> {
  children?: ReactNode;
  className?: string;
  variant?: OneOf<typeof TableVariant, keyof typeof TableVariant>;
  gridBreakPoint?: OneOf<typeof TableGridBreakpoint, keyof typeof TableGridBreakpoint>;
  sortBy?: ISortBy;
  onCollapse?: Function;
  onSelect?: Function;
  onSort?: Function;
  actions?: Array<IAction | ISeparator>;
  header?: ReactNode;
  caption?: ReactNode;
}

declare const Table: SFC<TableProps>;

export default Table;
