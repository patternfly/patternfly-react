import React from 'react';

import { render } from '@testing-library/react';

import { SerialConsole } from '../SerialConsole';
import { constants } from '../../common/constants';

const { CONNECTED, DISCONNECTED, LOADING } = constants;

describe('SerialConsole', () => {
  beforeAll(() => {
    window.HTMLCanvasElement.prototype.getContext = () => ({ canvas: {} } as any);
  });

  test('in the LOADING state', () => {
    const { asFragment } = render(
      <SerialConsole
        onData={jest.fn()}
        onConnect={jest.fn()}
        onDisconnect={jest.fn()}
        status={LOADING}
        textLoading="My text for Loading"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('in the DISCONNECTED state', () => {
    const { asFragment } = render(
      <SerialConsole
        onData={jest.fn()}
        onConnect={jest.fn()}
        onDisconnect={jest.fn()}
        status={DISCONNECTED}
        textDisconnected="My text for Disconnected"
        textConnect="My text for Connect"
      />
    );
    expect(asFragment()).toMatchSnapshot();
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
      const { asFragment } = render(
        <SerialConsole
          cols={33}
          rows={44}
          status={CONNECTED}
          onData={jest.fn()}
          onConnect={jest.fn()}
          onDisconnect={jest.fn()}
          textDisconnect="My text for Disconnect"
        />
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
