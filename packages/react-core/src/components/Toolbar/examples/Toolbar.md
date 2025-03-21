---
id: Toolbar
cssPrefix: pf-v6-c-toolbar
propComponents: ['Toolbar', 'ToolbarContent', 'ToolbarGroup', 'ToolbarItem', 'ToolbarToggleGroup', 'ToolbarFilter']
section: components
---

import { Fragment, useState } from 'react';

import EditIcon from '@patternfly/react-icons/dist/esm/icons/edit-icon';
import CloneIcon from '@patternfly/react-icons/dist/esm/icons/clone-icon';
import SyncIcon from '@patternfly/react-icons/dist/esm/icons/sync-icon';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

## Examples

### Toolbar items

A toolbar can contain multiple toolbar items, like filters and buttons.

Note: This example does not demonstrate responsive toolbar behavior. Responsive toolbars are shown in the [examples with toggle groups and filters](/components/toolbar#examples-with-toggle-groups-and-filters).

```ts file="./ToolbarItems.tsx"

```

### With adjusted inset

To adjust a toolbar’s inset, use the `inset` property. You can set the inset value at multiple breakpoints, including "default", "md", "lg, "xl", and "2xl". Inset values include “insetNone”, “insetSm”, “insetMd”, “insetLg”, “insetXl”, and “inset2xl”.

```ts file="./ToolbarInsets.tsx"

```

### Sticky toolbar

To lock a toolbar and prevent it from scrolling with other content, use a sticky toolbar.

In the following example, toggle the "is toolbar sticky" checkbox to see the difference between a sticky and non-sticky toolbar.

```ts file="./ToolbarSticky.tsx"

```

### With groups of items

You can group similar items together to create desired associations and to enable items to respond to changes in viewport width together.

Note: This example does not demonstrate responsive toolbar behavior. Responsive toolbars are shown in the [examples with toggle groups and filters](/components/toolbar#examples-with-toggle-groups-and-filters).

```ts file="./ToolbarGroups.tsx"

```

### Background color variants

To change the background color of a toolbar, use the `colorVariant` property on the `<Toolbar>`.

```ts file="./ToolbarColorVariant.tsx"

```

## Examples with toggle groups and filters

The following examples use toggle groups to allow for more responsive and complex toolbars with multiple items and groups of items. To visualize responsive toolbar behavior in the following examples, resize the browser to a smaller screen width.

### Component managed toggle groups

A toggle group allows you to collapse a set of items into an overlay panel at a certain breakpoint. For example, when a toggle group contains filter controls, its contents will collapse into an overlay panel when the toolbar adapts to a change in the viewport size. The contents can be toggled by selecting the filter icon in the overlay panel.

```ts file="./ToolbarComponentManagedToggleGroups.tsx"

```

### Consumer managed toggle groups

To manually create the expanded state of the toggle group for smaller screen widths:

1. Add a `toggleIsExpanded` callback to the toolbar
2. Pass a boolean into the `isExpanded` property of the toolbar

Note: The toggle group is aware of the consumer provided breakpoint, the expandable content is not. If the expandable content is expanded and the screen width surpasses that of the breakpoint, the expandable content is not aware of that and will remain open. Be sure to consider and handle this in your implementation.

```ts file="./ToolbarConsumerManagedToggleGroups.tsx"

```

### With filters

You can add filters to a toolbar to let users filter the content that a toolbar manages. When a toolbar is filtered, it will expand in height to make space for a row of filter labels and a "Clear all filters" button. Upon clearing the applied filters, the toolbar will return to its default height.

The `<ToolbarFilter>` component expects applied filters and a delete label handler to be passed in as properties. Pass in a `deleteLabelGroup` property to close the entire label group. Once close, the rendering of labels will be handled responsively by the toolbar.

```ts file="./ToolbarWithFilters.tsx"

```

### With custom label group content

To customize the label groups generated by toolbar filters, use the `customLabelGroupContent` property on the `<Toolbar>`. This property will remove the default `clear all filters` button.

```ts file="./ToolbarCustomLabelGroupContent.tsx"

```

### Stacked example

When all of a toolbar's required elements cannot fit in a single line, you can split toolbar items into multiple rows.

```ts file="./ToolbarStacked.tsx"

```

## Examples with spacers and wrapping
You may adjust the space between toolbar items to arrange them into groups. Read our spacers documentation to learn more about using spacers.

Items are spaced “16px” apart by default and can be modified by changing their or their parents' `gap`, `columnGap`, and `rowGap` properties. You can set the property values at multiple breakpoints, including "default", "md", "lg", "xl", and "2xl".

### Toolbar content wrapping
The toolbar content section will wrap by default, but you can set the `rowRap` property to `noWrap` to make it not wrap.

```ts file="./ToolbarContentWrap.tsx"

```

### Toolbar group spacers

```ts file="./ToolbarGroupSpacers.tsx"

```

### Toolbar item spacers

```ts file="./ToolbarItemSpacers.tsx"

```
