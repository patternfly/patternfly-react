import React from 'react';
import { render, screen } from '@testing-library/react';
import { LoginMainFooter } from '../LoginMainFooter';

describe('LoginMainFooter', () => {
  test('renders with PatternFly Core styles', () => {
    render(<LoginMainFooter data-testid="test-id" />);
    expect(screen.getByTestId('test-id').outerHTML).toMatchSnapshot();
  });

  test('className is added to the root element', () => {
    render(<LoginMainFooter className="extra-class" data-testid="test-id" />);
    expect(screen.getByTestId('test-id').outerHTML).toMatchSnapshot();
  });
});
