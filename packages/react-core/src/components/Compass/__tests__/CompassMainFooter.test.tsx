import { render, screen } from '@testing-library/react';
import { CompassMainFooter } from '../CompassMainFooter';
import styles from '@patternfly/react-styles/css/components/Compass/compass';

test('Renders without children', () => {
  render(
    <div data-testid="test-main-footer">
      <CompassMainFooter />
    </div>
  );
  expect(screen.getByTestId('test-main-footer').firstChild).toBeVisible();
});

test('Renders with children', () => {
  render(<CompassMainFooter>Custom content</CompassMainFooter>);
  expect(screen.getByText('Custom content')).toBeVisible();
});

test('Renders with custom class name when className prop is provided', () => {
  render(<CompassMainFooter className="custom-class">Test</CompassMainFooter>);
  expect(screen.getByText('Test')).toHaveClass('custom-class');
});

test(`Renders with default ${styles.compassMainFooter} class`, () => {
  render(<CompassMainFooter>Test</CompassMainFooter>);
  expect(screen.getByText('Test')).toHaveClass(styles.compassMainFooter);
});

test(`Renders with pf-m-expanded class by default`, () => {
  render(<CompassMainFooter>Test</CompassMainFooter>);
  expect(screen.getByText('Test')).toHaveClass('pf-m-expanded');
});

test(`Renders with pf-m-expanded class when isExpanded is true`, () => {
  render(<CompassMainFooter isExpanded>Test</CompassMainFooter>);
  expect(screen.getByText('Test')).toHaveClass('pf-m-expanded');
});

test(`Renders without pf-m-expanded class when isExpanded is false`, () => {
  render(<CompassMainFooter isExpanded={false}>Test</CompassMainFooter>);
  expect(screen.getByText('Test')).not.toHaveClass('pf-m-expanded');
});

test('Renders with additional props spread to the component', () => {
  render(<CompassMainFooter aria-label="Test label">Test</CompassMainFooter>);
  expect(screen.getByText('Test')).toHaveAccessibleName('Test label');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<CompassMainFooter>Custom children content</CompassMainFooter>);
  expect(asFragment()).toMatchSnapshot();
});
