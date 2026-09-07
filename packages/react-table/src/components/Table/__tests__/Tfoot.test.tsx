import { render, screen } from '@testing-library/react';
import { Tfoot } from '../Tfoot';
import styles from '@patternfly/react-styles/css/components/Table/table';

test('Renders a tfoot element with the table footer class', () => {
  render(
    <table>
      <Tfoot>
        <tr>
          <td>Footer</td>
        </tr>
      </Tfoot>
    </table>
  );

  expect(screen.getByText('Footer').closest('tfoot')).toHaveClass(styles.tableTfoot);
});

test('Forwards props, class names, and refs to the tfoot element', () => {
  const ref = { current: null } as React.RefObject<HTMLTableSectionElement>;

  render(
    <table>
      <Tfoot ref={ref} className="custom-footer" data-testid="footer">
        <tr />
      </Tfoot>
    </table>
  );

  expect(screen.getByTestId('footer')).toHaveClass(styles.tableTfoot, 'custom-footer');
  expect(ref.current).toBe(screen.getByTestId('footer'));
});
