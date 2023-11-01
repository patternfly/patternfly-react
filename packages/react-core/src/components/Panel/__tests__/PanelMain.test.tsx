import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { PanelMain } from '../PanelMain';
import cssPanelMainMaxHeight from '@patternfly/react-tokens/dist/esm/c_panel__main_MaxHeight';
import styles from '@patternfly/react-styles/css/components/Panel/panel';

test('Renders without children', () => {
  render(
    <div data-testid="panelMain">
      <PanelMain />
    </div>
  );
  expect(screen.getByTestId('panelMain').firstChild).toBeVisible();
});

test('Renders children', () => {
  render(<PanelMain>Test</PanelMain>);
  expect(screen.getByText('Test')).toBeVisible();
});

test(`Renders with the class ${styles.panelMain}`, () => {
  render(<PanelMain>Test</PanelMain>);
  expect(screen.getByText('Test')).toHaveClass(styles.panelMain);
});

test(`Renders with only the class ${styles.panelMain} by default`, () => {
  render(<PanelMain>Test</PanelMain>);
  expect(screen.getByText('Test')).toHaveClass(styles.panelMain, { exact: true });
});

test('Renders with custom class name when className prop is passed', () => {
  render(<PanelMain className="test-class">Test</PanelMain>);
  expect(screen.getByText('Test')).toHaveClass('test-class');
});

test('Renders with custom max height name when maxHeight prop is passed', () => {
  render(<PanelMain maxHeight="100px">Test</PanelMain>);
  const styles = getComputedStyle(screen.getByText('Test'));
  expect(styles.getPropertyValue(cssPanelMainMaxHeight.name)).toBe('100px');
});

test('Renders with the inherited element props spread to the component', () => {
  render(<PanelMain aria-label="this is a simple panel main">Test</PanelMain>);
  expect(screen.getByText('Test')).toHaveAccessibleName('this is a simple panel main');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<PanelMain>Test</PanelMain>);
  expect(asFragment()).toMatchSnapshot();
});
