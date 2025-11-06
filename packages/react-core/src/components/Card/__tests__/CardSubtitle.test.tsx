import { render, screen } from '@testing-library/react';
import { CardSubtitle } from '../CardSubtitle';
import styles from '@patternfly/react-styles/css/components/Card/card';

test('Renders without children', () => {
  render(
    <div data-testid="container">
      <CardSubtitle />
    </div>
  );

  expect(screen.getByTestId('container').firstChild).toBeVisible();
});

test('Renders with children', () => {
  render(<CardSubtitle>Subtitle content</CardSubtitle>);

  expect(screen.getByText('Subtitle content')).toBeInTheDocument();
});

test(`Renders with class ${styles.cardSubtitle} by default`, () => {
  render(<CardSubtitle>Subtitle content</CardSubtitle>);

  expect(screen.getByText('Subtitle content')).toHaveClass(styles.cardSubtitle, { exact: true });
});

test('Renders with id when passed', () => {
  render(<CardSubtitle id="subtitle-id">Subtitle content</CardSubtitle>);

  expect(screen.getByText('Subtitle content')).toHaveAttribute('id', 'subtitle-id');
});

test('extra props are spread to the root element', () => {
  const testId = 'card-subtitle';

  render(<CardSubtitle data-testid={testId} />);
  expect(screen.getByTestId(testId)).toBeInTheDocument();
});

test('Matches snapshot', () => {
  const { asFragment } = render(<CardSubtitle>text</CardSubtitle>);
  expect(asFragment()).toMatchSnapshot();
});
