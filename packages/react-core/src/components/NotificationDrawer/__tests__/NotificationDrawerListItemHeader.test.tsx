import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import { NotificationDrawerListItemHeader } from '../NotificationDrawerListItemHeader';
import styles from '@patternfly/react-styles/css/components/NotificationDrawer/notification-drawer';

describe('NotificationDrawerListItemHeader', () => {
  test('renders with PatternFly Core styles', () => {
    const { asFragment } = render(<NotificationDrawerListItemHeader title="Pod quit unexpectedly" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders with correct heading level', () => {
    const { asFragment } = render(<NotificationDrawerListItemHeader title="Pod quit unexpectedly" headingLevel="h3" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('className is added to the root element', () => {
    render(
      <NotificationDrawerListItemHeader title="Pod quit unexpectedly" className="extra-class" data-testid="test-id" />
    );
    expect(screen.getByTestId('test-id')).toHaveClass('extra-class');
  });

  test('list item header with custom icon applied ', () => {
    const { asFragment } = render(
      <NotificationDrawerListItemHeader title="Pod quit unexpectedly" icon={<BellIcon />} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('list item header with srTitle applied ', () => {
    const { asFragment } = render(
      <NotificationDrawerListItemHeader title="Pod quit unexpectedly" srTitle="screen reader title" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('list item header with variant applied ', () => {
    const { asFragment } = render(<NotificationDrawerListItemHeader title="Pod quit unexpectedly" variant="success" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('list item header with truncateTitle', () => {
    render(<NotificationDrawerListItemHeader truncateTitle={1} title="Pod quit unexpectedly" variant="success" />);

    expect(screen.getByText('Pod quit unexpectedly')).toHaveClass('pf-m-truncate');
  });

  test(`renders with ${styles.modifiers.noOffset} if actionHasNoOffset={true} is passed`, () => {
    render(
      <NotificationDrawerListItemHeader title="Pod quit unexpectedly" actionHasNoOffset>
        test
      </NotificationDrawerListItemHeader>
    );
    expect(screen.getByText('test')).toHaveClass(styles.modifiers.noOffset);
  });

  test(`does not render with ${styles.modifiers.noOffset} if actionHasNoOffset={false} is passed`, () => {
    render(
      <NotificationDrawerListItemHeader title="Pod quit unexpectedly" actionHasNoOffset={false}>
        test
      </NotificationDrawerListItemHeader>
    );
    expect(screen.getByText('test')).not.toHaveClass(styles.modifiers.noOffset);
  });

  test(`does not render with ${styles.modifiers.noOffset} if actionHasNoOffset is not passed`, () => {
    render(<NotificationDrawerListItemHeader title="Pod quit unexpectedly">test</NotificationDrawerListItemHeader>);
    expect(screen.getByText('test')).not.toHaveClass(styles.modifiers.noOffset);
  });
});
