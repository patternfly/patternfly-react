/* eslint-disable react/no-unused-state */
import React from 'react';
import { Table, TableHeader, TableBody, RowWrapper, TableVariant } from '@patternfly/react-table';
import {
  editableTableBody,
  editableRowWrapper,
  inlineEditFormatterFactory,
  TableEditConfirmation,
  TableTextInput
} from '@patternfly/react-inline-edit-extension';

class EditableTableColumn extends React.Component {
  makeId = ({ column, rowIndex, columnIndex, name }) =>
    `${column.property}-${rowIndex}-${columnIndex}${name ? `-${name}` : ''}`;

  constructor(props) {
    super(props);

    // text input
    const inlineEditingFormatter = inlineEditFormatterFactory({
      renderEdit: (value, { columnIndex, rowIndex, column }, { activeEditId }) => {
        const id = this.makeId({ rowIndex, columnIndex, column });
        return (
          <TableTextInput
            id={id}
            defaultValue={value}
            onBlur={newValue =>
              this.onBlur(newValue, {
                rowIndex,
                columnIndex
              })
            }
            autoFocus={activeEditId === id}
          />
        );
      },
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
      rowsBackup: null,
      activeEditId: null
    };
  }

  onBlur = (value, { rowIndex, columnIndex }) => {
    this.setState(({ rows }) => {
      rows = [...rows];
      const row = rows[rowIndex];
      row.cells[columnIndex] = value;
      return {
        rows,
        activeEditId: null // stop autoFocus
      };
    });
  };

  onEditCellClicked = (event, clickedRow, { rowIndex, columnIndex, elementId }) => {
    if (elementId !== this.state.activeEditId) {
      this.setState({
        activeEditId: elementId
      });
    }
  };

  setEditing = (rows, isEditing) =>
    rows.map(row => {
      row.isEditing = isEditing;
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
      rowsBackup: null,
      activeEditId: null
    }));
  };

  onEditCanceled = () => {
    this.setState(({ rows, rowsBackup }) => ({
      rows: rowsBackup,
      rowsBackup: null,
      activeEditId: null
    }));
  };

  render() {
    const { columns, rows, activeEditId } = this.state;
    const editConfig = {
      activeEditId,
      editConfirmationType: TableEditConfirmation.TABLE_BOTTOM,
      onEditCellClicked: this.onEditCellClicked,
      onEditConfirmed: this.onEditConfirmed,
      onEditCanceled: this.onEditCanceled
    };

    const ComposedBody = editableTableBody(TableBody);
    const ComposedRowWrapper = editableRowWrapper(RowWrapper);

    return (
      <Table
        variant={TableVariant.compact}
        caption="Editable Table With Inline Edit Columns"
        cells={columns}
        rows={rows}
        rowWrapper={ComposedRowWrapper}
        onCollapse={this.onCollapse}
      >
        <TableHeader />
        <ComposedBody editConfig={editConfig} onRowClick={this.onRowClick} />
      </Table>
    );
  }
}

export default EditableTableColumn;
