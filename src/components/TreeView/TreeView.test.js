import React from 'react';
import { mount } from 'enzyme';

import { TreeView } from './index';
import { basicData } from './__mocks__/data';

test('TreeView renders properly', () => {
  const component = mount(<TreeView nodes={basicData} />);

  expect(component.render()).toMatchSnapshot();
});
