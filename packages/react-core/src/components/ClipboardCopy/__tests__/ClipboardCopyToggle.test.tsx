import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ClipboardCopyToggle, ClipboardCopyToggleProps } from '../ClipboardCopyToggle';

const props: ClipboardCopyToggleProps = {
  id: 'my-id',
  textId: 'my-text-id',
  contentId: 'my-content-id',
  isExpanded: false,
  className: 'myclassName',
  onClick: jest.fn()
};

describe('ClipboardCopyToggle', () => {
  test('toggle button render', () => {
    const desc = 'toggle content';
    const view = render(<ClipboardCopyToggle {...props} aria-label={desc} />);

    expect(view.container.outerHTML).toMatchSnapshot();
  });

  test('toggle button onClick', () => {
    const onclick = jest.fn();
    render(<ClipboardCopyToggle {...props} onClick={onclick} />);

    userEvent.click(screen.getByRole('button'));
    expect(onclick).toBeCalled();
  });

  test('has aria-expanded set to true when isExpanded is true', () => {
    render(<ClipboardCopyToggle {...props} isExpanded />);

    const toggleButton = screen.getByRole('button');
    expect(toggleButton.getAttribute('aria-expanded')).toEqual('true');
  });

  test('has aria-expanded set to false when isExpanded is false', () => {
    render(<ClipboardCopyToggle {...props} />);

    const toggleButton = screen.getByRole('button');
    expect(toggleButton.getAttribute('aria-expanded')).toEqual('false');
  });
});
