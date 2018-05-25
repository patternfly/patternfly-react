import React from 'react';
import { mount } from 'enzyme';
import { Table } from './index';
import { noop } from '../../common/helpers';

import { mockBootstrapRows } from './__mocks__/mockBootstrapRows';
import {
  mockBootstrapColumns,
  mockPatternflyColumns
} from './__mocks__/mockBootstrapColumns';

import { MockClientPaginationTable } from './__mocks__/mockClientPaginationTable';
import { MockServerPaginationTable } from './__mocks__/mockServerPaginationTable';
import MockTreeGrid from './__mocks__/mockTreeGridTable';
import {
  filterVisible,
  setVisibleChildren,
  defaultRowValues,
  getShowingChildren
} from './TreeGridTableHelpers';

test('Mock Client Pagination table renders', () => {
  const component = mount(
    <MockClientPaginationTable onRowsLogger={jest.fn()} />
  );

  expect(component.render()).toMatchSnapshot();
});

test('Mock Server Pagination table renders', () => {
  const component = mount(
    <MockServerPaginationTable onServerPageLogger={jest.fn()} />
  );

  expect(component.render()).toMatchSnapshot();
});

test('Bootstrap basic table renders properly', () => {
  const component = mount(
    <Table.PfProvider columns={mockBootstrapColumns}>
      <caption>Optional table caption.</caption>
      <Table.Header />
      <Table.Body rows={mockBootstrapRows.slice(0, 3)} rowKey="id" />
    </Table.PfProvider>
  );

  expect(component.render()).toMatchSnapshot();
});

test('Bootstrap striped table renders properly', () => {
  const component = mount(
    <Table.PfProvider striped columns={mockBootstrapColumns}>
      <Table.Header />
      <Table.Body rows={mockBootstrapRows.slice(0, 3)} rowKey="id" />
    </Table.PfProvider>
  );

  expect(component.render()).toMatchSnapshot();
});

test('Bootstrap bordered table renders properly', () => {
  const component = mount(
    <Table.PfProvider bordered columns={mockBootstrapColumns}>
      <Table.Header />
      <Table.Body rows={mockBootstrapRows.slice(0, 3)} rowKey="id" />
    </Table.PfProvider>
  );

  expect(component.render()).toMatchSnapshot();
});

test('Bootstrap hover table renders properly', () => {
  const component = mount(
    <Table.PfProvider hover columns={mockBootstrapColumns}>
      <Table.Header />
      <Table.Body rows={mockBootstrapRows.slice(0, 3)} rowKey="id" />
    </Table.PfProvider>
  );

  expect(component.render()).toMatchSnapshot();
});

test('Bootstrap condensed table renders properly', () => {
  const component = mount(
    <Table.PfProvider condensed columns={mockBootstrapColumns}>
      <Table.Header />
      <Table.Body rows={mockBootstrapRows.slice(0, 3)} rowKey="id" />
    </Table.PfProvider>
  );

  expect(component.render()).toMatchSnapshot();
});

test('Bootstrap contextual classes table renders properly', () => {
  const component = mount(
    <Table.PfProvider condensed columns={mockBootstrapColumns}>
      <Table.Header />
      <Table.Body
        rows={mockBootstrapRows}
        rowKey="id"
        onRow={(row, { rowIndex }) => {
          switch (rowIndex) {
            case 0:
              return { className: 'active' };
            case 2:
              return { className: 'success' };
            case 4:
              return { className: 'warning' };
            case 6:
              return { className: 'danger' };
            default:
              return null;
          }
        }}
      />
    </Table.PfProvider>
  );

  expect(component.render()).toMatchSnapshot();
});

test('Bootstrap responsive table renders properly', () => {
  const component = mount(
    <div className="table-responsive">
      <Table.PfProvider columns={mockBootstrapColumns}>
        <Table.Header />
        <Table.Body rows={mockBootstrapRows.slice(0, 3)} rowKey="id" />
      </Table.PfProvider>
    </div>
  );

  expect(component.render()).toMatchSnapshot();
});

test('Patternfly table renders properly', () => {
  const component = mount(
    <Table.PfProvider striped bordered hover columns={mockPatternflyColumns}>
      <Table.Header />
      <Table.Body rows={mockBootstrapRows} rowKey="id" />
    </Table.PfProvider>
  );

  expect(component.render()).toMatchSnapshot();
});

describe('TreeGridTable', () => {
  test('renders correctly', () => {
    const component = mount(<MockTreeGrid />);

    expect(component.render()).toMatchSnapshot();
  });

  test('filterVisible', () => {
    expect(
      filterVisible([{ visible: true }, { visible: false }, { visible: true }])
    ).toHaveLength(2);
  });

  test('setVisibleChildren should hide all if first is collapsed', () => {
    const rows = [
      { visible: true, id: 0, _index: 0 },
      { visible: true, id: 1, _index: 1, parent: 0, collapsed: true },
      { visible: true, id: 2, _index: 2, parent: 1 },
      { visible: true, id: 3, _index: 3, parent: 2 }
    ];
    setVisibleChildren(1, rows);
    expect(rows[1].visible).toBe(true);
    expect(rows[2].visible).toBe(false);
  });

  test('setVisibleChildren should not hide all if first is not collapsed', () => {
    const rows = [
      { visible: true, id: 0, _index: 0 },
      { visible: true, id: 1, _index: 1, parent: 0 },
      { visible: true, id: 2, _index: 2, parent: 1 },
      { visible: true, id: 3, _index: 3, parent: 2 }
    ];
    setVisibleChildren(1, rows);
    expect(rows[1].visible).toBe(true);
    expect(rows[2].visible).toBe(true);
  });

  test('defaultRowValues', () => {
    const rows = defaultRowValues([
      { visible: true, id: 0 },
      { visible: true, id: 2, parent: 1 },
      { visible: true, id: 1, parent: 0 },
      { visible: true, id: 3, parent: 2 }
    ]);
    expect(rows[0]).toMatchObject({
      visible: true,
      id: 0,
      _index: 0,
      collapsed: false
    });
    expect(rows[1]).toMatchObject({
      visible: true,
      id: 1,
      _index: 1,
      collapsed: false
    });
  });

  test('getShowingChildren', () => {
    expect(getShowingChildren({ rowData: { collapsed: true } })).toBe(true);
  });
});

describe('inline edit', () => {
  const getTable = options => (
    <Table.PfProvider
      striped
      bordered
      hover
      dataTable
      inlineEdit
      columns={mockPatternflyColumns}
      components={options.components}
    >
      <Table.Header onRow={options.onHeaderRow || noop} />
      <Table.Body
        rows={[mockBootstrapRows[0]]}
        rowKey="id"
        onRow={options.onRow || noop}
      />
    </Table.PfProvider>
  );

  test('Inline edit row renders properly', () => {
    const wrapper = mount(<div />);
    const wrapperNode = wrapper.getDOMNode();
    const tableComponent = getTable({
      components: {
        body: {
          row: Table.InlineEditRow,
          cell: cellProps => cellProps.children
        }
      },
      onRow: (rowData, { rowIndex }) => ({
        role: 'row',
        isEditing: () => rowIndex === 0,
        onCancel: noop,
        onConfirm: noop,
        last: false,
        buttonsMountpoint: wrapperNode
      })
    });
    mount(tableComponent, { attachTo: wrapperNode });

    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Inline edit last row renders properly last row', () => {
    const wrapper = mount(<div />);
    const wrapperNode = wrapper.getDOMNode();
    const tableComponent = getTable({
      components: {
        body: {
          row: Table.InlineEditRow,
          cell: cellProps => cellProps.children
        }
      },
      onRow: (rowData, { rowIndex }) => ({
        role: 'row',
        isEditing: () => rowIndex === 0,
        onCancel: noop,
        onConfirm: noop,
        last: true,
        buttonsMountpoint: wrapperNode
      })
    });
    mount(tableComponent, { attachTo: wrapperNode });

    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Inline edit header row renders', () => {
    const wrapper = mount(<div />);
    const wrapperNode = wrapper.getDOMNode();
    const tableComponent = getTable({
      components: {
        header: {
          row: Table.TableInlineEditHeaderRow,
          cell: cellProps => cellProps.children
        }
      },
      onHeaderRow: () => ({
        role: 'row',
        isEditing: () => true,
        onCancel: noop,
        onConfirm: noop,
        buttonsMountpoint: wrapperNode
      })
    });
    mount(tableComponent, { attachTo: wrapperNode });

    expect(wrapper.render()).toMatchSnapshot();
  });
});
