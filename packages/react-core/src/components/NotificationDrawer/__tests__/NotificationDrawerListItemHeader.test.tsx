import React from 'react';

import { render, screen } from '@testing-library/react';

import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import { NotificationDrawerListItemHeader } from '../NotificationDrawerListItemHeader';

describe('NotificationDrawerListItemHeader', () => {
  test('renders with PatternFly Core styles', () => {
    render(<NotificationDrawerListItemHeader title="Pod quit unexpectedly" />);
    expect(screen.getByText('Pod quit unexpectedly').outerHTML).toMatchSnapshot();
  });

  test('className is added to the root element', () => {
    render(<NotificationDrawerListItemHeader title="Pod quit unexpectedly" className="extra-class" />);
    expect(screen.getByText('Pod quit unexpectedly').className).toMatchSnapshot();
  });

  test('list item header with custom icon applied ', () => {
    render(<NotificationDrawerListItemHeader title="Pod quit unexpectedly" icon={<BellIcon />} />);
    expect(screen.getByText('Pod quit unexpectedly').className).toMatchSnapshot();
  });

  test('list item header with srTitle applied ', () => {
    render(<NotificationDrawerListItemHeader title="Pod quit unexpectedly" srTitle="screen reader title" />);
    expect(screen.getByText('Pod quit unexpectedly').className).toMatchSnapshot();
  });

  test('list item header with variant applied ', () => {
    render(<NotificationDrawerListItemHeader title="Pod quit unexpectedly" variant="success" />);
    expect(screen.getByText('Pod quit unexpectedly').className).toMatchSnapshot();
  });

  test('list item header with truncateTitle', () => {
    render(<NotificationDrawerListItemHeader truncateTitle={1} title="Pod quit unexpectedly" variant="success" />);

    expect(screen.getByText('Pod quit unexpectedly').className).toContain('pf-m-truncate');
  });
});
