import React from 'react';
import renderer from 'react-test-renderer';
import { MockClientPaginationTable } from './__mocks__/mockClientPaginationTable';
import { MockServerPaginationTable } from './__mocks__/mockServerPaginationTable';

test('Mock Client Pagination DataTable renders', () => {
  const component = renderer.create(
    <MockClientPaginationTable onRowsLogger={jest.fn()} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Mock Server Pagination DataTable renders', () => {
  const component = renderer.create(
    <MockServerPaginationTable onServerPageLogger={jest.fn()} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
