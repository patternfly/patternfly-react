import React from 'react';
import { render, screen } from '@testing-library/react';
import { NotificationDrawerListItem } from '../NotificationDrawerListItem';

describe('NotificationDrawerListItem', () => {
  test('renders with PatternFly Core styles', () => {
    render(<NotificationDrawerListItem />);
    expect(screen.getByRole('listitem').outerHTML).toMatchSnapshot();
  });

  test('className is added to the root element', () => {
    render(<NotificationDrawerListItem className="extra-class" />);
    expect(screen.getByRole('listitem').className).toMatchSnapshot();
  });

  test('drawer list item with isHoverable applied', () => {
    render(<NotificationDrawerListItem isHoverable />);
    expect(screen.getByRole('listitem').className).toContain('hoverable');
  });

  test('drawer list item with isRead applied', () => {
    render(<NotificationDrawerListItem isRead />);
    expect(screen.getByRole('listitem').className).toContain('read');
  });
});
