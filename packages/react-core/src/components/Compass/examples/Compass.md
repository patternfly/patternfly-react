---
id: Compass
cssPrefix: pf-v6-c-compass
section: components
beta: true
propComponents:
  [
    'Compass',
    'CompassHeader',
    'CompassContent',
    'CompassHero',
    'CompassMainHeader',
    'CompassMessageBar',
    'CompassMainFooter'
  ]
---

import { useRef, useState, useEffect } from 'react';

import './compass.css';

## Examples

### Basic

In a basic Compass layout, content can be passed to the following props to populate different areas of the page:

- `header`: Content rendered at the top of the page, typically including a `<CompassHeader>` component that divides the header into 3 areas, with a logo or brand, middle navigation, and profile.
- `sidebarStart`: Content rendered at the horizontal start of the page (by default, the left side).
- `main`: Content rendered in the center of the page, typically including a `<CompassMainHeader>` or `<CompassHero>`, along with a `<CompassContent>` filled with 1 or more `<Panel>` components.
- `sidebarEnd`: Content rendered at the horizontal end of the page (by default, the right side).
- `footer`: Content rendered at the bottom of the page.

The background image of `<Compass>` is set at a global level alongside the theme. You can customize the background image of the `<Hero>` inside `<CompassHero>` by using its `backgroundSrcLight` and `backgroundSrcDark` props, or you may set a gradient using the `gradientLight` and `gradientDark` props.

```ts isBeta file="CompassBasic.tsx"

```

### With alternate footer

When `footer` is used, its content will fill the width of the screen. By default, when content inside the footer grows, the height and placement of the start and end sidebars will adjust to allow for the change. To modify this behavior and render footer content without interfering with the sidebars, instead place a `<CompassMainFooter>` inside the `main` section. This will render content at the bottom of the page between the 2 sidebars, rather than across the entire bottom of the page.

```ts file="CompassMainFooterDemo.tsx"

```

### With docked nav

```ts file="CompassDockLayout.tsx"

```

## Composable structure

When building a more custom implementation with Compass components, there are some intended or expected structures that must remain present.

### CompassMainHeader structure

When using the `children` property in the `<CompassMainHeader>` component, there are specific structural patterns that you should follow, as shown this general code structure.

```noLive
<CompassMainHeader>
  <Panel>
    <PanelMain>
      <PanelMainBody>
        <CompassMainHeaderContent>
          {Your custom content goes here, which can include the <CompassMainHeaderTitle> and/or <CompassMainHeaderToolbar> sub-components}
        </CompassMainHeaderContent>
      </PanelMainBody>
    </PanelMain>
  </Panel>
</CompassMainHeader>
```
