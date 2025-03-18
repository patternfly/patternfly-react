---
id: Notification badge
section: components
cssPrefix: pf-v6-c-notification-badge
propComponents: ['NotificationBadge']
---

import { useEffect, useState } from 'react';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';

## Examples

### Basic

The following example demonstrates the three variants of notification badge that are available: "read", "unread", and "attention".

The `isExpanded` property is also passed in to:

- set the `aria-expanded` attribute on the notification badge,
- apply visual styling on the notification badge, and
- to indicate that a notification drawer is expanded, for use-cases as seen in our [notification drawer react demos](/components/notification-drawer/react-demos).

```ts file='./NotificationBadgeBasic.tsx'
```

### With count

You can display a number within the notification badge by passing in the `count` property, to indicate how many read, unread, or attention notifications there are. The `isExpanded` property is also passed in, similar to the [notification badge basic example](/components/notification-badge#basic).

```ts file='./NotificationBadgeWithCount.tsx'
```

### With animation

To animate the icon within the notification badge, use the `shouldNotify` property. In this example, the notification badge icon will only animate if the notification count is greater than 0.

```ts file='./NotificationBadgeWithAnimation.tsx'
```