import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Timestamp, TimestampFormat, TimestampTooltipVariant } from '../Timestamp';

jest.mock('../../Tooltip', () => ({
  Tooltip: ({ content, children, ...props }) => (
    <div data-testid="timestamp-tooltip-mock" {...props}>
      <div data-testid="timestamp-tooltip-mock-content">{content}</div>
      {children}
    </div>
  )
}));

test('Matches snapshot', () => {
  /** Due to how the datetime attribute is contstructed internally, dateTime must be
   * manually passed for this snapshot to pass on GitHub.
   */
  const { asFragment } = render(<Timestamp dateTime="2022-01-01T00:00:00.000Z" date={new Date(2022, 0, 1)} />);

  expect(asFragment()).toMatchSnapshot();
});

test('Renders component', () => {
  render(
    <div data-testid="timestamp-container">
      <Timestamp />
    </div>
  );

  expect(screen.getByTestId('timestamp-container').firstChild).toBeVisible();
});

test('Renders with current date by default with default formatting', () => {
  render(<Timestamp />);

  expect(screen.getByText(new Date().toLocaleString())).toBeInTheDocument();
});

test('Renders with correct datetime attribute with current date by default', () => {
  render(<Timestamp />);
  // Because there could be a .001 ms difference in the expected and received datetime value,
  // we want an ISO value without the ms to expect as the datetime value.
  const isoDateWithoutMS = new Date().toISOString().split('.')[0];

  expect(screen.getByText(new Date().toLocaleString())).toHaveAttribute(
    'datetime',
    expect.stringMatching(isoDateWithoutMS)
  );
});

test('Renders passed in date with default formatting', () => {
  render(<Timestamp date={new Date(2022, 0, 1)} />);

  expect(screen.getByText('1/1/2022, 12:00:00 AM')).toBeInTheDocument();
});

test('Renders with correct datetime attribute when date is passed in', () => {
  const passedDate = new Date(2022, 0, 1);
  render(<Timestamp date={passedDate} />);

  expect(screen.getByText('1/1/2022, 12:00:00 AM')).toHaveAttribute('datetime', passedDate.toISOString());
});

test('Renders with custom formatting when dateFormat and timeFormat are passed in', () => {
  render(
    <Timestamp date={new Date(2022, 0, 1)} dateFormat={TimestampFormat.full} timeFormat={TimestampFormat.short} />
  );

  expect(screen.getByText('Saturday, January 1, 2022 at 12:00 AM')).toBeInTheDocument();
});

test('Renders with only date when dateFormat is passed in', () => {
  render(<Timestamp date={new Date(2022, 0, 1)} dateFormat={TimestampFormat.full} />);

  expect(screen.getByText('Saturday, January 1, 2022')).toBeInTheDocument();
});

test('Renders with only time when timeFormat is passed in', () => {
  render(<Timestamp date={new Date(2022, 0, 1)} timeFormat={TimestampFormat.short} />);

  expect(screen.getByText('12:00 AM')).toBeInTheDocument();
});

test('Renders with custom formatting when customFormat is passed in', () => {
  render(
    <Timestamp
      date={new Date(2022, 0, 1)}
      customFormat={{ year: '2-digit', month: 'short', weekday: 'short', day: 'numeric', hour: 'numeric' }}
    />
  );

  expect(screen.getByText('Sat, Jan 1, 22, 12 AM')).toBeInTheDocument();
});

test('Renders with custom content', () => {
  render(<Timestamp>2 days ago</Timestamp>);

  expect(screen.getByText('2 days ago')).toBeInTheDocument();
});

test('Renders with a custom suffix when displaySuffix is passed in', () => {
  render(<Timestamp date={new Date(2022, 0, 1)} displaySuffix="US Eastern" />);

  expect(screen.getByText('1/1/2022, 12:00:00 AM US Eastern')).toBeInTheDocument();
});

test('Renders with 12 hour time when is12Hour is passed', () => {
  render(<Timestamp date={new Date(2022, 0, 1, 13, 0)} is12Hour />);

  expect(screen.getByText('1/1/2022, 1:00:00 PM')).toBeInTheDocument();
});

test('Renders with 24 hour time when is12Hour is set to false', () => {
  render(<Timestamp date={new Date(2022, 0, 1, 13, 0)} is12Hour={false} />);

  expect(screen.getByText('1/1/2022, 13:00:00')).toBeInTheDocument();
});

test('Renders with locale passed in', () => {
  render(<Timestamp date={new Date(2022, 1, 1)} locale="en-GB" />);

  expect(screen.getByText('01/02/2022, 00:00:00')).toBeInTheDocument();
});

test('Renders with 12 hour time by default for US locale', () => {
  render(<Timestamp date={new Date(2022, 1, 1, 13, 0)} locale="en-US" />);

  expect(screen.getByText('2/1/2022, 1:00:00 PM')).toBeInTheDocument();
});

test('Renders with 24 hour time for US locale when is12Hour is false', () => {
  render(<Timestamp date={new Date(2022, 1, 1, 13, 0)} locale="en-US" is12Hour={false} />);

  expect(screen.getByText('2/1/2022, 13:00:00')).toBeInTheDocument();
});

test('Renders with 12 hour time for a 24 hour locale when is12Hour is passed', () => {
  render(<Timestamp date={new Date(2022, 1, 1, 13, 0)} locale="en-GB" is12Hour />);

  expect(screen.getByText('01/02/2022, 1:00:00 pm')).toBeInTheDocument();
});

test('Renders with pf-c-timestamp by default', () => {
  render(<Timestamp date={new Date(2022, 0, 1)} />);

  expect(screen.getByText('1/1/2022, 12:00:00 AM').parentElement).toHaveClass('pf-c-timestamp');
});

test('Renders with pf-c-timestamp__text by default', () => {
  render(<Timestamp date={new Date(2022, 0, 1)} />);

  expect(screen.getByText('1/1/2022, 12:00:00 AM')).toHaveClass('pf-c-timestamp__text');
});

test('Renders with custom class names', () => {
  render(<Timestamp date={new Date(2022, 0, 1)} className="custom-time-class" />);

  expect(screen.getByText('1/1/2022, 12:00:00 AM').parentElement).toHaveClass('custom-time-class');
});

test('Renders with pf-m-help-text class when tooltip is passed in with default variant', () => {
  render(<Timestamp date={new Date(2022, 0, 1)} tooltip={{ variant: TimestampTooltipVariant.default }} />);

  expect(screen.getByText('1/1/2022, 12:00:00 AM').parentElement).toHaveClass('pf-m-help-text');
});

test('Renders with pf-m-help-text class when tooltip is passed in with custom variant', () => {
  render(<Timestamp date={new Date(2022, 0, 1)} tooltip={{ variant: TimestampTooltipVariant.custom }} />);

  expect(screen.getByText('1/1/2022, 12:00:00 AM').parentElement).toHaveClass('pf-m-help-text');
});

test('Renders with default tooltip content for default variant', () => {
  render(<Timestamp date={new Date(2022, 0, 1, 0, 0, 0)} tooltip={{ variant: TimestampTooltipVariant.default }} />);

  expect(screen.getByText('1/1/2022, 5:00:00 AM UTC')).toBeInTheDocument();
});

test('Renders with custom tooltip suffix for default variant', () => {
  render(
    <Timestamp
      date={new Date(2022, 0, 1, 0, 0, 0)}
      tooltip={{ variant: TimestampTooltipVariant.default, suffix: 'Coordinated Universal Time' }}
    />
  );

  expect(screen.getByText('1/1/2022, 5:00:00 AM Coordinated Universal Time')).toBeInTheDocument();
});

test('Renders with custom tooltip content', () => {
  render(<Timestamp tooltip={{ variant: TimestampTooltipVariant.custom, content: 'Custom tooltip content' }} />);

  expect(screen.getByText('Custom tooltip content')).toBeInTheDocument();
});
