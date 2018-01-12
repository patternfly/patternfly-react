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

export const actionHeaderCellFormatter = ({ column, cellProps }) => {
  return (
    <Table.Heading aria-label={column.header.label} {...cellProps}>
      {column.header.label}
    </Table.Heading>
  );
};
actionHeaderCellFormatter.propTypes = {
  /** table columns */
  column: PropTypes.object,
  /** cell props */
  cellProps: PropTypes.object
};

// table cell formatter
export const tableCellFormatter = value => {
  return <Table.Cell>{value}</Table.Cell>;
};
