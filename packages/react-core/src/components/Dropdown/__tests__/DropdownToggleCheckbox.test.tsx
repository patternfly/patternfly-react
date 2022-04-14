import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { DropdownToggleCheckbox } from '../DropdownToggleCheckbox';

const props = {
  onChange: jest.fn(),
  isChecked: false
};

describe('DropdownToggleCheckbox', () => {
  test('controlled', () => {
    render(<DropdownToggleCheckbox isChecked id="check" aria-label="check" />);
    expect(screen.getByRole('checkbox').outerHTML).toMatchSnapshot();
  });

  test('uncontrolled', () => {
    render(<DropdownToggleCheckbox id="check" aria-label="check" />);
    expect(screen.getByRole('checkbox').outerHTML).toMatchSnapshot();
  });

  test('with text', () => {
    render(
      <DropdownToggleCheckbox id="check" isDisabled aria-label="check">
        Some text
      </DropdownToggleCheckbox>
    );
    expect(screen.getByRole('checkbox').parentElement.outerHTML).toMatchSnapshot();
  });

  test('isDisabled', () => {
    render(<DropdownToggleCheckbox id="check" isDisabled aria-label="check" />);
    expect(screen.getByRole('checkbox').outerHTML).toMatchSnapshot();
  });

  test('3rd state', () => {
    render(<DropdownToggleCheckbox id="check" isChecked={null} aria-label="check" />);
    expect(screen.getByRole('checkbox').outerHTML).toMatchSnapshot();
  });

  test('passing class', () => {
    render(<DropdownToggleCheckbox label="label" className="class-123" id="check" isChecked aria-label="check" />);
    expect(screen.getByRole('checkbox').outerHTML).toMatchSnapshot();
  });

  test('passing HTML attribute', () => {
    render(<DropdownToggleCheckbox label="label" aria-labelledby="labelId" id="check" isChecked aria-label="check" />);
    expect(screen.getByRole('checkbox').outerHTML).toMatchSnapshot();
  });

  test('checkbox passes value and event to onChange handler', () => {
    render(<DropdownToggleCheckbox id="check" {...props} aria-label="check" />);

    userEvent.click(screen.getByRole('checkbox'));
    expect(props.onChange).toHaveBeenCalledWith(true, expect.any(Object));
  });
});
