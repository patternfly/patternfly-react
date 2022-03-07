import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { CardHeadMain } from '../CardHeadMain';

describe('CardHeadMain', () => {
  test('renders with PatternFly Core styles', () => {
    render(<CardHeadMain>text</CardHeadMain>);
    expect(screen.getByText('text').outerHTML).toMatchSnapshot();
  });

  test('className is added to the root element', () => {
    render(<CardHeadMain className="extra-class">text</CardHeadMain>);
    expect(screen.getByText('text').className).toContain('extra-class');
  });

  test('extra props are spread to the root element', () => {
    const testId = 'card-head-main';

    render(<CardHeadMain data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
