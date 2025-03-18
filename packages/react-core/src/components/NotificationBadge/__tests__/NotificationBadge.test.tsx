import { NotificationBadge } from '../NotificationBadge';
import { render, screen, fireEvent } from '@testing-library/react';
import styles from '@patternfly/react-styles/css/components/Button/button';

Object.values([true, false]).forEach((attentionVariant) => {
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

test('Does not render with .pf-m-clicked when isExpanded is not passed in.', () => {
  render(<NotificationBadge />);

  expect(screen.getByRole('button')).not.toHaveClass(styles.modifiers.clicked);
});

test('Renders with .pf-m-clicked when isExpanded is passed in.', () => {
  render(<NotificationBadge isExpanded />);

  expect(screen.getByRole('button')).toHaveClass(styles.modifiers.clicked);
});

test('Renders with .pf-m-notify when hasAnimation is passed in.', () => {
  render(<NotificationBadge shouldNotify />);

  expect(screen.getByRole('button')).toHaveClass(styles.modifiers.notify);
});

test('Removes the .pf-m-notify class when animation has ended.', async () => {
  render(<NotificationBadge shouldNotify />);
  fireEvent.animationEnd(screen.getByRole('button'));
  await screen.findByRole('button');

  expect(screen.getByRole('button')).not.toHaveClass(styles.modifiers.notify);
});
