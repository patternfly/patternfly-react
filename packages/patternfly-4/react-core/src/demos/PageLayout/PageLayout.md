---
title: 'Page layout'
section: 'demos'
---

import LinkPreview from '@content/../LinkPreview';
import RawPageLayoutSimpleNav from '!!raw-loader!./examples/PageLayoutSimpleNav';
import RawPageLayoutDefaultNav from '!!raw-loader!./examples/PageLayoutDefaultNav';
import RawPageLayoutExpandableNav from '!!raw-loader!./examples/PageLayoutExpandableNav';
import RawPageLayoutGroupsNav from '!!raw-loader!./examples/PageLayoutGroupsNav';
import RawPageLayoutHorizontalNav from '!!raw-loader!./examples/PageLayoutHorizontalNav';
import RawPageLayoutManualNav from '!!raw-loader!./examples/PageLayoutManualNav';

All but the last example set the isManagedSidebar prop on the Page component to have the sidebar automatically close for smaller screen widths. You can also manually control this behavior by not adding the isManagedSidebar prop and instead:

- Add an onNavToggle callback to PageHeader
- Pass in a boolean into the isNavOpen prop to PageSidebar

The last example demonstrates this.

## Using simple navigation

<LinkPreview name="Simple Nav" path="pagelayoutsimplenav" />

<code className="language-nolive">{RawPageLayoutSimpleNav}</code>

## Using default navigation

<LinkPreview name="Default Nav" path="pagelayoutdefaultnav" />

<code className="language-nolive">{RawPageLayoutDefaultNav}</code>

## Using expandable navigation

<LinkPreview name="Expandable Nav" path="pagelayoutexpandablenav" />

<code className="language-nolive">{RawSimpleSkipToContent}</code>

## Using grouped navigation

<LinkPreview name="Grouped Nav" path="pagelayoutgroupsnav" />

<code className="language-nolive">{RawPageLayoutGroupsNav}</code>

## Using horizontal navigation

<LinkPreview name="Horizontal Nav" path="pagelayouthorizontalnav" />

<code className="language-nolive">{RawPageLayoutHorizontalNav}</code>

## Programmatically toggle the sidebar

<LinkPreview name="Manual Nav" path="pagelayoutmanualnav" />

<code className="language-nolive">{RawPageLayoutManualNav}</code>
