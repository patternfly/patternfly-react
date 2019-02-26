import React from 'react';
import { mount } from 'enzyme';
import { Table, TableHeader, TableBody, sortable } from './index';
import { rows, columns, actions } from '../../test-helpers/data-sets';
import MockedTable from '../../test-helpers/MockedTableChanges';

describe('Collapsible table', () => {
  test('should call correct function', () => {
    const items = [...rows];
    items[0].isOpen = false;
    items[1].parent = 0;
    const onCollapse = jest.fn();
    const view = mount(
      <Table caption="Collapsible table" onCollapse={onCollapse} cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
    view
      .find('.pf-c-table__toggle button')
      .first()
      .simulate('click');
    expect(onCollapse.mock.calls).toHaveLength(1);
  });
});

describe('Selectable table', () => {
  test('should call correct function', () => {
    const onSelect = jest.fn();
    const view = mount(
      <Table caption="Collapsible table" onSelect={onSelect} cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
    view
      .find('tbody .pf-c-table__check input')
      .first()
      .simulate('change');
    expect(onSelect.mock.calls).toHaveLength(1);
  });
});

describe('Action table', () => {
  test('should call correct functions', () => {
    const actionResolver = jest.fn();
    const areActionsDisabled = jest.fn();
    mount(
      <Table
        caption="Collapsible table"
        actionResolver={actionResolver}
        areActionsDisabled={areActionsDisabled}
        cells={columns}
        rows={rows}
      >
        <TableHeader />
        <TableBody />
      </Table>
    );

    const numberOfRenders = rows.length;

    expect(actionResolver.mock.calls).toHaveLength(numberOfRenders);
    expect(areActionsDisabled.mock.calls).toHaveLength(numberOfRenders);
  });

  test('should call action callback', () => {
    const onActionClick = jest.fn();
    const customActions = [
      {
        title: 'Some',
        onClick: onActionClick
      },
      ...actions
    ];
    const view = mount(
      <Table caption="Collapsible table" actions={customActions} cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );

    view
      .find('tbody .pf-c-dropdown button')
      .first()
      .simulate('click');

    const actionElements = view.find('tbody .pf-c-dropdown__menu li');

    expect(actionElements).toHaveLength(customActions.length);

    actionElements
      .first()
      .find('a')
      .simulate('click');
    expect(onActionClick.mock.calls).toHaveLength(1);
  });
});

describe('Sortable table', () => {
  test('should call correct function', () => {
    const onSort = jest.fn();
    const sortBy = {};
    const header = [...columns];
    header[0].transforms = [sortable];
    const view = mount(
      <Table caption="Sortable table" onSort={onSort} sortBy={sortBy} cells={header} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
    view
      .find('thead .pf-c-table__sort button')
      .first()
      .simulate('click');
    expect(onSort.mock.calls).toHaveLength(1);
  });
});
