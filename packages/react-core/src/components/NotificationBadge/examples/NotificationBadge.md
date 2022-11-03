---
id: Notification badge
section: components
cssPrefix: pf-c-notification-badge
propComponents: ['NotificationBadge']
---

import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import './notificationBadge.css';

## Examples

### Basic

The following example demonstrates the three variants of notification badge that are available: "read", "unread", and "attention".

The `isExpanded` property is also passed in to:

- set the `aria-expanded` attribute on the notification badge,
- apply visual styling on the notification badge, and
- to indiciate that a notification drawer is expanded, for use-cases as seen in our [notification drawer react demos](/components/notification-drawer/react-demos).

```ts file='./NotificationBadgeBasic.tsx'
```

### With count

You can display a number within the notification badge by passing in the `count` property, to indicate how many read, unread, or attention notifications there are. The `isExpanded` property is also passed in, similar to the [notification badge basic example](/components/notification-badge#basic).

```ts file='./NotificationBadgeWithCount.tsx'
```
