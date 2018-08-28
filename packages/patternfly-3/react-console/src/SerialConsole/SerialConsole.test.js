/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow, render } from 'enzyme';
import SerialConsole from './SerialConsole';
import { CONNECTED, DISCONNECTED, LOADING } from './constants';

test('SerialConsole in the LOADING state', () => {
  const view = shallow(
    <SerialConsole onConnect={jest.fn()} onDisconnect={jest.fn()} status={LOADING} textLoading="My text for Loading" />
  );
  expect(view).toMatchSnapshot();
});

test('SerialConsole in the DISCONNECTED state', () => {
  const view = shallow(
    <SerialConsole
      id="myidprefix"
      onConnect={jest.fn()}
      onDisconnect={jest.fn()}
      status={DISCONNECTED}
      textDisconnectedTitle="My title for Disconnected"
      textDisconnected="My text for Disconnected"
      textConnect="My text for Connect"
    />
  );
  expect(view).toMatchSnapshot();
});

const connectedState = (
  <SerialConsole
    id="myidprefix"
    cols={33}
    rows={44}
    status={CONNECTED}
    onConnect={jest.fn()}
    onDisconnect={jest.fn()}
    textDisconnect="My text for Disconnect"
    textReconnect="My text for Reconnect"
  />
);

test('SerialConsole in the CONNECTED state', () => {
  const view = shallow(connectedState);
  expect(view).toMatchSnapshot();
});

test('Render SerialConsole in the CONNECTED state', () => {
  const view = render(connectedState);
  expect(view).toMatchSnapshot();
});

test('Pass class to SerialConsole', () => {
  const view = shallow(
    <SerialConsole onConnect={jest.fn()} onDisconnect={jest.fn()} status={LOADING} topClassName="my-top-class" />
  );
  expect(view).toMatchSnapshot();
});

test('Enable autoFit for SerialConsole', () => {
  const view = shallow(<SerialConsole onConnect={jest.fn()} onDisconnect={jest.fn()} status={CONNECTED} autoFit />);
  expect(view).toMatchSnapshot();
});
