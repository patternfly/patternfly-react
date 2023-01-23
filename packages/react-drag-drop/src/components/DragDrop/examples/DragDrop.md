---
id: Drag and drop
section: components
cssPrefix: pf-c-drag-drop
propComponents: [
  DragDropSort,
  DraggableObject
]
hideNavItem: true
---
Note: DragDrop lives in its own package at @patternfly/react-drag-drop!'

import AngleDoubleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-left-icon';
import AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';
import AngleDoubleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-right-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import PficonSortCommonAscIcon from '@patternfly/react-icons/dist/esm/icons/pficon-sort-common-asc-icon';

import { DragDropSort, DraggableObject } from '@patternfly/react-drag-drop';

## Sorting examples
### Basic drag and drop sorting
```ts isBeta file="./BasicSorting.tsx"
```

### Basic drag and drop sorting with drag button

```ts isBeta file="./BasicSortingWithDragButton.tsx"
```

### Drag and drop sortable data list

Draggable data lists used to have their own HTML5-based API for drag and drop, which wasn't able to fulfill requirements such as custom styling on items being dragged. So we wrote generic `DragDrop`, `Draggable`, and `Droppable` components for this purpose. Use those new components instead of the deprecated (and buggy!) HTML5-based API.

Note: Keyboard accessibility and screen reader accessibility for the `DragDrop` component are still in development.

```ts isBeta file="./DataListDraggable.tsx"
```

### Drag and drop sortable dual list selector

This example only allows reordering the contents of the "chosen" pane with drag and drop. To make a pane able to be reordered:

- wrap the `DualListSelectorPane` in a `DragDropSort` component
- wrap the `DualListSelectorList` in a `Droppable` component
- wrap the `DualListSelectorListItem` components in a `Draggable` component
- define an `onDrop` callback which reorders the sortable options.
  - The `onDrop` function provides the starting location and destination location for a dragged item. It should return
    true to enable the 'drop' animation in the new location and false to enable the 'drop' animation back to the item's
    old position.
  - define an `onDrag` callback which ensures that the drag event will not cross hairs with the `onOptionSelect` click
    event set on the option. Note: the `ignoreNextOptionSelect` state value is used to prevent selection while dragging.

Note: Keyboard accessibility and screen reader accessibility for the `DragDropSort` component are still in development.

```ts file="./DualListSelectorDraggable.tsx"
```
