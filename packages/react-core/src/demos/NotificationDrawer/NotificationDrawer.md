---
id: Notification drawer
section: components
---

import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import imgAvatar from '@patternfly/react-core/src/components/assets/avatarImg.svg';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import pfLogo from '@patternfly/react-core/src/demos/assets/PF-HorizontalLogo-Color.svg';

## Demos

- Focus must be manually managed when the NotificationDrawer component is opened:

  1. Create a React `ref` and pass it into the NotificationDrawer component's `ref` attribute
  2. Pass in a function to the `onNotificationDrawerExpand` prop of the Page component that will place focus on the first interact-able element inside the NotificationDrawer component via the previously created `ref`

### Basic

```ts file='./examples/NotificationDrawerBasic.tsx' isFullscreen

```

### Grouped

When using the NotificationDrawerGroupList and related components, the function that is passed in to the `onNotificationDrawerExpand` prop on the Page component must also ensure the NotificationDrawer component only receives focus when it is initially opened. Otherwise any time a drawer group item is opened the NotificationDrawer component will receive focus, which would be unexpected behavior for users.

```ts file='./examples/NotificationDrawerGrouped.tsx' isFullscreen

```
