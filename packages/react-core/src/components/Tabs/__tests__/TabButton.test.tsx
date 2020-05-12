import React from 'react';
import { shallow } from 'enzyme';
import { TabButton } from '../TabButton';

test('should render tab button', () => {
  const view = shallow(<TabButton>Tab button</TabButton>);
  expect(view).toMatchSnapshot();
});
