import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { AccessConsoles } from '../AccessConsoles';
import { SerialConsole } from '../../SerialConsole';
import { VncConsole } from '../../VncConsole';
import { DesktopViewer } from '../../DesktopViewer';
import { constants } from '../../common/constants';

const { SERIAL_CONSOLE_TYPE, LOADING } = constants;

const MyVncConsoleTestWrapper = () => <p>VNC console text</p>;
const SerialConsoleConnected = () => <p>Serial console text</p>;

const vnc = {
  address: 'my.host.com',
  port: 5902,
  tlsPort: '5903'
};

describe('AccessConsoles', () => {
  beforeAll(() => {
    window.HTMLCanvasElement.prototype.getContext = () => ({ canvas: {} } as any);
  });

  test('with SerialConsole as a single child', () => {
    const { asFragment } = render(
      <AccessConsoles>
        <SerialConsole onData={jest.fn()} onConnect={jest.fn()} onDisconnect={jest.fn()} status={LOADING} />
      </AccessConsoles>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('with VncConsole as a single child', () => {
    const { asFragment } = render(
      <AccessConsoles>
        <VncConsole host="foo.bar.host" textDisconnected="Disconnected state text" />
      </AccessConsoles>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('with SerialConsole and VncConsole as children', () => {
    const { asFragment } = render(
      <AccessConsoles>
        <VncConsole host="foo.bar.host" textDisconnected="Disconnected state text" />
        <SerialConsole onData={jest.fn()} onConnect={jest.fn()} onDisconnect={jest.fn()} status={LOADING} />
      </AccessConsoles>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('with wrapped SerialConsole as a child', () => {
    const { asFragment } = render(
      <AccessConsoles>
        <SerialConsoleConnected />
      </AccessConsoles>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('with preselected SerialConsole', () => {
    const { asFragment } = render(
      <AccessConsoles preselectedType={SERIAL_CONSOLE_TYPE}>
        <SerialConsole onData={jest.fn()} onConnect={jest.fn()} onDisconnect={jest.fn()} status={LOADING} />
      </AccessConsoles>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('switching SerialConsole and VncConsole', () => {
    render(
      <AccessConsoles>
        <MyVncConsoleTestWrapper />
        <SerialConsole onData={jest.fn()} onConnect={jest.fn()} onDisconnect={jest.fn()} status={LOADING} />
      </AccessConsoles>
    );

    // VNC (first option) is initially selected
    expect(screen.queryByText(/Loading/)).toBeNull();
    expect(screen.getByText('VNC console text')).toBeInTheDocument();

    // Open dropdown and select "Serial console" option
    userEvent.click(screen.getByRole('button', { name: 'Options menu' }));
    userEvent.click(screen.getByText('Serial console', { selector: 'button' }));

    // VNC content is no longer visible, and loading contents of the Serial console are visible.
    expect(screen.getByText(/Loading/)).toBeInTheDocument();
    expect(screen.queryByText('VNC console text')).toBeNull();
  });

  test('Empty', () => {
    const { asFragment } = render(<AccessConsoles />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('with DesktopViewer', () => {
    const { asFragment } = render(
      <AccessConsoles>
        <DesktopViewer vnc={vnc} />
      </AccessConsoles>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
