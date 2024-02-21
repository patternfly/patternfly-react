import React from 'react';
import { render, screen } from '@testing-library/react';
import { CardSelectableActions } from '../CardSelectableActions';

test('Matches the snapshot', () => {
  const { asFragment } = render(<CardSelectableActions>Test</CardSelectableActions>);
  expect(asFragment()).toMatchSnapshot();
});

test('Renders without children', () => {
  render(<CardSelectableActions data-testid="card-selectable-actions" />);

  expect(screen.getByTestId('card-selectable-actions')).toBeVisible();
});

test('Renders children', () => {
  render(<CardSelectableActions>Test</CardSelectableActions>);

  expect(screen.getByText('Test')).toBeVisible();
});

test('Renders with class name pf-v6-c-card__selectable-actions', () => {
  render(<CardSelectableActions>Test</CardSelectableActions>);

  expect(screen.getByText('Test')).toHaveClass('pf-v6-c-card__selectable-actions');
});

test('Renders with custom class names provided via prop', () => {
  render(<CardSelectableActions className="test-class">Test</CardSelectableActions>);

  expect(screen.getByText('Test')).toHaveClass('test-class');
});
