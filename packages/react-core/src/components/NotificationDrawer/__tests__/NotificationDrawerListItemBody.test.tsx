import React from 'react';
import { render, screen } from '@testing-library/react';
import { NotificationDrawerListItemBody } from '../NotificationDrawerListItemBody';

describe('NotificationDrawerListItemBody', () => {
  test('renders with PatternFly Core styles', () => {
    render(<NotificationDrawerListItemBody data-testid="test-id" />);
    expect(screen.getByTestId('test-id').outerHTML).toMatchSnapshot();
  });

  test('className is added to the root element', () => {
    render(<NotificationDrawerListItemBody className="extra-class" data-testid="test-id" />);
    expect(screen.getByTestId('test-id').className).toMatchSnapshot();
  });

  test('list item body with timestamp property applied', () => {
    render(<NotificationDrawerListItemBody timestamp="5 minutes ago" data-testid="test-id" />);
    expect(screen.getByTestId('test-id').className).toMatchSnapshot();
  });
});
