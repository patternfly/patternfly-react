import React from 'react';
import { render, screen } from '@testing-library/react';
import { ActionListItem } from '../ActionListItem';
import styles from '@patternfly/react-styles/css/components/ActionList/action-list';

test('Renders without children', () => {
  render(<ActionListItem data-testid="action-list-item" />);
  expect(screen.getByTestId('action-list-item')).toBeVisible();
});

test('Renders children', () => {
  render(<ActionListItem>Test</ActionListItem>);

  expect(screen.getByText('Test')).toBeVisible();
});

test(`Renders with class ${styles.actionList}__item`, () => {
  render(<ActionListItem>Test</ActionListItem>);

  expect(screen.getByText('Test')).toHaveClass(`${styles.actionList}__item`);
});

test('Renders with custom class names provided via prop', () => {
  render(<ActionListItem className="custom-class">Test</ActionListItem>);

  expect(screen.getByText('Test')).toHaveClass('custom-class');
});

test('Renders with inherited element props spread to the component', () => {
  render(<ActionListItem aria-label="Test label">Test</ActionListItem>);

  expect(screen.getByText('Test')).toHaveAccessibleName('Test label');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<ActionListItem>test</ActionListItem>);
  expect(asFragment()).toMatchSnapshot();
});
