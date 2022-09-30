import React from 'react';
import { NotificationBadge, NotificationBadgeVariant } from '@patternfly/react-core';

export const NotificationBadgeWithCount: React.FunctionComponent = () => {
  const [readExpanded, setReadExpanded] = React.useState(false);
  const [unreadExpanded, setUnreadExpanded] = React.useState(false);
  const [attentionExpanded, setAttentionExpanded] = React.useState(false);

  const onReadClick = () => {
    setReadExpanded(!readExpanded);
  };

  const onUnreadClick = () => {
    setUnreadExpanded(!unreadExpanded);
  };

  const onAttentionClick = () => {
    setAttentionExpanded(!attentionExpanded);
  };

  return (
    <div className="pf-t-dark">
      <NotificationBadge
        variant={NotificationBadgeVariant.read}
        onClick={onReadClick}
        aria-label="Notification badge with count and read variant"
        isExpanded={readExpanded}
        count={10}
      />
      <NotificationBadge
        variant={NotificationBadgeVariant.unread}
        onClick={onUnreadClick}
        aria-label="Notification badge with count and unread variant"
        isExpanded={unreadExpanded}
        count={10}
      />
      <NotificationBadge
        variant={NotificationBadgeVariant.attention}
        onClick={onAttentionClick}
        aria-label="Notification badge with count and attention variant"
        isExpanded={attentionExpanded}
        count={10}
      />
    </div>
  );
};
