import { render, screen } from '@testing-library/react';
import { ActionList } from '../ActionList';
import styles from '@patternfly/react-styles/css/components/ActionList/action-list';

test('Renders without children', () => {
  render(<ActionList data-testid="action-list" />);
  expect(screen.getByTestId('action-list')).toBeVisible();
});

test('Renders children', () => {
  render(<ActionList>Test</ActionList>);

  expect(screen.getByText('Test')).toBeVisible();
});

test(`Renders with class ${styles.actionList}`, () => {
  render(<ActionList>Test</ActionList>);

  expect(screen.getByText('Test')).toHaveClass(styles.actionList);
});

test('Renders with custom class names provided via prop', () => {
  render(<ActionList className="custom-class">Test</ActionList>);

  expect(screen.getByText('Test')).toHaveClass('custom-class');
});

test(`Does not render with class ${styles.modifiers.icons} by default`, () => {
  render(<ActionList>Test</ActionList>);

  expect(screen.getByText('Test')).not.toHaveClass(styles.modifiers.icons);
});

test(`Renders with class ${styles.modifiers.icons} when isIconList is true`, () => {
  render(<ActionList isIconList={true}>Test</ActionList>);

  expect(screen.getByText('Test')).toHaveClass(styles.modifiers.icons);
});

test('Renders with inherited element props spread to the component', () => {
  render(<ActionList aria-label="Test label">Test</ActionList>);

  expect(screen.getByText('Test')).toHaveAccessibleName('Test label');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<ActionList>test</ActionList>);
  expect(asFragment()).toMatchSnapshot();
});
