import { render, screen } from '@testing-library/react';
import { CompassNavMain } from '../CompassNavMain';
import styles from '@patternfly/react-styles/css/components/Compass/compass';

test('Renders with children', () => {
  render(<CompassNavMain>Test content</CompassNavMain>);

  expect(screen.getByText('Test content')).toBeVisible();
});

test('Renders with custom class name when className prop is provided', () => {
  render(<CompassNavMain className="custom-class">Test</CompassNavMain>);

  expect(screen.getByText('Test')).toHaveClass('custom-class');
});

test(`Renders with default ${styles.compassNavMain} class`, () => {
  render(<CompassNavMain>Test</CompassNavMain>);

  expect(screen.getByText('Test')).toHaveClass(styles.compassNavMain, { exact: true });
});

test('Renders with additional props spread to the component', () => {
  render(<CompassNavMain aria-label="Test label">Test</CompassNavMain>);

  expect(screen.getByText('Test')).toHaveAccessibleName('Test label');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(
    <CompassNavMain>
      <div>Main tabs content</div>
    </CompassNavMain>
  );

  expect(asFragment()).toMatchSnapshot();
});
