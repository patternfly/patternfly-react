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

import { useRef, useState } from 'react';
import PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';
import OutlinedPlusSquare from '@patternfly/react-icons/dist/esm/icons/outlined-plus-square-icon';
import OutlinedCopy from '@patternfly/react-icons/dist/esm/icons/outlined-copy-icon';
import OutlinedQuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/outlined-question-circle-icon';

import './compass.css';

## Examples

### Basic

In a basic compass layout, content can be passed to the following props to populate different areas of the page:

- `header`: Content rendered at the top of the page, typically including a `<CompassHeader>` component that divides the header into 3 areas, with a logo or brand, middle navigation, and profile.
- `sidebarStart`: Content rendered at the horizontal start of the page (by default, the left side).
- `main`: Content rendered in the center of the page, typically including a `<CompassMainHeader>` or `<CompassHero>`, along with a `<CompassContent>` filled with 1 or more `<CompassPanel>` components.
- `sidebarEnd`: Content rendered at the horizontal end of the page (by default, the right side).
- `footer`: Content rendered at the bottom of the page.

To customize the background image of the `<Compass>` and `<CompassHero>` components, you can use their respective `backgroundSrcLight` and `backgroundSrcDark` props. You can also add and customize a color gradient background for the `<CompassHero>` component by using the `gradientLight` and `gradientDark` props.

```ts file="CompassBasic.tsx"

```

### With alternate footer

When `footer` is used, its content will fill the width of the screen. By default, when content inside the footer grows, the height and placement of the start and end sidebars will adjust to allow for the change. To modify this behavior and render footer content without interfering with the sidebars, instead place a `<CompassMainFooter>` inside the `main` section. This will render content at the bottom of the page between the 2 sidebars, rather than across the entire bottom of the page.

```ts file="CompassMainFooterDemo.tsx"

```

## Composable structure

When building a more custom implementation with compass components, there are some intended or expected structures that must remain present.

### CompassMainHeader structure

When using the `children` property in the `<CompassMainHeader>` component, there are specific structural patterns that you should follow, as shown this general code structure.

```noLive
<CompassMainHeader>
  <CompassPanel>
    <CompassMainHeaderContent>
      {Your custom content goes here, which can include the <CompassMainHeaderTitle> and/or <CompassMainHeaderToolbar> sub-components}
    </CompassMainHeaderContent>
  </CompassPanel>
</CompassMainHeader>
```