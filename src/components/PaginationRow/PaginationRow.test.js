/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';

import PaginationRow from './PaginationRow';

test('PaginationRow renders properly the first page', () => {
  const component = renderer.create(
    <PaginationRow
      totalCount={75}
      perPage={10}
      currentPage={1}
      perPageOptions={[5, 10, 15]}
    />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('PaginationRow renders properly a middle page', () => {
  const component = renderer.create(
    <PaginationRow
      totalCount={75}
      perPage={10}
      currentPage={4}
      perPageOptions={[5, 10, 15]}
    />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('PaginationRow renders properly the last page', () => {
  const component = renderer.create(
    <PaginationRow
      totalCount={75}
      perPage={10}
      currentPage={8}
      perPageOptions={[5, 10, 15]}
    />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
