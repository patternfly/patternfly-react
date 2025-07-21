import { render, screen } from '@testing-library/react';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { Td } from '../Td';

test('Renders without children', () => {
  render(
    <table>
      <tbody>
        <tr>
          <Td />
        </tr>
      </tbody>
    </table>
  );

  expect(screen.getByRole('cell')).toBeInTheDocument();
});

test('Renders with children', () => {
  render(
    <table>
      <tbody>
        <tr>
          <Td>Cell content</Td>
        </tr>
      </tbody>
    </table>
  );

  expect(screen.getByRole('cell')).toHaveTextContent('Cell content');
});

test(`Applies ${styles.modifiers.action} when hasAction is true`, () => {
  render(
    <table>
      <tbody>
        <tr>
          <Td hasAction>Cell with action</Td>
        </tr>
      </tbody>
    </table>
  );

  expect(screen.getByRole('cell')).toHaveClass('pf-m-action');
});

test(`Does not apply ${styles.modifiers.action} when hasAction is false`, () => {
  render(
    <table>
      <tbody>
        <tr>
          <Td hasAction={false}>Cell without action</Td>
        </tr>
      </tbody>
    </table>
  );

  expect(screen.getByRole('cell')).not.toHaveClass('pf-m-action');
});

test('Matches snapshot without children', () => {
  const { asFragment } = render(
    <table>
      <tbody>
        <tr>
          <Td />
        </tr>
      </tbody>
    </table>
  );

  expect(asFragment()).toMatchSnapshot();
});

test('Matches snapshot with children', () => {
  const { asFragment } = render(
    <table>
      <tbody>
        <tr>
          <Td>Cell content</Td>
        </tr>
      </tbody>
    </table>
  );

  expect(asFragment()).toMatchSnapshot();
});
