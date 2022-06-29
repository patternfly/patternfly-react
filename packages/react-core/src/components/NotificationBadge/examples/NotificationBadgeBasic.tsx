import React from 'react';
import { NotificationBadge, NotificationBadgeVariant } from '@patternfly/react-core';

export const SimpleNotificationBadge: React.FunctionComponent = () => {
  const [unreadVariant, setUnreadVariant] = React.useState(NotificationBadgeVariant.unread);
  const [attentionVariant, setAttentionVariant] = React.useState(NotificationBadgeVariant.attention);

  const onFirstClick = (value: NotificationBadgeVariant) => {
    setUnreadVariant(value);
  };

  const onSecondClick = (value: NotificationBadgeVariant) => {
    setAttentionVariant(value);
  };

  return (
    <div className="pf-t-dark">
      <NotificationBadge
        variant={unreadVariant}
        onClick={() => onFirstClick(NotificationBadgeVariant.read)}
        aria-label="First notifications"
      />
      <NotificationBadge
        variant={attentionVariant}
        onClick={() => onSecondClick(NotificationBadgeVariant.read)}
        aria-label="Second notifications"
      />
    </div>
  );
};
