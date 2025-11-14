import { render, screen } from '@testing-library/react';
import { CompassMessageBar } from '../CompassMessageBar';
import styles from '@patternfly/react-styles/css/components/Compass/compass';

test('Renders without children', () => {
  render(
    <div data-testid="test-message-bar">
      <CompassMessageBar />
    </div>
  );
  expect(screen.getByTestId('test-message-bar').firstChild).toBeVisible();
});

test('Renders with children', () => {
  render(<CompassMessageBar>Test content</CompassMessageBar>);
  expect(screen.getByText('Test content')).toBeVisible();
});

test('Renders with custom class name when className prop is provided', () => {
  render(<CompassMessageBar className="custom-class">Test</CompassMessageBar>);
  expect(screen.getByText('Test')).toHaveClass('custom-class');
});

test(`Renders with default ${styles.compassMessageBar} class`, () => {
  render(<CompassMessageBar>Test</CompassMessageBar>);
  expect(screen.getByText('Test')).toHaveClass(styles.compassMessageBar);
});

test('Renders with additional props spread to the component', () => {
  render(<CompassMessageBar aria-label="Test label">Test</CompassMessageBar>);
  expect(screen.getByText('Test')).toHaveAccessibleName('Test label');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(
    <CompassMessageBar>
      <div>Message bar content</div>
    </CompassMessageBar>
  );
  expect(asFragment()).toMatchSnapshot();
});
