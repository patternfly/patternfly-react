import React from 'react';
import { render, screen } from '@testing-library/react';
import { NotificationDrawerList } from '../NotificationDrawerList';

describe('NotificationDrawerList', () => {
  test('renders with PatternFly Core styles', () => {
    render(<NotificationDrawerList />);
    expect(screen.getByRole('list').outerHTML).toMatchSnapshot();
  });

  test('className is added to the root element', () => {
    render(<NotificationDrawerList className="extra-class" />);
    expect(screen.getByRole('list').className).toMatchSnapshot();
  });

  test('drawer list with hidden applied ', () => {
    render(<NotificationDrawerList hidden />);
    expect(screen.getByRole('list').outerHTML).toMatchSnapshot();
  });
});
