import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { PanelHeader } from '../PanelHeader';
import styles from '@patternfly/react-styles/css/components/Panel/panel';

test('Renders without children', () => {
  render(
    <div data-testid="panelHeader">
      <PanelHeader />
    </div>
  );
  expect(screen.getByTestId('panelHeader').firstChild).toBeVisible();
});

test('Renders children', () => {
  render(<PanelHeader>Test</PanelHeader>);
  expect(screen.getByText('Test')).toBeVisible();
});

test(`Renders with the class ${styles.panelHeader}`, () => {
  render(<PanelHeader>Test</PanelHeader>);
  expect(screen.getByText('Test')).toHaveClass(styles.panelHeader);
});

test(`Renders with only the class ${styles.panelHeader} by default`, () => {
  render(<PanelHeader>Test</PanelHeader>);
  expect(screen.getByText('Test')).toHaveClass(styles.panelHeader, { exact: true });
});

test('Renders with custom class name when className prop is passed', () => {
  render(<PanelHeader className="test-class">Test</PanelHeader>);
  expect(screen.getByText('Test')).toHaveClass('test-class');
});

test('Renders with the inherited element props spread to the component', () => {
  render(<PanelHeader aria-label="this is a simple panel header">Test</PanelHeader>);
  expect(screen.getByText('Test')).toHaveAccessibleName('this is a simple panel header');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<PanelHeader>Test</PanelHeader>);
  expect(asFragment()).toMatchSnapshot();
});
