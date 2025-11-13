import { render, screen } from '@testing-library/react';
import { CompassMainHeaderTitle } from '../CompassMainHeaderTitle';
import styles from '@patternfly/react-styles/css/components/Compass/compass';

test('Renders with children', () => {
  render(<CompassMainHeaderTitle>Custom content</CompassMainHeaderTitle>);
  expect(screen.getByText('Custom content')).toBeVisible();
});

test(`Renders with default ${styles.compass}__main-header-title class`, () => {
  render(<CompassMainHeaderTitle>Test</CompassMainHeaderTitle>);
  expect(screen.getByText('Test')).toHaveClass(`${styles.compass}__main-header-title`);
});

test('Renders with custom class name when className prop is provided', () => {
  render(<CompassMainHeaderTitle className="custom-class">Test</CompassMainHeaderTitle>);
  expect(screen.getByText('Test')).toHaveClass('custom-class');
});

test('Renders with additional props spread to the component', () => {
  render(<CompassMainHeaderTitle id="custom-id">Test</CompassMainHeaderTitle>);
  expect(screen.getByText('Test')).toHaveAttribute('id', 'custom-id');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<CompassMainHeaderTitle>Content</CompassMainHeaderTitle>);
  expect(asFragment()).toMatchSnapshot();
});
