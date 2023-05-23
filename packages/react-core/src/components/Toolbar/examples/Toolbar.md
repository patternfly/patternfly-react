---
id: Toolbar
cssPrefix: pf-v5-c-toolbar
propComponents: ['Toolbar', 'ToolbarContent', 'ToolbarGroup', 'ToolbarItem', 'ToolbarToggleGroup', 'ToolbarFilter']
section: components
---

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

### Toolbar item spacers

You may adjust the space between toolbar items to arrange them into groups. Read our spacers documentation to learn more about using spacers.

Items are spaced “16px” apart by default. To adjust the size of the space between items, use the `spacer` property of each `<ToolbarItem>`. You can set the `spacer` value at multiple breakpoints, including "default", "md", "lg", "xl", and "2xl".  Available `spacer` values include "spacerNone", "spacerSm", "spacerMd", or "spacerLg" into each breakpoint. 

```ts file="./ToolbarSpacers.tsx"

```

### Toolbar items with adjusted widths

You can adjust the width of toolbar items so that they better fit the size of their container.

The default width of a toolbar item is “100px”. To adjust an item’s width, use the `widths` property of the `<ToolbarItem>`. You can set the “px” value at multiple breakpoints, including "default", "sm", "md", "lg, "xl", and "2xl".

```ts file="./ToolbarWidths.tsx"

```

### With adjusted inset

To adjust a toolbar’s inset, use the `inset` property. You can set the inset value at multiple breakpoints, including "default", "md", "lg, "xl", and "2xl". Inset values include “insetNone”, “insetSm”, “insetMd”, “insetLg”, “insetXl”, and “inset2xl”.

```ts file="./ToolbarInsets.tsx"

```

### Sticky toolbar

To lock a toolbar and prevent it  from scrolling with other content, use a sticky toolbar. 

In the following example, toggle the "is toolbar sticky" checkbox to see the difference between a sticky and non-sticky toolbar.

```ts file="./ToolbarSticky.tsx"
```

### With groups of items

You can group similar items together to create desired associations and to enable items to respond to changes in viewport width together. 

Note: This example does not demonstrate responsive toolbar behavior. Responsive toolbars are shown in the [examples with toggle groups and filters](/components/toolbar#examples-with-toggle-groups-and-filters).

```ts file="./ToolbarGroups.tsx"

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

You can add filters to a toolbar to let users filter the content that a toolbar manages. When a toolbar is filtered, it will expand in height to make space for a row of filter chips and a "Clear all filters" button. Upon clearing the applied filters, the toolbar will return to its default height.

The `<ToolbarFilter>` component expects applied filters and a delete chip handler to be passed in as properties. Pass in a `deleteChipGroup` property to close the entire chip group. Once close, the rendering of chips will be handled responsively by the toolbar.


```ts file="./ToolbarWithFilters.tsx"

```

### With custom chip group content

To customize the chip groups generated by toolbar filters, use the `customChipGroupContent` property on the `<Toolbar>`. This property will remove the default `clear all filters` button.

```ts file="./ToolbarCustomChipGroupContent.tsx"

```

### Stacked example

When all of a toolbar's required elements cannot fit in a single line, you can split toolbar items into multiple rows.

```ts file="./ToolbarStacked.tsx"
```

