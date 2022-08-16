import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Timestamp, TimestampFormats } from '../Timestamp';

test('Matches snapshot', () => {
  const { asFragment } = render(
    <Timestamp datetime={new Date(2022, 0, 1).toISOString()} date={new Date(2022, 0, 1)} />
  );

  expect(asFragment()).toMatchSnapshot();
});

test('Renders with current date by default with default formatting', () => {
  render(<Timestamp datetime={new Date().toISOString()} />);

  expect(screen.getByText(new Date().toLocaleString())).toBeInTheDocument();
});

test('Renders passed in date with default formatting', () => {
  render(<Timestamp datetime={new Date(2022, 0, 1).toISOString()} date={new Date(2022, 0, 1)} />);

  expect(screen.getByText('1/1/2022, 12:00:00 AM')).toBeInTheDocument();
});

test('Renders with a custom suffix when timeZoneSuffix is passed in', () => {
  render(
    <Timestamp datetime={new Date(2022, 0, 1).toISOString()} date={new Date(2022, 0, 1)} timeZoneSuffix="US Eastern" />
  );

  expect(screen.getByText('1/1/2022, 12:00:00 AM US Eastern')).toBeInTheDocument();
});

test('Renders with 12 hour time by default for US locale', () => {
  render(<Timestamp datetime={new Date(2022, 0, 1, 13, 0).toISOString()} date={new Date(2022, 0, 1, 13, 0)} />);

  expect(screen.getByText('1/1/2022, 1:00:00 PM')).toBeInTheDocument();
});

test('Renders with 12 hour time when is12Hour is passed in for US locale', () => {
  render(
    <Timestamp datetime={new Date(2022, 0, 1, 13, 0).toISOString()} date={new Date(2022, 0, 1, 13, 0)} is12Hour />
  );

  expect(screen.getByText('1/1/2022, 1:00:00 PM')).toBeInTheDocument();
});

test('Renders with 24 hour time when is12Hour is set to false for US locale', () => {
  render(
    <Timestamp
      datetime={new Date(2022, 0, 1, 13, 0).toISOString()}
      date={new Date(2022, 0, 1, 13, 0)}
      is12Hour={false}
    />
  );

  expect(screen.getByText('1/1/2022, 13:00:00')).toBeInTheDocument();
});

test('Renders with custom class names', () => {
  render(<Timestamp datetime={new Date().toISOString()} className="custom-time-class" />);

  expect(screen.getByText(new Date().toLocaleString()).parentElement).toHaveClass('custom-time-class');
});

test('Renders with pf-m-help-text class when hasUTCTooltip is passed in', () => {
  render(<Timestamp datetime={new Date().toISOString()} hasUTCTooltip />);

  expect(screen.getByText(new Date().toLocaleString()).parentElement).toHaveClass('pf-m-help-text');
});

test('Renders with pf-m-help-text class when tooltipContent is passed in', () => {
  render(<Timestamp datetime={new Date().toISOString()} tooltipContent="Custom tooltip" />);

  expect(screen.getByText(new Date().toLocaleString()).parentElement).toHaveClass('pf-m-help-text');
});
