import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ContextSelectorToggle } from '../ContextSelectorToggle';

describe('ContextSelectorToggle', () => {
  test('Renders ContextSelectorToggle', () => {
    render(<ContextSelectorToggle id="toggle-id" />);
    expect(screen.getByRole('button').outerHTML).toMatchSnapshot();
  });

  test('Verify onToggle is called ', () => {
    const mockfnOnToggle = jest.fn();

    render(<ContextSelectorToggle onToggle={mockfnOnToggle} id="toggle-id" />);

    userEvent.click(screen.getByRole('button'));
    expect(mockfnOnToggle.mock.calls).toHaveLength(1);
  });

  test('Verify ESC press', () => {
    render(<ContextSelectorToggle isOpen id="toggle-id" />);

    const toggleButton = screen.getByRole('button');

    userEvent.type(toggleButton, '{esc}');
    expect(toggleButton.outerHTML).toMatchSnapshot();
  });

  test('Verify ESC press with not isOpen', () => {
    render(<ContextSelectorToggle onToggle={jest.fn()} id="toggle-id" />);

    const toggleButton = screen.getByRole('button');

    userEvent.type(screen.getByRole('button'), '{esc}');
    expect(toggleButton.outerHTML).toMatchSnapshot();
  });

  test('Verify keydown tab ', () => {
    render(<ContextSelectorToggle isOpen id="toggle-id" />);

    const toggleButton = screen.getByRole('button');

    userEvent.type(screen.getByRole('button'), '{tab}');
    expect(toggleButton.outerHTML).toMatchSnapshot();
  });

  test('Verify keydown enter ', () => {
    render(<ContextSelectorToggle onToggle={jest.fn()} onEnter={jest.fn()} id="toggle-id" />);

    const toggleButton = screen.getByRole('button');

    userEvent.type(screen.getByRole('button'), '{enter}');
    expect(toggleButton.outerHTML).toMatchSnapshot();
  });
});
