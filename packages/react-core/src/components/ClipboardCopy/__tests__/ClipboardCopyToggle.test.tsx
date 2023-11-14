import React from 'react';
import { screen, render } from '@testing-library/react';
import { ClipboardCopyToggle } from '../ClipboardCopyToggle';
import userEvent from '@testing-library/user-event';

const onClickMock = jest.fn();
const requiredProps = {
  id: 'main-id',
  textId: 'text-id',
  contentId: 'content-id',
  onClick: onClickMock
};

// Must be kept as first test to avoid Button's ouiaId updating in snapshots
test('Matches snapshot', () => {
  const { asFragment } = render(<ClipboardCopyToggle {...requiredProps} />);

  expect(asFragment()).toMatchSnapshot();
});

test('Renders without children', () => {
  render(
    <div data-testid="container">
      <ClipboardCopyToggle {...requiredProps} />
    </div>
  );

  expect(screen.getByTestId('container').firstChild).toBeVisible();
});

test('Renders with id prop', () => {
  render(<ClipboardCopyToggle {...requiredProps} />);

  expect(screen.getByRole('button')).toHaveAttribute('id', requiredProps.id);
});

test('Renders with aria-labelledby concatenated from id and textId props', () => {
  render(
    <>
      <ClipboardCopyToggle aria-label="Toggle content" {...requiredProps} />
      <span id={requiredProps.textId}>Test content</span>
    </>
  );

  expect(screen.getByRole('button')).toHaveAccessibleName('Toggle content Test content');
});

test('Renders with aria-controls with passed in contentId prop', () => {
  render(<ClipboardCopyToggle {...requiredProps} />);

  expect(screen.getByRole('button')).toHaveAttribute('aria-controls', requiredProps.contentId);
});

test('Renders with aria-expanded of false by default', () => {
  render(<ClipboardCopyToggle {...requiredProps} />);

  expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'false');
});

test('Renders with aria-expanded based on isExpanded prop', () => {
  render(<ClipboardCopyToggle isExpanded={true} {...requiredProps} />);

  expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'true');
});

test('Calls onClick when clipboard toggle is clicked', async () => {
  const user = userEvent.setup();
  render(<ClipboardCopyToggle {...requiredProps} />);

  await user.click(screen.getByRole('button'));
  expect(onClickMock).toHaveBeenCalledTimes(1);
});

test('Does not call onClick when clipboard toggle is not clicked', async () => {
  const user = userEvent.setup();
  render(
    <>
      <ClipboardCopyToggle {...requiredProps} />
      <button>Test clicker</button>
    </>
  );

  await user.click(screen.getByRole('button', { name: 'Test clicker' }));
  expect(onClickMock).not.toHaveBeenCalled();
});

test('Spreads additional props to container', () => {
  render(<ClipboardCopyToggle data-prop="test" {...requiredProps} />);

  expect(screen.getByRole('button')).toHaveAttribute('data-prop', 'test');
});
