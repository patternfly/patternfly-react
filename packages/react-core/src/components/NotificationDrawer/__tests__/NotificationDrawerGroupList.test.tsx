import React from 'react';
import { render, screen } from '@testing-library/react';
import { NotificationDrawerGroupList } from '../NotificationDrawerGroupList';

describe('NotificationDrawerGroupList', () => {
  test('renders with PatternFly Core styles', () => {
    render(<NotificationDrawerGroupList data-testid="test-id" />);
    expect(screen.getByTestId('test-id').outerHTML).toMatchSnapshot();
  });

  test('className is added to the root element', () => {
    render(<NotificationDrawerGroupList className="extra-class" data-testid="test-id" />);
    expect(screen.getByTestId('test-id').className).toMatchSnapshot();
  });
});
