---
id: Navigation
section: components
---

import { Fragment, useState, useRef, useEffect } from 'react';
import RhUiSettingsFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-settings-fill-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import RhUiQuestionMarkCircleFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-question-mark-circle-fill-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import RhUiNotificationFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-notification-fill-icon';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import imgAvatar from '@patternfly/react-core/src/components/assets/avatarImg.svg';
import pfLogo from '@patternfly/react-core/src/demos/assets/PF-HorizontalLogo-Color.svg';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import FolderIcon from '@patternfly/react-icons/dist/esm/icons/folder-icon';
import CloudIcon from '@patternfly/react-icons/dist/esm/icons/cloud-icon';
import CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';
import ThIcon from '@patternfly/react-icons/dist/esm/icons/th-icon';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import pfIconLogo from '@patternfly/react-core/src/demos/assets/PF-IconLogo-color.svg';
import { DashboardBreadcrumb } from '@patternfly/react-core/dist/js/demos/DashboardWrapper';
import { DashboardHeader } from '@patternfly/react-core/dist/js/demos/DashboardHeader';
import globalBreakpointXl from '@patternfly/react-tokens/dist/esm/t_global_breakpoint_xl';

## Demos

### Default nav

```ts file="./examples/Nav/NavDefault.tsx" isFullscreen

```

### Grouped nav

```ts file="./examples/Nav/NavGrouped.tsx" isFullscreen

```

### Expandable nav

```ts file="./examples/Nav/NavExpandable.tsx" isFullscreen

```

### Horizontal nav

```ts file="./examples/Nav/NavHorizontal.tsx" isFullscreen

```

### Horizontal subnav

```ts file="./examples/Nav/NavWithSubnav.tsx" isFullscreen

```

### Horizontal nav with horizontal subnav

```ts file="./examples/Nav/NavHorizontalWithSubnav.tsx" isFullscreen

```

### Manual nav

```ts file="./examples/Nav/NavManual.tsx" isFullscreen

```

### Flyout nav

```ts file="./examples/Nav/NavFlyout.tsx" isFullscreen

```

### Drilldown nav

```ts isFullscreen file="./examples/Nav/NavDrilldown.tsx"

```

### Docked nav

To save space in the UI, you can use docked navigation to replace text-labeled navigation items with relevant icons. On mobile (or narrow viewports), docked navigation appears as an overlay, while on desktop (or wider viewports) it displays as a persistent vertical sidebar that can toggle between icon-only and text+icon modes.

This demo includes the following features:

1. A [page](/components/page) component with a docked layout, enabled via `variant="docked"`. Control the mobile overlay with `isDockExpanded` and the desktop label visibility with `isDockTextExpanded`.

2. Two separate [masthead](/components/masthead) components:
   - **Horizontal mobile masthead**: Shown on small viewports using `display={{ default: 'inline' }}`, with a hamburger menu toggle button, brand logo, and action buttons that should be immediately visible to users.
   - **Vertical docked masthead**: Uses `variant="docked"` to create a thinner navigation sidebar with a hamburger menu toggle button, nav items, and action buttons.

3. A [navigation](/components/navigation) component with `variant="docked"` and multiple `<NavItem>` components that must include both icons and text labels. To control text visibility, `isTextExpanded={isDockTextExpanded}` is passed to the `<Nav>` component.

4. [Button](/components/button) and [menu toggle](/components/menus/menu-toggle) components, which use `isDocked` and `isTextExpanded` to toggle between icon-only and text+icon styles. When the nav is docked, and only icons are shown, [tooltips](/components/tooltip) must provide full text labels for the navigation items, buttons, and menu toggles.

5. A `<MastheadLogo>` component that uses `isCompact` to show an icon-only logo when the dock is collapsed, and a full logo with text when expanded.

**Note**: For better keyboard accessibility, ensure that focus shifts between the hamburger menu toggle button in the mobile masthead and the docked overlay menu toggle button as the navigation is opened and closed.

```ts file="./examples/Nav/NavDockedNav.tsx" isFullscreen

```
