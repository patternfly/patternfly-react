---
id: Drag and drop
section: components
source: react-next-demos
propComponents: ['DragDropSort', 'DraggableObject']
beta: true
---

Note: This drag and drop implementation lives in its own package at [@patternfly/react-drag-drop](https://www.npmjs.com/package/@patternfly/react-drag-drop)!

import AngleDoubleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-left-icon';
import AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';
import AngleDoubleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-right-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import PficonSortCommonAscIcon from '@patternfly/react-icons/dist/esm/icons/pficon-sort-common-asc-icon';

import { DragDropSort, DragDropContainer, Droppable as NewDroppable } from '@patternfly/react-drag-drop';

## Sorting demos

To enable drag and drop for compatible components, wrap the component with `<DragDropSort>`, define the `variant` property, and pass both the sortable `items` and `onDrop` callback to `<DragDropSort>`. `<DragDropSort>` will create the component's usual `children` internally based on the `items` property, so `children` should not be passed to the wrapped component.

### Drag and drop sortable data list

To enable reordering in a `<DataList>`, wrap the `<DataList>` component with `<DragDropSort>` and define the `variant` as "DataList".

```ts file="./DataListDraggable.tsx"

```

### Drag and drop sortable dual list selector

To enable reordering in a `<DualListSelector>` pane wrap the `<DualListSelectorList>` component with `<DragDropSort>` and define the `variant` as "DualListSelectorList".

```ts file="./DualListSelectorDraggable.tsx"

```

## Multiple drop zone demos

To enable multiple drop zones, wrap the component with `<DragDropContainer>`, place one or more `<Droppable>` components within the container, and define the `variant` property on all components. A collection of all draggable items should be passed to `<DragDropContainer>`, and each `<Droppable>` should be passed their respective draggable items.

`<Droppable>` will create the component's usual `children` internally based on the `items` property, so `children` should not be passed where the `<Droppable>` is defined.

To avoid a wrapping div inserted by `<Droppable>`, pass the desired container element to the `wrapper` property.

### Data list

To enable multiple drop zones with `<DataList>` components, place one or more `<Droppable>` within `<DragDropContainer>` and define the `variant` on all components as "DataList".

```ts file="./DragDropContainerDataList.tsx"

```

### Dual list selector

To enable multiple drop zones in a `<DualListSelector>`, wrap the `<DualListSelector>` component with `<DragDropContainer>`, and then include a `<Droppable>` component within each pane. Both `<DragDropContainer>` and `<Droppable>` should define the `variant` property as "DualListSelectorList".

```ts file="./DragDropContainerDualListSelector.tsx"

```
