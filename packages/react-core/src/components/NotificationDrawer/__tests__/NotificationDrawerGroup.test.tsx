import React from 'react';
import { render, screen } from '@testing-library/react';
import { NotificationDrawerGroup } from '../NotificationDrawerGroup';

describe('NotificationDrawerGroup', () => {
  test('renders with PatternFly Core styles', () => {
    render(<NotificationDrawerGroup count={2} isExpanded={false} title="Critical Alerts" />);
    expect(screen.getByText('Critical Alerts').outerHTML).toMatchSnapshot();
  });

  test('className is added to the root element', () => {
    render(<NotificationDrawerGroup count={2} isExpanded={false} title="Critical Alerts" className="extra-class" />);
    expect(screen.getByText('Critical Alerts').className).toMatchSnapshot();
  });

  test('drawer group with isExpanded applied ', () => {
    render(<NotificationDrawerGroup count={2} isExpanded title="Critical Alerts" />);
    expect(screen.getByText('Critical Alerts').outerHTML).toMatchSnapshot();
  });

  test('drawer group with isRead applied ', () => {
    render(<NotificationDrawerGroup count={2} isExpanded={false} isRead={true} title="Critical Alerts" />);
    expect(screen.getByText('Critical Alerts').outerHTML).toMatchSnapshot();
  });
});
