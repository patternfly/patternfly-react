import React from 'react';
import { mount } from 'enzyme';
import { Table, TableHeader, TableBody, RowWrapper } from '@patternfly/react-table';
import { TextInput } from '@patternfly/react-core';

import { editableRowWrapper } from './editableRowWrapper';
import { editableTableBody } from './editableTableBody';
import { inlineEditFormatterFactory, TableEditConfirmation } from '../../utils';
import { TableTextInput } from '../TableTextInput';

import { rows, columns } from '../../test-helpers/data-sets';
import { mockClosest, makeTableId } from '../../test-helpers/helpers';

const firstColTitle = 'editcolfirst';
const lastColTitle = 'editcollast';
const firstInputName = 'inputOne';
const secondInputName = 'inputTwo';

const editRowIndex = 2;

const firstColEditedRowInputId = {
  rowIndex: editRowIndex,
  columnIndex: 0,
  column: {
    property: firstColTitle
  },
  name: firstInputName
};

const lastColEditedRowInputId = {
  rowIndex: editRowIndex,
  columnIndex: columns.length + 2 - 1,
  column: {
    property: lastColTitle
  },
  name: secondInputName
};

describe('Editable table', () => {
  let mountOptions;
  let container;

  beforeEach(() => {
    container = mount(<div />);

    mountOptions = {
      attachTo: container.getDOMNode()
    };

    // mock closest for selecting the first column (firing onEditCellClicked) and resolving table for confirm buttons
    mockClosest(
      {
        '[data-key]': {
          getAttribute: () => firstColEditedRowInputId.columnIndex,
          contains: elem => elem.getAttribute('id') === makeTableId(firstColEditedRowInputId)
        },
        '[id]': {
          getAttribute: () => makeTableId(firstColEditedRowInputId)
        }
      },
      selector => (selector === 'table' ? container.getDOMNode().getElementsByTagName('table')[0] : undefined),
      true
    );
  });

  afterEach(() => {
    container.unmount();
  });

  test('should call correct function', () => {
    const ComposedBody = editableTableBody(TableBody);
    const ComposedRowWrapper = editableRowWrapper(RowWrapper);

    const onBlur = jest.fn();

    const inlineEditingFormatter = inlineEditFormatterFactory({
      renderEdit: (value, { columnIndex, rowIndex, column }, { activeEditId }) => {
        const firstInputId = makeTableId({
          rowIndex,
          columnIndex,
          column,
          name: firstInputName
        });
        const secondInputId = makeTableId({
          rowIndex,
          columnIndex,
          column,
          name: secondInputName
        });
        return (
          <React.Fragment>
            <TableTextInput
              id={firstInputId}
              defaultValue={value}
              onBlur={onBlur}
              autoFocus={activeEditId === firstInputId}
            />
            <TableTextInput
              id={secondInputId}
              defaultValue={value}
              onBlur={onBlur}
              autoFocus={activeEditId === secondInputId}
            />
          </React.Fragment>
        );
      }
    });

    const editableCols = [
      {
        title: firstColTitle,
        cellFormatters: [inlineEditingFormatter]
      },
      ...columns,
      {
        title: lastColTitle,
        cellFormatters: [inlineEditingFormatter]
      }
    ];

    const editableRows = rows.map(row => ({
      ...row,
      cells: ['', ...row.cells, ''] // add two new columns
    }));
    editableRows[editRowIndex].isEditing = true;

    const editConfig = {
      activeEditId: makeTableId(lastColEditedRowInputId),
      onEditCellClicked: jest.fn(),
      editConfirmationType: TableEditConfirmation.ROW,
      onEditConfirmed: jest.fn(),
      onEditCanceled: jest.fn()
    };
    const view = mount(
      <Table caption="Editable table" cells={editableCols} rows={editableRows} rowWrapper={ComposedRowWrapper}>
        <TableHeader />
        <ComposedBody editConfig={editConfig} />
      </Table>,
      mountOptions
    );

    // calls onBlur properly
    const editTextInputWrapper = view
      .find(TextInput)
      .find(`#${makeTableId(lastColEditedRowInputId)}`)
      .first();
    editTextInputWrapper.prop('onBlur')({ currentTarget: { value: 'water' } });

    expect(onBlur).toHaveBeenCalled();
    expect(onBlur.mock.calls).toHaveLength(1);
    expect(onBlur.mock.calls[0][0]).toBe('water');

    // responds to cell click
    view
      .find(`#${makeTableId(firstColEditedRowInputId)}`)
      .hostNodes()
      .simulate('mousedown');

    // should immediately call onEditCellClicked
    setTimeout(() => expect(editConfig.onEditCellClicked).toHaveBeenCalled(), 0);

    // responds to confirmation button clicks
    view.find('.pf-c-table__inline-edit-buttons button.pf-c-button.pf-m-primary').simulate('mouseup');
    expect(editConfig.onEditConfirmed).toHaveBeenCalled();

    view.find('.pf-c-table__inline-edit-buttons button.pf-c-button.pf-m-plain').simulate('mouseup');
    expect(editConfig.onEditCanceled).toHaveBeenCalled();
  });
});
