---
id: Selection
section: topology
sortValue: 21
sourceLink: https://github.com/patternfly/patternfly-react/blob/main/packages/react-topology/src/components/TopologyView/examples/TopologySelectableDemo.tsx
---

Note: Topology lives in its own package at [`@patternfly/react-topology`](https://www.npmjs.com/package/@patternfly/react-topology)

import {
  ColaLayout,
  DefaultEdge,
  DefaultGroup,
  DefaultNode,
  EdgeStyle,
  GraphComponent,
  ModelKind,
  NodeShape,
  NodeStatus,
  SELECTION_EVENT,
  Visualization,
  VisualizationProvider,
  VisualizationSurface,
  withSelection
} from '@patternfly/react-topology';
import Icon1 from '@patternfly/react-icons/dist/esm/icons/regions-icon';
import Icon2 from '@patternfly/react-icons/dist/esm/icons/folder-open-icon';

import './topology-example.css';

### Using selection

To allow nodes/edges to be selectable, you can use the `withSelection` utility when returning the component in the componentFactory, e.g.: `withSelection()(MyCustomNode)`.

The component should accept two parameters, `onSelect` and `selected` (you can simply extend `WithSelectionProps`).

- `onSelect`: function to call upon node selection. Typically the outer container for the component would call onSelect when clicked.
- `selected`: indicates if the element is currently selected. Updates the drawing of the component to indicate its selection status.
Alternatively, you can use the `useSelection` hook within the component to retrieve the same two properties.

If you are using `DefaultNode`, these props can be passed along and will be handled appropriately.

By default, the application must control selection state. This can be done by adding a listener to the controller for a `SELECTION_EVENT`. The listener would then keep track of the selectedIds and maintain the ids in state and pass that state along to the `VisualizationSurface`.

Alternatively, you can pass `{ controlled: true }` to the `withSelection` utility or to the `useSelection` hook.

```ts file='./TopologySelectableDemo.tsx'
```
