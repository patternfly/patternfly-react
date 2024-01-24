import React from 'react';
import { render, screen } from '@testing-library/react';
import { ActionListGroup } from '../ActionListGroup';
import styles from '@patternfly/react-styles/css/components/ActionList/action-list';

test('Renders without children', () => {
  render(<ActionListGroup data-testid="action-list-group" />);
  expect(screen.getByTestId('action-list-group')).toBeVisible();
});

test('Renders children', () => {
  render(<ActionListGroup>Test</ActionListGroup>);

  expect(screen.getByText('Test')).toBeVisible();
});

test(`Renders with only class ${styles.actionListGroup} by default`, () => {
  render(<ActionListGroup>Test</ActionListGroup>);

  expect(screen.getByText('Test')).toHaveClass(styles.actionListGroup, { exact: true });
});

test(`Renders with class ${styles.modifiers.icons} when isIconGroup is true`, () => {
  render(<ActionListGroup isIconGroup>Test</ActionListGroup>);

  expect(screen.getByText('Test')).toHaveClass(styles.modifiers.icons);
});

test('Renders with custom class names provided via prop', () => {
  render(<ActionListGroup className="custom-class">Test</ActionListGroup>);

  expect(screen.getByText('Test')).toHaveClass('custom-class');
});

test('Renders with inherited element props spread to the component', () => {
  render(<ActionListGroup aria-label="Test label">Test</ActionListGroup>);

  expect(screen.getByText('Test')).toHaveAccessibleName('Test label');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<ActionListGroup>test</ActionListGroup>);
  expect(asFragment()).toMatchSnapshot();
});
