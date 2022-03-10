import React from 'react';
import { render, screen } from '@testing-library/react';
import { NotificationDrawer } from '../NotificationDrawer';

describe('NotificationDrawer', () => {
  test('renders with PatternFly Core styles', () => {
    render(<NotificationDrawer data-testid="test-id" />);
    expect(screen.getByTestId('test-id').outerHTML).toMatchSnapshot();
  });

  test('className is added to the root element', () => {
    render(<NotificationDrawer className="extra-class" data-testid="test-id" />);
    expect(screen.getByTestId('test-id').className).toMatchSnapshot();
  });
});
