import React from 'react';
import { Table, TableHeader, TableBody, RowWrapper } from '@patternfly/react-table';
import {
  editableTableBody,
  editableRowWrapper,
  inlineEditFormatterFactory,
  TableEditConfirmation,
  TableTextInput
} from '@patternfly/react-inline-edit-extension';
import { Dropdown, DropdownToggle, DropdownItem, Checkbox } from '@patternfly/react-core';

class EditableTable extends React.Component {
  makeId = ({ column, rowIndex, columnIndex, name }) =>
    `${column.property}-${rowIndex}-${columnIndex}${name ? `-${name}` : ''}`;

  constructor(props) {
    super(props);

    // text input
    const textInputFormatter = inlineEditFormatterFactory({
      renderEdit: (value, { columnIndex, rowIndex, column }, { activeEditId }) => {
        const id = this.makeId({ rowIndex, columnIndex, column });
        return (
          <TableTextInput
            id={id}
            defaultValue={value}
            onBlur={newValue =>
              this.onChange(newValue, {
                rowIndex,
                columnIndex
              })
            }
            autoFocus={activeEditId === id}
          />
        );
      }
    });

    // dropdown
    const workspacesFormatter = inlineEditFormatterFactory({
      resolveValue: (value, { rowData }) => rowData.data.workspace,
      renderEdit: (workspace, { column, rowData, columnIndex, rowIndex }) => {
        const dropdownItems = column.data.dropdownItems.map(item => <DropdownItem key={item}>{item}</DropdownItem>);
        return (
          <Dropdown
            id={this.makeId({ rowIndex, columnIndex, column, name: 'dropdown' })}
            onSelect={event =>
              this.onWorkspaceChange({ selected: event.target.text, isDropdownOpen: false }, { rowIndex, columnIndex })
            }
            toggle={
              <DropdownToggle
                id={this.makeId({ rowIndex, columnIndex, column, name: 'toggle' })}
                onToggle={() =>
                  this.onWorkspaceChange({ isDropdownOpen: !workspace.isDropdownOpen }, { rowIndex, columnIndex })
                }
              >
                {workspace.selected}
              </DropdownToggle>
            }
            isOpen={workspace.isDropdownOpen}
            dropdownItems={dropdownItems}
          />
        );
      },
      renderValue: workspace => workspace.selected
    });

    // checkbox
    const privateRepoFormatter = inlineEditFormatterFactory({
      resolveValue: (value, { rowData }) => rowData.data.privateRepo,
      renderEdit: (privateRepo, { column, columnIndex, rowIndex }) => (
        <Checkbox
          id={this.makeId({ rowIndex, columnIndex, column })}
          isChecked={privateRepo}
          onChange={value =>
            this.onPrivateRepoChange(value, {
              rowIndex,
              columnIndex
            })
          }
          aria-label="checkbox"
        />
      ),
      renderValue: (privateRepo, { columnIndex, rowIndex, column }) => (
        <Checkbox
          id={this.makeId({ rowIndex, columnIndex, column })}
          isChecked={privateRepo}
          isDisabled
          aria-label="checkbox"
        />
      )
    });

    this.state = {
      columns: [
        {
          title: 'Repositories',
          cellFormatters: [textInputFormatter]
        },
        {
          title: 'Branches',
          cellFormatters: [(value, { rowData }) => rowData.data.branches[rowData.data.branches.length - 1]]
        },
        'Pull requests',
        {
          title: 'Workspaces',
          cellFormatters: [workspacesFormatter],
          data: {
            dropdownItems: ['Green', 'Purple', 'Orange', 'Grey']
          }
        },
        {
          title: 'Last Commit',
          cellFormatters: [textInputFormatter]
        },
        {
          title: 'Private',
          cellFormatters: [privateRepoFormatter]
        }
      ],
      rows: [
        {
          cells: ['one', null, 7, null, 'five', null],
          data: {
            branches: ['master'],
            workspace: {
              selected: 'Green',
              isDropdownOpen: false
            },
            privateRepo: false
          }
          // isEditing: true,
        },
        {
          cells: ['', null, 0, null, '', null],
          data: {
            branches: ['master', 'v0.7.0', 'v1.0.0'],
            workspace: {
              selected: 'Grey',
              isDropdownOpen: false
            },
            privateRepo: false
          }
        },
        {
          cells: ['p', null, 0, null, '', null],
          data: {
            branches: ['master', 'v0.7.0'],
            workspace: {
              selected: 'Orange',
              isDropdownOpen: false
            },
            privateRepo: true
          }
        }
      ],
      editedRowBackup: null,
      activeEditId: null
    };
  }

  onPrivateRepoChange = (value, { rowIndex }) => {
    this.setState(({ rows }) => {
      const row = rows[rowIndex];
      row.data.privateRepo = value;
      return { rows };
    });
  };

  onWorkspaceChange = (value, { rowIndex, columnIndex }) => {
    this.setState(({ rows, activeEditId }) => {
      const row = rows[rowIndex];
      row.data.workspace = Object.assign({}, row.data.workspace, value);
      if (value.isDropdownOpen) {
        activeEditId = this.makeId({ rowIndex, columnIndex, column: { property: 'workspaces' }, name: 'dropdown' });
      }
      return { rows, activeEditId };
    });
  };

  onChange = (value, { rowIndex, columnIndex }) => {
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
    const WORKSPACE_COL = 3;
    const PRIVATE_REPO_COL = 5;
    const ACTIONS_COL = 6;

    if (elementId !== this.state.activeEditId && clickedRow.isEditing && columnIndex !== ACTIONS_COL) {
      this.setState(({ rows }) => {
        // focus dropdown if it opens ('toggle' is mistakenly assumed to be the elementId)
        const activeEditId =
          elementId && columnIndex === WORKSPACE_COL && !rows[rowIndex].data.workspace.isDropdownOpen
            ? this.makeId({
                rowIndex,
                columnIndex,
                column: { property: 'workspaces' },
                name: 'dropdown'
              })
            : elementId;

        return {
          activeEditId,
          rows: rows.map((row, id) => {
            if (id === rowIndex) {
              if (elementId && columnIndex === WORKSPACE_COL) {
                row.data.workspace.isDropdownOpen = !row.data.workspace.isDropdownOpen;
              } else {
                if (elementId && columnIndex === PRIVATE_REPO_COL) {
                  row.data.privateRepo = !row.data.privateRepo;
                }
                row.data.workspace.isDropdownOpen = false;
              }
            }
            return row;
          })
        };
      });
    }
  };

  onEditActionClick = (event, rowId) => {
    this.setState(
      ({ rows, editedRowBackup }) =>
        !editedRowBackup && {
          editedRowBackup: JSON.parse(JSON.stringify(rows[rowId])), // clone
          rows: rows.map((row, id) => {
            row.isEditing = id === rowId;
            return row;
          })
        }
    );
  };

  onEditConfirmed = (event, clickedRow, { rowIndex }) => {
    this.setState(({ rows }) => {
      rows = [...rows];
      rows[rowIndex].isEditing = false;
      return {
        rows,
        editedRowBackup: null,
        activeEditId: null
      };
    });
  };

  onEditCanceled = (event, clickedRow, { rowIndex }) => {
    this.setState(({ rows, editedRowBackup }) => {
      rows = [...rows];
      rows[rowIndex] = editedRowBackup;
      return {
        rows,
        editedRowBackup: null,
        activeEditId: null
      };
    });
  };

  actionResolver = rowData =>
    rowData.isTableEditing
      ? null
      : [
          {
            title: 'Edit',
            onClick: this.onEditActionClick
          }
        ];

  render() {
    const { columns, rows, activeEditId } = this.state;
    const editConfig = {
      activeEditId,
      onEditCellClicked: this.onEditCellClicked,
      editConfirmationType: TableEditConfirmation.ROW,
      onEditConfirmed: this.onEditConfirmed,
      onEditCanceled: this.onEditCanceled
    };

    const ComposedBody = editableTableBody(TableBody);
    const ComposedRowWrapper = editableRowWrapper(RowWrapper);

    return (
      <Table
        caption="Editable Table"
        cells={columns}
        rows={rows}
        rowWrapper={ComposedRowWrapper}
        actionResolver={this.actionResolver}
      >
        <TableHeader />
        <ComposedBody editConfig={editConfig} />
      </Table>
    );
  }
}

export default EditableTable;
