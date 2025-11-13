import { render, screen } from '@testing-library/react';
import { CompassNavHome } from '../CompassNavHome';
import styles from '@patternfly/react-styles/css/components/Compass/compass';

test('Renders with children', () => {
  render(<CompassNavHome>Test content</CompassNavHome>);
  expect(screen.getByText('Test content')).toBeVisible();
});

test('Renders with custom class name when className prop is provided', () => {
  render(<CompassNavHome className="custom-class">Test</CompassNavHome>);
  expect(screen.getByText('Test')).toHaveClass('custom-class');
});

test(`Renders with default ${styles.compassNavHome} class`, () => {
  render(<CompassNavHome>Test</CompassNavHome>);
  expect(screen.getByText('Test')).toHaveClass(styles.compassNavHome);
});

test('Renders with additional props spread to the component', () => {
  render(<CompassNavHome aria-label="Test label">Test</CompassNavHome>);
  expect(screen.getByText('Test')).toHaveAccessibleName('Test label');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(
    <CompassNavHome>
      <div>Home button</div>
    </CompassNavHome>
  );
  expect(asFragment()).toMatchSnapshot();
});
