import React from 'react';
import renderer from 'react-test-renderer';
import { Filter } from '../../index';
import { mockFilterFields } from './__mocks__/mockFilterFields';

test('Filter renders properly', () => {
  const component = renderer.create(<Filter fields={mockFilterFields} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
