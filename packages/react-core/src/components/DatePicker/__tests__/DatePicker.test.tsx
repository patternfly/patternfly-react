import React from 'react';

import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { HelperText, HelperTextItem } from '../../HelperText';
import { DatePicker } from '../DatePicker';

jest.mock('../../../helpers/util.ts');

test('disabled date picker', () => {
  const { asFragment } = render(<DatePicker value="2020-11-20" isDisabled aria-label="disabled date picker" />);
  expect(asFragment()).toMatchSnapshot();
});

test('Date picker with multiple validators does not show invalid icon on valid input', async () => {
  const user = userEvent.setup();

  const rangeValidator = (_date: Date) => '';

  const rangeValidatorB = (_date: Date) => '';

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

test('With popover opened', async () => {
  const user = userEvent.setup();

  const { asFragment } = render(<DatePicker value="2020-03-17" />);

  await user.click(screen.getByRole('button', { name: 'Toggle date picker' }));
  await screen.findByRole('button', { name: 'Previous month' });

  expect(asFragment()).toMatchSnapshot();
});

test('Shows helperText instead of "Invalid date" when no error exists', () => {
  render(
    <DatePicker
      helperText={
        <HelperText>
          <HelperTextItem>Help me</HelperTextItem>
        </HelperText>
      }
    />
  );

  expect(screen.queryByText('Invalid date')).not.toBeInTheDocument();
  expect(screen.getByText('Help me')).toBeVisible();
});

test('Shows "Invalid date" instead of helperText when text input contains invalid date', async () => {
  const user = userEvent.setup();

  render(
    <DatePicker
      helperText={
        <HelperText>
          <HelperTextItem>Help me</HelperTextItem>
        </HelperText>
      }
    />
  );

  await user.type(screen.getByRole('textbox'), 'not a date');
  await user.click(document.body);

  expect(screen.queryByText('Help me')).not.toBeInTheDocument();
  expect(screen.getByText('Invalid date')).toBeVisible();
});

test('Does not render text input as invalid when requiredDateOptions.isRequired is false', async () => {
  const user = userEvent.setup();

  render(<DatePicker />);

  await user.click(screen.getByRole('textbox'));
  await user.click(document.body);

  expect(screen.getByRole('textbox')).not.toHaveAttribute('aria-invalid', 'true');
});

test('Does not render emptyDateText when requiredDateOptions.isRequired is false', async () => {
  const user = userEvent.setup();

  render(<DatePicker />);

  await user.click(screen.getByRole('textbox'));
  await user.click(document.body);

  expect(screen.queryByText('Date cannot be blank')).not.toBeInTheDocument();
});

test('Renders text input as invalid on blur when requiredDateOptions.isRequired is true', async () => {
  const user = userEvent.setup();

  render(<DatePicker requiredDateOptions={{ isRequired: true }} />);

  await user.click(screen.getByRole('textbox'));
  await user.click(document.body);

  expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
});

test('Renders default emptyDateText on blur when requiredDateOptions.isRequired is true', async () => {
  const user = userEvent.setup();

  render(<DatePicker requiredDateOptions={{ isRequired: true }} />);

  await user.click(screen.getByRole('textbox'));
  await user.click(document.body);

  expect(screen.getByText('Date cannot be blank')).toBeInTheDocument();
});

test('Renders custom emptyDateText when requiredDateOptions.isRequired is true', async () => {
  const user = userEvent.setup();

  render(<DatePicker requiredDateOptions={{ isRequired: true, emptyDateText: 'Required in test' }} />);

  await user.click(screen.getByRole('textbox'));
  await user.click(document.body);

  expect(screen.getByText('Required in test')).toBeInTheDocument();
});

test('Shows emptyDateText instead of helperText when text input is empty and requiredDateOptions.isRequired is true', async () => {
  const user = userEvent.setup();

  render(
    <DatePicker
      requiredDateOptions={{ isRequired: true }}
      helperText={
        <HelperText>
          <HelperTextItem>Help me</HelperTextItem>
        </HelperText>
      }
    />
  );

  await user.click(screen.getByRole('textbox'));
  await user.click(document.body);

  expect(screen.queryByText('Help me')).not.toBeInTheDocument();
  expect(screen.getByText('Date cannot be blank')).toBeVisible();
});

test('Renders text input as invalid when requiredDateOptions.isRequired is true and popover is closed without selection', async () => {
  const user = userEvent.setup();

  render(<DatePicker requiredDateOptions={{ isRequired: true }} />);

  await user.click(screen.getByRole('button', { name: 'Toggle date picker' }));
  await user.click(document.body);

  expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
});
