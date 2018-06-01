import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '../TableCell';

const tableCellFormatter = value => <TableCell>{value}</TableCell>;

tableCellFormatter.propTypes = {
  /** cell value */
  value: PropTypes.node // eslint-disable-line react/no-unused-prop-types
};
tableCellFormatter.defaultProps = {
  value: null
};
export default tableCellFormatter;
