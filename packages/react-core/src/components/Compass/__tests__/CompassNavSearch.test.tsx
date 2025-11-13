import { render, screen } from '@testing-library/react';
import { CompassNavSearch } from '../CompassNavSearch';
import styles from '@patternfly/react-styles/css/components/Compass/compass';

test('Renders with children', () => {
  render(<CompassNavSearch>Test content</CompassNavSearch>);
  expect(screen.getByText('Test content')).toBeVisible();
});

test('Renders with custom class name when className prop is provided', () => {
  render(<CompassNavSearch className="custom-class">Test</CompassNavSearch>);
  expect(screen.getByText('Test')).toHaveClass('custom-class');
});

test(`Renders with default ${styles.compassNavSearch} class`, () => {
  render(<CompassNavSearch>Test</CompassNavSearch>);
  expect(screen.getByText('Test')).toHaveClass(styles.compassNavSearch);
});

test('Renders with additional props spread to the component', () => {
  render(<CompassNavSearch aria-label="Test label">Test</CompassNavSearch>);
  expect(screen.getByText('Test')).toHaveAccessibleName('Test label');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(
    <CompassNavSearch>
      <div>Search button</div>
    </CompassNavSearch>
  );
  expect(asFragment()).toMatchSnapshot();
});
