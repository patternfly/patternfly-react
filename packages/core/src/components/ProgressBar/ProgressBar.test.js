import React from 'react';
import { mount } from 'enzyme';

import ProgressBar from './ProgressBar';

test('ProgressBar renders properly', () => {
  const component = mount(<ProgressBar now={60} />);

  expect(component.render()).toMatchSnapshot();
});
