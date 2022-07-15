import React from 'react';
import { render, screen } from '@testing-library/react';
import { ActionListGroup } from '../ActionListGroup';

test('Renders without children', () => {
  render(<ActionListGroup data-testid="action-list-group" />);
  expect(screen.getByTestId('action-list-group')).toBeVisible();
});

test('Renders children', () => {
  render(<ActionListGroup>Test</ActionListGroup>);

  expect(screen.getByText('Test')).toBeVisible();
});

test('Renders with class pf-c-action-list__group', () => {
  render(<ActionListGroup>Test</ActionListGroup>);

  expect(screen.getByText('Test')).toHaveClass('pf-c-action-list__group');
});

test('Renders with custom class names provided via prop', () => {
  render(<ActionListGroup className="custom-class">Test</ActionListGroup>);

  expect(screen.getByText('Test')).toHaveClass('custom-class');
});

test('Renders with inherited element props spread to the component', () => {
  render(<ActionListGroup aria-label="Test label">Test</ActionListGroup>);

  expect(screen.getByText('Test')).toHaveAccessibleName('Test label');
})

test('Matches the snapshot', () => {
  const { asFragment } = render(<ActionListGroup>test</ActionListGroup>);
  expect(asFragment()).toMatchSnapshot();
});
