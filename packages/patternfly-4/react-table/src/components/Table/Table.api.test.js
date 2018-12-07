import React from 'react';
import { mount } from 'enzyme';
import { Table, TableHeader, TableBody, sortable } from './index';
import { rows, columns } from '../../test-helpers/data-sets';
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
    view.find('.pf-c-table__toggle button').first().simulate('click');
    expect(onCollapse.mock.calls.length).toBe(1);
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
    view.find('tbody .pf-c-table__check input').first().simulate('change');
    expect(onSelect.mock.calls.length).toBe(1);
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
      </Table >
    );
    view.find('thead .pf-c-table__sort button').first().simulate('click');
    expect(onSort.mock.calls.length).toBe(1);
  });
});
