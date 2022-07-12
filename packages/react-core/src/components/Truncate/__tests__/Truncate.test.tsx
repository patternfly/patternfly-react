import React from 'react';
import { render, screen } from '@testing-library/react';
import { Truncate } from '../Truncate';

jest.mock('../../Tooltip', () => ({
  Tooltip: ({ content, tooltipPosition, children, ...props }) => (
    <>
      <div {...props}>{children}</div>
    </>
  )
}));

test('renders with class pf-c-truncate', () => {
  render(
    <Truncate
      content={''}
      aria-label='test-id'
    />
  );

  const test = screen.getByLabelText('test-id');

  expect(test).toHaveClass('pf-c-truncate');
});

test('renders with custom class name passed via prop', () => {
  render(
    <Truncate
      content={''}
      aria-label='test-id'
      className='custom-classname'
    />
  );

  const test = screen.getByLabelText('test-id');

  expect(test).toHaveClass('custom-classname');
});

test('renders truncate with empty content', () => {
  render(
    <Truncate
      content={''}
      aria-label='test-id'
    />
  );

  const test = screen.getByLabelText('test-id');

  expect(test).toHaveTextContent('');
});

test('renders truncate with content', () => {
  render(
    <Truncate
      content={'Test'}
      aria-label='test-id'
    />
  );

  const test = screen.getByLabelText('test-id');

  expect(test).toHaveTextContent('Test');
});

test('renders pf-c-truncate__start when trailingNumChars prop passed', () => {
  render(
    <Truncate
      content={'Testing truncate content'}
      trailingNumChars={3}
      position='middle'
    />
  );

  const start = screen.getByText('Testing truncate cont');

  expect(start).toHaveClass('pf-c-truncate__start');
});

test('renders pf-c-truncate__end when trailingNumChars prop passed', () => {
  render(
    <Truncate
      content={'Testing truncate content'}
      trailingNumChars={3}
      position='middle'
    />
  );

  const end = screen.getByText('ent');

  expect(end).toHaveClass('pf-c-truncate__end');
});

test('only renders pf-c-truncate__start if truncate position is the end', () => {
  render(
    <Truncate
      content={'Testing truncate content'}
      position='end'
    />
  );

  const start = screen.getByText('Testing truncate content');

  expect(start).toHaveClass('pf-c-truncate__start');
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
  const { asFragment } = render(
    <Truncate
      content={'Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan.'}
      position={'middle'}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

test('renders tooltip placement', () => {
  const { asFragment } = render(
    <Truncate
      content={''}
      tooltipPosition='auto'
    />
  );

  expect(asFragment()).toMatchSnapshot();
});

test('renders with inherited element props spread to the component', () => {
  render(
    <Truncate
      content={'Test'}
      data-testid="test-id"
      aria-label="labelling-id"
    />
  );

  expect(screen.getByTestId('test-id')).toHaveAccessibleName('labelling-id');
});
