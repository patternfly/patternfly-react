import React from 'react';
import { shallow } from 'enzyme';
import AboutModalBoxLogo from './AboutModalBoxLogo';

test('test About Modal Brand', () => {
  const view = shallow(<AboutModalBoxLogo src="logoImg..." alt="logo" />);
  expect(view).toMatchSnapshot();
});
