import React from 'react';
import { render } from '@testing-library/react';
import { SerialConsoleActions } from '../SerialConsoleActions';

test('placeholder render test', () => {
  const view = render(<SerialConsoleActions />);
  expect(view.container).toMatchSnapshot();
});

test('Render SerialConsoleActions', () => {
  const view = render(
    <SerialConsoleActions onDisconnect={jest.fn()} onReset={jest.fn()} />
  );
  expect(view.container).toMatchSnapshot();
});

test('Render SerialConsoleActions with custom texts', () => {
  const view = render(
    <SerialConsoleActions
      onDisconnect={jest.fn()}
      onReset={jest.fn()}
      textDisconnect="My Disconnect Text"
      textReset="My Reconnect Text"
    />
  );
  expect(view.container).toMatchSnapshot();
});
