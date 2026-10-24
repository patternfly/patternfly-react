import { render, screen } from '@testing-library/react';
import { CompassDockMain } from '../CompassDockMain';
import styles from '@patternfly/react-styles/css/components/Compass/compass';

test('Renders without children', () => {
  render(
    <div data-testid="test-compass-dock-main">
      <CompassDockMain />
    </div>
  );
  expect(screen.getByTestId('test-compass-dock-main').firstChild).toBeVisible();
});

test('Renders with children', () => {
  render(<CompassDockMain>Test content</CompassDockMain>);
  expect(screen.getByText('Test content')).toBeVisible();
});

test('Renders with custom class name when className prop is provided', () => {
  render(<CompassDockMain className="custom-class">Test</CompassDockMain>);
  expect(screen.getByText('Test')).toHaveClass('custom-class');
});

test(`Renders with default ${styles.compassDockMain} class`, () => {
  render(<CompassDockMain>Test</CompassDockMain>);
  expect(screen.getByText('Test')).toHaveClass(styles.compassDockMain, { exact: true });
});

test('Renders with additional props spread to the component', () => {
  render(<CompassDockMain id="custom-id">Test</CompassDockMain>);
  expect(screen.getByText('Test')).toHaveAttribute('id', 'custom-id');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(
    <CompassDockMain>
      <div>Test content</div>
    </CompassDockMain>
  );
  expect(asFragment()).toMatchSnapshot();
});
