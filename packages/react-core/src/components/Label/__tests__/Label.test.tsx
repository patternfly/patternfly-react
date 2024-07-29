import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { Label } from '../Label';

const labelColors = ['blue', 'teal', 'green', 'orange', 'purple', 'red', 'grey', 'yellow'];

describe('Label', () => {
  test('renders', () => {
    const { asFragment } = render(<Label>Something</Label>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders with outline variant', () => {
    const { asFragment } = render(<Label variant="outline">Something</Label>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders with isCompact', () => {
    const { asFragment } = render(<Label isCompact>Something</Label>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('label with href', () => {
    const { asFragment } = render(<Label href="#">Something</Label>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('label with href with outline variant', () => {
    const { asFragment } = render(
      <Label href="#" variant="outline">
        Something
      </Label>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('label with close button', () => {
    const { asFragment } = render(<Label onClose={jest.fn()}>Something</Label>);

    expect(asFragment()).toMatchSnapshot();
  });

  test('label with close button and outline variant', () => {
    const { asFragment } = render(
      <Label onClose={jest.fn()} variant="outline">
        Something
      </Label>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  labelColors.forEach((color: string) =>
    test(`label with ${color} color`, () => {
      const { asFragment } = render(<Label color={color as any}>Something</Label>);
      expect(asFragment()).toMatchSnapshot();
    })
  );

  labelColors.forEach((color: string) =>
    test(`label with ${color} color with outline variant`, () => {
      const { asFragment } = render(
        <Label color={color as any} variant="outline">
          Something
        </Label>
      );
      expect(asFragment()).toMatchSnapshot();
    })
  );

  test('label with additional class name', () => {
    const { asFragment } = render(<Label className="klass1">Something</Label>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('label with additional class name and props', () => {
    const { asFragment } = render(
      <Label className="class-1" id="label-1" data-label-name="something">
        Something
      </Label>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('label with truncation', () => {
    const { asFragment } = render(
      <Label textMaxWidth="16ch">textMaxWidth set at 16ch on this very long label that should be truncated</Label>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('editable label', async () => {
    const user = userEvent.setup();

    const { asFragment } = render(
      <Label onClose={jest.fn()} onEditCancel={jest.fn()} onEditComplete={jest.fn()} isEditable>
        Something
      </Label>
    );

    const button = screen.getByRole('button', { name: 'Something' });

    expect(button).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();

    await user.click(button);
    expect(screen.queryByRole('button', { name: 'Something' })).toBeNull();
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders with variant overflow and type is set to button ', () => {
    const { asFragment } = render(<Label variant="overflow">Something</Label>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
    expect(asFragment()).toMatchSnapshot();
  });

  test('a button is not rendered when onClick is not passed', () => {
    render(<Label>Click me</Label>);

    expect(screen.queryByRole(`button`)).not.toBeInTheDocument();
  });

  test('a button is rendered when onClick is passed', () => {
    const fn = jest.fn();

    render(<Label onClick={fn}>Click me</Label>);

    expect(screen.getByRole(`button`)).toBeVisible();
  });

  test('clickable label does not call the passed callback when it is not clicked', async () => {
    const mockCallback = jest.fn();

    render(<Label onClick={mockCallback}>Click me</Label>);

    expect(mockCallback).not.toHaveBeenCalled();
  });

  test('clickable label calls passed callback on click', async () => {
    const mockCallback = jest.fn();
    const user = userEvent.setup();

    render(<Label onClick={mockCallback}>Click me</Label>);

    const label = screen.getByRole('button');

    await user.click(label);

    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  test('disabled clickable label does not call passed callback on click', async () => {
    const mockCallback = jest.fn();
    const user = userEvent.setup();

    render(
      <Label isDisabled onClick={mockCallback}>
        Click me
      </Label>
    );

    const label = screen.getByText('Click me');

    await user.click(label);

    expect(mockCallback).not.toHaveBeenCalled();
  });

  test('disabled clickable label is a disabled button', async () => {
    const mockCallback = jest.fn();

    render(
      <Label isDisabled onClick={mockCallback}>
        Click me
      </Label>
    );

    const labelButton = screen.getByRole('button');

    expect(labelButton).toHaveAttribute('disabled');
  });

  test('link label is an anchor', () => {
    const href = '#example';

    render(<Label href={href}>Click me</Label>);

    const anchor = screen.getByRole('link', { name: 'Click me' });

    expect(anchor).toBeInTheDocument();
    expect(anchor).toHaveAttribute('href', href);
  });

  test('disabled link label is an anchor with aria-disabled attribute', () => {
    const href = '#example';

    render(
      <Label isDisabled href={href}>
        Click me
      </Label>
    );

    const anchor = screen.getByRole('link', { name: 'Click me' });

    expect(anchor).toBeInTheDocument();
    expect(anchor).toHaveAttribute('href', href);
    expect(anchor).toHaveAttribute('tabIndex', '-1');
    expect(anchor).toHaveAttribute('aria-disabled', 'true');
  });

  test('disabled removable clickable label has a disabled close button', async () => {
    const mockCallback = jest.fn();

    render(
      <Label isDisabled onClick={mockCallback} onClose={mockCallback}>
        Click me
      </Label>
    );

    const closeButton = screen.getByLabelText('Close Click me');

    expect(closeButton).toBeDisabled();
  });

  test('disabled removable link label has a disabled close button', async () => {
    const mockCallback = jest.fn();

    render(
      <Label isDisabled href="#" onClose={mockCallback}>
        Click me
      </Label>
    );

    const closeButton = screen.getByLabelText('Close Click me');

    expect(closeButton).toBeDisabled();
  });
});
