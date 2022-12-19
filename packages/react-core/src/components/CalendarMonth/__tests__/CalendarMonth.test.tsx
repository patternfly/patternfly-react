import React from 'react';

import { render, screen } from '@testing-library/react';

import { CalendarMonth } from '../CalendarMonth';

test('Renders the first date in a month when a custom weekStart is passed', () => {
  // custom aria label generation function because of bug with default aria label generation
  // can be removed once the bug is fixed
  const formatAria = (date: Date) =>
    `${date.getDate()} ${date.toLocaleDateString(undefined, { month: 'long' })} ${date.getFullYear()}`;

  render(<CalendarMonth cellAriaLabel={formatAria} weekStart={1} date={new Date(2023, 0)} />);

  const firstDate = screen.getByRole('button', { name: '1 January 2023' });
  expect(firstDate).toBeVisible();
});

test('Renders the last date in a month when a custom weekStart is passed', () => {
  // custom aria label generation function because of bug with default aria labels
  // can be removed once the bug is fixed
  const formatAria = (date: Date) =>
    `${date.getDate()} ${date.toLocaleDateString(undefined, { month: 'long' })} ${date.getFullYear()}`;

  render(<CalendarMonth cellAriaLabel={formatAria} weekStart={1} date={new Date(2023, 0)} />);

  const lastDate = screen.getByRole('button', { name: '31 January 2023' });
  expect(lastDate).toBeVisible();
});

test('Previous month dates have correct month in aria label', () => {
  render(<CalendarMonth date={new Date(2024, 5)} />);

  const previousMonthDate = screen.getByRole('button', { name: '31 May 2024' });
  expect(previousMonthDate).toBeVisible();
});

test('Next month dates have correct month in aria label', () => {
  render(<CalendarMonth date={new Date(2024, 6)} />);

  const nextMonthDate = screen.getByRole('button', { name: '1 August 2024' });
  expect(nextMonthDate).toBeVisible();
});

test('Previous year dates have correct year in aria label', () => {
  render(<CalendarMonth date={new Date(2024, 0)} />);

  const previousYearDate = screen.getByRole('button', { name: '31 December 2023' });
  expect(previousYearDate).toBeVisible();
});

test('Next year dates have correct year in aria label', () => {
  render(<CalendarMonth date={new Date(2024, 11)} />);

  const nextYearDate = screen.getByRole('button', { name: '1 January 2025' });
  expect(nextYearDate).toBeVisible();
});

test('InlineProps render correct wrapper component and attributes', () => {
  render(<CalendarMonth inlineProps={{component: 'article', title: <div id="hi">Title</div>, ariaLabelledby: "hi"}} />);

  const article = screen.getByRole('article');
  expect(article).toHaveAttribute('aria-labelledby', 'hi');
  const title = screen.getByText('Title');
  expect(title).toBeVisible();
});
