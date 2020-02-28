import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../../common/helpers';
import TableHeading from '../TableHeading';

const sortableHeaderCellFormatter = ({ cellProps, column, sortingColumns, onSort }) => {
  const sortDirection = sortingColumns[column.property] && sortingColumns[column.property].direction;
  return (
    <TableHeading
      onClick={e => {
        onSort(e, column, sortDirection);
      }}
      sort
      sortDirection={sortDirection}
      aria-label={column.header.label}
      {...cellProps}
    >
      {column.header.label}
    </TableHeading>
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
sortableHeaderCellFormatter.defaultProps = {
  cellProps: {},
  column: {},
  sortingColumns: {},
  onSort: noop
};

export default sortableHeaderCellFormatter;
