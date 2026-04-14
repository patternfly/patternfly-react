---
id: Navigation
section: components
---

import { Fragment, useState, useRef } from 'react';
import RhUiSettingsFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-settings-fill-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
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

The docked navigation pattern provides a responsive vertical navigation layout that adapts between mobile and desktop viewports. On mobile, the navigation appears as an overlay, while on desktop it displays as a persistent vertical sidebar that can toggle between icon-only and text+icon modes.

**Key implementation requirements:**

1. **Page component**: Set `variant="docked"` to enable the docked layout. Pass `isDockExpanded` and `isDockTextExpanded` state props to control mobile overlay and desktop text visibility.

2. **Masthead structure**: Use two separate mastheads:
   - **Mobile masthead**: Set `display={{ default: 'inline' }}` so it only appears on mobile. Include a hamburger toggle button, logo, and any mobile-specific actions.
   - **Docked masthead**: Set `variant="docked"` for the vertical navigation sidebar. This contains the navigation toggle, nav items, and action buttons.

3. **Navigation component**: Set `variant="docked"` on Nav and pass `isTextExpanded={isDockTextExpanded}` to control text visibility. NavItems should include both icons and text children—the Nav component will handle showing/hiding text based on state.

4. **Buttons and toggles**: Use `isDocked` and `isTextExpanded` props on Button and MenuToggle components within the docked navigation. These props apply dock-specific styling that toggles between icon-only and text+icon display.

5. **Logo variants**: Use `isCompact` prop on MastheadLogo to show an icon-only logo when the dock is collapsed, and a full logo with text when expanded.

6. **Focus management**: Implement focus shifting between the mobile toggle button and docked nav toggle button when opening/closing the navigation for better keyboard accessibility.

7. **Tooltips**: Only render tooltips when text is hidden (icon-only mode) to avoid showing redundant information when text labels are already visible.

8. **State management**:
   - `isDockExpanded`: Controls whether the mobile overlay is shown
   - `isDockTextExpanded`: Controls whether text is displayed alongside icons on desktop

```ts file="./examples/Nav/NavDockedNav.tsx" isFullscreen

```
