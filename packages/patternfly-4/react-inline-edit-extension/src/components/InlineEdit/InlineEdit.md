---
title: 'Inline table edit'
section: 'extensions'
propComponents: ['TableTextInput']
---

import { Table, TableHeader, TableBody, RowWrapper, TableVariant, ExpandableRowContent } from '@patternfly/react-table';
import {
  editableTableBody,
  editableRowWrapper,
  inlineEditFormatterFactory,
  TableEditConfirmation,
  TableTextInput
} from '@patternfly/react-inline-edit-extension';
import { Dropdown, DropdownToggle, DropdownItem, Checkbox } from '@patternfly/react-core';

## Introduction
Note: Inline Edit lives in its own package at [`@patternfly/react-inline-edit-extension`](https://www.npmjs.com/package/@patternfly/react-inline-edit-extension)!

This package is currently an extension. Extension components do not undergo the same rigorous design or coding review process as core PatternFly components. If enough members of the community find them useful, we will work to move them into our core PatternFly system by starting the design process for the idea.

## Examples
```js title=Editable
import React from 'react';
import { Table, TableHeader, TableBody, RowWrapper, TableVariant, ExpandableRowContent } from '@patternfly/react-table';
import {
  editableTableBody,
  editableRowWrapper,
  inlineEditFormatterFactory,
  TableEditConfirmation,
  TableTextInput
} from '@patternfly/react-inline-edit-extension';
import { Dropdown, DropdownToggle, DropdownItem, Checkbox } from '@patternfly/react-core';

class EditableTable extends React.Component {
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
      renderEdit: (workspace, { column, rowData, columnIndex, rowIndex }, { activeEditId }) => {
        const dropdownItems = column.data.dropdownItems.map(item => <DropdownItem key={item}>{item}</DropdownItem>);
        const toggleId = this.makeId({ rowIndex, columnIndex, column, name: 'toggle' });
        return (
          <Dropdown
            id={this.makeId({ rowIndex, columnIndex, column, name: 'dropdown' })}
            onSelect={event =>
              this.onWorkspaceChange({ selected: event.target.text, isDropdownOpen: false }, { rowIndex })
            }
            toggle={
              <DropdownToggle
                id={toggleId}
                autoFocus={activeEditId === toggleId}
                onToggle={() => this.onWorkspaceChange({ isDropdownOpen: !workspace.isDropdownOpen }, { rowIndex })}
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
      // eslint-disable-next-line react/no-unused-state
      editedRowBackup: null,
      activeEditId: null
    };

    this.WORKSPACE_COL = 3;
    this.PRIVATE_REPO_COL = 5;
    this.ACTIONS_COL = 6;

    this.makeId = ({ column, rowIndex, columnIndex, name }) =>
      `${column.property}-${rowIndex}-${columnIndex}${name ? `-${name}` : ''}`;

    this.onPrivateRepoChange = (value, { rowIndex }) => {
      this.setState(({ rows }) => {
        const row = rows[rowIndex];
        row.data.privateRepo = value;
        return { rows };
      });
    };

    this.onWorkspaceChange = (value, { rowIndex }) => {
      this.setState(({ rows }) => {
        const row = rows[rowIndex];
        row.data.workspace = Object.assign({}, row.data.workspace, value);
        return { rows };
      });
    };

    this.onChange = (value, { rowIndex, columnIndex }) => {
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

    this.idEquals = (elementId, activeEditId, { rowIndex, columnIndex }) => {
      if (columnIndex === this.WORKSPACE_COL) {
        // equality for dropdowns should take toggle vs dropdown id clicks into account
        const genericDropdownId = this.makeId({
          rowIndex,
          columnIndex,
          column: { property: 'workspaces' }
        });
        return (
          elementId &&
          activeEditId &&
          elementId.startsWith(genericDropdownId) &&
          activeEditId.startsWith(genericDropdownId)
        );
      }
      return elementId === activeEditId;
    };

    this.onEditCellClicked = (event, clickedRow, { rowIndex, columnIndex, elementId }) => {
      if (
        !this.idEquals(elementId, this.state.activeEditId, { rowIndex, columnIndex }) &&
        clickedRow.isEditing &&
        columnIndex !== this.ACTIONS_COL
      ) {
        this.setState(({ rows }) => ({
          activeEditId: elementId,
          rows: rows.map((row, id) => {
            if (id === rowIndex) {
              if (elementId && columnIndex === this.WORKSPACE_COL) {
                row.data.workspace.isDropdownOpen = !row.data.workspace.isDropdownOpen;
              } else {
                if (elementId && columnIndex === this.PRIVATE_REPO_COL) {
                  row.data.privateRepo = !row.data.privateRepo;
                }
                row.data.workspace.isDropdownOpen = false;
              }
            }
            return row;
          })
        }));
      }
    };

    this.onEditActionClick = (event, rowId) => {
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

    this.onEditConfirmed = (event, clickedRow, { rowIndex }) => {
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

    this.onEditCanceled = (event, clickedRow, { rowIndex }) => {
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

    this.actionResolver = rowData =>
      rowData.isTableEditing
        ? null
        : [
            {
              title: 'Edit',
              onClick: this.onEditActionClick
            }
          ];
  }

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
        aria-label="Editable Table"
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
```

```js title=With-inline-edit-columns
import React from 'react';
import { Table, TableHeader, TableBody, RowWrapper, TableVariant, ExpandableRowContent } from '@patternfly/react-table';
import {
  editableTableBody,
  editableRowWrapper,
  inlineEditFormatterFactory,
  TableEditConfirmation,
  TableTextInput
} from '@patternfly/react-inline-edit-extension';
import { Dropdown, DropdownToggle, DropdownItem, Checkbox } from '@patternfly/react-core';

class EditableTableColumn extends React.Component {
  constructor(props) {
    super(props);

    this.makeId = ({ column, rowIndex, columnIndex, name }) =>
      `${column.property}-${rowIndex}-${columnIndex}${name ? `-${name}` : ''}`;

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

    this.onBlur = (value, { rowIndex, columnIndex }) => {
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

    this.onEditCellClicked = (event, clickedRow, { rowIndex, columnIndex, elementId }) => {
      if (elementId !== this.state.activeEditId) {
        this.setState({
          activeEditId: elementId
        });
      }
    };

    this.setEditing = (rows, isEditing) =>
      rows.map(row => {
        row.isEditing = isEditing;
        return row;
      });

    this.onRowClick = () => {
      this.setState(
        ({ rows, rowsBackup }) =>
          !rowsBackup && {
            rowsBackup: JSON.parse(JSON.stringify(rows)), // clone
            rows: this.setEditing(rows, true)
          }
      );
    };

    this.onEditConfirmed = () => {
      this.setState(({ rows }) => ({
        rows: this.setEditing(rows, false),
        rowsBackup: null,
        activeEditId: null
      }));
    };

    this.onEditCanceled = () => {
      this.setState(({ rows, rowsBackup }) => ({
        rows: rowsBackup,
        rowsBackup: null,
        activeEditId: null
      }));
    };
  }

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
        aria-label="Editable Table With Inline Edit Columns"
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
```

```js title=With-collapsible-rows
import React from 'react';
import { Table, TableHeader, TableBody, RowWrapper, TableVariant, ExpandableRowContent } from '@patternfly/react-table';
import {
  editableTableBody,
  editableRowWrapper,
  inlineEditFormatterFactory,
  TableEditConfirmation,
  TableTextInput
} from '@patternfly/react-inline-edit-extension';
import { Dropdown, DropdownToggle, DropdownItem, Checkbox } from '@patternfly/react-core';

class CollapsibleEditableTable extends React.Component {
  constructor(props) {
    super(props);

    this.makeId = ({ column, rowIndex, columnIndex, name }) =>
      `${column.property}-${rowIndex}-${columnIndex}${name ? `-${name}` : ''}`;

    const childEditRenderer = (value, { column, rowIndex, rowData, columnIndex, activeEditId }) => (
      <ExpandableRowContent>
        {rowData.data.modules.map((module, idx) => {
          const inlineStyle = {
            marginLeft: idx && '1em',
            display: 'inline-block',
            width: '48%'
          };

          const id = this.makeId({ rowIndex, columnIndex, column, name: `module-${idx}` });

          return (
            <TableTextInput
              id={id}
              key={id}
              defaultValue={module}
              style={inlineStyle}
              onBlur={newValue =>
                this.onChange(newValue, {
                  rowIndex,
                  moduleIndex: idx
                })
              }
              autoFocus={activeEditId === id}
            />
          );
        })}
      </ExpandableRowContent>
    );

    const parentEditRenderer = (value, { column, rowIndex, columnIndex, activeEditId }) => {
      const id = this.makeId({ rowIndex, columnIndex, column, name: 'parent-repo' });
      return (
        <TableTextInput
          id={id}
          key={id}
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
    };

    const textInputFormatter = inlineEditFormatterFactory({
      renderValue: (value, { rowData }) =>
        rowData.hasOwnProperty('parent') ? (
          <ExpandableRowContent>{rowData.data.modules.filter(a => a).join(', ')}</ExpandableRowContent>
        ) : (
          value
        ),
      renderEdit: (value, { column, columnIndex, rowIndex, rowData }, { activeEditId }) => {
        const renderer = rowData.hasOwnProperty('parent') ? childEditRenderer : parentEditRenderer;
        return renderer(value, { rowData, column, rowIndex, columnIndex, activeEditId });
      }
    });

    this.state = {
      columns: [
        {
          title: 'Repositories',
          cellFormatters: [textInputFormatter]
        },
        {
          title: 'Branches'
        },
        'Pull requests',
        {
          title: 'Workspaces',
          cellFormatters: [textInputFormatter]
        },
        {
          title: 'Last Commit',
          cellFormatters: [textInputFormatter]
        }
      ],
      rows: [
        {
          cells: ['one', 'master', 7, 'Grey', 'five'],
          isOpen: false
        },
        {
          cells: [null],
          data: {
            modules: ['', '']
          },
          parent: 0,
          isEditableTogetherWithParent: true
        },
        {
          cells: ['uno', 'v2.3.0', 125, 'Orange', 'cinco'],
          isOpen: false
        },
        {
          cells: [null],
          data: {
            modules: ['storage', '']
          },
          parent: 2
        },
        {
          cells: ['', 'master', 0, 'Blue', ''],
          isOpen: true
        },
        {
          cells: [null],
          data: {
            modules: ['security', 'network']
          },
          parent: 4,
          isEditableTogetherWithParent: true
        }
      ],
      editedRowsBackup: null,
      activeEditId: null
    };
    this.onChange = (value, { rowIndex, columnIndex, moduleIndex }) => {
      this.setState(({ rows }) => {
        rows = [...rows];
        const row = rows[rowIndex];
        if (moduleIndex != null) {
          row.data.modules[moduleIndex] = value;
        } else {
          const shiftedColumnIndex = columnIndex - 1; // to take Expandable Column into account;
          row.cells[shiftedColumnIndex] = value;
        }
        return { rows, activeEditId: null };
      });
    };
    this.onEditCellClicked = (event, clickedRow, { rowIndex, columnIndex, elementId }) => {
      const EXPANDABLE_COL = 0;
      const ACTIONS_COL = 6;

      if (elementId !== this.state.activeEditId && clickedRow.isEditing && columnIndex !== ACTIONS_COL) {
        this.setState(({ rows }) => ({
          activeEditId: elementId,
          rows: rows.map((row, id) => {
            if (id === rowIndex && columnIndex === EXPANDABLE_COL && row.hasOwnProperty('isOpen')) {
              row.isOpen = !row.isOpen;
            }
            return row;
          })
        }));
      }
    };

    // depth max 1 in this example
    this.getParentId = (rowId, rows) => (rows[rowId].parent === undefined ? rowId : rows[rowId].parent);
    this.getChildIdId = (rowId, rows) =>
      rows[rowId].parent === undefined
        ? rows.map((row, idx) => (row.parent === rowId ? idx : null)).find(idx => idx !== null)
        : rowId;

    this.onEditActionClick = (event, rowId) => {
      this.setState(({ rows, editedRowBackup }) => {
        if (!editedRowBackup) {
          const childId = this.getChildIdId(rowId, rows);
          const parentId = this.getParentId(rowId, rows);

          const backup = rows[childId].isEditableTogetherWithParent
            ? {
                [parentId]: rows[parentId],
                [childId]: rows[childId]
              }
            : {
                [rowId]: rows[rowId]
              };

          return {
            editedRowsBackup: JSON.parse(JSON.stringify(backup)), // clone
            rows: rows.map((row, id) => {
              row.isEditing = !!backup[id];
              return row;
            })
          };
        }
        return undefined;
      });
    };

    this.onEditConfirmed = () => {
      this.setState(({ rows, editedRowsBackup }) => {
        rows = [...rows];
        Object.keys(editedRowsBackup).forEach(key => {
          rows[key].isEditing = false;
        });

        return {
          rows,
          editedRowsBackup: null,
          activeEditId: null
        };
      });
    };

    this.onEditCanceled = () => {
      this.setState(({ rows, editedRowsBackup }) => {
        rows = [...rows];
        Object.keys(editedRowsBackup).forEach(key => {
          rows[key] = editedRowsBackup[key];
        });
        return {
          rows,
          editedRowsBackup: null,
          activeEditId: null
        };
      });
    };

    this.onCollapse = (event, rowKey, isOpen) => {
      const { rows } = this.state;
      /**
       * Please do not use rowKey as row index for more complex tables.
       * Rather use some kind of identifier like ID passed with each row.
       */
      rows[rowKey].isOpen = isOpen;
      this.setState({
        rows
      });
    };

    this.actionResolver = rowData =>
      rowData.isTableEditing
        ? null
        : [
            {
              title: 'Edit',
              onClick: this.onEditActionClick
            }
          ];
  }

  render() {
    const { activeEditId, columns, rows } = this.state;
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
        aria-label="Editable Table With Collapsible Rows"
        cells={columns}
        rows={rows}
        rowWrapper={ComposedRowWrapper}
        onCollapse={this.onCollapse}
        actionResolver={this.actionResolver}
      >
        <TableHeader />
        <ComposedBody editConfig={editConfig} />
      </Table>
    );
  }
}
```
