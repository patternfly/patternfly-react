import { render, screen } from '@testing-library/react';
import { CardTitle } from '../CardTitle';

describe('CardTitle', () => {
  test('renders with PatternFly Core styles', () => {
    const { asFragment } = render(<CardTitle>text</CardTitle>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('className is added to the root element', () => {
    render(<CardTitle className="extra-class">text</CardTitle>);
    expect(screen.getByText('text')).toHaveClass('extra-class');
  });

  test('extra props are spread to the root element', () => {
    const testId = 'card-header';

    render(<CardTitle data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
