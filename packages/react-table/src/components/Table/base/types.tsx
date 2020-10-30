/**
 * types.tsx
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */

import * as React from 'react';
import { TooltipProps } from '@patternfly/react-core/dist/js/components/Tooltip/Tooltip';
import { PopoverProps } from '@patternfly/react-core/dist/js/components/Popover/Popover';
import {
  DropdownDirection,
  DropdownPosition
} from '@patternfly/react-core/dist/js/components/Dropdown/dropdownConstants';
import { DropdownItemProps } from '@patternfly/react-core/dist/js/components/Dropdown/DropdownItem';
import { SortByDirection } from '../enums';
// Cell Type
export interface CellType {
  property?: number | string;
  transforms?: transformsType;
  formatters?: formattersType;
  props?: object;
}

// Columns Types
export type ColumnsType = ColumnType[] | any[];

export interface ColumnType {
  property?: string;
  cell?: CellType;
  props?: object;
  header?: HeaderType;
}
export interface HeaderType {
  label?: string;
  transforms?: transformsType;
  formatters?: formattersType;
  props?: object;
  property?: string;
  info?: InfoType;
}
export interface InfoType {
  tooltip?: React.ReactNode;
  tooltipProps?: Omit<TooltipProps, 'content'>;
  popover?: React.ReactNode;
  popoverProps?: Omit<PopoverProps, 'bodyContent'>;
  ariaLabel?: string;
  className?: string;
}

// Rows Types
export type RowsType = RowType[] | [][];
export type RowKeyType = Function | string;
export interface RowType {
  header?: HeaderType;
  cell?: CellType;
  [key: string]: any;
}

// Table Defaults
export const TableDefaults = {
  renderers: {
    table: 'table',
    header: {
      wrapper: 'thead',
      row: 'tr',
      cell: 'th'
    },
    body: {
      wrapper: 'tbody',
      row: 'tr',
      cell: 'td'
    }
  }
};

// Formatters Types
export type formatterValueType = object | string | React.ElementType;
export interface ExtraParamsType {
  rowData?: RowType;
  column?: ColumnType;
  columnIndex?: number;
  property?: string;
  rowIndex?: number;
  rowKey?: RowKeyType;
}
export type formatterType = (value: string | object, extra: ExtraParamsType) => formatterValueType;
export type formattersType = formatterType[];

// Transforms Types
export type transformType = (value: string | object, extra: ExtraParamsType) => object;
export type transformsType = transformType[];

// Renderers Types
export type createElementType = string | React.ComponentClass<any, any> | React.FunctionComponent<any>;
export type rendererType =
  | string
  | Function
  | React.ComponentClass<any, any>
  | React.FunctionComponent<any>
  | React.Component<any, {}, any>;
export interface RendererType {
  wrapper?: rendererType;
  row?: rendererType;
  cell?: rendererType;
}
export interface RenderersTypes {
  columns: ColumnsType;
  renderers?: {
    table?: string;
    header?: RendererType;
    body?: RendererType;
  };
  components?: {
    table?: string;
    header?: {
      wrapper?: rendererType;
      row?: rendererType;
      cell?: rendererType;
    };
    body?: {
      wrapper?: rendererType;
      row?: rendererType;
      cell?: rendererType;
    };
  };
}

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
