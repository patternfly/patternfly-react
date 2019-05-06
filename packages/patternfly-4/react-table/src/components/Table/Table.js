import React from 'react';
import styles from '@patternfly/patternfly/components/Table/table.css';
import stylesGrid from '@patternfly/patternfly/components/Table/table-grid.css';
import { Provider } from './base';
import { DropdownPosition, DropdownDirection } from '@patternfly/react-core';
import { css, getModifier } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { SortByDirection } from './SortColumn';
import BodyCell from './BodyCell';
import HeaderCell from './HeaderCell';
import RowWrapper from './RowWrapper';
import BodyWrapper from './BodyWrapper';
import { calculateColumns } from './utils/headerUtils';

export const TableGridBreakpoint = {
  none: null,
  grid: 'grid',
  gridMd: 'grid-md',
  gridLg: 'grid-lg',
  gridXl: 'grid-xl'
};

export const TableVariant = {
  compact: 'compact'
};

const propTypes = {
  /** Table elements [Head, Body and Footer]. */
  children: PropTypes.node,
  /** Addional classes for Table. */
  className: PropTypes.string,
  /** Function called when user wants to collapse row. */
  onCollapse: PropTypes.func,
  /** Function called when user wants to compound expand row. */
  onExpand: PropTypes.func,
  /** Table variant, defaults to large. */
  variant: PropTypes.oneOf(Object.values(TableVariant)),
  /** Size at which table is broken into tiles. */
  gridBreakPoint: PropTypes.oneOf(Object.values(TableGridBreakpoint)),
  /** Indicates if border is visible on a compacat table.  Note that this can not be applied when using expandable */
  borders: PropTypes.bool,
  /** Settings for sorting, which index and direction is sorted by. */
  sortBy: PropTypes.shape({
    index: PropTypes.number,
    direction: PropTypes.oneOf(Object.values(SortByDirection))
  }),
  /** Function called when user wants to select row. */
  onSelect: PropTypes.func,
  /** Function called when user wants to sort table. */
  onSort: PropTypes.func,
  /** Additional cell displayed at the end of each row with dropdown of action items. */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      onClick: PropTypes.func,
      title: PropTypes.node
    })
  ),
  /** Function should resolve an array of actions for each row in the same format as actions. */
  actionResolver: PropTypes.func,
  /** Function should resolve if action kebap is disabled for each row */
  areActionsDisabled: PropTypes.func,
  /** Override to the default BodyWrapper renderer */
  bodyWrapper: PropTypes.func,
  /** Override to the default RowWrapper renderer */
  rowWrapper: PropTypes.func,
  /** Actual rows to display in table. Either array of strings or row objects. <br/>
   * If you want to use components in row cells you can pass them as title prop in cells definition. <br/>
   * <pre>Ex: rows:[
   *   {cells:[
   *     {title: &lt;div>Some component&lt;/div>}
   *     ...
   *   ]}
   * ]
   * </pre> */
  rows: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        cells: PropTypes.arrayOf(
          PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.shape({
              title: PropTypes.node
            })
          ])
        ),
        isOpen: PropTypes.bool,
        parent: PropTypes.number,
        fullWidth: PropTypes.bool,
        noPadding: PropTypes.bool,
        props: PropTypes.any
      }),
      PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.shape({
            title: PropTypes.node
          }),
          PropTypes.node
        ])
      )
    ])
  ).isRequired,
  /** Header cells to display in table. Either array of strings or array of string or cell object. */
  cells: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.shape({
        title: PropTypes.node,
        transforms: PropTypes.arrayOf(PropTypes.func), // Applies only to header cell
        cellTransforms: PropTypes.arrayOf(PropTypes.func), // Applies only to body cells
        columnTransforms: PropTypes.arrayOf(PropTypes.func), // Applies to both header and body cells
        formatters: PropTypes.arrayOf(PropTypes.func),
        cellFormatters: PropTypes.arrayOf(PropTypes.func)
      })
    ])
  ).isRequired,
  /** Aria labeled by this property collapse and select. */
  rowLabeledBy: PropTypes.string,
  /** Id prefix for expand buttons. */
  expandId: PropTypes.string,
  /** Id prefix for expanded content. */
  contentId: PropTypes.string,
  /** Position of dropdown from actions will be displayed. */
  dropdownPosition: PropTypes.oneOf(Object.values(DropdownPosition)),
  /** Direction of from actions will be displayed. */
  dropdownDirection: PropTypes.oneOf(Object.values(DropdownDirection)),
  /** Header to display above table for accessibility reasons. */
  header: props => {
    if (!props['aria-label'] && !props.caption && !props.header) {
      throw new Error('Specify at least one of: header, caption, aria-label');
    }
    return null;
  },
  /** Caption to display in table for accessibility reasons. */
  caption: props => {
    if (!props['aria-label'] && !props.caption && !props.header) {
      throw new Error('Specify at least one of: header, caption, aria-label');
    }
    return null;
  },
  /** aria-label in table for accessibility reasons. */
  'aria-label': props => {
    if (!props['aria-label'] && !props.caption && !props.header) {
      throw new Error('Specify at least one of: header, caption, aria-label');
    }
    return null;
  }
};

const defaultProps = {
  children: null,
  onCollapse: null,
  onExpand: null,
  className: '',
  variant: null,
  borders: true,
  rowLabeledBy: 'simple-node',
  expandId: 'expandable-toggle',
  contentId: 'expanded-content',
  dropdownPosition: DropdownPosition.right,
  dropdownDirection: DropdownDirection.down,
  gridBreakPoint: TableGridBreakpoint.gridMd
};

export const TableContext = React.createContext();

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerData: []
    };
    this.isSelected = this.isSelected.bind(this);
    this.areAllRowsSelected = this.areAllRowsSelected.bind(this);
  }

  isSelected(row) {
    return row.selected === true;
  }

  areAllRowsSelected(rows) {
    return rows.every(row => this.isSelected(row) || (row.hasOwnProperty('parent') && !row.showSelect));
  }

  render() {
    const {
      caption,
      header,
      className,
      gridBreakPoint,
      onSort,
      onSelect,
      sortBy,
      children,
      actions,
      actionResolver,
      areActionsDisabled,
      onCollapse,
      onExpand,
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
      borders,
      ...props
    } = this.props;

    const headerData = calculateColumns(cells, {
      sortBy,
      onSort,
      onSelect,
      allRowsSelected: onSelect ? this.areAllRowsSelected(rows) : false,
      actions,
      actionResolver,
      areActionsDisabled,
      onCollapse,
      onExpand,
      rowLabeledBy,
      expandId,
      contentId,
      dropdownPosition,
      dropdownDirection,
      firstUserColumnIndex: [onCollapse, onSelect].filter(callback => callback).length
    });

    return (
      <TableContext.Provider
        value={{
          headerData,
          rows
        }}
      >
        {header}
        <Provider
          {...props}
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
          role="grid"
          className={css(
            styles.table,
            gridBreakPoint && getModifier(stylesGrid, gridBreakPoint),
            getModifier(styles, variant),
            ((onCollapse && variant === TableVariant.compact) || onExpand) && styles.modifiers.expandable,
            variant === TableVariant.compact && borders === false ? styles.modifiers.noBorderRows : null,
            className
          )}
        >
          {caption && <caption>{caption}</caption>}
          {children}
        </Provider>
      </TableContext.Provider>
    );
  }
}

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
