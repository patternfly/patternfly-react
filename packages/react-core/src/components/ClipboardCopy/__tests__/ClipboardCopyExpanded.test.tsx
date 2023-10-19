import React from 'react';
import { screen, render } from '@testing-library/react';
import { ClipboardCopyExpanded } from '../ClipboardCopyExpanded';
import styles from '@patternfly/react-styles/css/components/ClipboardCopy/clipboard-copy';
import userEvent from '@testing-library/user-event';

test(`Renders with classname ${styles.clipboardCopyExpandableContent} by default`, () => {
  render(<ClipboardCopyExpanded>Expanded content</ClipboardCopyExpanded>);

  expect(screen.getByText('Expanded content')).toHaveClass(styles.clipboardCopyExpandableContent, { exact: true });
});

test(`Renders with custom class when className is passed`, () => {
  render(<ClipboardCopyExpanded className="test-class">Expanded content</ClipboardCopyExpanded>);

  expect(screen.getByText('Expanded content')).toHaveClass('test-class');
});

test('Does not render with <pre> tag by default', () => {
  render(<ClipboardCopyExpanded>Expanded content</ClipboardCopyExpanded>);

  expect(screen.getByText('Expanded content').tagName).not.toBe('PRE');
});

test('Renders with <pre> tag when isCode is true', () => {
  render(<ClipboardCopyExpanded isCode>Expanded content</ClipboardCopyExpanded>);

  expect(screen.getByText('Expanded content').tagName).toBe('PRE');
});

test('Renders with contenteditable attribute of true by default', () => {
  render(<ClipboardCopyExpanded>Expanded content</ClipboardCopyExpanded>);

  expect(screen.getByText('Expanded content')).toHaveAttribute('contenteditable', 'true');
});

test('Renders with contenteditable attribute of false when isReadOnly is passed', () => {
  render(<ClipboardCopyExpanded isReadOnly>Expanded content</ClipboardCopyExpanded>);

  expect(screen.getByText('Expanded content')).toHaveAttribute('contenteditable', 'false');
});

test('Calls onChange when expanded content is typed in', async () => {
  const user = userEvent.setup();
  const onChangeMock = jest.fn();

  render(<ClipboardCopyExpanded onChange={onChangeMock}>Expanded content</ClipboardCopyExpanded>);

  await user.type(screen.getByText('Expanded content'), 's');

  expect(onChangeMock).toHaveBeenCalledTimes(1);
});

test('Does not call onChange when expanded content is not typed in', async () => {
  const user = userEvent.setup();
  const onChangeMock = jest.fn();

  render(
    <>
      <ClipboardCopyExpanded onChange={onChangeMock}>Expanded content</ClipboardCopyExpanded>
      <input />
    </>
  );

  await user.type(screen.getByRole('textbox'), 'A');

  expect(onChangeMock).not.toHaveBeenCalled();
});

test('Spreads additional props to container', () => {
  render(<ClipboardCopyExpanded data-prop="test">Expanded content</ClipboardCopyExpanded>);

  expect(screen.getByText('Expanded content')).toHaveAttribute('data-prop', 'test');
});

test('Matches snapshot', () => {
  const { asFragment } = render(<ClipboardCopyExpanded>Expanded content</ClipboardCopyExpanded>);

  expect(asFragment()).toMatchSnapshot();
});
