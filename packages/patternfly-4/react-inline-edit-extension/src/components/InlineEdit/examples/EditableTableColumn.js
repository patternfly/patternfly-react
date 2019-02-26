/* eslint-disable react/no-unused-state */
import React from 'react';
import { Table, TableHeader, TableBody, RowWrapper } from '@patternfly/react-table';
import {
  editableTableBody,
  editableRowWrapper,
  inlineEditFormatterFactory,
  TableEditConfirmation,
  TableTextInput
} from '@patternfly/react-inline-edit-extension';

class EditableTableColumn extends React.Component {
  constructor(props) {
    super(props);

    // text input
    const inlineEditingFormatter = inlineEditFormatterFactory({
      renderEdit: (value, { columnIndex, rowIndex }, { autoFocus }) => (
        <TableTextInput
          id={`repositories-${rowIndex}-${columnIndex}`}
          defaultValue={value}
          onBlur={newValue => this.onBlur(newValue, { rowIndex, columnIndex })}
          autoFocus={autoFocus}
        />
      ),
      renderValue: (value, { rowData }) => (rowData.isTableEditing ? `${value} (Not Editable)` : value),
      isEditable: ({ rowIndex }) => rowIndex !== 1
    });

    this.state = {
      columns: [
        {
          title: 'Repositories',
          cellFormatters: [inlineEditingFormatter]
        },
        {
          title: 'Branches',
          cellFormatters: [inlineEditingFormatter]
        },
        'Pull requests',
        'Workspaces',
        {
          title: 'Last Commit',
          cellFormatters: [inlineEditingFormatter]
        }
      ],
      rows: [
        {
          cells: ['one', 'two', 7, 'four', 'five']
        },
        {
          cells: ['a', 'two', 0, 'four', 'five']
        },
        {
          cells: ['p', 'two', 0, 'four', 'five']
        },
        {
          cells: ['a', 'two', 5, 'four', 'five']
        }
      ],
      rowsBackup: null
    };
  }

  onBlur = (value, { rowIndex, columnIndex }) => {
    this.setState(({ rows }) => {
      rows = [...rows];
      const row = rows[rowIndex];
      row.cells[columnIndex] = value;
      row.activeEditCell = null; // stop autoFocus
      return { rows };
    });
  };

  onEditCellChanged = (event, clickedRow, { rowIndex, columnIndex }) => {
    this.setState(({ rows }) => ({
      rows: rows.map((row, id) => {
        row.activeEditCell = id === rowIndex ? columnIndex : null;
        return row;
      })
    }));
  };

  setEditing = (rows, isEditing) =>
    rows.map(row => {
      row.isEditing = isEditing;
      if (!isEditing) {
        row.activeEditCell = null;
      }
      return row;
    });

  onRowClick = () => {
    this.setState(
      ({ rows, rowsBackup }) =>
        !rowsBackup && {
          rowsBackup: JSON.parse(JSON.stringify(rows)), // clone
          rows: this.setEditing(rows, true)
        }
    );
  };

  onEditConfirmed = () => {
    this.setState(({ rows }) => ({
      rows: this.setEditing(rows, false),
      rowsBackup: null
    }));
  };

  onEditCanceled = () => {
    this.setState(({ rows, rowsBackup }) => ({
      rows: rowsBackup,
      rowsBackup: null
    }));
  };

  render() {
    const { columns, rows } = this.state;
    const editConfig = {
      editConfirmationType: TableEditConfirmation.TABLE_BOTTOM,
      onEditCellChanged: this.onEditCellChanged,
      onEditConfirmed: this.onEditConfirmed,
      onEditCanceled: this.onEditCanceled
    };

    const ComposedBody = editableTableBody(TableBody);
    const ComposedRawWrapper = editableRowWrapper(RowWrapper);

    return (
      <Table
        caption="Editable Table With Inline Edit Columns"
        cells={columns}
        rows={rows}
        rowWrapper={ComposedRawWrapper}
      >
        <TableHeader />
        <ComposedBody editConfig={editConfig} onRowClick={this.onRowClick} />
      </Table>
    );
  }
}

export default EditableTableColumn;
