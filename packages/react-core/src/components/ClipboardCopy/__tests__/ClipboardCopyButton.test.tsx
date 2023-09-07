import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ClipboardCopyButton } from '../ClipboardCopyButton';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';

jest.mock('../../Tooltip', () => ({
  Tooltip: ({ content, children, exitDelay, entryDelay, maxWidth, position }) => (
    <div data-testid="tooltip-mock">
      <div data-testid="tooltip-mock-content">{content}</div>
      <p>{`exitDelay: ${exitDelay}`}</p>
      <p>{`entryDelay: ${entryDelay}`}</p>
      <p>{`maxWidth: ${maxWidth}`}</p>
      <p>{`position: ${position}`}</p>
      {children}
    </div>
  )
}));

const requiredProps = {
  onClick: jest.fn(),
  children: 'Button content',
  id: 'button-id',
  textId: 'text-id'
};

test('Renders with passed id prop', () => {
  render(<ClipboardCopyButton {...requiredProps} />);

  expect(screen.getByRole('button')).toHaveAttribute('id', 'button-id');
});

test('Renders with aria-labelledby with passed id and textId prop values', () => {
  render(
    <>
      <div id="text-id">Copyable text</div>
      <ClipboardCopyButton {...requiredProps} />
    </>
  );

  expect(screen.getByRole('button')).toHaveAttribute('aria-labelledby', 'button-id text-id');
});

test('Renders with concatenated aria-label by default', () => {
  render(
    <>
      <div id="text-id">Copyable text</div>
      <ClipboardCopyButton {...requiredProps} />
    </>
  );

  expect(screen.getByRole('button')).toHaveAccessibleName('Copyable input Copyable text');
});

test('Renders with concatenated aria-label when custom aria-label is passed', () => {
  render(
    <>
      <div id="text-id">Copyable text</div>
      <ClipboardCopyButton aria-label="Custom label" {...requiredProps} />
    </>
  );

  expect(screen.getByRole('button')).toHaveAccessibleName('Custom label Copyable text');
});

test('Passes className to Button', () => {
  render(<ClipboardCopyButton className="test-class" {...requiredProps} />);

  expect(screen.getByRole('button')).toHaveClass('test-class');
});

test('Passes variant to Button by default', () => {
  render(<ClipboardCopyButton {...requiredProps} />);

  expect(screen.getByRole('button')).toHaveClass(buttonStyles.modifiers.control);
});

test('Passes variant to Button when variant is passed', () => {
  render(<ClipboardCopyButton variant="plain" {...requiredProps} />);

  expect(screen.getByRole('button')).toHaveClass(buttonStyles.modifiers.plain);
});

test('Calls onClick when passed', async () => {
  const user = userEvent.setup();

  render(<ClipboardCopyButton {...requiredProps} />);

  await user.click(screen.getByRole('button'));
  expect(requiredProps.onClick).toHaveBeenCalledTimes(1);
});

test('Passes children to Tooltip content', () => {
  render(<ClipboardCopyButton {...requiredProps} />);

  expect(screen.getByText('Button content')).toBeVisible();
});

test('Passes exitDelay to Tooltip', () => {
  render(<ClipboardCopyButton exitDelay={200} {...requiredProps} />);

  expect(screen.getByText('exitDelay: 200')).toBeVisible();
});

test('Passes entryDelay to Tooltip', () => {
  render(<ClipboardCopyButton entryDelay={200} {...requiredProps} />);

  expect(screen.getByText('entryDelay: 200')).toBeVisible();
});

test('Passes maxWidth to Tooltip', () => {
  render(<ClipboardCopyButton maxWidth="200px" {...requiredProps} />);

  expect(screen.getByText('maxWidth: 200px')).toBeVisible();
});

test('Passes position to Tooltip', () => {
  render(<ClipboardCopyButton position="bottom" {...requiredProps} />);

  expect(screen.getByText('position: bottom')).toBeVisible();
});

test('Matches snapshot', () => {
  const { asFragment } = render(<ClipboardCopyButton {...requiredProps} />);
  expect(asFragment()).toMatchSnapshot();
});
