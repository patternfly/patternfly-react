import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ContextSelectorToggle } from '../ContextSelectorToggle';
import { KeyTypes } from '../../../helpers';

describe('ContextSelectorToggle', () => {
  test('Renders ContextSelectorToggle', () => {
    const { asFragment } = render(<ContextSelectorToggle id="toggle-id" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('Verify onToggle is called ', async () => {
    const mockfnOnToggle = jest.fn();
    const user = userEvent.setup();

    render(<ContextSelectorToggle onToggle={mockfnOnToggle} id="toggle-id" />);

    await user.click(screen.getByRole('button'));
    expect(mockfnOnToggle).toHaveBeenCalledTimes(1);
  });

  test('Verify ESC press', async () => {
    const user = userEvent.setup();
    
    const { asFragment } = render(<ContextSelectorToggle isOpen id="toggle-id" />);

    await user.type(screen.getByRole('button'), `{${KeyTypes.Escape}}`);
    expect(asFragment()).toMatchSnapshot();
  });

  test('Verify ESC press with not isOpen', async () => {
    const user = userEvent.setup();
    
    const { asFragment } = render(<ContextSelectorToggle onToggle={jest.fn()} id="toggle-id" />);

    await user.type(screen.getByRole('button'), `{${KeyTypes.Escape}}`);
    expect(asFragment()).toMatchSnapshot();
  });

  test('Verify keydown tab ', async () => {
    const user = userEvent.setup();
    
    const { asFragment } = render(<ContextSelectorToggle isOpen id="toggle-id" />);

    await user.type(screen.getByRole('button'), `{${KeyTypes.Tab}}`);
    expect(asFragment()).toMatchSnapshot();
  });

  test('Verify keydown enter ', async () => {
    const user = userEvent.setup();
    
    const { asFragment } = render(<ContextSelectorToggle onToggle={jest.fn()} onEnter={jest.fn()} id="toggle-id" />);

    await user.type(screen.getByRole('button'), `{${KeyTypes.Enter}}`);
    expect(asFragment()).toMatchSnapshot();
  });
});
