import * as React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { DropdownToggleAction } from '../DropdownToggleAction';

test('renders with text', () => {
  const { asFragment } = render(<DropdownToggleAction id="action" aria-label="action" />);
  expect(asFragment()).toMatchSnapshot();
});

test('isDisabled', () => {
  const { asFragment } = render(<DropdownToggleAction id="action" aria-label="action" isDisabled />);
  expect(asFragment()).toMatchSnapshot();
});

test('passing class', () => {
  const { asFragment } = render(<DropdownToggleAction id="action" aria-label="action" className="abc" />);
  expect(asFragment()).toMatchSnapshot();
});

test('checkbox passes value and event to onClick handler', async () => {
  const onClickMock = jest.fn();
  const user = userEvent.setup();

  render(<DropdownToggleAction id="action" aria-label="acton" onClick={onClickMock} />);

  await user.click(screen.getByRole('button'));
  expect(onClickMock).toHaveBeenCalled();
});
