import { render, screen } from '@testing-library/react';
import { PanelMainBody } from '../PanelMainBody';
import styles from '@patternfly/react-styles/css/components/Panel/panel';

test('Renders without children', () => {
  render(
    <div data-testid="panelMainBody">
      <PanelMainBody />
    </div>
  );
  expect(screen.getByTestId('panelMainBody').firstChild).toBeVisible();
});

test('Renders children', () => {
  render(<PanelMainBody>Test</PanelMainBody>);
  expect(screen.getByText('Test')).toBeVisible();
});

test(`Renders with the class ${styles.panelMainBody}`, () => {
  render(<PanelMainBody>Test</PanelMainBody>);
  expect(screen.getByText('Test')).toHaveClass(styles.panelMainBody);
});

test(`Renders with only the class ${styles.panelMainBody} by default`, () => {
  render(<PanelMainBody>Test</PanelMainBody>);
  expect(screen.getByText('Test')).toHaveClass(styles.panelMainBody, { exact: true });
});

test('Renders with custom class name when className prop is passed', () => {
  render(<PanelMainBody className="test-class">Test</PanelMainBody>);
  expect(screen.getByText('Test')).toHaveClass('test-class');
});

test('Renders with the inherited element props spread to the component', () => {
  render(<PanelMainBody aria-label="this is a simple panel main body">Test</PanelMainBody>);
  expect(screen.getByText('Test')).toHaveAccessibleName('this is a simple panel main body');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<PanelMainBody>Test</PanelMainBody>);
  expect(asFragment()).toMatchSnapshot();
});
