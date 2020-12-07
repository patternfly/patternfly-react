import React from 'react';
import { shallow } from 'enzyme';
import { SerialConsoleActions } from '../SerialConsoleActions';

test('placeholder render test', () => {
  const view = shallow(<SerialConsoleActions />);
  expect(view).toMatchSnapshot();
});

test('Render SerialConsoleActions', () => {
  const view = shallow(
    <SerialConsoleActions onDisconnect={jest.fn()} onReset={jest.fn()} />
  );
  expect(view).toMatchSnapshot();
});

test('Render SerialConsoleActions with custom texts', () => {
  const view = shallow(
    <SerialConsoleActions
      onDisconnect={jest.fn()}
      onReset={jest.fn()}
      textDisconnect="My Disconnect Text"
      textReset="My Reconnect Text"
    />
  );
  expect(view).toMatchSnapshot();
});
