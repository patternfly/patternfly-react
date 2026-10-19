---
id: Compass
section: components
---

import { useRef, useState, useEffect } from 'react';
import RhUiPlayFillIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-play-fill-icon';
import RhUiAddSquareIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-add-square-icon';
import RhUiCopyIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-copy-icon';
import RhUiQuestionMarkCircleIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-question-mark-circle-icon';
import RhUiFolderFillIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-folder-fill-icon';
import RhUiQuestionMarkCircleFillIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-question-mark-circle-fill-icon';
import RhUiCloudFillIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-cloud-fill-icon';
import RhUiCodeIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-code-icon';
import RhMicronsSearchIcon from '@rh-felt/react-icons/dist/esm/icons/rh-microns-search-icon';
import imgAvatar from '../assets/avatarImg.svg';
import RhUiThumbnailViewSmallFillIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-thumbnail-view-small-fill-icon';
import pfLogo from '../assets/PF-IconLogo-color.svg';
import globalBreakpointLg from '@rh-felt/react-tokens/dist/esm/t_global_breakpoint_lg';
import RhUiCubesIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-cubes-icon';
import RhUiFolderIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-folder-icon';
import RhUiResourceIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-resource-icon';

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

```ts isFullscreen isBeta file="./examples/CompassDockDemo.tsx"

```
