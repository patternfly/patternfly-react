import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { NotificationDrawerListItem } from '../NotificationDrawerListItem';

describe('NotificationDrawerListItem', () => {
  test('renders with PatternFly Core styles', () => {
    const { asFragment } = render(<NotificationDrawerListItem />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('className is added to the root element', () => {
    render(<NotificationDrawerListItem className="extra-class" />);
    expect(screen.getByRole('listitem')).toHaveClass('extra-class');
  });

  test('drawer list item with isHoverable applied', () => {
    render(<NotificationDrawerListItem isHoverable />);
    expect(screen.getByRole('listitem')).toHaveClass('pf-m-hoverable');
  });

  test('drawer list item with isRead applied and screen reader text is set to read', () => {
    render(<NotificationDrawerListItem isRead />);
    expect(screen.getByRole('listitem')).toHaveClass('pf-m-read');
    expect(screen.getByRole('listitem')).toContainHTML('<span class="pf-v6-screen-reader">read</span>');
  });

  test('drawer list item has screen reader text set to unread by default', () => {
    render(<NotificationDrawerListItem />);
    expect(screen.getByRole('listitem')).toContainHTML('<span class="pf-v6-screen-reader">unread</span>');
  });

  test('drawer list item screen reader textcan be customized', () => {
    render(<NotificationDrawerListItem readStateScreenReaderText="was read" />);
    expect(screen.getByRole('listitem')).toContainHTML('<span class="pf-v6-screen-reader">was read</span>');
  });
});
