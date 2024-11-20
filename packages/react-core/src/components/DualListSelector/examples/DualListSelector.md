---
id: Dual list selector
section: components
cssPrefix: 'pf-v6-c-dual-list-selector'
propComponents:
  [
    'DualListSelector',
    'DualListSelectorPane',
    'DualListSelectorList',
    'DualListSelectorListItem',
    'DualListSelectorControlsWrapper',
    'DualListSelectorControl',
    'DualListSelectorTree',
    'DualListSelectorTreeItemData'
  ]
---

import AngleDoubleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-left-icon';
import AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';
import AngleDoubleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-right-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import PficonSortCommonAscIcon from '@patternfly/react-icons/dist/esm/icons/pficon-sort-common-asc-icon';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import { DragDropSort, DragDropContainer, Droppable as NewDroppable } from '@patternfly/react-drag-drop';

## Examples

The dual list selector is built in a composable manner to make customization easier. The standard sub-component relationships are arranged as follows:

```noLive
<DualListSelector>
  <DualListSelectorPane>
    <DualListSelectorList>
      <DualListSelectorListItem />
    </DualListSelectorList>
  </DualListSelectorPane>

  <DualListSelectorControlsWrapper>
    <DualListSelectorControl /> /* A standard Dual list selector has 4 controls */
  </DualListSelectorControlsWrapper>

  <DualListSelectorPane isChosen>
    <DualListSelectorList>
      <DualListSelectorListItem />
    </DualListSelectorList>
  </DualListSelectorPane>
</DualListSelector>
```

### Basic

```ts file="./DualListSelectorBasic.tsx"

```

### Basic with tooltips

```ts file="./DualListSelectorBasicTooltips.tsx"

```

### Basic with search

```ts file="./DualListSelectorBasicSearch.tsx"

```

### Using more complex options with actions

```ts file="./DualListSelectorComplexOptionsActions.tsx"

```

### With tree

```ts file="DualListSelectorTree.tsx"

```

### Draggable

To enable drag and drop, wrap the `<DualListSelectorList>` component with `<DragDropSort>`, define the `variant` property as "DualListSelectorList", and pass both the sortable items and `onDrop` callback to `<DragDropSort>`. `<DragDropSort>` will create the component's usual children internally based on the items property, so children inside the `<DualListSelectorList>` should not be passed to the wrapped component.

Full drag and drop details can be found on the [drag and drop](/components/drag-and-drop) component page.

```ts file="../../../../../react-drag-drop/src/components/DragDrop/examples/DualListSelectorDraggable.tsx"

```

### Draggable with multiple drop zones

To enable multiple drop zones, wrap the `<DualListSelector>` component with `<DragDropContainer>`, and create the desired amount of `<Droppable>` components within `<DragDropContainer>`. `<Droppable>` components should be located where `<DualListSelectorList>` usually would go for each pane to be made draggable.

Each `<Droppable>` should define the `wrapper` property as the component that acts as the drop zone, `<DualListSelectorList>`, and the `items` property of their respective draggable items as an array of `<DraggableObject>` data. `<DragDropContainer>` should be passed the `onDrop`, `onContainerMove`, and `onCancel` callbacks to handle items being dropped, items moving between droppable containers, and what happens if the drag is cancelled respectively. `<DragDropContainer>` should also be given a `Record` representing all sortable drop zones' items. Both components should define the `variant` property as "DualListSelectorList".

Full drag and drop details can be found on the [drag and drop](/components/drag-and-drop) component page.

```ts file="../../../../../react-drag-drop/src/components/DragDrop/examples/DragDropContainerDualListSelector.tsx"

```
