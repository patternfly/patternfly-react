import React from 'react';
import styles from '@patternfly/patternfly-next/components/Table/table.css';
import { Provider } from 'reactabular-table';
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
  grid: 'grid',
  gridMd: 'grid-md',
  gridLg: 'grid-lg'
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
  /** Table variant, defaults to large. */
  variant: PropTypes.oneOf(Object.values(TableVariant)),
  /** Size at which table is broken into tiles. */
  gridBreakPoint: PropTypes.oneOf(Object.values(TableGridBreakpoint)),
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
  /** Actual rows to display in table. Either array of strings or row ojects. */
  rows: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        cells: PropTypes.arrayOf(PropTypes.node),
        isOpen: PropTypes.bool,
        parent: PropTypes.number,
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
        transforms: PropTypes.arrayOf(PropTypes.func),
        cellTransforms: PropTypes.arrayOf(PropTypes.func),
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
  className: '',
  variant: null,
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
      onCollapse,
      rowLabeledBy,
      dropdownPosition,
      dropdownDirection,
      contentId,
      expandId,
      variant,
      rows,
      cells,
      ...props
    } = this.props;

    const headerData = calculateColumns(cells, {
      sortBy,
      onSort,
      onSelect,
      actions,
      onCollapse,
      rowLabeledBy,
      expandId,
      contentId,
      dropdownPosition,
      dropdownDirection
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
              wrapper: BodyWrapper(rows),
              row: RowWrapper,
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
            getModifier(styles, gridBreakPoint, styles.modifiers.grid),
            getModifier(styles, variant),
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
