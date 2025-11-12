import { render, screen } from '@testing-library/react';
import { CompassHero } from '../CompassHero';
import styles from '@patternfly/react-styles/css/components/Compass/compass';

test('Renders without children', () => {
  render(
    <div data-testid="test-hero">
      <CompassHero />
    </div>
  );
  expect(screen.getByTestId('test-hero').firstChild).toBeVisible();
});

test('Renders with children', () => {
  render(<CompassHero>Test content</CompassHero>);
  expect(screen.getByText('Test content')).toBeVisible();
});

test(`Renders with ${styles.compass}__hero class by defaulty`, () => {
  render(<CompassHero>Test</CompassHero>);

  expect(screen.getByText('Test')).toHaveClass(`${styles.compass}__hero`, { exact: true });
});

test('Renders with custom class name when className prop is provided', () => {
  render(<CompassHero className="custom-class">Test</CompassHero>);
  expect(screen.getByText('Test')).toHaveClass('custom-class');
});

test('Renders with additional props spread to the component', () => {
  render(<CompassHero aria-label="Test label">Test</CompassHero>);
  expect(screen.getByText('Test')).toHaveAccessibleName('Test label');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<CompassHero>Hero content</CompassHero>);
  expect(asFragment()).toMatchSnapshot();
});
