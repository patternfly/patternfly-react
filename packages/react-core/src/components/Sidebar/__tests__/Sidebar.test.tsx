import { render, screen } from '@testing-library/react';
import { Sidebar } from '../Sidebar';
import styles from '@patternfly/react-styles/css/components/Sidebar/sidebar';

test('Renders without children', () => {
  render(
    <div data-testid="sidebar">
      <Sidebar />
    </div>
  );
  expect(screen.getByTestId('sidebar').firstChild).toBeVisible();
});

test('Renders children', () => {
  render(<Sidebar>Test</Sidebar>);
  expect(screen.getByText('Test')).toBeVisible();
});

test(`Renders with only class name ${styles.sidebar} by default`, () => {
  render(<Sidebar>Test</Sidebar>);
  expect(screen.getByText('Test').parentElement).toHaveClass(styles.sidebar, { exact: true });
});

test(`Renders with class name ${styles.sidebar}`, () => {
  render(<Sidebar>Test</Sidebar>);
  expect(screen.getByText('Test').parentElement).toHaveClass(styles.sidebar);
});

test('Renders with custom class name when className prop is provided', () => {
  render(<Sidebar className="custom-class">Test</Sidebar>);
  expect(screen.getByText('Test').parentElement).toHaveClass('custom-class');
});

test('Renders with class name pf-m-no-background when hasNoBackground prop is passed', () => {
  render(<Sidebar hasNoBackground>Test</Sidebar>);
  expect(screen.getByText('Test').parentElement).toHaveClass('pf-m-no-background');
});

test('Renders with class name pf-m-border when hasBorder prop is passed', () => {
  render(<Sidebar hasBorder>Test</Sidebar>);
  expect(screen.getByText('Test')).toHaveClass('pf-m-border');
});

test('Renders with class name pf-m-stack when "stack" is passed to orientation prop', () => {
  render(<Sidebar orientation="stack">Test</Sidebar>);
  expect(screen.getByText('Test').parentElement).toHaveClass('pf-m-stack');
});

test('Renders with class name pf-m-split when "split" is passed to orientation prop', () => {
  render(<Sidebar orientation="split">Test</Sidebar>);
  expect(screen.getByText('Test').parentElement).toHaveClass('pf-m-split');
});

test('Renders with class name pf-m-panel-right when isPanelRight prop is passed', () => {
  render(<Sidebar isPanelRight>Test</Sidebar>);
  expect(screen.getByText('Test').parentElement).toHaveClass('pf-m-panel-right');
});

test('Renders with class name pf-m-gutter when hasGutter prop is passed', () => {
  render(<Sidebar hasGutter>Test</Sidebar>);
  expect(screen.getByText('Test').parentElement).toHaveClass('pf-m-gutter');
});

test(`Renders with class name ${styles.sidebarMain} by default for child component`, () => {
  render(<Sidebar>Test</Sidebar>);
  expect(screen.getByText('Test')).toHaveClass(styles.sidebarMain);
});

test('Renders with inherited element props spread to the component', () => {
  render(<Sidebar aria-label="Test label">Test</Sidebar>);
  expect(screen.getByText('Test').parentElement).toHaveAccessibleName('Test label');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<Sidebar>Test</Sidebar>);
  expect(asFragment()).toMatchSnapshot();
});
