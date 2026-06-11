---
id: Compass
section: components
---

import { useRef, useState, useEffect } from 'react';
import PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';
import OutlinedPlusSquare from '@patternfly/react-icons/dist/esm/icons/outlined-plus-square-icon';
import OutlinedCopy from '@patternfly/react-icons/dist/esm/icons/outlined-copy-icon';
import RhUiQuestionMarkCircleIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-question-mark-circle-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import FolderIcon from '@patternfly/react-icons/dist/esm/icons/folder-icon';
import RhUiQuestionMarkCircleFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-question-mark-circle-fill-icon';
import CloudIcon from '@patternfly/react-icons/dist/esm/icons/cloud-icon';
import CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import imgAvatar from '../assets/avatarImg.svg';
import ThIcon from '@patternfly/react-icons/dist/esm/icons/th-icon';
import pfLogo from '../assets/PF-IconLogo-color.svg';
import globalBreakpointLg from '@patternfly/react-tokens/dist/esm/t_global_breakpoint_lg';

## Demos

### Compass layout

This demo showcases an implementation of the following Compass features:

- Middle navigation in the `header`, featuring top-level primary tabs and a secondary container for sub-tabs.
- Vertical sidebars utilizing `<ActionList>` groups with buttons that use the `isCircle` prop.
- A custom gradient background in the `<Hero>`, visible in dark mode.
- Background images that automatically adapt to both light and dark modes.
- A `footer` section containing the `<CompassMessageBar>`, that could be used for AI text input.

```ts isFullscreen file="./examples/CompassDemo.tsx"

```

### Docked nav demo

```ts isFullscreen file="./examples/CompassDockDemo.tsx"

```
