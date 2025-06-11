import { render, screen } from '@testing-library/react';
import { Tr } from '../Tr';
import styles from '@patternfly/react-styles/css/components/Table/table';

test('Renders without children', () => {
  render(
    <table>
      <tbody>
        <Tr />
      </tbody>
    </table>
  );

  expect(screen.getByRole('row')).toBeInTheDocument();
});

test('Renders with children', () => {
  render(
    <table>
      <tbody>
        <Tr>
          <td>Row content</td>
        </Tr>
      </tbody>
    </table>
  );

  expect(screen.getByRole('row')).toHaveTextContent('Row content');
});

test(`Does not render as hidden by default`, () => {
  render(
    <table>
      <tbody>
        <Tr />
      </tbody>
    </table>
  );

  expect(screen.getByRole('row')).not.toHaveAttribute('hidden');
});

test(`Renders as hidden when isHidden is true`, () => {
  render(
    <table>
      <tbody>
        <Tr isHidden />
      </tbody>
    </table>
  );

  expect(screen.queryByRole('row')).not.toBeInTheDocument();
});

test('Matches snapshot without children', () => {
  const { asFragment } = render(
    <table>
      <tbody>
        <Tr />
      </tbody>
    </table>
  );

  expect(asFragment()).toMatchSnapshot();
});

test('Matches snapshot with children', () => {
  const { asFragment } = render(
    <table>
      <tbody>
        <Tr>
          <td>Row content</td>
        </Tr>
      </tbody>
    </table>
  );

  expect(asFragment()).toMatchSnapshot();
});
