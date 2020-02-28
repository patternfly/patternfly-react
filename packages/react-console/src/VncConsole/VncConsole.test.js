/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow } from 'enzyme';
import { VncConsole } from './index';

test('placeholder render test', () => {
  const view = shallow(<VncConsole host="my.unknown.host" />);
  expect(view).toMatchSnapshot();
});
