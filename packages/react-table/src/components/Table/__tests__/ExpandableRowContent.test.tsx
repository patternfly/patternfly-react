import { render, screen } from '@testing-library/react';
import { ExpandableRowContent } from '../ExpandableRowContent';
import styles from '@patternfly/react-styles/css/components/Table/table';

test('Renders without children', () => {
  render(<ExpandableRowContent data-testid="row-id" />);

  expect(screen.getByTestId('row-id')).toBeInTheDocument();
});

test('Renders with children', () => {
  render(<ExpandableRowContent>Row content</ExpandableRowContent>);

  expect(screen.getByText('Row content')).toBeVisible();
});

test(`Renders only with class ${styles.tableExpandableRowContent} by default`, () => {
  render(<ExpandableRowContent>Row content</ExpandableRowContent>);

  expect(screen.getByText('Row content')).toHaveClass(styles.tableExpandableRowContent, { exact: true });
});

test(`Renders with class ${styles.modifiers.noBackground} when hasNoBackground is true`, () => {
  render(<ExpandableRowContent hasNoBackground>Row content</ExpandableRowContent>);

  expect(screen.getByText('Row content')).toHaveClass(styles.modifiers.noBackground);
});

test(`Spreads additional props`, () => {
  render(<ExpandableRowContent data-custom="true">Row content</ExpandableRowContent>);

  expect(screen.getByText('Row content')).toHaveAttribute('data-custom', 'true');
});

test('Matches snapshot', () => {
  const { asFragment } = render(<ExpandableRowContent>Row content</ExpandableRowContent>);

  expect(asFragment()).toMatchSnapshot();
});
