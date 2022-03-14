import React from 'react';

import { render, screen } from '@testing-library/react';

import { SerialConsole } from '../SerialConsole';
import { constants } from '../../common/constants';

const { CONNECTED, DISCONNECTED, LOADING } = constants;

describe('SerialConsole', () => {
  beforeAll(() => {
    window.HTMLCanvasElement.prototype.getContext = () => ({ canvas: {} } as any);
  });

  test('in the LOADING state', () => {
    render(
      <div data-testid="test-id">
        <SerialConsole
          onData={jest.fn()}
          onConnect={jest.fn()}
          onDisconnect={jest.fn()}
          status={LOADING}
          textLoading="My text for Loading"
        />
      </div>
    );
    expect(screen.getByTestId('test-id').innerHTML).toMatchSnapshot();
  });

  test('in the DISCONNECTED state', () => {
    render(
      <div data-testid="test-id">
        {' '}
        <SerialConsole
          onData={jest.fn()}
          onConnect={jest.fn()}
          onDisconnect={jest.fn()}
          status={DISCONNECTED}
          textDisconnected="My text for Disconnected"
          textConnect="My text for Connect"
        />
      </div>
    );
    expect(screen.getByTestId('test-id').innerHTML).toMatchSnapshot();
  });

  describe('with CONNECTED state', () => {
    beforeAll(() => {
      window.HTMLCanvasElement.prototype.getContext = () =>
        ({ canvas: {}, createLinearGradient: jest.fn(), fillRect: jest.fn() } as any);
      global.window.matchMedia = () => ({
        addListener: jest.fn(),
        removeListener: jest.fn(),
        matches: true,
        media: undefined,
        onchange: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn()
      });
    });

    test('renders', () => {
      render(
        <div data-testid="test-id">
          <SerialConsole
            cols={33}
            rows={44}
            status={CONNECTED}
            onData={jest.fn()}
            onConnect={jest.fn()}
            onDisconnect={jest.fn()}
            textDisconnect="My text for Disconnect"
          />
        </div>
      );

      expect(screen.getByTestId('test-id').innerHTML).toMatchSnapshot();
    });
  });
});
