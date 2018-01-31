import React from 'react';
import renderer from 'react-test-renderer';

import { TreeView } from './index';
import { basic } from './__mocks__/data';

test('TreeView renders properly', () => {
  const component = renderer.create(<TreeView data={basic} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
