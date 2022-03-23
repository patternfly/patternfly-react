import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { LoginMainBody } from '../LoginMainBody';

describe('LoginMainBody', () => {
  test('renders with PatternFly Core styles', () => {
    render(<LoginMainBody data-testid="test-id" />);
    expect(screen.getByTestId('test-id').outerHTML).toMatchSnapshot();
  });

  test('className is added to the root element', () => {
    render(<LoginMainBody className="extra-class" data-testid="test-id" />);
    expect(screen.getByTestId('test-id').outerHTML).toMatchSnapshot();
  });
});
