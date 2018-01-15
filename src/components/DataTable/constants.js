import React from 'react';
import PropTypes from 'prop-types';
import { Table } from '../Table';

// Reactabular sorting order allows you to specifiy sort asc/desc only and removes
// the unsorted state. This is consistent with current PF Data Table but should
// be better spelled out in our design docs.
// https://github.com/patternfly/patternfly-design/issues/516
// https://reactabular.js.org/#/data/sorting?a=customizing-sorting-order
export const defaultSortingOrder = {
  FIRST: 'asc',
  asc: 'desc',
  desc: 'asc'
};

export const actionHeaderCellFormatter = (value, { column }) => {
  return (
    <Table.Heading aria-label={column.header.label} {...column.header.props}>
      {column.header.label}
    </Table.Heading>
  );
};

export const tableCellFormatter = value => {
  return <Table.Cell>{value}</Table.Cell>;
};

export const sortableHeaderCellFormatter = ({
  cellProps,
  column,
  sortingColumns,
  onSort
}) => {
  const sortDirection =
    sortingColumns[column.property] &&
    sortingColumns[column.property].direction;
  return (
    <Table.Heading
      onClick={e => {
        onSort && onSort(e, column, sortDirection);
      }}
      sort
      sortDirection={sortDirection}
      aria-label={column.header.label}
      {...cellProps}
    >
      {column.header.label}
    </Table.Heading>
  );
};
sortableHeaderCellFormatter.propTypes = {
  cellProps: PropTypes.object,
  column: PropTypes.object,
  sortingColumns: PropTypes.object,
  onSort: PropTypes.func
};

export const selectionCellFormatter = (
  value,
  { rowData, rowIndex },
  onSelectRow
) => {
  const id = `select${rowIndex}`;
  const label = `Select row ${rowIndex}`;
  return (
    <Table.SelectionCell>
      <Table.Checkbox
        id={id}
        label={label}
        checked={rowData.selected}
        onChange={e => {
          onSelectRow && onSelectRow(e, rowData);
        }}
      />
    </Table.SelectionCell>
  );
};

export const selectionHeaderCellFormatter = ({
  cellProps,
  column,
  rows,
  onSelectAllRows
}) => {
  const unselectedRows = rows.filter(r => !r.selected).length > 0;
  return (
    <Table.SelectionHeading aria-label={column.header.label} {...cellProps}>
      <Table.Checkbox
        id="selectAll"
        label="Select all rows"
        checked={!unselectedRows}
        onChange={onSelectAllRows}
      />
    </Table.SelectionHeading>
  );
};
selectionHeaderCellFormatter.propTypes = {
  cellProps: PropTypes.object,
  column: PropTypes.object,
  rows: PropTypes.array,
  onSelectAllRows: PropTypes.func
};

// wraps the default header definitions and adds support for `customFormatters`
export const customHeaderFormattersDefinition = ({
  cellProps,
  columns,
  sortingColumns,
  rows,
  onSelectAllRows,
  onSort
}) => {
  const { index } = cellProps;
  const column = columns[index];
  const customFormatters = column.header.customFormatters;

  if (customFormatters) {
    return customFormatters.reduce(
      (params, formatter) => ({
        value: formatter(params)
      }),
      { cellProps, column, sortingColumns, rows, onSelectAllRows, onSort }
    ).value;
  } else {
    return cellProps.children;
  }
};
