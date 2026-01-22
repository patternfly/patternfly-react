import { render, screen } from '@testing-library/react';
import { CompassMainHeaderToolbar } from '../CompassMainHeaderToolbar';
import styles from '@patternfly/react-styles/css/components/Compass/compass';

test('Renders with children', () => {
  render(<CompassMainHeaderToolbar>Custom content</CompassMainHeaderToolbar>);
  expect(screen.getByText('Custom content')).toBeVisible();
});

test(`Renders with default ${styles.compass}__main-header-toolbar class`, () => {
  render(<CompassMainHeaderToolbar>Test</CompassMainHeaderToolbar>);
  expect(screen.getByText('Test')).toHaveClass(`${styles.compass}__main-header-toolbar`);
});

test('Renders with custom class name when className prop is provided', () => {
  render(<CompassMainHeaderToolbar className="custom-class">Test</CompassMainHeaderToolbar>);
  expect(screen.getByText('Test')).toHaveClass('custom-class');
});

test('Renders with additional props spread to the component', () => {
  render(<CompassMainHeaderToolbar id="custom-id">Test</CompassMainHeaderToolbar>);
  expect(screen.getByText('Test')).toHaveAttribute('id', 'custom-id');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<CompassMainHeaderToolbar>Content</CompassMainHeaderToolbar>);
  expect(asFragment()).toMatchSnapshot();
});
