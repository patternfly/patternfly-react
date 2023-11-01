import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ClipboardCopyButton } from '../ClipboardCopyButton';

const props = {
  id: 'my-id',
  textId: 'my-text-id',
  className: 'fancy-copy-button',
  onClick: jest.fn(),
  exitDelay: 1000,
  entryDelay: 2000,
  maxWidth: '500px',
  position: 'right' as 'right',
  'aria-label': 'click this button to copy text'
};

test('copy button render', () => {
  const { asFragment } = render(<ClipboardCopyButton {...props}>Copy Me</ClipboardCopyButton>);
  expect(asFragment()).toMatchSnapshot();
});

test('copy button onClick', async () => {
  const onclick = jest.fn();
  const user = userEvent.setup();

  render(
    <ClipboardCopyButton {...props} onClick={onclick}>
      Copy to Clipboard
    </ClipboardCopyButton>
  );

  await user.click(screen.getByRole('button'));
  expect(onclick).toHaveBeenCalled();
});
