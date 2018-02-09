import React from 'react';
import PropTypes from 'prop-types';
import { Table } from '../index';

const actionHeaderCellFormatter = (value, { column }) => (
  <Table.Heading aria-label={column.header.label} {...column.header.props}>
    {column.header.label}
  </Table.Heading>
);
actionHeaderCellFormatter.propTypes = {
  /** cell value */
  value: PropTypes.node,
  /** column definition */
  column: PropTypes.object
};
export default actionHeaderCellFormatter;
