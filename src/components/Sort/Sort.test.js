import React from 'react';
import renderer from 'react-test-renderer';
import { Sort } from '../../index';

const mockSortFields = [
  {
    id: 'name',
    title: 'Name',
    isNumeric: false
  },
  {
    id: 'address',
    title: 'Address',
    isNumeric: false
  },
  {
    id: 'birthMonth',
    title: 'Birth Month',
    isNumeric: true
  },
  {
    id: 'car',
    title: 'Car',
    isNumeric: false
  }
];

test('Sort renders numeric ascending properly', () => {
  const component = renderer.create(
    <Sort>
      <Sort.TypeSelector
        sortTypes={mockSortFields}
        currentSortType={mockSortFields[0]}
      />
      <Sort.DirectionSelector />
    </Sort>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Sort renders numeric descending properly', () => {
  const component = renderer.create(
    <Sort>
      <Sort.TypeSelector
        sortTypes={mockSortFields}
        currentSortType={mockSortFields[0]}
      />
      <Sort.DirectionSelector isAscending={false} />
    </Sort>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Sort renders alpha ascending properly', () => {
  const component = renderer.create(
    <Sort>
      <Sort.TypeSelector
        sortTypes={mockSortFields}
        currentSortType={mockSortFields[0]}
      />
      <Sort.DirectionSelector isNumeric={false} />
    </Sort>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Sort renders alpha descending properly', () => {
  const component = renderer.create(
    <Sort>
      <Sort.TypeSelector
        sortTypes={mockSortFields}
        currentSortType={mockSortFields[0]}
      />
      <Sort.DirectionSelector isNumeric={false} isAscending={false} />
    </Sort>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
