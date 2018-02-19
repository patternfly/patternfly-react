/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';

import ProgressBar from './ProgressBar';

test('ProgressBar renders properly', () => {
  const component = renderer.create(<ProgressBar now={60} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
