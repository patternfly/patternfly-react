---
id: Compass
cssPrefix: pf-v6-c-compass
section: AI
subsection: Generative UIs
beta: true
propComponents:
  [
    'Compass',
    'CompassHeader',
    'CompassContent',
    'CompassHero',
    'CompassMainHeader',
    'CompassPanel',
    'CompassMessageBar'
  ]
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

The background image of the `Compass` and `CompassHero` may be customized by using their respective `backgroundSrcLight` and `backgroundSrcDark` props. The `CompassHero` also allows customization of a color gradient across its container by using the `gradientLight` and `gradientDark` props.

```ts isBeta file="CompassBasic.tsx"

```

### Demo

```ts isFullscreen isBeta file="CompassDemo.tsx"

```

## Composable structure

When building a more custom implementation using Compass components, there are some intended or expected structures that must be present.

### CompassMainHeader structure

When using the `children` property in the `<CompassMainHeader>` component, you should ensure that the expected sub-components are used. The following code block shows a general structure to follow.

```noLive
<CompassMainHeader>
  <CompassPanel>
    <CompassMainHeaderContent>
      {Your custom content goes here, which can include the CompassMainHeaderTitle and/or CompassMainHeaderToolbar sub-components}
    </CompassMainHeaderContent>
  </CompassPanel>
</CompassMainHeader>
```
