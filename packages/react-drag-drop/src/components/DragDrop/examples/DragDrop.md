---
id: Drag and drop
section: components
cssPrefix: pf-c-drag-drop
propComponents: ['DragDropSort', 'DraggableObject']
hideNavItem: true
beta: true
---

Note: This drag and drop implementation lives in its own package at [@patternfly/react-drag-drop](https://www.npmjs.com/package/@patternfly/react-drag-drop)!

import AngleDoubleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-left-icon';
import AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';
import AngleDoubleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-right-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import PficonSortCommonAscIcon from '@patternfly/react-icons/dist/esm/icons/pficon-sort-common-asc-icon';

import { DragDropSort, DragDropContainer, Droppable as NewDroppable } from '@patternfly/react-drag-drop';

## Sorting examples

### Basic drag and drop sorting

```ts file="./BasicSorting.tsx"

```

### Multiple drop zones

```ts file="./DragDropContainerBasic.tsx"

```
