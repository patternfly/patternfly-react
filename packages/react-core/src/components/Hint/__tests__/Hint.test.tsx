import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Hint } from '../Hint';

test('renders without children', () => {
  render(<Hint data-testid='Hint' />);

  expect(screen.getByTestId('Hint')).toBeVisible();
});

test('renders children', () => {
  render(<Hint>Test</Hint>);

  expect(screen.getByText('Test')).toBeVisible();
});

test('renders with class pf-c-hint', () => {
  render(<Hint>Test</Hint>);

  const hint = screen.getByText('Test');

  expect(hint).toHaveClass('pf-c-hint');
});

test('renders with custom class names provided via prop', () => {
  render(<Hint className='custom-classname'>Test</Hint>);

  const hint = screen.getByText('Test');

  expect(hint).toHaveClass('custom-classname');
});

test('does not render actions options when not passed', () => {
  render(<Hint>Test</Hint>);

  const actions = screen.queryByText('actions');

  expect(actions).not.toBeInTheDocument();
});

test('renders actions options', () => {
  render(<Hint actions="actions">Test</Hint>);

  const actions = screen.getByText("actions");

  expect(actions).toBeVisible();
});

test('renders with class pf-c-hint__actions if there is an action prop', () => {
  render(<Hint actions="actions">Test</Hint>);

  const hint = screen.getByText('actions');

  expect(hint).toHaveClass('pf-c-hint__actions');
});

test('renders with inherited element props spread to the component', () => {
  render(
    <Hint aria-label="labelling-id">Test</Hint>
  );

  expect(screen.getByText('Test')).toHaveAccessibleName('labelling-id');
});

test('matches hint snapshot', () => {
  const { asFragment } = render(
    <Hint />
  );
  expect(asFragment()).toMatchSnapshot();
});
