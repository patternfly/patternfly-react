import { render, screen } from '@testing-library/react';
import { Tfoot } from '../Tfoot';
import styles from '@patternfly/react-styles/css/components/Table/table';

test('Renders without children', () => {
  render(
    <table>
      <Tfoot />
    </table>
  );

  expect(screen.getByRole('rowgroup')).toBeInTheDocument();
});

test('Renders with children', () => {
  render(
    <table>
      <Tfoot>Footer content</Tfoot>
    </table>
  );

  expect(screen.getByRole('rowgroup')).toHaveTextContent('Footer content');
});

test(`Renders with class ${styles.tableTfoot} only by default`, () => {
  render(
    <table>
      <Tfoot />
    </table>
  );

  expect(screen.getByRole('rowgroup')).toHaveClass(styles.tableTfoot, { exact: true });
});

test('Forwards refs to the tfoot element', () => {
  const ref = { current: null } as React.RefObject<HTMLTableSectionElement>;

  render(
    <table>
      <Tfoot ref={ref} />
    </table>
  );

  expect(ref.current).toBe(screen.getByRole('rowgroup'));
});

test('Renders with custom class names provided via prop', () => {
  render(
    <table>
      <Tfoot className="custom-footer" />
    </table>
  );

  expect(screen.getByRole('rowgroup')).toHaveClass('custom-footer');
});

test('Spreads additional props', () => {
  render(
    <table>
      <Tfoot data-custom="true" />
    </table>
  );

  expect(screen.getByRole('rowgroup')).toHaveAttribute('data-custom', 'true');
});
