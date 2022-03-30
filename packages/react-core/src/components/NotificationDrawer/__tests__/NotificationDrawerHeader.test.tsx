import React from 'react';
import { render, screen } from '@testing-library/react';
import { NotificationDrawerHeader } from '../NotificationDrawerHeader';

describe('NotificationDrawerHeader', () => {
  test('renders with PatternFly Core styles', () => {
    render(<NotificationDrawerHeader />);
    expect(screen.getByText('Notifications').outerHTML).toMatchSnapshot();
  });

  test('className is added to the root element', () => {
    render(<NotificationDrawerHeader className="extra-class" />);
    expect(screen.getByText('Notifications').className).toMatchSnapshot();
  });

  test('drawer header with count applied', () => {
    render(<NotificationDrawerHeader count={2} />);
    expect(screen.getByText('Notifications').outerHTML).toMatchSnapshot();
  });

  test('drawer header with title applied', () => {
    render(<NotificationDrawerHeader title="Some Title" />);
    expect(screen.getByText('Some Title').outerHTML).toMatchSnapshot();
  });

  test('drawer header with custom unread text applied', () => {
    render(<NotificationDrawerHeader customText="2 unread alerts" />);
    expect(screen.getByText('2 unread alerts').outerHTML).toMatchSnapshot();
  });
});
