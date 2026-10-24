---
id: Drawer
section: components
---

import { Fragment, useRef, useState } from 'react';

## Demos

### Expanded resizable viewport drawer

Use `isViewport` to position the drawer as `fixed` so it fills the viewport. Place the drawer after `<Page>` as a sibling. Omit children of `<DrawerContent>` so the content container stays empty; the empty container is still required so the panel can overlay the page.

```ts file="./examples/DrawerViewport.tsx" isFullscreen isBeta

```
