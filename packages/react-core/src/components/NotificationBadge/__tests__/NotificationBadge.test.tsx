import { NotificationBadge } from '../NotificationBadge';
import React from 'react';
import { render, screen } from '@testing-library/react';

Object.values([true, false]).forEach(isRead => {
  test(`${isRead} NotificationBadge`, () => {
    const { asFragment } = render(<NotificationBadge isRead={isRead} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

Object.values([true, false]).forEach(attentionVariant => {
  test(`${attentionVariant} NotificationBadge needs attention`, () => {
    const { asFragment } = render(
      <NotificationBadge variant="attention">
        {attentionVariant ? 'needs attention' : 'does not need attention'} Badge
      </NotificationBadge>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

test(`NotificationBadge count`, () => {
  const { asFragment } = render(<NotificationBadge variant="read" count={3} />);
  expect(asFragment()).toMatchSnapshot();
});

test('Renders with aria-expanded="false" when isExpanded is not passed in.', () => {
  render(<NotificationBadge />);

  expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'false');
});

test('Renders with aria-expanded="true" when isExpanded is passed in.', () => {
  render(<NotificationBadge isExpanded />);

  expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'true');
});

test('Does not render with .pf-m-expanded when isExpanded is not passed in.', () => {
  render(<NotificationBadge />);

  expect(screen.getByRole('button').firstChild).not.toHaveClass('pf-m-expanded');
});

test('Renders with .pf-m-expanded when isExpanded is passed in.', () => {
  render(<NotificationBadge isExpanded />);

  expect(screen.getByRole('button').firstChild).toHaveClass('pf-m-expanded');
});
