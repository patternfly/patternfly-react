---
id: Custom Edge Demo
section: topology
---

Note: Topology lives in its own package at [`@patternfly/react-topology`](https://www.npmjs.com/package/@patternfly/react-topology)

import {
  ColaLayout,
  ComponentFactory,
  CREATE_CONNECTOR_DROP_TYPE,
  DefaultEdge,
  DefaultGroup,
  DefaultNode,
  Edge,
  EdgeAnimationSpeed,
  EdgeModel,
  EdgeStyle,
  EdgeTerminalType,
  Graph,
  GraphComponent,
  LabelPosition,
  Layout,
  LayoutFactory,
  Model,
  ModelKind,
  Node,
  nodeDragSourceSpec,
  nodeDropTargetSpec,
  NodeModel,
  NodeShape,
  SELECTION_EVENT,
  Visualization,
  VisualizationProvider,
  VisualizationSurface,
  withDndDrop,
  withDragNode,
  WithDragNodeProps,
  withSelection,
  WithSelectionProps
} from '@patternfly/react-topology';

import './topology-example.css';
import Icon1 from '@patternfly/react-icons/dist/esm/icons/regions-icon';
import Icon2 from '@patternfly/react-icons/dist/esm/icons/folder-open-icon';

### Custom Edges

Edges can be styled using properties on `EdgeModel`:
- edgeStyle: choose from the `EdgeStyle` enumeration providing solid, dashed, or dotted
- animationSpeed: choose from the `EdgeAnimationSpeed` enumeration providing various speeds

You can also customize your edges further by providing a custom Edge component. In the component you can specify a variety of parameters to pass to `DefaultEdge` or you can create the SVG elements to depict the edge.

```ts file='./TopologyCustomEdgeDemo.tsx'
```
