import React from 'react';
import renderer from 'react-test-renderer';
import { Table } from './index';

import { mockBootstrapRows } from './__mocks__/mockBootstrapRows';
import {
  mockBootstrapColumns,
  mockPatternflyColumns
} from './__mocks__/mockBootstrapColumns';

import { MockClientPaginationTable } from './__mocks__/mockClientPaginationTable';
import { MockServerPaginationTable } from './__mocks__/mockServerPaginationTable';

test('Mock Client Pagination table renders', () => {
  const component = renderer.create(
    <MockClientPaginationTable onRowsLogger={jest.fn()} />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Mock Server Pagination table renders', () => {
  const component = renderer.create(
    <MockServerPaginationTable onServerPageLogger={jest.fn()} />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Bootstrap basic table renders properly', () => {
  const component = renderer.create(
    <Table.PfProvider columns={mockBootstrapColumns}>
      <caption>Optional table caption.</caption>
      <Table.Header />
      <Table.Body rows={mockBootstrapRows.slice(0, 3)} rowKey="id" />
    </Table.PfProvider>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Bootstrap striped table renders properly', () => {
  const component = renderer.create(
    <Table.PfProvider striped columns={mockBootstrapColumns}>
      <Table.Header />
      <Table.Body rows={mockBootstrapRows.slice(0, 3)} rowKey="id" />
    </Table.PfProvider>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Bootstrap bordered table renders properly', () => {
  const component = renderer.create(
    <Table.PfProvider bordered columns={mockBootstrapColumns}>
      <Table.Header />
      <Table.Body rows={mockBootstrapRows.slice(0, 3)} rowKey="id" />
    </Table.PfProvider>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Bootstrap hover table renders properly', () => {
  const component = renderer.create(
    <Table.PfProvider hover columns={mockBootstrapColumns}>
      <Table.Header />
      <Table.Body rows={mockBootstrapRows.slice(0, 3)} rowKey="id" />
    </Table.PfProvider>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Bootstrap condensed table renders properly', () => {
  const component = renderer.create(
    <Table.PfProvider condensed columns={mockBootstrapColumns}>
      <Table.Header />
      <Table.Body rows={mockBootstrapRows.slice(0, 3)} rowKey="id" />
    </Table.PfProvider>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Bootstrap contextual classes table renders properly', () => {
  const component = renderer.create(
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
          }
        }}
      />
    </Table.PfProvider>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Bootstrap responsive table renders properly', () => {
  const component = renderer.create(
    <div className="table-responsive">
      <Table.PfProvider columns={mockBootstrapColumns}>
        <Table.Header />
        <Table.Body rows={mockBootstrapRows.slice(0, 3)} rowKey="id" />
      </Table.PfProvider>
    </div>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Patternfly table renders properly', () => {
  const component = renderer.create(
    <Table.PfProvider striped bordered hover columns={mockPatternflyColumns}>
      <Table.Header />
      <Table.Body rows={mockBootstrapRows} rowKey="id" />
    </Table.PfProvider>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
