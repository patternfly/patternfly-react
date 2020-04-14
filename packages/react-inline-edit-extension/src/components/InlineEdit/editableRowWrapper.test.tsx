import React from 'react';
import { mount } from 'enzyme';

import { editableRowWrapper } from './editableRowWrapper';
import { TableEditConfirmation } from '../../utils';
import { mockClosest } from '../../test-helpers/helpers';

const TestRow = ({ trRef }) => <tr ref={trRef} />;

TestRow.defaultProps = {
  trRef: null
};

const getRowWrapper = (row, props) => {
  const RowWrapper = editableRowWrapper(TestRow);
  return <RowWrapper {...props} row={row} />;
};

const buildRow = (row = {}, editConfirmationType = TableEditConfirmation.ROW) => ({
  ...row,
  editConfig: { editConfirmationType }
});

describe('editableRowWrapper', () => {
  let mountOptions;
  let container;

  beforeEach(() => {
    container = mount(
      <table>
        <tbody />
      </table>
    );
    mountOptions = {
      attachTo: container.find('tbody').getDOMNode()
    };

    mockClosest(null, selector => (selector === 'table' ? container.getDOMNode() : undefined), true);
  });

  afterEach(() => {
    container.unmount();
  });

  test('renders correctly', () => {
    const trRef = jest.fn();
    const view = mount(
      getRowWrapper(buildRow({}, null), {
        onResize: jest.fn(),
        onScroll: jest.fn(),
        trRef
      }),
      mountOptions
    );
    expect(view).toMatchSnapshot();
    expect(trRef).toHaveBeenCalled();
  });

  test('sets editable row classname', () => {
    [...Object.keys(TableEditConfirmation), null].forEach(confirmationType => {
      const view = mount(getRowWrapper(buildRow({}, confirmationType)), mountOptions);
      expect(view.find('.pf-c-table__editable-row')).toHaveLength(1);
      view.detach();
    });
  });

  test('has inline edit buttons', () => {
    [
      buildRow({ isEditing: true }),
      buildRow({ isEditing: true, isParentEditing: true }), // expandable
      buildRow({ isEditing: true, isChildEditing: true, isLastVisibleParent: true }), // expandable
      buildRow({ isTableEditing: true, isFirstVisible: true }, TableEditConfirmation.TABLE_TOP),
      buildRow({ isTableEditing: true, isLastVisible: true }, TableEditConfirmation.TABLE_BOTTOM)
    ].forEach(row => {
      const view = mount(getRowWrapper(row), mountOptions);
      expect(view.find('.pf-c-table__inline-edit-buttons')).toHaveLength(1);
      view.detach();
    });
  });

  test('does not have inline edit buttons', () => {
    [
      buildRow({ isEditing: true }, TableEditConfirmation.NONE),
      buildRow({ isEditing: true }, TableEditConfirmation.TABLE_TOP),
      buildRow({ isEditing: true }, TableEditConfirmation.TABLE_BOTTOM),
      buildRow({ isEditing: true, isParentEditing: true, isLastVisible: true }), // expandable
      buildRow({ isEditing: true, isChildEditing: true }), // expandable
      buildRow({ isTableEditing: true, isLastVisible: true }, TableEditConfirmation.NONE),
      buildRow({ isTableEditing: true, isLastVisible: true }),
      buildRow({ isTableEditing: true }, TableEditConfirmation.TABLE_TOP),
      buildRow({ isTableEditing: true }, TableEditConfirmation.TABLE_BOTTOM),
      buildRow({ isTableEditing: true, isLastVisible: true }, TableEditConfirmation.TABLE_TOP),
      buildRow({ isTableEditing: true, isFirstVisible: true }, TableEditConfirmation.TABLE_BOTTOM)
    ].forEach(row => {
      const view = mount(getRowWrapper(row), mountOptions);
      expect(view.find('.pf-c-table__inline-edit-buttons')).toHaveLength(0);
      view.detach();
    });
  });

  test('onEditConfirmed and onEditCanceled called', () => {
    const onEditConfirmed = jest.fn();
    const onEditCanceled = jest.fn();
    const row = {
      isEditing: true,
      editConfig: {
        editConfirmationType: TableEditConfirmation.ROW,
        onEditConfirmed,
        onEditCanceled
      }
    };

    const view = mount(getRowWrapper(row), mountOptions);
    view.find('.pf-c-table__inline-edit-buttons button.pf-c-button.pf-m-primary').simulate('mouseup');
    expect(onEditConfirmed).toHaveBeenCalled();

    view.find('.pf-c-table__inline-edit-buttons button.pf-c-button.pf-m-plain').simulate('mouseup');
    expect(onEditCanceled).toHaveBeenCalled();
  });
});
