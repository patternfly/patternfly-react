import React from 'react';
import { mount } from 'enzyme';
import { TabButton } from '../TabButton';

test('should render tab button', () => {
  const view = mount(<TabButton>Tab button</TabButton>);
  expect(view).toMatchSnapshot();
});
