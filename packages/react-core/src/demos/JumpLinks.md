---
id: Jump links
section: components
---

import { useContext, useEffect, useRef, useState } from 'react';
import mastheadStyles from '@patternfly/react-styles/css/components/Masthead/masthead';
import breadcrumbStyles from '@patternfly/react-styles/css/components/Breadcrumb/breadcrumb';
import { DashboardWrapper } from '@patternfly/react-core/dist/js/demos/DashboardWrapper';

## Demos

JumpLinks has a scrollspy built-in to make your implementation easier. When implementing JumpLinks be sure to:

1. Find the correct scrollable element for your page via [Firefox's debugging scrollable overflow](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Debug_Scrollable_Overflow) or by adding `hasOverflowScroll` to a [PageSection](/components/page#pagesection) or [PageGroup](/components/page#pagegroup).
   - If you add `hasOverflowScroll` to a Page sub-component you should also add a relevant aria-label to that component as well.
2. Provide a reference to the scrollable element to `scrollableRef` prop or a CSS selector of the scrollable element to `scrollableSelector` prop.
3. Provide `href`s to your JumpLinksItems which match the `id` of elements you want to spy on. If you wish to scroll to a different item than you're linking to use the `node` prop.

### Scrollspy with subsections

This demo expands on the previous to show the JumpLinks in a vertical layout with subsections. It scrolls the [Page](/components/page)'s `mainContainerId` with an `offset` calculated based on the height of the masthead and the nav list when it appears above the content. The headings are given a tab index to allow the jump links to focus on them.

```ts file="examples/JumpLinks/JumpLinksScrollspy.tsx" isFullscreen 
```

### With drawer

This demo shows how jump links can be used in combination with a drawer.

This demo uses a `scrollableRef` prop on the JumpLinks component, which is a React ref to the `DrawerContent` component.

```ts file="examples/JumpLinks/JumpLinksWithDrawer.tsx" isFullscreen
```
