/* eslint-env jest */

import React from 'react';
import { Spinner } from './index';
import renderer from 'react-test-renderer';

test('Spinner should not render children when loading', () => {
  const component = renderer.create(
    <Spinner loading>
      <span>Children should not render.</span>
    </Spinner>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Spinner should render children when not loading', () => {
  const component = renderer.create(
    <Spinner size="lg">
      <span>Children should be rendered.</span>
    </Spinner>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
