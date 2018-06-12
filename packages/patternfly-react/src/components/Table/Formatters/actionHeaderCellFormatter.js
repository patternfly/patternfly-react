import React from 'react';
import PropTypes from 'prop-types';
import TableHeading from '../TableHeading';

const actionHeaderCellFormatter = (value, { column }) => (
  <TableHeading aria-label={column.header.label} {...column.header.props}>
    {column.header.label}
  </TableHeading>
);
actionHeaderCellFormatter.propTypes = {
  /** cell value */
  value: PropTypes.node,
  /** column definition */
  column: PropTypes.object
};
actionHeaderCellFormatter.defaultProps = {
  value: null,
  column: {}
};
export default actionHeaderCellFormatter;
