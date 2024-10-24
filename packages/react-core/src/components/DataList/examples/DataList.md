---
id: Data list
section: components
cssPrefix: pf-v6-c-data-list
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
import { DragDropSort, DragDropContainer, Droppable as NewDroppable } from '@patternfly/react-drag-drop';

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

To enable drag and drop, wrap the `<DataList>` component with `<DragDropSort>`, define the `variant` property as "DataList", and pass both the sortable items and `onDrop` callback to `<DragDropSort>`. `<DragDropSort>` will create the component's usual children internally based on the items property, so children should not be passed to the wrapped component.

Full drag and drop details can be found on the [drag and drop](/components/drag-and-drop) component page.

```ts file="../../../../../react-drag-drop/src/components/DragDrop/examples/DataListDraggable.tsx"

```

### Draggable with multiple drop zones

To enable multiple drop zones, and create the desired amount of `<Droppable>` components within a `<DragDropContainer>`.

Each `<Droppable>` should define the `wrapper` property as the component that acts as the drop zone, `<DataList>`, and the `items` property of their respective draggable items as an array of `<DraggableObject>` data. `<DragDropContainer>` should be passed the `onDrop`, `onContainerMove`, and `onCancel` callbacks to handle items being dropped, items moving between droppable containers, and what happens if the drag is cancelled respectively. `<DragDropContainer>` should also be given a `Record` representing all sortable drop zones' items. Both components should define the `variant` property as "DataList".

Full drag and drop details can be found on the [drag and drop](/components/drag-and-drop) component page.

```ts file="../../../../../react-drag-drop/src/components/DragDrop/examples/DragDropContainerDataList.tsx"

```

### Small grid breakpoint

```ts file="./DataListSmGridBreakpoint.tsx"

```
