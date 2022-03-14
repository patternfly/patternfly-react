import { NotificationBadge } from '../NotificationBadge';
import React from 'react';
import { render } from '@testing-library/react';

Object.values([true, false]).forEach(isRead => {
  test(`${isRead} NotificationBadge`, () => {
    const view = render(<NotificationBadge isRead={isRead} />);
    expect(view.container.outerHTML).toMatchSnapshot();
  });
});

Object.values([true, false]).forEach(attentionVariant => {
  test(`${attentionVariant} NotificationBadge needs attention`, () => {
    const view = render(
      <NotificationBadge variant="attention">
        {attentionVariant ? 'needs attention' : 'does not need attention'} Badge
      </NotificationBadge>
    );
    expect(view.container.outerHTML).toMatchSnapshot();
  });
});

test(`NotificationBadge count`, () => {
  const view = render(<NotificationBadge variant="read" count={3} />);
  expect(view.container.outerHTML).toMatchSnapshot();
});
