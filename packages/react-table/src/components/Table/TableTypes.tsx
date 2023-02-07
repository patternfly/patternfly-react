import { DropdownItemProps } from '@patternfly/react-core/dist/esm/components/Dropdown/DropdownItem';
import { formatterValueType, ColumnType, RowType, RowKeyType, HeaderType } from './base';
import { SortByDirection } from './SortColumn';
import {
  DropdownDirection,
  DropdownPosition
} from '@patternfly/react-core/dist/esm/components/Dropdown/dropdownConstants';
import * as React from 'react';
import { CustomActionsToggleProps } from './ActionsColumn';
import { ButtonProps } from '@patternfly/react-core';

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
export type OnFavorite = (
  event: React.MouseEvent,
  isFavorited: boolean,
  rowIndex: number,
  rowData: IRowData,
  extraData: IExtraData
) => void;

export type OnTreeRowCollapse = (event: any, rowIndex: number, title: React.ReactNode, rowData: IRowData) => void;
export type OnToggleRowDetails = (event: any, rowIndex: number, title: React.ReactNode, rowData: IRowData) => void;
export type OnCheckChange = (
  event: React.FormEvent<HTMLInputElement>,
  isChecked: boolean,
  rowIndex: number,
  title: React.ReactNode,
  rowData: IRowData
) => void;

// Todo: Update type with next breaking change release
// export type IHeaderRow = ColumnType;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IHeaderRow extends ColumnType {}

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
    collapseAllAriaLabel?: string;
    onRowEdit?: OnRowEdit;
    rowLabeledBy?: string;
    expandId?: string;
    contentId?: string;
    dropdownPosition?: DropdownPosition;
    dropdownDirection?: DropdownDirection;
    menuAppendTo?: HTMLElement | (() => HTMLElement) | 'inline' | 'parent';
    actionsToggle?: (props: CustomActionsToggleProps) => React.ReactNode;
    allRowsSelected?: boolean;
    allRowsExpanded?: boolean;
    isHeaderSelectDisabled?: boolean;
    onFavorite?: OnFavorite;
  };
}

export interface IExtraRowData {
  rowIndex?: number;
  rowKey?: RowKeyType;
  id?: string;
}

export interface IExtraColumnData {
  columnIndex?: number;
  column?: IColumn;
  property?: string;
}

export interface IExtraData extends IExtraColumnData, IExtraRowData {}

export interface IExtra extends IExtraData {
  rowData?: IRowData;
  className?: string;
  ariaLabel?: string;
}

export type IFormatterValueType = formatterValueType & {
  title?: string | React.ReactNode;
  props?: any;
};

export interface ISortBy {
  /** Index of the current sorted column */
  index?: number;
  /** Current sort direction */
  direction?: 'asc' | 'desc';
  /** Defaulting sorting direction. Defaults to "asc". */
  defaultDirection?: 'asc' | 'desc';
}

export interface IAction extends Omit<DropdownItemProps, 'title' | 'onClick'>, Pick<ButtonProps, 'variant'> {
  /** Flag indicating an item on actions menu is a separator, rather than an action */
  isSeparator?: boolean;
  /** Key of actions menu item */
  itemKey?: string;
  /** Content to display in the actions menu item */
  title?: string | React.ReactNode;
  /** Click handler for the actions menu item */
  onClick?: (event: React.MouseEvent, rowIndex: number, rowData: IRowData, extraData: IExtraData) => void;
  /** Flag indicating this action should be placed outside the actions menu, beside the toggle */
  isOutsideDropdown?: boolean;
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

export type ITransform = (label?: IFormatterValueType, extra?: IExtra) => decoratorReturnType;

export type IFormatter = (data?: IFormatterValueType, extra?: IExtra) => formatterValueType & decoratorReturnType;

export interface ICell {
  /* cell contents */
  title?: string | React.ReactNode;
  /** transformations applied to the header cell */
  transforms?: ITransform[];
  /** transformations applied to the cells within the column's body */
  cellTransforms?: ITransform[];
  /** transformations applied to the whole column */
  columnTransforms?: ITransform[];
  /** formatters applied to the header cell */
  formatters?: IFormatter[];
  /** formatters applied to the cells within the column's body */
  cellFormatters?: IFormatter[];
  /** Additional header props, it contains the info prop as well which can be used to add tooltip/popover */
  header?: HeaderType;
  /** Additional props passed into the rendered column header element */
  props?: any;
  data?: any;
  cell?: any;
  /** Text to display when data from this column is rendered in mobile view */
  dataLabel?: string;
}

export type RowCellContent<T = any> = (value?: string, rowIndex?: number, cellIndex?: number, props?: T) => void;

export interface IRowCell<T = any> {
  title?: string | React.ReactNode | RowCellContent<T>;
  props?: T;
  formatters?: IFormatter[];
}

export interface IValidatorDef {
  validator: (value: string) => boolean;
  errorText: string;
  name: string;
}

export interface IRow extends RowType {
  cells?: (React.ReactNode | IRowCell)[];
  isOpen?: boolean;
  isEditable?: boolean;
  isHoverable?: boolean;
  isRowSelected?: boolean;
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
  fullWidth?: boolean;
  noPadding?: boolean;
  heightAuto?: boolean;
  showSelect?: boolean;
  isExpanded?: boolean;
  isFirstVisible?: boolean;
  isLastVisible?: boolean;
  /** Whether the row checkbox/radio button is selected */
  selected?: boolean;
  /** @deprecated Use disableSelection instead - Whether the row checkbox is disabled */
  disableCheckbox?: boolean;
  /** Whether the row checkbox/radio button is disabled */
  disableSelection?: boolean;
  /** Whether the row is favorited */
  favorited?: boolean;
  /** Any additional props forwarded to the favorites cell */
  favoritesProps?: any;
  /** any additional row props */
  props?: any;
}
