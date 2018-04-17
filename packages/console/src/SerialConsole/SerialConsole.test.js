/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow } from 'enzyme';
import SerialConsole from './SerialConsole';

test('placeholder render test', () => {
  const view = shallow(<SerialConsole />);
  expect(view).toMatchSnapshot();
});
