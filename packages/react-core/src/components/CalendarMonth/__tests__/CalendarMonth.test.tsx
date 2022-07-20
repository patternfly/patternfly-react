import React from 'react';

import { render, screen } from '@testing-library/react';

import { CalendarMonth } from '../CalendarMonth';

test('Renders the first date in a month when a custom weekStart is passed', () => {
  // custom aria label generation function because of bug with default aria label generation
  // can be removed once the bug is fixed
  const formatAria = (date: Date) =>
    `${date.getDate()} ${date.toLocaleDateString(undefined, { month: 'long' })} ${date.getFullYear()}`;

  render(<CalendarMonth cellAriaLabel={formatAria} weekStart={1} date={new Date(2023, 0)} />);

  const firstDate = screen.queryByRole('button', { name: '1 January 2023' });
  expect(firstDate).toBeVisible();
});

test('Renders the last date in a month when a custom weekStart is passed', () => {
  // custom aria label generation function because of bug with default aria labels
  // can be removed once the bug is fixed
  const formatAria = (date: Date) =>
    `${date.getDate()} ${date.toLocaleDateString(undefined, { month: 'long' })} ${date.getFullYear()}`;

  render(<CalendarMonth cellAriaLabel={formatAria} weekStart={1} date={new Date(2023, 0)} />);

  const lastDate = screen.queryByRole('button', { name: '31 January 2023' });
  expect(lastDate).toBeVisible();
});
