import React from 'react';
import PropTypes from 'prop-types';
import { Table } from '../index';

const tableCellFormatter = value => <Table.Cell>{value}</Table.Cell>;
tableCellFormatter.propTypes = {
  /** cell value */
  value: PropTypes.node // eslint-disable-line react/no-unused-prop-types
};
export default tableCellFormatter;
