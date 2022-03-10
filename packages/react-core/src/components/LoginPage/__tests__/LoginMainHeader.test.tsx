import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { LoginMainHeader } from '../LoginMainHeader';

describe('LoginMainHeader', () => {
  test('renders with PatternFly Core styles', () => {
    render(<LoginMainHeader data-testid="test-id" />);
    expect(screen.getByTestId('test-id').outerHTML).toMatchSnapshot();
  });

  test('className is added to the root element', () => {
    render(<LoginMainHeader className="extra-class" data-testid="test-id" />);
    expect(screen.getByTestId('test-id').outerHTML).toMatchSnapshot();
  });

  test('title and subtitle are rendered correctly', () => {
    render(<LoginMainHeader title="Log in to your account" subtitle="Use LDAP credentials" data-testid="test-id" />);
    expect(screen.getByTestId('test-id').outerHTML).toMatchSnapshot();
  });
});
