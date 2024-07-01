---
id: Page
section: components
---

import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import imgAvatar from '@patternfly/react-core/src/components/assets/avatarImg.svg';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import AttentionBellIcon from '@patternfly/react-icons/dist/esm/icons/attention-bell-icon';
import LightbulbIcon from '@patternfly/react-icons/dist/esm/icons/lightbulb-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import pfLogo from '@patternfly/react-core/src/demos/assets/PF-HorizontalLogo-Color.svg';


- All examples set the `isManagedSidebar` prop on the Page component to have the sidebar automatically close for smaller screen widths. You can also manually control this behavior by not adding the `isManagedSidebar` prop and instead:

  1. Add an onNavToggle callback to PageHeader
  2. Pass a boolean into the isNavOpen prop to PageSidebar

## Layouts

This demonstrates a variety of navigation patterns in the context of a full page layout. These can be used as a basis for choosing the most appropriate page template for your application.

### Sticky section group

```ts file='./examples/Page/PageStickySectionGroup.tsx' isFullscreen

```

### Sticky section group (alternate syntax)

```ts file='./examples/Page/PageStickySectionGroupAlternate.tsx' isFullscreen

```

### Sticky section breadcrumb (with breakpoints)

```ts file='./examples/Page/PageStickySectionBreadcrumb.tsx' isFullscreen

```

### Context selector/perspective switcher in sidebar

```ts file='./examples/Page/PageContextSelector.tsx' isFullscreen

```