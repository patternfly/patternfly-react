import React from 'react';
import { mount } from 'enzyme';
import { Table } from './index';
import { noop } from '../../common/helpers';

import { mockBootstrapRows } from './__mocks__/mockBootstrapRows';
import { mockBootstrapColumns, mockPatternflyColumns } from './__mocks__/mockBootstrapColumns';

import { MockClientPaginationTable } from './__mocks__/mockClientPaginationTable';
import { MockServerPaginationTable } from './__mocks__/mockServerPaginationTable';

test('Mock Client Pagination table renders', () => {
  const component = mount(<MockClientPaginationTable onRowsLogger={jest.fn()} />);

  expect(component.render()).toMatchSnapshot();
});

test('Mock Server Pagination table renders', () => {
  const component = mount(<MockServerPaginationTable onServerPageLogger={jest.fn()} />);

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
      <Table.Body rows={[mockBootstrapRows[0]]} rowKey="id" onRow={options.onRow || noop} />
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
