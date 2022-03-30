import React from 'react';
import { render, screen } from '@testing-library/react';
import { NotificationDrawerBody } from '../NotificationDrawerBody';

describe('NotificationDrawerBody', () => {
  test('renders with PatternFly Core styles', () => {
    const view = render(<NotificationDrawerBody data-testid="test-id" />);
    expect(screen.getByTestId('test-id').outerHTML).toMatchSnapshot();
  });

  test('className is added to the root element', () => {
    const view = render(<NotificationDrawerBody className="extra-class" data-testid="test-id" />);
    expect(screen.getByTestId('test-id').className).toMatchSnapshot();
  });
});
