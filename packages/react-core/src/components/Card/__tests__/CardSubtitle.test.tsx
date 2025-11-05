import { render, screen } from '@testing-library/react';
import { CardSubtitle } from '../CardSubtitle';

describe('CardSubtitle', () => {
  test('renders with PatternFly Core styles', () => {
    const { asFragment } = render(<CardSubtitle>text</CardSubtitle>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('extra props are spread to the root element', () => {
    const testId = 'card-subtitle';

    render(<CardSubtitle data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
