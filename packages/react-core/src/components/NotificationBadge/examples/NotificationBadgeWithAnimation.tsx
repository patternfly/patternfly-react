import { useState } from 'react';
import { NotificationBadge, NotificationBadgeVariant, Button, Stack, StackItem } from '@patternfly/react-core';

export const NotificationBadgeWithAnimation: React.FunctionComponent = () => {
  const [count, setCount] = useState(0);
  const notify = count > 0;

  return (
    <Stack hasGutter>
      <StackItem>
        <NotificationBadge
          variant={NotificationBadgeVariant.read}
          aria-label="Notification badge with read variant and no count"
          shouldNotify={notify}
          count={count}
        />
        <NotificationBadge
          variant={NotificationBadgeVariant.unread}
          aria-label="Notification badge animation with unread variant and count"
          shouldNotify={notify}
          count={count}
        />
        <NotificationBadge
          variant={NotificationBadgeVariant.attention}
          aria-label="Notification badge animation with attention variant and count"
          shouldNotify={notify}
          count={count}
        />
      </StackItem>
      <StackItem>
        <Button onClick={() => setCount((prevCount) => (prevCount === 0 ? 1 : 0))}>
          {count === 0 ? 'Add Notification' : 'Clear Notification'}
        </Button>
      </StackItem>
    </Stack>
  );
};
