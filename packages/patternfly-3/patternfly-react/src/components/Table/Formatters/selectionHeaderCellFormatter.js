import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../../common/helpers';
import TableSelectionHeading from '../TableSelectionHeading';
import TableCheckbox from '../TableCheckbox';

const selectionHeaderCellFormatter = ({ cellProps, column, rows, onSelectAllRows }) => {
  const unselectedRows = rows.filter(r => !r.selected).length > 0;
  const id = cellProps.id || 'selectAll';
  return (
    <TableSelectionHeading aria-label={column.header.label} {...cellProps}>
      <TableCheckbox id={id} label={column.header.label} checked={!unselectedRows} onChange={onSelectAllRows} />
    </TableSelectionHeading>
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
