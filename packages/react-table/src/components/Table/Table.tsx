import * as React from 'react';
import { OUIAProps, getDefaultOUIAId } from '@patternfly/react-core';
import {
  DropdownDirection,
  DropdownPosition
} from '@patternfly/react-core/dist/js/components/Dropdown/dropdownConstants';
import { DropdownItemProps } from '@patternfly/react-core/dist/js/components/Dropdown/DropdownItem';
import inlineStyles from '@patternfly/react-styles/css/components/InlineEdit/inline-edit';
import { css } from '@patternfly/react-styles';
import { Provider } from './base';
import { BodyCell } from './BodyCell';
import { HeaderCell } from './HeaderCell';
import { RowWrapper, RowWrapperProps } from './RowWrapper';
import { BodyWrapper } from './BodyWrapper';
import { calculateColumns } from './utils/headerUtils';
import { formatterValueType, ColumnType, RowType, RowKeyType, ColumnsType, HeaderType } from './base';
import { RowSelectVariant } from './SelectColumn';
import { SortByDirection } from './SortColumn';

export enum TableGridBreakpoint {
  none = '',
  grid = 'grid',
  gridMd = 'grid-md',
  gridLg = 'grid-lg',
  gridXl = 'grid-xl',
  grid2xl = 'grid-2xl'
}

export enum TableVariant {
  compact = 'compact',
  compactBorderless = 'compactBorderless',
  compactExpandable = 'compactExpandable'
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

export interface IExtra extends IExtraData {
  rowData?: IRowData;
}

export type IFormatterValueType = formatterValueType & {
  title?: string | React.ReactNode;
  props?: any;
};

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
  props?: any;
  data?: any;
  cell?: any;
  dataLabel?: string;
}

export type RowCellContent = (value?: string, rowIndex?: number, cellIndex?: number, props?: any) => void;

export interface IRowCell {
  title?: string | React.ReactNode | RowCellContent;
  props?: any;
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

export interface TableProps extends OUIAProps {
  /** Adds an accessible name for the Table */
  'aria-label'?: string;
  /** Content rendered inside the Table */
  children?: React.ReactNode;
  /** Additional classes added to the Table  */
  className?: string;
  /** Style variant for the Table  */
  variant?: 'compact' | 'compactBorderless' | 'compactExpandable';
  /**
   * Render borders
   *
   * @deprecated Borders can only be removed for the compact table, set variant="compactBorderless" instead
   */
  borders?: boolean;
  /** Specifies the grid breakpoints  */
  gridBreakPoint?: '' | 'grid' | 'grid-md' | 'grid-lg' | 'grid-xl' | 'grid-2xl';
  /** Specifies the initial sorting pattern for the table - asc/desc and the index of the column to sort by */
  sortBy?: ISortBy;
  /** Function triggered when an expandable content is collapsed. When this is used, one expandable toggle button will be positioned in the first cell of a non-expandable row, preceding an expandable row */
  onCollapse?: OnCollapse;
  /** Function triggered when a compound expandable item is clicked */
  onExpand?: OnExpand;
  /** Function triggered when a row's checkbox is selected. When this is used, one checkbox/radio button will be positioned in the first or second cell of a non-expandable row */
  onSelect?: OnSelect;
  /** Enables or Disables the ability to select all - this is mutually exclusive with radio button select variant */
  canSelectAll?: boolean;
  /** Specifies the type of the select element variant - can be one of checkbox or radio button */
  selectVariant?: 'checkbox' | 'radio';
  /** @beta Function triggered when a row's inline edit is activated. Adds a column for inline edit when present. */
  onRowEdit?: OnRowEdit;
  /** Function triggered when sort icon is clicked */
  onSort?: OnSort;
  /** Actions to add to the Table */
  actions?: IActions;
  /** Resolver for the given action  */
  actionResolver?: IActionsResolver;
  /** Specifies if the Kebab for actions is disabled */
  areActionsDisabled?: IAreActionsDisabled;
  /** Component to place in the header */
  header?: React.ReactNode;
  /** Component used for caption*/
  caption?: React.ReactNode;
  /** label for row */
  rowLabeledBy?: string;
  /** ID for expand */
  expandId?: string;
  /** ID for content */
  contentId?: string;
  /** The desired position to show the dropdown when clicking on the actions Kebab. Can only be used together with `actions` property */
  dropdownPosition?: 'right' | 'left';
  /** The desired direction to show the dropdown when clicking on the actions Kebab. Can only be used together with `actions` property */
  dropdownDirection?: 'up' | 'down';
  /** Row data */
  rows: (IRow | string[])[];
  /** Cell/column data */
  cells: (ICell | string)[];
  /** Wrapper for the body  */
  bodyWrapper?: Function;
  /** Wrapper for the row */
  rowWrapper?: (props: RowWrapperProps) => JSX.Element;
  /** A valid WAI-ARIA role to be applied to the table element */
  role?: string;
  /** If set to true, the table header sticks to the top of its container */
  isStickyHeader?: boolean;
}

export const TableContext = React.createContext({
  headerData: null as ColumnsType,
  headerRows: null as IHeaderRow[],
  rows: [] as (IRow | string[])[]
});

export class Table extends React.Component<TableProps, {}> {
  static displayName = 'Table';
  static hasWarnBeta = false;
  static defaultProps: Partial<TableProps> = {
    children: null as React.ReactNode,
    className: '',
    variant: null as TableVariant,
    borders: true,
    rowLabeledBy: 'simple-node',
    expandId: 'expandable-toggle',
    contentId: 'expanded-content',
    dropdownPosition: DropdownPosition.right,
    dropdownDirection: DropdownDirection.down,
    header: undefined as React.ReactNode,
    caption: undefined as React.ReactNode,
    'aria-label': undefined as string,
    gridBreakPoint: TableGridBreakpoint.gridMd,
    role: 'grid',
    canSelectAll: true,
    selectVariant: 'checkbox',
    ouiaSafe: true,
    isStickyHeader: false
  };
  state = {
    ouiaStateId: getDefaultOUIAId(Table.displayName)
  };

  isSelected = (row: IRow) => row.selected === true;

  areAllRowsSelected = (rows: IRow[]) => {
    if (rows === undefined || rows.length === 0) {
      return false;
    }
    return rows.every(row => this.isSelected(row) || (row.hasOwnProperty('parent') && !row.showSelect));
  };

  componentDidMount() {
    if (this.props.onRowEdit && process.env.NODE_ENV !== 'production' && !Table.hasWarnBeta) {
      // eslint-disable-next-line no-console
      console.warn(
        'You are using a beta component feature (onRowEdit). These api parts are subject to change in the future.'
      );
      Table.hasWarnBeta = true;
    }
  }

  render() {
    const {
      'aria-label': ariaLabel,
      caption,
      header,
      className,
      onSort,
      onSelect,
      canSelectAll,
      selectVariant,
      sortBy,
      children,
      actions,
      actionResolver,
      areActionsDisabled,
      onCollapse,
      onExpand,
      onRowEdit,
      rowLabeledBy,
      dropdownPosition,
      dropdownDirection,
      contentId,
      expandId,
      variant,
      rows,
      cells,
      bodyWrapper,
      rowWrapper,
      role,
      borders,
      ...props
    } = this.props;

    if (!ariaLabel && !caption && !header && role !== 'presentation') {
      // eslint-disable-next-line no-console
      console.error('Table: Specify at least one of: header, caption, aria-label');
    }

    const headerData = calculateColumns(cells, {
      sortBy,
      onSort,
      onSelect,
      canSelectAll: selectVariant === RowSelectVariant.radio ? false : canSelectAll,
      selectVariant,
      allRowsSelected: onSelect ? this.areAllRowsSelected(rows as IRow[]) : false,
      actions,
      actionResolver,
      areActionsDisabled,
      onCollapse,
      onRowEdit,
      onExpand,
      rowLabeledBy,
      expandId,
      contentId,
      dropdownPosition,
      dropdownDirection,
      firstUserColumnIndex: [onCollapse, onSelect].filter(callback => callback).length
    });

    const getVariant = () => {
      if (variant === 'compact') {
        if (borders === false) {
          return 'compactBorderless';
        } else if (onCollapse || onExpand) {
          return 'compactExpandable';
        }
      }
      return variant;
    };

    const table = (
      <TableContext.Provider
        value={{
          headerData,
          headerRows: null as IHeaderRow[],
          rows
        }}
      >
        {header}
        <Provider
          {...props}
          aria-label={ariaLabel}
          renderers={{
            body: {
              wrapper: bodyWrapper || BodyWrapper,
              row: rowWrapper || RowWrapper,
              cell: BodyCell
            },
            header: {
              cell: HeaderCell
            }
          }}
          columns={headerData}
          role={role}
          variant={getVariant()}
          className={className}
        >
          {caption && <caption>{caption}</caption>}
          {children}
        </Provider>
      </TableContext.Provider>
    );

    if (onRowEdit) {
      return <form className={css(inlineStyles.inlineEdit)}>{table}</form>;
    }

    return table;
  }
}
