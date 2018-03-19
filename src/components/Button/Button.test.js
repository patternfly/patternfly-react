/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';

import Button from './Button';

test('Button renders properly', () => {
  const component = renderer.create(
    <Button id="button1">Default button</Button>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button allows to specify size and style', () => {
  const component = renderer.create(
    <Button id="button1" bsStyle="primary" bsSize="large">
      Large Primary button
    </Button>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
