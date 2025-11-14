import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ClipboardCopy, ClipboardCopyVariant } from '../ClipboardCopy';

// This test file uses the real Truncate component for integration testing, instead of a mock

test('Tooltip appears on keyboard focus when using inline-compact variant with truncation', async () => {
  const user = userEvent.setup();
  const longText = 'This is a very long piece of content that should be truncated when the container is too small';

  render(
    <ClipboardCopy
      variant={ClipboardCopyVariant.inlineCompact}
      truncation={{ maxCharsDisplayed: 20 }}
      data-testid="clipboard-copy"
    >
      {longText}
    </ClipboardCopy>
  );

  expect(screen.queryByText(longText)).not.toBeInTheDocument();
  expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

  await user.tab();

  const clipboardCopy = screen.getByTestId('clipboard-copy');
  expect(clipboardCopy).toHaveFocus();

  const tooltip = screen.getByRole('tooltip');
  expect(tooltip).toBeInTheDocument();
  expect(tooltip).toHaveTextContent(longText);
});
