import React from 'react';
import PropTypes from 'prop-types';
import { Table } from '../index';
import { noop } from '../../../common/helpers';

const selectionHeaderCellFormatter = ({
  cellProps,
  column,
  rows,
  onSelectAllRows
}) => {
  const unselectedRows = rows.filter(r => !r.selected).length > 0;
  const id = cellProps.id || 'selectAll';
  return (
    <Table.SelectionHeading aria-label={column.header.label} {...cellProps}>
      <Table.Checkbox
        id={id}
        label={column.header.label}
        checked={!unselectedRows}
        onChange={onSelectAllRows}
      />
    </Table.SelectionHeading>
  );
};
selectionHeaderCellFormatter.propTypes = {
  /** column header cell props */
  cellProps: PropTypes.object,
  /** column definition */
  column: PropTypes.object,
  /** current table rows */
  rows: PropTypes.array,
  /** on select all rows callback */
  onSelectAllRows: PropTypes.func
};
selectionHeaderCellFormatter.defaultProps = {
  cellProps: {},
  column: {},
  rows: [],
  onSelectAllRows: noop
};
export default selectionHeaderCellFormatter;
