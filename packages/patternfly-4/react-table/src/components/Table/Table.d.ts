import { FunctionComponent, HTMLProps, ReactNode } from 'react';
import { OneOf, Omit } from '../../../../react-core/src/typeUtils';
import { SortByDirection } from './SortColumn';
import { DropdownPosition, DropdownDirection } from '@patternfly/react-core';

export const TableGridBreakpoint: {
  grid: 'grid',
  gridMd: 'grid-md',
  gridLg: 'grid-lg'
};

export const TableVariant: {
  'compact': 'compact'
}

export interface ISortBy {
  index?: Number;
  direction?: OneOf<typeof SortByDirection, keyof typeof SortByDirection>;
}

export interface IAction {
  title: String;
  onClick: Function;
}

export interface ISeparator {
  isSeparator: Boolean
}

export interface ICell {
  title: String;
  transfroms: Array<Function>;
  cellTransforms: Array<Function>;
  formatters: Array<Function>;
  cellFormatters: Array<Function>;
  props: unknown;
}

export interface IRowCell {
  title: ReactNode;
  props: unknown;
}

export interface IRow {
  cells: Array<ReactNode | IRowCell>;
  isOpen: Boolean;
  parent: Number;
  props: unknown;
}

export interface TableProps extends Omit<Omit<HTMLProps<HTMLTableElement>, 'onSelect'>, 'rows'> {
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
  rowLabeledBy?: String;
  expandId?: String;
  contentId?: String;
  dropdownPosition?: OneOf<typeof DropdownPosition, keyof typeof DropdownPosition>;
  dropdownDirection?: OneOf<typeof DropdownDirection, keyof typeof DropdownDirection>;
  rows: Array<IRow | Array<String>>;
  cells: Array<ICell | String>;
}

declare const Table: FunctionComponent<TableProps>;

export default Table;
