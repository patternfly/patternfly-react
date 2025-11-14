import { render, screen } from '@testing-library/react';
import { CardTitle } from '../CardTitle';

test('Renders with custom class when passed', () => {
  render(<CardTitle className="extra-class">text</CardTitle>);
  expect(screen.getByText('text')).toHaveClass('extra-class');
});

test('Does not render with card subtitle by default', () => {
  render(<CardTitle>text</CardTitle>);

  expect(screen.queryByText('text')?.nextElementSibling).not.toBeInTheDocument();
});

test('Renders with card subtitle when subtitle is passed', () => {
  render(<CardTitle subtitle="subtitle content">text</CardTitle>);

  expect(screen.getByText('subtitle content')).toBeInTheDocument();
});

test('extra props are spread to the root element', () => {
  const testId = 'card-header';

  render(<CardTitle data-testid={testId} />);
  expect(screen.getByTestId(testId)).toBeInTheDocument();
});

test('Matches snapshot', () => {
  const { asFragment } = render(<CardTitle>text</CardTitle>);
  expect(asFragment()).toMatchSnapshot();
});
