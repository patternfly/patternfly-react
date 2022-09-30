import { screen, render } from '@testing-library/react';
import { DatePicker } from '../DatePicker';
import React from 'react';
import userEvent from '@testing-library/user-event';

test('disabled date picker', () => {
  const { asFragment } = render(<DatePicker value="2020-11-20" isDisabled aria-label="disabled date picker" />);
  expect(asFragment()).toMatchSnapshot();
});

test('Date picker with multiple validators does not show invalid icon on valid input', async () => {
  const user = userEvent.setup();

  const rangeValidator = (date: Date) => {
    return '';
  };

  const rangeValidatorB = (date: Date) => {
    return '';
  };

  render(<DatePicker value="2020-03-17" validators={[rangeValidator, rangeValidatorB]} />);

  await user.click(screen.getByRole('textbox'));

  await user.click(document.body);
  expect(screen.getByRole('textbox')).not.toBeInvalid();
});

test('Error state can be cleared from outside', async () => {
  const rangeValidator = (date: Date) => {
    if (date < new Date('2020-03-17')) {
      return 'error';
    }
    return '';
  };

  const user = userEvent.setup();

  const { rerender } = render(<DatePicker value="2020-03-17" validators={[rangeValidator]} />);

  await user.clear(screen.getByRole('textbox'));
  await user.type(screen.getByRole('textbox'), '2020-03-16');

  await user.click(document.body);

  rerender(<DatePicker value="2020-03-18" validators={[rangeValidator]} />);

  expect(screen.getByRole('textbox')).not.toBeInvalid();
});
