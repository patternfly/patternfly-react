import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { Label } from '../Label';

const labelColors = ['blue', 'cyan', 'green', 'orange', 'purple', 'red', 'grey'];

describe('Label', () => {
  test('renders', () => {
    render(<Label data-testid="label-test-id">Something</Label>);
    expect(screen.getByTestId('label-test-id').outerHTML).toMatchSnapshot();
  });

  test('renders with outline variant', () => {
    render(
      <Label variant="outline" data-testid="label-test-id">
        Something
      </Label>
    );
    expect(screen.getByTestId('label-test-id').outerHTML).toMatchSnapshot();
  });

  test('renders with isCompact', () => {
    render(
      <Label isCompact data-testid="label-test-id">
        Something
      </Label>
    );
    expect(screen.getByTestId('label-test-id').outerHTML).toMatchSnapshot();
  });

  test('label with href', () => {
    render(
      <Label href="#" data-testid="label-test-id">
        Something
      </Label>
    );
    expect(screen.getByTestId('label-test-id').outerHTML).toMatchSnapshot();
  });

  test('label with href with outline variant', () => {
    render(
      <Label href="#" variant="outline" data-testid="label-test-id">
        Something
      </Label>
    );
    expect(screen.getByTestId('label-test-id').outerHTML).toMatchSnapshot();
  });

  test('label with close button', () => {
    render(
      <Label onClose={jest.fn()} data-testid="label-test-id">
        Something
      </Label>
    );

    expect(screen.getByTestId('label-test-id').outerHTML).toMatchSnapshot();
  });

  test('label with close button and outline variant', () => {
    render(
      <Label onClose={jest.fn()} variant="outline" data-testid="label-test-id">
        Something
      </Label>
    );
    expect(screen.getByTestId('label-test-id').outerHTML).toMatchSnapshot();
  });

  labelColors.forEach((color: string) =>
    test(`label with ${color} color`, () => {
      render(
        <Label color={color as any} data-testid="label-test-id">
          Something
        </Label>
      );
      expect(screen.getByTestId('label-test-id').outerHTML).toMatchSnapshot();
    })
  );

  labelColors.forEach((color: string) =>
    test(`label with ${color} color with outline variant`, () => {
      render(
        <Label color={color as any} variant="outline" data-testid="label-test-id">
          Something
        </Label>
      );
      expect(screen.getByTestId('label-test-id').outerHTML).toMatchSnapshot();
    })
  );

  test('label with additional class name', () => {
    render(
      <Label className="klass1" data-testid="label-test-id">
        Something
      </Label>
    );
    expect(screen.getByTestId('label-test-id').outerHTML).toMatchSnapshot();
  });

  test('label with additional class name and props', () => {
    render(
      <Label className="class-1" id="label-1" data-label-name="something" data-testid="label-test-id">
        Something
      </Label>
    );
    expect(screen.getByTestId('label-test-id').outerHTML).toMatchSnapshot();
  });

  test('label with truncation', () => {
    render(
      <Label isTruncated data-testid="label-test-id">
        Something very very very very very long that should be truncated
      </Label>
    );
    expect(screen.getByTestId('label-test-id').outerHTML).toMatchSnapshot();
  });

  test('editable label', () => {
    render(
      <Label
        onClose={jest.fn()}
        onEditCancel={jest.fn()}
        onEditComplete={jest.fn()}
        isEditable
        data-testid="label-test-id"
      >
        Something
      </Label>
    );

    const button = screen.getByRole('button', { name: 'Something' });

    expect(button).toBeInTheDocument();
    expect(screen.getByTestId('label-test-id').outerHTML).toMatchSnapshot();

    userEvent.click(button);
    expect(screen.queryByRole('button', { name: 'Something' })).toBeNull();
    expect(screen.getByTestId('label-test-id').outerHTML).toMatchSnapshot();
  });
});
