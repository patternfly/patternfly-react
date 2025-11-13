import { render, screen } from '@testing-library/react';
import { CompassMainHeaderContent } from '../CompassMainHeaderContent';
import styles from '@patternfly/react-styles/css/components/Compass/compass';

test('Renders with children', () => {
  render(<CompassMainHeaderContent>Custom content</CompassMainHeaderContent>);
  expect(screen.getByText('Custom content')).toBeVisible();
});

test(`Renders with default ${styles.compass}__main-header-content class`, () => {
  render(<CompassMainHeaderContent>Test</CompassMainHeaderContent>);
  expect(screen.getByText('Test')).toHaveClass(`${styles.compass}__main-header-content`);
});

test('Renders with custom class name when className prop is provided', () => {
  render(<CompassMainHeaderContent className="custom-class">Test</CompassMainHeaderContent>);
  expect(screen.getByText('Test')).toHaveClass('custom-class');
});

test('Renders with additional props spread to the component', () => {
  render(<CompassMainHeaderContent id="custom-id">Test</CompassMainHeaderContent>);
  expect(screen.getByText('Test')).toHaveAttribute('id', 'custom-id');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<CompassMainHeaderContent>Content</CompassMainHeaderContent>);
  expect(asFragment()).toMatchSnapshot();
});
