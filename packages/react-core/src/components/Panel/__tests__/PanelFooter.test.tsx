import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { PanelFooter } from '../PanelFooter';
import styles from '@patternfly/react-styles/css/components/Panel/panel';

test('Renders without children', () => {
  render(
    <div data-testid="panelFooter">
      <PanelFooter />
    </div>
  );
  expect(screen.getByTestId('panelFooter').firstChild).toBeVisible();
});

test('Renders children', () => {
  render(<PanelFooter>Test</PanelFooter>);
  expect(screen.getByText('Test')).toBeVisible();
});

test(`Renders with the class ${styles.panelFooter}`, () => {
  render(<PanelFooter>Test</PanelFooter>);
  expect(screen.getByText('Test')).toHaveClass(styles.panelFooter);
});

test(`Renders with only the class ${styles.panelFooter} by default`, () => {
  render(<PanelFooter>Test</PanelFooter>);
  expect(screen.getByText('Test')).toHaveClass(styles.panelFooter, { exact: true });
});

test('Renders with custom class name when className prop is passed', () => {
  render(<PanelFooter className="test-class">Test</PanelFooter>);
  expect(screen.getByText('Test')).toHaveClass('test-class');
});

test('Renders with the inherited element props spread to the component', () => {
  render(<PanelFooter aria-label="this is a simple panel footer">Test</PanelFooter>);
  expect(screen.getByText('Test')).toHaveAccessibleName('this is a simple panel footer');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<PanelFooter>Test</PanelFooter>);
  expect(asFragment()).toMatchSnapshot();
});
