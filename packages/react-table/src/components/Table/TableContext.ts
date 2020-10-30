import * as React from 'react';
import {
  DropdownDirection,
  DropdownPosition
} from '@patternfly/react-core/dist/js/components/Dropdown/dropdownConstants';
import { DropdownItemProps } from '@patternfly/react-core/dist/js/components/Dropdown/DropdownItem';
import { formatterValueType, ColumnType, RowType, RowKeyType, ColumnsType } from './base';

export type RowEditType = 'save' | 'cancel' | 'edit';

export interface RowErrors {
  [name: string]: string[];
}

export type OnSort = (
  event: React.MouseEvent,
  columnIndex: number,
  sortByDirection: SortByDirection,
  extraData: IExtraColumnData
) => void;
export type OnCollapse = (
  event: React.MouseEvent,
  rowIndex: number,
  isOpen: boolean,
  rowData: IRowData,
  extraData: IExtraData
) => void;
export type OnExpand = (
  event: React.MouseEvent,
  rowIndex: number,
  colIndex: number,
  isOpen: boolean,
  rowData: IRowData,
  extraData: IExtraData
) => void;
export type OnSelect = (
  event: React.FormEvent<HTMLInputElement>,
  isSelected: boolean,
  rowIndex: number,
  rowData: IRowData,
  extraData: IExtraData
) => void;
export type OnRowEdit = (
  event: React.MouseEvent<HTMLButtonElement>,
  type: RowEditType,
  isEditable?: boolean,
  rowIndex?: number,
  validationErrors?: RowErrors
) => void;

export enum SortByDirection {
  asc = 'asc',
  desc = 'desc'
}

export interface IRowData extends IRow {
  disableActions?: boolean;
}

export interface IColumn {
  extraParams: {
    sortBy?: ISortBy;
    onSort?: OnSort;
    onCollapse?: OnCollapse;
    onExpand?: OnExpand;
    onSelect?: OnSelect;
    selectVariant?: 'checkbox' | 'radio';
    onRowEdit?: OnRowEdit;
    rowLabeledBy?: string;
    expandId?: string;
    contentId?: string;
    dropdownPosition?: DropdownPosition;
    dropdownDirection?: DropdownDirection;
    allRowsSelected?: boolean;
  };
}

export interface IExtraRowData {
  rowIndex?: number;
  rowKey?: RowKeyType;
}

export interface IExtraColumnData {
  columnIndex?: number;
  column?: IColumn;
  property?: string;
}

export interface IExtraData extends IExtraColumnData, IExtraRowData {}

export interface ISortBy {
  index?: number;
  direction?: 'asc' | 'desc';
}

export interface IAction extends Omit<DropdownItemProps, 'title' | 'onClick'> {
  isSeparator?: boolean;
  itemKey?: string;
  title?: string | React.ReactNode;
  onClick?: (event: React.MouseEvent, rowIndex: number, rowData: IRowData, extraData: IExtraData) => void;
}

export interface ISeparator extends IAction {
  isSeparator: boolean;
}

export type IActions = (IAction | ISeparator)[];
export type IActionsResolver = (rowData: IRowData, extraData: IExtraData) => (IAction | ISeparator)[];
export type IAreActionsDisabled = (rowData: IRowData, extraData: IExtraData) => boolean;

// to be removed in future, this interface is no longer accurate
export interface IDecorator extends React.HTMLProps<HTMLElement> {
  isVisible: boolean;
  children?: React.ReactNode;
}

export interface decoratorReturnType {
  className?: string;
  'aria-sort'?: string;
  children?: React.ReactNode;
  textCenter?: boolean;
  component?: string;
  isVisible?: boolean;
  title?: string | React.ReactNode;
  props?: any;
  scope?: string;
  parentId?: number;
  colSpan?: number;
  id?: React.ReactText;
}

export interface ICell {
  title?: string | React.ReactNode;
  transforms?: ITransform[];
  cellTransforms?: ITransform[];
  columnTransforms?: ITransform[];
  formatters?: IFormatter[];
  cellFormatters?: IFormatter[];
  props?: any;
  data?: any;
  header?: any;
  cell?: any;
  dataLabel?: string;
}

export interface IValidatorDef {
  validator: (value: string) => boolean;
  errorText: string;
  name: string;
}

export interface IExtra extends IExtraData {
  rowData?: IRowData;
}

export type IFormatterValueType = formatterValueType & {
  title?: string | React.ReactNode;
  props?: any;
};

export type ITransform = (label?: IFormatterValueType, extra?: IExtra) => decoratorReturnType;

export type IFormatter = (data?: IFormatterValueType, extra?: IExtra) => formatterValueType & decoratorReturnType;

export type RowCellContent = (value?: string, rowIndex?: number, cellIndex?: number, props?: any) => void;

export interface IRowCell {
  title?: string | React.ReactNode | RowCellContent;
  props?: any;
  formatters?: IFormatter[];
}

export interface IRow extends RowType {
  cells?: (React.ReactNode | IRowCell)[];
  isOpen?: boolean;
  isEditable?: boolean;
  isValid?: boolean;
  /** An array of validation functions to run against every cell for a given row */
  rowEditValidationRules?: IValidatorDef[];
  /** Aria label for edit button in inline edit */
  rowEditBtnAriaLabel?: (idx: number) => string;
  /** Aria label for save button in inline edit */
  rowSaveBtnAriaLabel?: (idx: number) => string;
  /** Aria label for cancel button in inline edit */
  rowCancelBtnAriaLabel?: (idx: number) => string;
  parent?: number;
  compoundParent?: number;
  props?: any;
  fullWidth?: boolean;
  noPadding?: boolean;
  heightAuto?: boolean;
  showSelect?: boolean;
  isExpanded?: boolean;
  isFirstVisible?: boolean;
  isLastVisible?: boolean;
  /** Whether the row checkbox/radio button is selected */
  selected?: boolean;
  /** deprecated - Use disableSelection instead - Whether the row checkbox is disabled */
  disableCheckbox?: boolean;
  /** Whether the row checkbox/radio button is disabled */
  disableSelection?: boolean;
}

// Todo: Update type with next breaking change release
// export type IHeaderRow = ColumnType;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IHeaderRow extends ColumnType {}

export enum TableGridBreakpoint {
  none = '',
  grid = 'grid',
  gridMd = 'grid-md',
  gridLg = 'grid-lg',
  gridXl = 'grid-xl',
  grid2xl = 'grid-2xl'
}

export enum TableVariant {
  compact = 'compact'
}

export enum RowSelectVariant {
  radio = 'radio',
  checkbox = 'checkbox'
}

export const TableContext = React.createContext({
  headerData: null as ColumnsType,
  headerRows: null as IHeaderRow[],
  rows: [] as (IRow | string[])[]
});
