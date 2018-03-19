import React from 'react';
import renderer from 'react-test-renderer';
import { Icon } from './index';

test('patternfly Icon is working', () => {
  const component = renderer.create(<Icon type="pf" name="ok" />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('fontawesome Icon is working', () => {
  const component = renderer.create(<Icon name="angle-down" />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
