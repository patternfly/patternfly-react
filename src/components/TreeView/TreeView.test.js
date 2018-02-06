import React from 'react';
import renderer from 'react-test-renderer';

import { TreeView } from './index';
import { basicData } from './__mocks__/data';

test('TreeView renders properly', () => {
  const component = renderer.create(<TreeView nodes={basicData} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
