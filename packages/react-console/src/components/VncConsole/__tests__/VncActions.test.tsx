import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { VncActions } from '../VncActions';

describe('VncActions', () => {
  test('placeholder render test', () => {
    const { asFragment } = render(<VncActions onCtrlAltDel={jest.fn()} onDisconnect={jest.fn()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('VncActions renders correctly component hierarchy', () => {
    const { asFragment } = render(
      <VncActions
        textSendShortcut="My Send Shortcut description"
        textCtrlAltDel="foobar"
        onCtrlAltDel={jest.fn()}
        onDisconnect={jest.fn()}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('VncActions renders correctly html', () => {
    const { asFragment } = render(
      <VncActions
        textSendShortcut="My Send Shortcut description"
        textCtrlAltDel="foobar"
        onCtrlAltDel={jest.fn()}
        onDisconnect={jest.fn()}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('VncActions calls ctrl+alt+del action', () => {
    const onCtrlAltDel = jest.fn();

    render(
      <VncActions
        textSendShortcut="My Send Shortcut description"
        textCtrlAltDel="CtrlAltDel"
        onCtrlAltDel={onCtrlAltDel}
        onDisconnect={jest.fn()}
      />
    );

    userEvent.click(screen.getByRole('button', { name: 'My Send Shortcut description' }));
    userEvent.click(screen.getByText('CtrlAltDel'));

    expect(onCtrlAltDel).toHaveBeenCalledTimes(1);
  });
});
