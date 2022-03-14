import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DropdownToggleAction } from '../DropdownToggleAction';

test('renders with text', () => {
  const view = render(<DropdownToggleAction id="action" aria-label="action" />);
  expect(view.container.outerHTML).toMatchSnapshot();
});

test('isDisabled', () => {
  const view = render(<DropdownToggleAction id="action" aria-label="action" isDisabled />);
  expect(view.container.outerHTML).toMatchSnapshot();
});

test('passing class', () => {
  const view = render(<DropdownToggleAction id="action" aria-label="action" className="abc" />);
  expect(view.container.outerHTML).toMatchSnapshot();
});

test('checkbox passes value and event to onClick handler', () => {
  const onClickMock = jest.fn();

  render(<DropdownToggleAction id="action" aria-label="acton" onClick={onClickMock} />);

  userEvent.click(screen.getByRole('button'));
  expect(onClickMock).toBeCalled();
});
