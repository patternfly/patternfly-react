import { render, screen } from '@testing-library/react';
import { Backdrop } from '../Backdrop';
import styles from '@patternfly/react-styles/css/components/Backdrop/backdrop';

test('Renders without children', () => {
  render(
    <div data-testid="backdrop">
      <Backdrop />
    </div>
  );
  expect(screen.getByTestId('backdrop').firstChild).toBeVisible();
});

test('Renders children', () => {
  render(<Backdrop>Test</Backdrop>);
  expect(screen.getByText('Test')).toBeVisible();
});

test(`Renders with the ${styles.backdrop}`, () => {
  render(<Backdrop>Test</Backdrop>);
  expect(screen.getByText('Test')).toHaveClass(styles.backdrop);
});

test('Renders with animations enabled by default', () => {
  render(<Backdrop>Test</Backdrop>);
  expect(screen.getByText('Test')).toHaveClass(styles.backdrop, styles.modifiers.animate, styles.modifiers.show, {
    exact: true
  });
});

test('Renders without animation classes when animations are explicitly disabled', () => {
  render(<Backdrop hasAnimations={false}>Test</Backdrop>);
  expect(screen.getByText('Test')).toHaveClass(styles.backdrop, { exact: true });
});

test('Renders as visible by default when animations are enabled', () => {
  render(<Backdrop hasAnimations>Test</Backdrop>);
  expect(screen.getByText('Test')).toHaveClass(styles.backdrop, styles.modifiers.animate, styles.modifiers.show, {
    exact: true
  });
});

test('Renders as hidden when animations are enabled and isVisible is false', () => {
  render(
    <Backdrop hasAnimations isVisible={false}>
      Test
    </Backdrop>
  );
  expect(screen.getByText('Test')).toHaveClass(styles.backdrop, styles.modifiers.animate, { exact: true });
});

test('Renders as visible when animations are enabled and isVisible is true', () => {
  render(
    <Backdrop hasAnimations isVisible>
      Test
    </Backdrop>
  );
  expect(screen.getByText('Test')).toHaveClass(styles.backdrop, styles.modifiers.animate, styles.modifiers.show, {
    exact: true
  });
});

test('Renders with custom class name when className prop is passed', () => {
  render(<Backdrop className="test-class">Test</Backdrop>);
  expect(screen.getByText('Test')).toHaveClass('test-class');
});

test('Renders with the inherited element props spread to the component', () => {
  render(<Backdrop aria-label="this is a simple backdrop">Test</Backdrop>);
  expect(screen.getByText('Test')).toHaveAccessibleName('this is a simple backdrop');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<Backdrop>Backdrop</Backdrop>);
  expect(asFragment()).toMatchSnapshot();
});
