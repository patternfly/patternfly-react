import React from 'react';
import { render } from '@testing-library/react';
import { SerialConsoleActions } from '../SerialConsoleActions';

test('Render SerialConsoleActions', () => {
  const { asFragment } = render(<SerialConsoleActions onDisconnect={jest.fn()} onReset={jest.fn()} />);
  expect(asFragment()).toMatchSnapshot();
});

test('Render SerialConsoleActions with custom texts', () => {
  const { asFragment } = render(
    <SerialConsoleActions
      onDisconnect={jest.fn()}
      onReset={jest.fn()}
      textDisconnect="My Disconnect Text"
      textReset="My Reconnect Text"
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
