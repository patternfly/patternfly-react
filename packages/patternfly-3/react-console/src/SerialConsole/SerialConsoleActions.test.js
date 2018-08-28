/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow } from 'enzyme';
import SerialConsoleActions from './SerialConsoleActions';

test('placeholder render test', () => {
  const view = shallow(<SerialConsoleActions idPrefix="serial-console-actions" />);
  expect(view).toMatchSnapshot();
});

test('Render SerialConsoleActions with the Disconnect button enabled', () => {
  const view = shallow(
    <SerialConsoleActions idPrefix="idPrefix" isDisconnectEnabled onDisconnect={jest.fn()} onReset={jest.fn()} />
  );
  expect(view).toMatchSnapshot();
});

test('Render SerialConsoleActions with custom texts', () => {
  const view = shallow(
    <SerialConsoleActions
      idPrefix="idPrefix"
      isDisconnectEnabled
      onDisconnect={jest.fn()}
      onReset={jest.fn()}
      textDisconnect="My Disconnect Text"
      textReconnect="My Reconnect Text"
    />
  );
  expect(view).toMatchSnapshot();
});
