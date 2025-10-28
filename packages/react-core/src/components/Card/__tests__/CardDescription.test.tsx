import { render, screen } from '@testing-library/react';
import { CardDescription } from '../CardDescription';

describe('CardDescription', () => {
  test('renders with PatternFly Core styles', () => {
    const { asFragment } = render(<CardDescription>text</CardDescription>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('className is added to the root element', () => {
    render(<CardDescription className="extra-class">text</CardDescription>);
    expect(screen.getByText('text')).toHaveClass('extra-class');
  });

  test('extra props are spread to the root element', () => {
    const testId = 'card-description';

    render(<CardDescription data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
