import { FunctionComponent, HTMLProps, ReactNode, MouseEvent } from 'react';
import { SortByDirection } from './SortColumn';
import { DropdownPosition, DropdownDirection, OneOf, Omit } from '@patternfly/react-core';

interface OnSort {
  (event: MouseEvent, columnIndex: number, extraData: IExtraColumnData): void
}

export const TableGridBreakpoint: {
  grid: 'grid',
  gridMd: 'grid-md',
  gridLg: 'grid-lg',
  gridXl: 'grid-xl'
};

export const TableVariant: {
  'compact': 'compact'
}

export interface IRowData {
}

export interface IColumn {
  extraParams: {
    sortBy?: ISortBy;
    onSort?: OnSort;
  }
}

export interface IExtraRowData {
  rowIndex: number;
  rowKey?: string;
}

export interface IExtraColumnData {
  columnIndex: number,
  column: IColumn,
  property: string,
}

export interface IExtraData extends IExtraColumnData, IExtraRowData {
}

export interface IExtra extends IExtraData {
  rowData: IRowData,
}

export interface ISortBy {
  index?: Number;
  direction?: OneOf<typeof SortByDirection, keyof typeof SortByDirection>;
}

export interface IAction {
  title: String;
  onClick: (event: MouseEvent, rowIndex: number, rowData: IRowData, extraData: IExtraData) => void;
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
  props: any;
}

export interface IRowCell {
  title: ReactNode;
  props: any;
}

export interface IRow {
  cells: Array<ReactNode | IRowCell>;
  isOpen: Boolean;
  parent: Number;
  props: any;
}

export interface TableProps extends Omit<Omit<HTMLProps<HTMLTableElement>, 'onSelect'>, 'rows'> {
  children?: ReactNode;
  className?: string;
  variant?: OneOf<typeof TableVariant, keyof typeof TableVariant>;
  gridBreakPoint?: OneOf<typeof TableGridBreakpoint, keyof typeof TableGridBreakpoint>;
  sortBy?: ISortBy;
  onCollapse?: (event: MouseEvent, rowIndex: number, isOpen: boolean, rowData: IRowData, extraData: IExtraData) => void;
  onSelect?: (event: MouseEvent, isSelected: boolean, rowIndex: number, rowData: IRowData, extraData: IExtraData) => void;
  onSort?: OnSort;
  actions?: Array<IAction | ISeparator>;
  actionResolver?: (rowData: IRowData, extraData: IExtraData) => Array<IAction | ISeparator>;
  areActionsDisabled?: (rowData: IRowData, extraData: IExtraData) => boolean;
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
