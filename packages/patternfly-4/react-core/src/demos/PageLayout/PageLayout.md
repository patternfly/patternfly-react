---
title: 'Page layout'
section: 'demos'
---

import LinkPreview from '@content/../LinkPreview';

All but the last example set the isManagedSidebar prop on the Page component to have the sidebar automatically close for smaller screen widths. You can also manually control this behavior by not adding the isManagedSidebar prop and instead:

- Add an onNavToggle callback to PageHeader
- Pass in a boolean into the isNavOpen prop to PageSidebar

The last example demonstrates this.

## Using simple navigation

<LinkPreview name="Simple Nav" path="/documentation/react/demos/pagelayout/pagelayoutsimplenav" />

## Using default navigation

<LinkPreview name="Default Nav" path="/documentation/react/demos/pagelayout/pagelayoutdefaultnav" />

## Using expandable navigation

<LinkPreview name="Expandable Nav" path="/documentation/react/demos/pagelayout/pagelayoutexpandablenav" />

## Using grouped navigation

<LinkPreview name="Grouped Nav" path="/documentation/react/demos/pagelayout/pagelayoutgroupsnav" />

## Using horizontal navigation

<LinkPreview name="Horizontal Nav" path="/documentation/react/demos/pagelayout/pagelayouthorizontalnav" />

## Programmatically toggle the sidebar

<LinkPreview name="Manual Nav" path="/documentation/react/demos/pagelayout/pagelayoutmanualnav" />
