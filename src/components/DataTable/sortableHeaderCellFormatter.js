import React from 'react';
import PropTypes from 'prop-types';
import { Table } from '../Table';

const sortableHeaderCellFormatter = ({
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
  /** column header cell props */
  cellProps: PropTypes.object,
  /** column definition */
  column: PropTypes.object,
  /** sorting object definition */
  sortingColumns: PropTypes.object,
  /** onSort callback */
  onSort: PropTypes.func
};

export default sortableHeaderCellFormatter;
