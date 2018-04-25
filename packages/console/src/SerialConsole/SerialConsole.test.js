/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow } from 'enzyme';
import SerialConsole from './SerialConsole';
import { noop } from 'patternfly-react';

test('placeholder render test', () => {
  const view = shallow(<SerialConsole onConnect={noop} onDisconnect={noop} status='loading'/>);
  expect(view).toMatchSnapshot();
});
