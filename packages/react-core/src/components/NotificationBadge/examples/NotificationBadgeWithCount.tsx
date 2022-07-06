import React from 'react';
import { NotificationBadge, NotificationBadgeVariant } from '@patternfly/react-core';

export const NotificationBadgeWithCount: React.FunctionComponent = () => {
  const [firstVariant, setFirstVariant] = React.useState(NotificationBadgeVariant.unread);
  const [firstVariantCount, setFirstVariantCount] = React.useState(30);
  const [secondVariant, setSecondVariant] = React.useState(NotificationBadgeVariant.attention);
  const [secondVariantCount, setSecondVariantCount] = React.useState(30);

  const onFirstClick = (value: NotificationBadgeVariant) => {
    setFirstVariant(value);
    setFirstVariantCount(10);
  };

  const onSecondClick = (value: NotificationBadgeVariant) => {
    setSecondVariant(value);
    setSecondVariantCount(10);
  };

  return (
    <div className="pf-t-dark">
      <NotificationBadge
        variant={firstVariant}
        onClick={() => onFirstClick(NotificationBadgeVariant.read)}
        aria-label="First notifications"
        count={firstVariantCount}
      />
      <NotificationBadge
        variant={secondVariant}
        onClick={() => onSecondClick(NotificationBadgeVariant.read)}
        aria-label="Second notifications"
        count={secondVariantCount}
      />
    </div>
  );
};
