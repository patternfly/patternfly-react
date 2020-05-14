/* eslint-disable no-shadow */
import * as React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableProps,
  TableVariant,
  ICell,
  IRow,
  IRowCell,
  IValidatorDef,
  OnRowEdit,
  validateCellEdits,
  cancelCellEdits,
  applyCellEdits,
  EditableTextCell
} from '@patternfly/react-table';

const rowLevelValidationRules: IValidatorDef[] = [
  {
    name: 'required',
    validator: value => value.trim() !== '',
    errorText: 'This field is required'
  },
  {
    name: 'notFoo',
    validator: value => value.trim().toLowerCase() !== 'foo',
    errorText: 'Value cannot be "foo"'
  },
  {
    name: 'minLength',
    validator: value => value.trim().length >= 7,
    errorText: 'Value must be at least 7 characters'
  },
  {
    name: 'notXyz',
    validator: value => value.trim().toLowerCase() !== 'xyz',
    errorText: 'Value cannot be xyz'
  }
];

export class TableEditableDemo extends React.Component<TableProps, { columns: (ICell | string)[]; rows: IRow[] }> {
  constructor(props: TableProps) {
    super(props);
    this.state = {
      columns: ['Text input col 1', 'Disabled text input col 2', 'Text input col 3', 'Text input col 4'],
      rows: [
        {
          isEditable: true,
          rowEditValidationRules: rowLevelValidationRules,
          cells: [
            {
              title: (value: string, rowIndex: number, cellIndex: number, updatedProps: any) => (
                <EditableTextCell
                  value={value}
                  rowIndex={rowIndex}
                  cellIndex={cellIndex}
                  props={updatedProps}
                  handleTextInputChange={this.handleTextInputChange}
                  inputAriaLabel="Row 1 cell 1 content"
                />
              ),
              props: {
                value: 'Row 1 cell 1 content',
                name: 'uniqueIdRow1Cell1'
              }
            },
            {
              title: (value: string, rowIndex: number, cellIndex: number, updatedProps: any) => (
                <EditableTextCell
                  value={value}
                  rowIndex={rowIndex}
                  cellIndex={cellIndex}
                  props={updatedProps}
                  isDisabled
                  handleTextInputChange={this.handleTextInputChange}
                  inputAriaLabel="Row 1 cell 2 content"
                />
              ),
              props: {
                value: 'Row 1 cell 2, disabled content',
                name: 'uniqueIdRow1Cell2'
              }
            },
            {
              title: (value: string, rowIndex: number, cellIndex: number, updatedProps: any) => (
                <EditableTextCell
                  value={value}
                  rowIndex={rowIndex}
                  cellIndex={cellIndex}
                  props={updatedProps}
                  handleTextInputChange={this.handleTextInputChange}
                  inputAriaLabel="Row 1 cell 3 content"
                />
              ),
              props: {
                value: 'Row 1 cell 3 content',
                name: 'uniqueIdRow1Cell3'
              }
            },
            {
              title: (value: string, rowIndex: number, cellIndex: number, updatedProps: any) => (
                <EditableTextCell
                  value={value}
                  rowIndex={rowIndex}
                  cellIndex={cellIndex}
                  props={updatedProps}
                  handleTextInputChange={this.handleTextInputChange}
                  inputAriaLabel="Row 1 cell 4 content"
                />
              ),
              props: {
                value: 'Row 1 cell 4 content',
                name: 'uniqueIdRow1Cell4'
              }
            }
          ]
        },
        {
          isEditable: false,
          rowEditBtnAriaLabel: idx => `Edit row ${idx}`,
          rowSaveBtnAriaLabel: idx => `Save edits for row ${idx}`,
          rowCancelBtnAriaLabel: idx => `Cancel edits for row ${idx}`,
          cells: [
            {
              title: (value: string, rowIndex: number, cellIndex: number, updatedProps: any) => (
                <EditableTextCell
                  value={value}
                  rowIndex={rowIndex}
                  cellIndex={cellIndex}
                  props={updatedProps}
                  handleTextInputChange={this.handleTextInputChange}
                  inputAriaLabel="Row 2 cell 1 content"
                />
              ),
              props: {
                value: 'Row 2 cell 1 content',
                name: 'uniqueIdRow2Cell1'
              }
            },
            {
              title: (value: string, rowIndex: number, cellIndex: number, updatedProps: any) => (
                <EditableTextCell
                  value={value}
                  rowIndex={rowIndex}
                  cellIndex={cellIndex}
                  props={updatedProps}
                  isDisabled
                  handleTextInputChange={this.handleTextInputChange}
                  inputAriaLabel="Row 2 cell 2 content"
                />
              ),
              props: {
                value: 'Row 2 cell 2, disabled content',
                name: 'uniqueIdRow2Cell2'
              }
            },
            {
              title: (value: string, rowIndex: number, cellIndex: number, updatedProps: any) => (
                <EditableTextCell
                  value={value}
                  rowIndex={rowIndex}
                  cellIndex={cellIndex}
                  props={updatedProps}
                  handleTextInputChange={this.handleTextInputChange}
                  inputAriaLabel="Row 2 cell 3 content"
                />
              ),
              props: {
                value: 'Row 2 cell 3 content',
                name: 'uniqueIdRow2Cell3'
              }
            },
            {
              title: (value: string, rowIndex: number, cellIndex: number, updatedProps: any) => (
                <EditableTextCell
                  value={value}
                  rowIndex={rowIndex}
                  cellIndex={cellIndex}
                  props={updatedProps}
                  handleTextInputChange={this.handleTextInputChange}
                  inputAriaLabel="Row 2 cell 4 content"
                />
              ),
              props: {
                value: 'Row 2 cell 4 content',
                name: 'uniqueIdRow2Cell4'
              }
            }
          ]
        }
      ]
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  updateEditableRows: OnRowEdit = (evt, type, isEditable, rowIndex = 0, validationErrors) => {
    const newRows = Array.from(this.state.rows);

    if (validationErrors && Object.keys(validationErrors).length) {
      newRows[rowIndex] = validateCellEdits(newRows[rowIndex], type, validationErrors);

      this.setState({
        rows: newRows
      });
      return;
    }

    if (type === 'cancel') {
      newRows[rowIndex] = cancelCellEdits(newRows[rowIndex]);

      this.setState({
        rows: newRows
      });
      return;
    }

    newRows[rowIndex] = applyCellEdits(newRows[rowIndex], type);

    this.setState({
      rows: newRows
    });
  };

  handleTextInputChange = (newValue: string, evt: React.FormEvent, rowIndex: number, cellIndex: number) => {
    const newRows = Array.from(this.state.rows);
    const rowCells = newRows[rowIndex].cells;
    if (rowCells) {
      (rowCells[cellIndex] as IRowCell).props.editableValue = newValue;
    }
    this.setState({
      rows: newRows
    });
  };

  render() {
    const { columns, rows } = this.state;

    return (
      <Table
        caption="Editable Table"
        onRowEdit={this.updateEditableRows}
        aria-label="Editable Table"
        variant={TableVariant.compact}
        cells={columns}
        rows={rows}
      >
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
