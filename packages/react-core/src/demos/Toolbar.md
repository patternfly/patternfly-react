---
id: Toolbar
section: components
---

import './examples/Toolbar/Toolbar.css';
import { Fragment, useState } from 'react';
import PauseIcon from '@patternfly/react-icons/dist/esm/icons/pause-icon';
import PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';
import ExpandIcon from '@patternfly/react-icons/dist/esm/icons/expand-icon';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';
import DownloadIcon from '@patternfly/react-icons/dist/esm/icons/download-icon';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import { DashboardWrapper } from '@patternfly/react-core/dist/js/demos/DashboardWrapper';

## Demos

### Console log viewer toolbar demo

This is an example of toolbar usage in log viewer.

```ts file="examples/Toolbar/ConsoleLogViewerToolbar.tsx" isFullscreen
```

### Toolbar with container queries in sidebar

This demo shows a toolbar using container queries inside a collapsible sidebar. The sidebar toolbar responds to the sidebar width, while the main content toolbar responds to the viewport width. This demonstrates how container queries enable independent responsive behavior for toolbars in different contexts.

```ts file="examples/Toolbar/ToolbarInSidebar.tsx" isFullscreen
```

### Toolbar with container queries in modal

This demo shows how container queries enable toolbars to work responsively inside modal dialogs. The toolbar adapts to the modal's width rather than the viewport width, making it work correctly regardless of the modal size.

```ts file="examples/Toolbar/ToolbarInModal.tsx" isFullscreen
```

