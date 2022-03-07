import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { CardTitle } from '../CardTitle';

describe('CardTitle', () => {
  test('renders with PatternFly Core styles', () => {
    render(<CardTitle>text</CardTitle>);
    expect(screen.getByText('text').outerHTML).toMatchSnapshot();
  });

  test('className is added to the root element', () => {
    render(<CardTitle className="extra-class">text</CardTitle>);
    expect(screen.getByText('text').className).toContain('extra-class');
  });

  test('extra props are spread to the root element', () => {
    const testId = 'card-header';

    render(<CardTitle data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
