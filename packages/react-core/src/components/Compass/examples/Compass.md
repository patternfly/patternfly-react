---
id: Compass
cssPrefix: pf-v6-c-compass
section: components
isBeta: true
propComponents: ['Compass', 'CompassHeader', 'CompassContent', 'CompassHero', 'CompassMainHeader', 'CompassPanel']
---

import './compass.css';
import { useRef, useState } from 'react';
import PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';
import OutlinedPlusSquare from '@patternfly/react-icons/dist/esm/icons/outlined-plus-square-icon';
import OutlinedCopy from '@patternfly/react-icons/dist/esm/icons/outlined-copy-icon';
import OutlinedQuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/outlined-question-circle-icon';

## Examples

### Basic

In a basic compass layout, content can be passed to the following props to populate areas of the page:

- `header`: content rendered in the top of the page. This will typically be a `CompassHeader` component to break the header into 3 areas consisting of a logo or brand, middle navigation, and profile.
- `sidebarStart`: content rendered in the left side or start side of the page
- `main`: content rendered in the center of the page. This will typically consist of a `CompassMainHeader` or `CompassHero`, along with a `CompassContent` filled with one or more `CompassPanel` components.
- `sidebarEnd`: content rendered in the right side or end side of the page
- `footer`: content rendered in the bottom of the page

```ts file="CompassBasic.tsx"

```

### Demo

```ts isFullscreen file="CompassDemo.tsx"

```
