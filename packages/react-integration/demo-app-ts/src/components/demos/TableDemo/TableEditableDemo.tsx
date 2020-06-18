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
  EditableTextCell,
  EditableSelectInputCell
} from '@patternfly/react-table';
import { SelectOption } from '@patternfly/react-core';

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

interface TableState {
  rows: IRow[];
  columns: (ICell | string)[];
}

interface Option {
  value: string;
}

export class TableEditableDemo extends React.Component<TableProps, TableState> {
  static displayName = 'TableEditableDemo';

  private options: Option[];

  constructor(props: TableProps) {
    super(props);

    this.options = [
      { value: 'Option 1' },
      { value: 'Option 2' },
      { value: 'Option 3' },
      { value: 'Option 4' },
      { value: 'Option 5' }
    ];

    this.state = {
      columns: [
        'Text input col 1',
        'Disabled text input col 2',
        'Text input col 3',
        'Text input col 4',
        'Dropdown col 5'
      ],
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
            },
            {
              title: (value: string, rowIndex: number, cellIndex: number, updatedProps: any) => (
                <EditableSelectInputCell
                  value={value}
                  rowIndex={rowIndex}
                  cellIndex={cellIndex}
                  props={updatedProps}
                  onSelect={this.onSelect}
                  clearSelection={this.clearSelection}
                  inputAriaLabel="Row 1 cell 5 content"
                  isOpen={updatedProps.isSelectOpen}
                  options={this.options.map((option, index) => (
                    <SelectOption key={index} value={option.value} id={'uniqueIdRow1Cell5Option' + index} />
                  ))}
                  onToggle={isOpen => {
                    this.onToggle(isOpen, rowIndex, cellIndex);
                  }}
                  selections={updatedProps.selected}
                />
              ),
              props: {
                value: 'Option 1',
                name: 'uniqueIdRow1Cell5',
                isSelectOpen: (props as any).isSelectOpen || false,
                selected: (props as any).selected || 'Option 1'
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
            },
            {
              title: (value: string, rowIndex: number, cellIndex: number, updatedProps: any) => (
                <EditableSelectInputCell
                  value={value}
                  rowIndex={rowIndex}
                  cellIndex={cellIndex}
                  props={updatedProps}
                  onSelect={this.onSelect}
                  clearSelection={this.clearSelection}
                  inputAriaLabel="Row 2 cell 5 content"
                  isOpen={updatedProps.isSelectOpen}
                  options={this.options.map((option, index) => (
                    <SelectOption key={index} value={option.value} id={'uniqueIdRow2Cell5Option' + index} />
                  ))}
                  onToggle={(isOpen: boolean) => {
                    this.onToggle(isOpen, rowIndex, cellIndex);
                  }}
                  selections={updatedProps.selected}
                />
              ),
              props: {
                value: ['Option 2'],
                name: 'uniqueIdRow2Cell5',
                isSelectOpen: (props as any).isSelectOpen || false,
                selected: (props as any).selected || ['Option 2'],
                options: [
                  {value: 'Placeholder...', isPlaceholder: true},
                  {value: 'Option 1'},
                  {value: 'Option 2'},
                  {value: 'Option 3'},
                  {value: 'Option 4'},
                  {value: 'Option 5'}
                ]
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

  onSelect = (newValue: string, evt: React.FormEvent, rowIndex: number, cellIndex: number, isPlaceholder?: boolean) => {
    const newRows = Array.from(this.state.rows);

    if (isPlaceholder) {
      (newRows[rowIndex].cells[cellIndex] as IRowCell).props.editableValue = '';
      (newRows[rowIndex].cells[cellIndex] as IRowCell).props.selected = null;
    } else {
      (newRows[rowIndex].cells[cellIndex] as IRowCell).props.editableValue = newValue;
      (newRows[rowIndex].cells[cellIndex] as IRowCell).props.selected = newValue;
    }
    this.setState({
      rows: newRows
    });
  };

  onToggle = (isOpen: boolean, rowIndex: number, cellIndex: number) => {
    const newRows = Array.from(this.state.rows);
    (newRows[rowIndex].cells[cellIndex] as IRowCell).props.isSelectOpen = isOpen;
    this.setState({
      rows: newRows
    });
  };

  clearSelection = (rowIndex: number, cellIndex: number) => {
    const newRows = Array.from(this.state.rows);
    const newCellProps = (newRows[rowIndex].cells[cellIndex] as IRowCell).props;
    newCellProps.editableValue = [];
    newCellProps.selected = [];
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
