---
id: Data list
section: components
cssPrefix: pf-v5-c-data-list
propComponents:
  [
    'DataList',
    'DataListAction',
    'DataListCell',
    'DataListCheck',
    'DataListItem',
    'DataListItemCells',
    'DataListItemRow',
    'DataListToggle',
    'DataListContent',
    'DataListDragButton',
    'DataListControl'
  ]
---

import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import AngleDownIcon from '@patternfly/react-icons/dist/esm/icons/angle-down-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import { css } from '@patternfly/react-styles';
import global_Color_100 from '@patternfly/react-tokens/dist/esm/global_Color_100';
import global_BackgroundColor_200 from '@patternfly/react-tokens/dist/esm/global_BackgroundColor_200';
import global_BorderColor_100 from '@patternfly/react-tokens/dist/esm/global_BorderColor_100';
import global_BorderWidth_sm from '@patternfly/react-tokens/dist/esm/global_BorderWidth_sm';

## Examples

### Basic

```ts file="./DataListBasic.tsx"

```

### Compact

```ts file="./DataListCompact.tsx"

```

### Checkboxes, actions and additional cells

```ts file="./DataListCheckboxes.tsx"

```

### Actions: single and multiple

```ts file="./DataListActions.tsx"

```

### Expandable

```ts file="./DataListExpandable.tsx"

```

### Mixed expandable

```ts file="./DataListMixedExpandable.tsx"

```

### Width modifiers

```ts file="./DataListWidthModifiers.tsx"

```

### Clickable rows

```ts file="./DataListClickableRows.tsx"

```

### Controlling text

```ts file="./DataListControllingText.tsx"

```

### Draggable

Note: There is a new recommended drag and drop implementation with full keyboard functionality, which replaces this implementation. To adhere to our new recommendations, refer to the [drag and drop demos](/components/drag-and-drop/react-next-demos).

Previously, draggable data lists had their own API for the [drag and drop component](/components/drag-and-drop), which wasn't flexible enough to allow custom styling for items as they are dragged. To address this disparity, `<DragDrop>`, `<Draggable>`, and `<Droppable>` components were added to replace our now deprecated HTML5-based API. Keyboard and screen reader accessibility for the `<DragDrop>` component is still in development.

```ts isBeta file="./DataListDraggable.tsx"

```

### Small grid breakpoint

```ts file="./DataListSmGridBreakpoint.tsx"

```
