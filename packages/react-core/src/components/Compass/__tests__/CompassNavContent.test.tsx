import { render, screen } from '@testing-library/react';
import { CompassNavContent } from '../CompassNavContent';
import styles from '@patternfly/react-styles/css/components/Compass/compass';

test('Renders with children', () => {
  render(<CompassNavContent>Test content</CompassNavContent>);
  expect(screen.getByText('Test content')).toBeVisible();
});

test('Renders with custom class name when className prop is provided', () => {
  render(<CompassNavContent className="custom-class">Test</CompassNavContent>);
  expect(screen.getByText('Test')).toHaveClass('custom-class');
});

test(`Renders with default ${styles.compassNavContent} class`, () => {
  render(<CompassNavContent>Test</CompassNavContent>);
  expect(screen.getByText('Test')).toHaveClass(styles.compassNavContent);
});

test('Renders with additional props spread to the component', () => {
  render(<CompassNavContent aria-label="Test label">Test</CompassNavContent>);
  expect(screen.getByText('Test')).toHaveAccessibleName('Test label');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(
    <CompassNavContent>
      <div>Nav content wrapper</div>
    </CompassNavContent>
  );
  expect(asFragment()).toMatchSnapshot();
});
