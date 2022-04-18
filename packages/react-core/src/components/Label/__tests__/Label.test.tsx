import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Label } from '../Label';

const labelColors = ['blue', 'cyan', 'green', 'orange', 'purple', 'red', 'grey'];

describe('Label', () => {
  test('renders', () => {
    const { asFragment } = render(<Label data-testid="label-test-id">Something</Label>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders with outline variant', () => {
    const { asFragment } = render(
      <Label variant="outline" data-testid="label-test-id">
        Something
      </Label>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders with isCompact', () => {
    const { asFragment } = render(
      <Label isCompact data-testid="label-test-id">
        Something
      </Label>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('label with href', () => {
    const { asFragment } = render(
      <Label href="#" data-testid="label-test-id">
        Something
      </Label>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('label with href with outline variant', () => {
    const { asFragment } = render(
      <Label href="#" variant="outline" data-testid="label-test-id">
        Something
      </Label>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('label with close button', () => {
    const { asFragment } = render(
      <Label onClose={jest.fn()} data-testid="label-test-id">
        Something
      </Label>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('label with close button and outline variant', () => {
    const { asFragment } = render(
      <Label onClose={jest.fn()} variant="outline" data-testid="label-test-id">
        Something
      </Label>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  labelColors.forEach((color: string) =>
    test(`label with ${color} color`, () => {
      const { asFragment } = render(
        <Label color={color as any} data-testid="label-test-id">
          Something
        </Label>
      );
      expect(asFragment()).toMatchSnapshot();
    })
  );

  labelColors.forEach((color: string) =>
    test(`label with ${color} color with outline variant`, () => {
      const { asFragment } = render(
        <Label color={color as any} variant="outline" data-testid="label-test-id">
          Something
        </Label>
      );
      expect(asFragment()).toMatchSnapshot();
    })
  );

  test('label with additional class name', () => {
    const { asFragment } = render(
      <Label className="klass1" data-testid="label-test-id">
        Something
      </Label>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('label with additional class name and props', () => {
    const { asFragment } = render(
      <Label className="class-1" id="label-1" data-label-name="something" data-testid="label-test-id">
        Something
      </Label>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('label with truncation', () => {
    const { asFragment } = render(
      <Label isTruncated data-testid="label-test-id">
        Something very very very very very long that should be truncated
      </Label>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('editable label', () => {
    const { asFragment } = render(
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
    expect(asFragment()).toMatchSnapshot();

    userEvent.click(button);
    expect(screen.queryByRole('button', { name: 'Something' })).toBeNull();
    expect(asFragment()).toMatchSnapshot();
  });
});
