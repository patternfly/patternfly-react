import { render, screen } from '@testing-library/react';
import { CompassPanel } from '../CompassPanel';
import styles from '@patternfly/react-styles/css/components/Compass/compass';

test.skip('Renders with children', () => {
  render(<CompassPanel>Test content</CompassPanel>);
  expect(screen.getByText('Test content')).toBeVisible();
});

test.skip('Renders with custom class name when className prop is provided', () => {
  render(<CompassPanel className="custom-class">Test</CompassPanel>);
  expect(screen.getByText('Test')).toHaveClass('custom-class');
});

test.skip(`Renders with default ${styles.compassPanel} class`, () => {
  render(<CompassPanel>Test</CompassPanel>);
  expect(screen.getByText('Test')).toHaveClass(styles.compassPanel);
});

test.skip(`Renders with ${styles.modifiers.pill} when isPill is true`, () => {
  render(<CompassPanel isPill>Test</CompassPanel>);
  expect(screen.getByText('Test')).toHaveClass(styles.modifiers.pill);
});

test.skip(`Renders with ${styles.modifiers.noBorder} when hasNoBorder is true`, () => {
  render(<CompassPanel hasNoBorder>Test</CompassPanel>);
  expect(screen.getByText('Test')).toHaveClass(styles.modifiers.noBorder);
});

test.skip(`Renders with ${styles.modifiers.noPadding} when hasNoPadding is true`, () => {
  render(<CompassPanel hasNoPadding>Test</CompassPanel>);
  expect(screen.getByText('Test')).toHaveClass(styles.modifiers.noPadding);
});

test.skip('Renders with pf-v6-m-thinking when isThinking is true', () => {
  render(<CompassPanel isThinking>Test</CompassPanel>);
  expect(screen.getByText('Test')).toHaveClass('pf-v6-m-thinking');
});

test.skip(`Renders with ${styles.modifiers.fullHeight} when isFullHeight is true`, () => {
  render(<CompassPanel isFullHeight>Test</CompassPanel>);
  expect(screen.getByText('Test')).toHaveClass(styles.modifiers.fullHeight);
});

test.skip(`Renders with ${styles.modifiers.scrollable} when isScrollable is true`, () => {
  render(<CompassPanel isScrollable>Test</CompassPanel>);
  expect(screen.getByText('Test')).toHaveClass(styles.modifiers.scrollable);
});

test.skip('Renders with multiple modifier classes when multiple props are true', () => {
  render(
    <CompassPanel isPill hasNoBorder hasNoPadding isThinking isFullHeight isScrollable>
      Test
    </CompassPanel>
  );
  const panelElement = screen.getByText('Test');
  expect(panelElement).toHaveClass(styles.modifiers.pill);
  expect(panelElement).toHaveClass(styles.modifiers.noBorder);
  expect(panelElement).toHaveClass(styles.modifiers.noPadding);
  expect(panelElement).toHaveClass('pf-v6-m-thinking');
  expect(panelElement).toHaveClass(styles.modifiers.fullHeight);
  expect(panelElement).toHaveClass(styles.modifiers.scrollable);
});

test.skip('Renders with additional props spread to the component', () => {
  render(<CompassPanel aria-label="Test label">Test</CompassPanel>);
  expect(screen.getByText('Test')).toHaveAccessibleName('Test label');
});

test.skip('Matches the snapshot with all modifiers', () => {
  const { asFragment } = render(
    <CompassPanel isPill hasNoBorder hasNoPadding isThinking isFullHeight isScrollable>
      <div>Panel with all modifiers</div>
    </CompassPanel>
  );
  expect(asFragment()).toMatchSnapshot();
});

test.skip('Matches the snapshot with no modifiers', () => {
  const { asFragment } = render(
    <CompassPanel>
      <div>Basic panel</div>
    </CompassPanel>
  );
  expect(asFragment()).toMatchSnapshot();
});
