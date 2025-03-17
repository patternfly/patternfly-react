// import { useState } from 'react';
import { NotificationBadge, NotificationBadgeVariant } from '@patternfly/react-core';

export const NotificationBadgeWithAnimation: React.FunctionComponent = () => {
  const count: number = 5;
  const animate: boolean = count > 0 ? true : false;

  return (
    <>
      <NotificationBadge
        variant={NotificationBadgeVariant.read}
        aria-label="Notification badge with read variant and no count"
        hasAnimation={animate}
        count={count}
      />
      <NotificationBadge
        variant={NotificationBadgeVariant.unread}
        aria-label="Notification badge animation with unread variant and count"
        hasAnimation={animate}
        count={count}
      />
      <NotificationBadge
        variant={NotificationBadgeVariant.attention}
        aria-label="Notification badge animation with attention variant and count"
        hasAnimation={animate}
        count={count}
      />
    </>
  );
};
