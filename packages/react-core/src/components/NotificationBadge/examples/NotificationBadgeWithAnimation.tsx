import { useEffect, useState } from 'react';
import { NotificationBadge, NotificationBadgeVariant, Button, Stack, StackItem } from '@patternfly/react-core';

export const NotificationBadgeWithAnimation: React.FunctionComponent = () => {
  const [count, setCount] = useState(0);
  const [notify, setNotify] = useState(false);

  useEffect(() => {
    if (count > 0) {
      setNotify(true);
    }
  }, [count]);

  const onAnimationEnd = () => {
    setNotify(false);
  };

  return (
    <Stack hasGutter>
      <StackItem>
        <NotificationBadge
          variant={NotificationBadgeVariant.read}
          aria-label="Notification badge with read variant and no count"
          count={count}
          shouldNotify={notify}
          onAnimationEnd={onAnimationEnd}
        />
        <NotificationBadge
          variant={NotificationBadgeVariant.unread}
          aria-label="Notification badge animation with unread variant and count"
          count={count}
          shouldNotify={notify}
          onAnimationEnd={onAnimationEnd}
        />
        <NotificationBadge
          variant={NotificationBadgeVariant.attention}
          aria-label="Notification badge animation with attention variant and count"
          count={count}
          shouldNotify={notify}
          onAnimationEnd={onAnimationEnd}
        />
      </StackItem>
      <StackItem>
        <Button onClick={() => setCount((prevCount) => prevCount + 1)}>Add Notification</Button>
      </StackItem>
    </Stack>
  );
};
