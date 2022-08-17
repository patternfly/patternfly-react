import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Timestamp, TimestampFormats } from '../Timestamp';

jest.mock('../../Tooltip', () => ({
  Tooltip: ({ content, children, ...props }) => (
    <div data-testid="timestamp-tooltip-mock" {...props}>
      <div data-testid="timestamp-tooltip-mock-content">{content}</div>
      {children}
    </div>
  )
}));

test('Matches snapshot', () => {
  const { asFragment } = render(<Timestamp datetime="2022-01-01T00:00:00.000Z" date={new Date(2022, 0, 1)} />);

  expect(asFragment()).toMatchSnapshot();
});

test('Renders with current date by default with default formatting', () => {
  const currentDate = new Date();
  render(<Timestamp datetime={currentDate.toISOString()} />);

  expect(screen.getByText(currentDate.toLocaleString())).toBeInTheDocument();
});

test('Renders passed in date with default formatting', () => {
  render(<Timestamp datetime={new Date(2022, 0, 1).toISOString()} date={new Date(2022, 0, 1)} />);

  expect(screen.getByText('1/1/2022, 12:00:00 AM')).toBeInTheDocument();
});

test('Renders with custom formatting when dateFormat and timeFormat are passed in', () => {
  render(
    <Timestamp
      datetime={new Date(2022, 0, 1).toISOString()}
      date={new Date(2022, 0, 1)}
      dateFormat="full"
      timeFormat="short"
    />
  );

  expect(screen.getByText('Saturday, January 1, 2022 at 12:00 AM')).toBeInTheDocument();
});

test('Renders with only date when dateFormat is passed in', () => {
  render(<Timestamp datetime={new Date(2022, 0, 1).toISOString()} date={new Date(2022, 0, 1)} dateFormat="full" />);

  expect(screen.getByText('Saturday, January 1, 2022')).toBeInTheDocument();
});

test('Renders with only time when timeFormat is passed in', () => {
  render(<Timestamp datetime={new Date(2022, 0, 1).toISOString()} date={new Date(2022, 0, 1)} timeFormat="short" />);

  expect(screen.getByText('12:00 AM')).toBeInTheDocument();
});

test('Renders with custom formatting when customFormat is passed in', () => {
  render(
    <Timestamp
      datetime={new Date(2022, 0, 1).toISOString()}
      date={new Date(2022, 0, 1)}
      customFormat={{ year: '2-digit', month: 'short', weekday: 'short', day: 'numeric', hour: 'numeric' }}
    />
  );

  expect(screen.getByText('Sat, Jan 1, 22, 12 AM')).toBeInTheDocument();
});

test('Renders with custom content', () => {
  render(
    <Timestamp datetime={new Date(2022, 0, 1).toISOString()} date={new Date(2022, 0, 1)}>
      2 days ago
    </Timestamp>
  );

  expect(screen.getByText('2 days ago')).toBeInTheDocument();
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
  render(
    <Timestamp
      datetime={new Date(2022, 0, 1).toISOString()}
      date={new Date(2022, 0, 1)}
      className="custom-time-class"
    />
  );

  expect(screen.getByText('1/1/2022, 12:00:00 AM').parentElement).toHaveClass('custom-time-class');
});

test('Renders with pf-m-help-text class when hasUTCTooltip is passed in', () => {
  render(<Timestamp datetime={new Date(2022, 0, 1).toISOString()} date={new Date(2022, 0, 1)} hasUTCTooltip />);

  expect(screen.getByText('1/1/2022, 12:00:00 AM').parentElement).toHaveClass('pf-m-help-text');
});

test('Renders with pf-m-help-text class when tooltipProps is passed in', () => {
  render(
    <Timestamp
      datetime={new Date(2022, 0, 1).toISOString()}
      date={new Date(2022, 0, 1)}
      tooltipProps={{ content: 'Custom content' }}
    />
  );

  expect(screen.getByText('1/1/2022, 12:00:00 AM').parentElement).toHaveClass('pf-m-help-text');
});

test('Renders with default UTC tooltip content', () => {
  render(<Timestamp datetime={new Date(2022, 0, 1).toISOString()} date={new Date(2022, 0, 1)} hasUTCTooltip />);

  expect(screen.getByText('1/1/2022, 5:00:00 AM UTC')).toBeInTheDocument();
});

test('Renders with custom UTC suffix', () => {
  render(
    <Timestamp
      datetime={new Date(2022, 0, 1).toISOString()}
      date={new Date(2022, 0, 1)}
      hasUTCTooltip
      utcSuffix="Coordinated Universal Time"
    />
  );

  expect(screen.getByText('1/1/2022, 5:00:00 AM Coordinated Universal Time')).toBeInTheDocument();
});

test('Renders with custom tooltip content', () => {
  render(
    <Timestamp
      datetime={new Date(2022, 0, 1).toISOString()}
      date={new Date(2022, 0, 1)}
      tooltipProps={{ content: 'Custom tooltip content' }}
    />
  );

  expect(screen.getByText('Custom tooltip content')).toBeInTheDocument();
});
