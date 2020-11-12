import * as React from 'react';
import { OUIAProps, getDefaultOUIAId } from '@patternfly/react-core';
import {
  DropdownDirection,
  DropdownPosition
} from '@patternfly/react-core/dist/js/components/Dropdown/dropdownConstants';
import inlineStyles from '@patternfly/react-styles/css/components/InlineEdit/inline-edit';
import { css } from '@patternfly/react-styles';
import { Provider } from './base';
import { BodyCell } from './BodyCell';
import { HeaderCell } from './HeaderCell';
import { RowWrapper, RowWrapperProps } from './RowWrapper';
import { BodyWrapper } from './BodyWrapper';
import { calculateColumns } from './utils/headerUtils';
import { RowSelectVariant } from './SelectColumn';
import { TableContext } from './TableContext';
import {
  ISortBy,
  OnCollapse,
  OnExpand,
  OnSelect,
  OnRowEdit,
  OnSort,
  IActions,
  IActionsResolver,
  IAreActionsDisabled,
  IRow,
  ICell,
  TableVariant,
  TableGridBreakpoint,
  IHeaderRow
} from './TableTypes';

export interface TableProps extends OUIAProps {
  /** Adds an accessible name for the Table */
  'aria-label'?: string;
  /** Content rendered inside the Table */
  children?: React.ReactNode;
  /** Additional classes added to the Table  */
  className?: string;
  /** Style variant for the Table  */
  variant?: 'compact';
  /**
   * Render borders
   * Borders can only currently be disabled if the variant is set to 'compact'
   * https://github.com/patternfly/patternfly/issues/3650
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
          variant={variant}
          borders={borders}
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
