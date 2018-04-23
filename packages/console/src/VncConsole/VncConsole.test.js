/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow } from 'enzyme';
import VncConsole from './VncConsole';

test('placeholder render test', () => {
  const view = shallow(<VncConsole />);
  expect(view).toMatchSnapshot();
});
