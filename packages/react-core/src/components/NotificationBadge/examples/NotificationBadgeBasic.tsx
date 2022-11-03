import React from 'react';
import { NotificationBadge, NotificationBadgeVariant } from '@patternfly/react-core';

export const NotificationBadgeBasic: React.FunctionComponent = () => {
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
        aria-label="Basic notification badge with read variant"
        isExpanded={readExpanded}
      />
      <NotificationBadge
        variant={NotificationBadgeVariant.unread}
        onClick={onUnreadClick}
        aria-label="Basic notification badge with unread variant"
        isExpanded={unreadExpanded}
      />
      <NotificationBadge
        variant={NotificationBadgeVariant.attention}
        onClick={onAttentionClick}
        aria-label="Basic notification badge with attention variant"
        isExpanded={attentionExpanded}
      />
    </div>
  );
};
