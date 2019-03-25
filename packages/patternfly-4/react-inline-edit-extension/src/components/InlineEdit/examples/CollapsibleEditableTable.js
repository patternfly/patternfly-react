import React from 'react';
import { Table, TableHeader, TableBody, RowWrapper, ExpandableRowContent } from '@patternfly/react-table';
import {
  editableTableBody,
  editableRowWrapper,
  inlineEditFormatterFactory,
  TableEditConfirmation,
  TableTextInput
} from '@patternfly/react-inline-edit-extension';

class CollapsibleEditableTable extends React.Component {
  makeId = ({ column, rowIndex, columnIndex, name }) =>
    `${column.property}-${rowIndex}-${columnIndex}${name ? `-${name}` : ''}`;

  constructor(props) {
    super(props);

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
  }

  onChange = (value, { rowIndex, columnIndex, moduleIndex }) => {
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

  onEditCellClicked = (event, clickedRow, { rowIndex, columnIndex, elementId }) => {
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
  getParentId = (rowId, rows) => (rows[rowId].parent === undefined ? rowId : rows[rowId].parent);
  getChildIdId = (rowId, rows) =>
    rows[rowId].parent === undefined
      ? rows.map((row, idx) => (row.parent === rowId ? idx : null)).find(idx => idx !== null)
      : rowId;

  onEditActionClick = (event, rowId) => {
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

  onEditConfirmed = () => {
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

  onEditCanceled = () => {
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

  onCollapse = (event, rowKey, isOpen) => {
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
        caption="Editable Table With Collapsible Rows"
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

export default CollapsibleEditableTable;
