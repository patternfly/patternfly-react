// TODO remove me
/* eslint-disable */

import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableProps,
  TableVariant,
  IValidatorDef,
  EditableTextCell,
  IEditableTextCell
} from '@patternfly/react-table';

// This is just an example representing real external data with named properties.
// In real usage Widget may be Repository, or Cluster, or whatever your real data is.
type Field4Option = 'Option 1' | 'Option 2' | 'Option 3' | 'Option 4' | 'Option 5';
interface Widget {
  type: 'a' | 'b' | 'c';
  field1: string;
  field2: string;
  field3: string;
  field4: Field4Option[];
}

export const TableEditableRows: React.FunctionComponent = () => {
  // In real usage, this data would come from some external source like an API via props.
  const widgets: Widget[] = [
    {
      type: 'a',
      field1: 'Row 1 cell 1 content',
      field2: 'Row 1 cell 2, disabled content',
      field3: 'Row 1 cell 3 content',
      field4: ['Option 1']
    },
    {
      type: 'b',
      field1: 'Row 2 cell 1 content',
      field2: 'Row 2 cell 2, disabled content',
      field3: 'Row 2 cell 3 content',
      field4: []
    },
    {
      type: 'c',
      field1: 'Row 3 cell 1 content',
      field2: 'Row 3 cell 2, disabled content',
      field3: 'Row 3 cell 3 content',
      field4: ['Option 3']
    }
  ];

  /**
   * NOTE: Editable data can be handled in a number of ways. In this case, we will duplicate the data into state
   * so they can be updated there. However, that means this table would not update automatically if it re-rendered
   * with new data via props changing. It would need some custom useEffect to synchronize props with state.
   * This is a React antipattern, only used here to simplify things and focus on table rendering for the example.
   * In real usage, you may want to update rows on the server when edits are saved and use that as the source of
   * truth instead of storing your data in React state.
   */
  const [editedWidgets, setEditedWidgets] = React.useState(widgets);

  // For the purposes of this example, we have arbitrary validation rules for each row based on a type property.
  const getWidgetValidationRules = (widget: Widget): IValidatorDef[] => {
    if (widget.type === 'a') {
      return [
        {
          name: 'required',
          validator: value => value.trim() !== '',
          errorText: 'This field is required'
        }
      ];
    }
    if (widget.type === 'c') {
      return [
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
    }
    return [];
  };

  const handleTextInputChange: IEditableTextCell['handleTextInputChange'] = (newValue, evt, rowIndex, cellIndex) => {
    // Using numerically indexed cellKeys is just one way of identifying which widget property we need to modify.
    // You can use any logic necessary here to change your data based on the cellIndex from the table.
    const cellKeys: (keyof Widget)[] = ['field1', 'field2', 'field3', 'field4'];
    const cellKey = cellKeys[cellIndex];
    let newWidgets = Array.from(editedWidgets);
    // TODO: oh god we need to store editableValue for each cell of each row.......
    // this makes the built-in cancelCellEdits and validateCellEdits helpers not work... hmm...
    // Could we pass in the row object and pull out each row's cells' props? have a useState for cellProps indexed by row and cell index?
    newRows[rowIndex].cells[cellIndex].props.editableValue = newValue;
    this.setState({
      rows: newRows
    });
  };

  const columns: TableProps['cells'] = [
    'Text input col 1',
    'Disabled text input col 2',
    'Text input col 3',
    'Text input col 4'
  ];
  const rows: TableProps['rows'] = editedWidgets.map(widget => ({
    rowEditBtnAriaLabel: idx => `Edit row ${idx}`,
    rowSaveBtnAriaLabel: idx => `Save edits for row ${idx}`,
    rowCancelBtnAriaLabel: idx => `Cancel edits for row ${idx}`,
    rowEditValidationRules: getWidgetValidationRules(widget),
    cells: [
      {
        title: (value, rowIndex, cellIndex, props) => (
          <EditableTextCell
            value={value}
            rowIndex={rowIndex}
            cellIndex={cellIndex}
            props={props}
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
        title: (value, rowIndex, cellIndex, props) => (
          <EditableTextCell
            value={value}
            rowIndex={rowIndex}
            cellIndex={cellIndex}
            props={props}
            handleTextInputChange={this.handleTextInputChange}
            isDisabled
            inputAriaLabel="Row 1 cell 2 content"
          />
        ),
        props: {
          value: 'Row 1 cell 2, disabled content',
          name: 'uniqueIdRow1Cell2'
        }
      },
      {
        title: (value, rowIndex, cellIndex, props) => (
          <EditableTextCell
            value={value}
            rowIndex={rowIndex}
            cellIndex={cellIndex}
            props={props}
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
        title: (value, rowIndex, cellIndex, props) => (
          <EditableSelectInputCell
            value={value}
            rowIndex={rowIndex}
            cellIndex={cellIndex}
            props={props}
            onSelect={this.onSelect}
            isOpen={props.isSelectOpen}
            options={props.options.map((option, index) => (
              <SelectOption
                key={index}
                value={option.value}
                id={'uniqueIdRow1Cell4Option' + index}
                isPlaceholder={option.isPlaceholder}
              />
            ))}
            onToggle={isOpen => {
              this.onToggle(isOpen, rowIndex, cellIndex);
            }}
            selections={props.selected}
          />
        ),
        props: {
          value: ['Option 1'],
          name: 'uniqueIdRow1Cell4',
          isSelectOpen: props.isSelectOpen || false,
          selected: props.selected || ['Option 1'],
          options: [
            { value: 'Placeholder...', isPlaceholder: true },
            { value: 'Option 1' },
            { value: 'Option 2' },
            { value: 'Option 3' },
            { value: 'Option 4' },
            { value: 'Option 5' }
          ],
          editableSelectProps: {
            variant: 'single',
            'aria-label': 'Row 1 cell 4 content'
          }
        }
      }
    ]
  }));

  const actions: TableProps['actions'] = [
    {
      title: 'Some action',
      // eslint-disable-next-line no-console
      onClick: (event, rowId, rowData, extra) => console.log('clicked on Some action, on row: ', rowId, rowData, extra)
    }
  ];

  return (
    <Table
      actions={actions}
      onRowEdit={this.updateEditableRows}
      aria-label="Editable Rows Table"
      variant={TableVariant.compact}
      cells={columns}
      rows={rows}
    >
      <TableHeader />
      <TableBody />
    </Table>
  );
};
