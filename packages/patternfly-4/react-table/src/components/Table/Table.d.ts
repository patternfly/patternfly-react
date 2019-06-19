import { FunctionComponent, HTMLProps, ReactNode, MouseEvent } from 'react';
import { SortByDirection } from './SortColumn';
import { DropdownPosition, DropdownDirection, OneOf, Omit } from '@patternfly/react-core';

interface OnSort {
  (event: MouseEvent, columnIndex: number, extraData: IExtraColumnData): void
}

export const TableGridBreakpoint: {
  none: null,
  grid: 'grid',
  gridMd: 'grid-md',
  gridLg: 'grid-lg',
  gridXl: 'grid-xl',
  grid2xl: 'grid-2xl'
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
  index?: number;
  direction?: OneOf<typeof SortByDirection, keyof typeof SortByDirection>;
}

export interface IAction {
  title: string;
  onClick: (event: MouseEvent, rowIndex: number, rowData: IRowData, extraData: IExtraData) => void;
}

export interface ISeparator {
  isSeparator: Boolean
}

export interface IDecorator extends HTMLProps<HTMLElement> {
  isVisible: boolean;
  children?: React.ReactNode;
}

export interface ICell {
  title: string;
  transforms?: ((value: any) => IDecorator)[];
  cellTransforms?: ((value: any) => IDecorator)[];
  columnTransforms?: ((value: any) => IDecorator)[];
  formatters?: ((value: any) => IDecorator)[];
  cellFormatters?: ((value: any) => IDecorator)[];
  props: any;
}

export interface IRowCell {
  title: ReactNode;
  props: any;
}

export interface IRow {
  cells: Array<ReactNode | IRowCell>;
  isOpen?: Boolean;
  parent?: number;
  props?: any;
  fullWidth?: Boolean;
  noPadding?: Boolean;
}

export interface TableProps extends Omit<Omit<HTMLProps<HTMLTableElement>, 'onSelect'>, 'rows'> {
  children?: ReactNode;
  className?: string;
  variant?: OneOf<typeof TableVariant, keyof typeof TableVariant>;
  borders?: boolean;
  gridBreakPoint?: OneOf<typeof TableGridBreakpoint, keyof typeof TableGridBreakpoint>;
  sortBy?: ISortBy;
  onCollapse?: (event: MouseEvent, rowIndex: number, isOpen: boolean, rowData: IRowData, extraData: IExtraData) => void;
  onExpand?: (event: MouseEvent, rowIndex: number, colIndex: number, isOpen: boolean, rowData: IRowData, extraData: IExtraData) => void;
  onSelect?: (event: MouseEvent, isSelected: boolean, rowIndex: number, rowData: IRowData, extraData: IExtraData) => void;
  onSort?: OnSort;
  actions?: Array<IAction | ISeparator>;
  actionResolver?: (rowData: IRowData, extraData: IExtraData) => Array<IAction | ISeparator>;
  areActionsDisabled?: (rowData: IRowData, extraData: IExtraData) => boolean;
  header?: ReactNode;
  caption?: ReactNode;
  rowLabeledBy?: string;
  expandId?: string;
  contentId?: string;
  dropdownPosition?: OneOf<typeof DropdownPosition, keyof typeof DropdownPosition>;
  dropdownDirection?: OneOf<typeof DropdownDirection, keyof typeof DropdownDirection>;
  rows: Array<IRow | Array<string>>;
  cells: Array<ICell | string>;
  bodyWrapper?: Function;
  rowWrapper?: Function;
}

declare const Table: FunctionComponent<TableProps>;

export default Table;
