import { render, screen } from '@testing-library/react';
import { Table } from '../Table';
import styles from '@patternfly/react-styles/css/components/Table/table';

test('Renders without children', () => {
  render(<Table aria-label="Test table" />);

  expect(screen.getByRole('grid', { name: 'Test table' })).toBeInTheDocument();
});

test('Renders with children', () => {
  render(
    <Table aria-label="Test table">
      <caption>Table caption</caption>
    </Table>
  );

  expect(screen.getByRole('grid', { name: 'Test table' })).toHaveTextContent('Table caption');
});

test('Renders with role="treegrid" when isTreeTable is true', () => {
  render(<Table isTreeTable aria-label="Test table" />);

  expect(screen.getByRole('treegrid', { name: 'Test table' })).toBeInTheDocument();
});

test(`Renders with class ${styles.table} by default`, () => {
  render(<Table aria-label="Test table" />);

  expect(screen.getByRole('grid', { name: 'Test table' })).toHaveClass(styles.table);
});

test(`Renders with a pf-m-grid class by default`, () => {
  render(<Table aria-label="Test table" />);

  expect(screen.getByRole('grid', { name: 'Test table' })).toHaveClass(/^pf-m-grid/);
});

test(`Renders with a pf-m-tree-view-grid class when isTreeTable is true`, () => {
  render(<Table isTreeTable aria-label="Test table" />);

  expect(screen.getByRole('treegrid', { name: 'Test table' })).not.toHaveClass(/^pf-m-grid/);
  expect(screen.getByRole('treegrid', { name: 'Test table' })).toHaveClass(/^pf-m-tree-view-grid/);
});

test(`Does not render with class ${styles.modifiers.animateExpand} by default`, () => {
  render(<Table aria-label="Test table" />);

  expect(screen.getByRole('grid', { name: 'Test table' })).not.toHaveClass(styles.modifiers.animateExpand);
});

test(`Renders with class ${styles.modifiers.animateExpand} hasAnimations is true`, () => {
  render(<Table hasAnimations aria-label="Test table" />);

  expect(screen.getByRole('grid', { name: 'Test table' })).toHaveClass(styles.modifiers.animateExpand);
});

test('Matches snapshot without children', () => {
  const { asFragment } = render(<Table />);

  expect(asFragment()).toMatchSnapshot();
});
