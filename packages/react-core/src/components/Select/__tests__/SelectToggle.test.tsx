import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SelectToggle } from '../SelectToggle';

describe('SelectToggle', () => {
  describe('API', () => {
    test('click on closed', async () => {
      const mockToggle = jest.fn();
      const user = userEvent.setup();

      render(
        <SelectToggle id="Select Toggle" onToggle={mockToggle} parentRef={{ current: document.createElement('div') }}>
          Select
        </SelectToggle>
      );

      await user.click(screen.getByRole('button'));
      expect(mockToggle).toHaveBeenCalledWith(true, expect.any(Object));
    });

    test('click on opened', async () => {
      const mockToggle = jest.fn();
      const user = userEvent.setup();

      render(
        <SelectToggle
          id="Select Toggle"
          onToggle={mockToggle}
          isOpen
          parentRef={{ current: document.createElement('div') }}
        >
          Select
        </SelectToggle>
      );

      await user.click(screen.getByRole('button'));
      expect(mockToggle).toHaveBeenCalledWith(false, expect.any(MouseEvent));
    });

    test('click on document', async () => {
      const mockToggle = jest.fn();
      const user = userEvent.setup();

      render(
        <SelectToggle
          id="Select Toggle"
          onToggle={mockToggle}
          isOpen
          parentRef={{ current: document.createElement('div') }}
        >
          Select
        </SelectToggle>
      );

      await user.click(screen.getByText('Select').parentElement);
      expect(mockToggle).toHaveBeenCalledWith(false, expect.any(MouseEvent));
    });

    test('on click outside has been removed', async () => {
      const mockToggle = jest.fn();
      const user = userEvent.setup();

      render(
        <SelectToggle
          id="Select Toggle"
          onToggle={mockToggle}
          isOpen={false}
          parentRef={{ current: document.createElement('div') }}
        >
          Select
        </SelectToggle>
      );

      await user.click(screen.getByText('Select').parentElement);
      expect(mockToggle).not.toHaveBeenCalled();
    });
  });

  describe('state', () => {
    test('active', () => {
      const { asFragment } = render(
        <SelectToggle id="Select Toggle" isActive parentRef={{ current: document.createElement('div') }}>
          Select
        </SelectToggle>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
