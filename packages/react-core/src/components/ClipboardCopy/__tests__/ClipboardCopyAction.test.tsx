import React from 'react';
import { screen, render } from '@testing-library/react';
import { ClipboardCopyAction } from '../ClipboardCopyAction';
import styles from '@patternfly/react-styles/css/components/ClipboardCopy/clipboard-copy';

test('Renders without children', () => {
  render(
    <div data-testid="container">
      <ClipboardCopyAction />
    </div>
  );

  expect(screen.getByTestId('container').firstChild).toBeVisible();
});

test(`Renders with class ${styles.clipboardCopyActionsItem} by default`, () => {
  render(<ClipboardCopyAction>Action text</ClipboardCopyAction>);

  expect(screen.getByText('Action text')).toHaveClass(styles.clipboardCopyActionsItem, { exact: true });
});

test(`Renders with custom class when className is passed`, () => {
  render(<ClipboardCopyAction className="custom-class">Action text</ClipboardCopyAction>);

  expect(screen.getByText('Action text')).toHaveClass('custom-class');
});

test(`Spreads additional props`, () => {
  render(<ClipboardCopyAction id="test-id">Action text</ClipboardCopyAction>);

  expect(screen.getByText('Action text')).toHaveAttribute('id', 'test-id');
});

test('Matches snapshot', () => {
  const { asFragment } = render(<ClipboardCopyAction>Action text</ClipboardCopyAction>);
  expect(asFragment()).toMatchSnapshot();
});
