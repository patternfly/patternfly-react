---
id: Compass
section: AI
subsection: Generative UIs
---

import { useRef, useState } from 'react';
import PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';
import OutlinedPlusSquare from '@patternfly/react-icons/dist/esm/icons/outlined-plus-square-icon';
import OutlinedCopy from '@patternfly/react-icons/dist/esm/icons/outlined-copy-icon';
import OutlinedQuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/outlined-question-circle-icon';

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