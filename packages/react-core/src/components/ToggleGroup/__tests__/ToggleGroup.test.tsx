import * as React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ToggleGroup } from '../ToggleGroup';
import { ToggleGroupItem } from '../ToggleGroupItem';

const props = {
  onChange: jest.fn(),
  selected: false
};

describe('ToggleGroup', () => {
  test('basic selected', () => {
    render(<ToggleGroupItem text="test" selected buttonId="toggleGroupItem" aria-label="basic selected" />);
    expect(screen.getByLabelText('basic selected').outerHTML).toMatchSnapshot();
  });

  test('basic not selected', () => {
    render(<ToggleGroupItem text="test" buttonId="toggleGroupItem" aria-label="basic not selected" />);
    expect(screen.getByLabelText('basic not selected').outerHTML).toMatchSnapshot();
  });

  test('icon variant', () => {
    render(<ToggleGroupItem selected icon="icon" buttonId="toggleGroupItem" aria-label="icon variant" />);
    expect(screen.getByLabelText('icon variant').outerHTML).toMatchSnapshot();
  });

  test('isDisabled', () => {
    render(<ToggleGroupItem text="test" isDisabled buttonId="toggleGroupItem" aria-label="isDisabled" />);
    expect(screen.getByLabelText('isDisabled').outerHTML).toMatchSnapshot();
  });

  test('item passes selection and event to onChange handler', () => {
    render(
      <ToggleGroupItem text="test" buttonId="toggleGroupItem" onChange={props.onChange} aria-label="onChange handler" />
    );

    userEvent.click(screen.getByRole('button'));
    expect(props.onChange).toHaveBeenCalled();
  });

  test('isCompact', () => {
    render(
      <ToggleGroup isCompact aria-label="Label">
        <ToggleGroupItem text="Test" />
        <ToggleGroupItem text="Test" />
      </ToggleGroup>
    );
    expect(screen.getByLabelText('Label').outerHTML).toMatchSnapshot();
  });
});
