---
id: With Sidebar
section: topology
---

import Icon1 from '@patternfly/react-icons/dist/esm/icons/regions-icon';
import Icon2 from '@patternfly/react-icons/dist/esm/icons/folder-open-icon';

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
  TopologySideBar,
  TopologyView,
  Visualization,
  VisualizationProvider,
  VisualizationSurface,
  withSelection
} from '@patternfly/react-topology';
import './topology-example.css';

### Topology Sidebar Demo

To add a sidebar, wrap your `VisualizationProvider` with the `TopologyView` component, which accepts `sideBar` as a prop.

Pass the `TopologySideBar` component to the `sideBar` prop. `TopologySideBar` should accept the following props:

- `show`: logic to show the sidebar, e.g. if a node is selected
- `onClose`: handle the user closing the window, e.g. unselect the current selection

```ts file='./TopologySidebarDemo.tsx'
```
