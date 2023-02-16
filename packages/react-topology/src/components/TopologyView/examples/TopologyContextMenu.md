---
id: Context Menu
section: topology
sortValue: 23
sourceLink: https://github.com/patternfly/patternfly-react/blob/main/packages/react-topology/src/components/TopologyView/examples/TopologyContextMenuDemo.tsx
---

Note: Topology lives in its own package at [`@patternfly/react-topology`](https://www.npmjs.com/package/@patternfly/react-topology)

import {
  ColaLayout,
  ContextMenuItem,
  ContextMenuSeparator,
  DefaultEdge,
  DefaultGroup,
  DefaultNode,
  EdgeStyle,
  GraphComponent,
  ModelKind,
  NodeShape,
  SELECTION_EVENT,
  Visualization,
  VisualizationProvider,
  VisualizationSurface,
  withContextMenu
} from '@patternfly/react-topology';

import Icon1 from '@patternfly/react-icons/dist/esm/icons/regions-icon';
import './topology-example.css';

### Topology with context menus

Context menus can be used to show a menu of actions or links related to a graph element that will trigger a process or navigate to a new location. The menus are shown when right clicking on elements in the graph. Nodes, edges, and the graph itself can have context menus.

To add context menus to an element, you can use the `withContextMenu` utility when returning the component in the componentFactory, e.g.: `withContextMenu(() => contextMenu)(MyCustomNode)`.

The component should accept two parameters, `onContextMenu` and `contextMenuOpen` (you can simply extend `WithContextMenuProps`).

- `onContextMenu`: function to call upon node selection. Typically the outer container for the component would call onContextMenu when clicked.
- `contextMenuOpen`: indicates if the menu is currently open. Updates the drawing of the component to indicate its toggle status.

If you are using `DefaultNode`, these props can be passed along and will be handled appropriately.

```ts file='./TopologyContextMenuDemo.tsx'
```
