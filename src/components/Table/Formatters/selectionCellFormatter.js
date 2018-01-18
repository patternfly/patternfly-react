import React from 'react';
import PropTypes from 'prop-types';
import { Table } from '../index';

const selectionCellFormatter = (value, { rowData, rowIndex }, onSelectRow) => {
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
selectionCellFormatter.propTypes = {
  /** cell value */
  value: PropTypes.node, // eslint-disable-line react/no-unused-prop-types
  /** rowData for this row */
  rowData: PropTypes.object, // eslint-disable-line react/no-unused-prop-types
  /** rowIndex for this row */
  rowIndex: PropTypes.number, // eslint-disable-line react/no-unused-prop-types
  /** row selected callback */
  onSelectRow: PropTypes.func // eslint-disable-line react/no-unused-prop-types
};
export default selectionCellFormatter;
