import React from 'react';
import { mount } from 'enzyme';
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
  const component = mount(
    <Sort>
      <Sort.TypeSelector sortTypes={mockSortFields} currentSortType={mockSortFields[0]} />
      <Sort.DirectionSelector />
    </Sort>
  );

  expect(component.render()).toMatchSnapshot();
});

test('Sort renders numeric descending properly', () => {
  const component = mount(
    <Sort>
      <Sort.TypeSelector sortTypes={mockSortFields} currentSortType={mockSortFields[0]} />
      <Sort.DirectionSelector isAscending={false} />
    </Sort>
  );

  expect(component.render()).toMatchSnapshot();
});

test('Sort renders alpha ascending properly', () => {
  const component = mount(
    <Sort>
      <Sort.TypeSelector sortTypes={mockSortFields} currentSortType={mockSortFields[0]} />
      <Sort.DirectionSelector isNumeric={false} />
    </Sort>
  );

  expect(component.render()).toMatchSnapshot();
});

test('Sort renders alpha descending properly', () => {
  const component = mount(
    <Sort>
      <Sort.TypeSelector sortTypes={mockSortFields} currentSortType={mockSortFields[0]} />
      <Sort.DirectionSelector isNumeric={false} isAscending={false} />
    </Sort>
  );

  expect(component.render()).toMatchSnapshot();
});
