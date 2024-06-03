import React from 'react';
import { render, screen } from '@testing-library/react';
import { Truncate } from '../Truncate';
import styles from '@patternfly/react-styles/css/components/Truncate/truncate';

jest.mock('../../Tooltip', () => ({
  Tooltip: ({ content, position, children, ...props }) => (
    <div data-testid="Tooltip-mock" {...props}>
      <div data-testid="Tooltip-mock-content-container">Test {content}</div>
      <p>{`position: ${position}`}</p>
      {children}
    </div>
  )
}));

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn()
}));

test(`renders with class ${styles.truncate}`, () => {
  render(<Truncate content={''} aria-label="test-id" />);

  const test = screen.getByLabelText('test-id');

  expect(test).toHaveClass(styles.truncate);
});

test('renders with custom class name passed via prop', () => {
  render(<Truncate content={''} aria-label="test-id" className="custom-classname" />);

  const test = screen.getByLabelText('test-id');

  expect(test).toHaveClass('custom-classname');
});

test('renders truncate with empty content', () => {
  render(<Truncate content={''} aria-label="test-id" />);

  const test = screen.getByLabelText('test-id');

  expect(test).toHaveTextContent('');
});

test('renders truncate with content', () => {
  render(<Truncate content={'Test'} aria-label="test-id" />);

  const test = screen.getByLabelText('test-id');

  expect(test).toHaveTextContent('Test');
});

test(`only renders ${styles.truncateStart} with default position`, () => {
  render(<Truncate content={'Testing truncate content'} />);

  const start = screen.getByText('Testing truncate content');

  expect(start).toHaveClass(styles.truncateStart);
  expect(start).not.toHaveClass(styles.truncateEnd);
});

test('renders default truncation', () => {
  const { asFragment } = render(
    <Truncate content={'Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan.'} />
  );
  expect(asFragment()).toMatchSnapshot();
});

test('renders start truncation with &lrm; at end', () => {
  const { asFragment } = render(
    <Truncate
      content={'Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan.'}
      position={'start'}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

test('renders middle truncation', () => {
  render(
    <Truncate
      content={'Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan.'}
      position={'middle'}
    />
  );

  const start = screen.getByText('Vestibulum interdum risus et enim faucibus, sit amet molestie est ac');

  expect(start).toHaveClass(styles.truncateStart);

  const end = screen.getByText('cumsan.');

  expect(end).toHaveClass(styles.truncateEnd);
});

test('renders different content when trailingNumChars is passed with middle truncate', () => {
  render(
    <Truncate
      content={'Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan.'}
      trailingNumChars={3}
      position="middle"
    />
  );

  const start = screen.getByText('Vestibulum interdum risus et enim faucibus, sit amet molestie est accums');

  expect(start).toHaveClass(styles.truncateStart);

  const end = screen.getByText('an.');

  expect(end).toHaveClass(styles.truncateEnd);
});

test('renders tooltip position', () => {
  render(<Truncate content={''} tooltipPosition="top" />);

  const input = screen.getByText('position: top');

  expect(input).toBeVisible();
});

test('renders tooltip content', () => {
  render(<Truncate content={'Another Tooltip'} tooltipPosition="top" />);

  const input = screen.getByText('Test Another Tooltip');

  expect(input).toBeVisible();
});

test('renders with inherited element props spread to the component', () => {
  render(<Truncate content={'Test'} data-testid="test-id" aria-label="labelling-id" />);

  expect(screen.getByTestId('test-id')).toHaveAccessibleName('labelling-id');
});
