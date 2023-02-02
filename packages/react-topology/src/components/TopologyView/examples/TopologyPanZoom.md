---
id: Pan/Zoom Demo
section: topology
---

Note: Topology lives in its own package at [`@patternfly/react-topology`](https://www.npmjs.com/package/@patternfly/react-topology)

import {
  ColaLayout,
  ComponentFactory,
  DefaultEdge,
  DefaultGroup,
  DefaultNode,
  EdgeStyle,
  Graph,
  GraphComponent,
  Layout,
  LayoutFactory,
  Model,
  ModelKind,
  Node,
  NodeModel,
  NodeShape,
  NodeStatus,
  SELECTION_EVENT,
  Visualization,
  VisualizationProvider,
  VisualizationSurface,
  withPanZoom
} from '@patternfly/react-topology';
import './topology-example.css';
import Icon1 from '@patternfly/react-icons/dist/esm/icons/regions-icon';
import Icon2 from '@patternfly/react-icons/dist/esm/icons/folder-open-icon';

### Pan/Zoom

To allow the user to pan and zoom on the graph, you can use the `withPanZoom` utility when returning the graph component in the componentFactory: `withPanZoom(GraphComponent)`

The component should accept a `panZoomRef` property. This should be the ref on the surface element for the group, the element that will accept the drag or mouse wheel events.

Alternatively, you can use the `usePanZoom` hook within the component to retrieve the `panZoomRef` property.

If you are using the provided `GraphComponent`, this property is accepted and will be handled appropriately.

```ts file='./TopologyPanZoomDemo.tsx'
```
