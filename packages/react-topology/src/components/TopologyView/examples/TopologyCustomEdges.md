---
id: Custom Edges
section: topology
sortValue: 12
sourceLink: https://github.com/patternfly/patternfly-react/blob/main/packages/react-topology/src/components/TopologyView/examples/TopologyCustomEdgesDemo.tsx
propComponents: ['DefaultEdge']
---

Note: Topology lives in its own package at [`@patternfly/react-topology`](https://www.npmjs.com/package/@patternfly/react-topology)

import {
  ColaLayout,
  CREATE_CONNECTOR_DROP_TYPE,
  DefaultEdge,
  DefaultGroup,
  DefaultNode,
  EdgeAnimationSpeed,
  EdgeStyle,
  EdgeTerminalType,
  GraphComponent,
  LabelPosition,
  ModelKind,
  nodeDragSourceSpec,
  nodeDropTargetSpec,
  NodeShape,
  SELECTION_EVENT,
  Visualization,
  VisualizationProvider,
  VisualizationSurface,
  withDndDrop,
  withDragNode,
  withSelection
} from '@patternfly/react-topology';
import Icon1 from '@patternfly/react-icons/dist/esm/icons/regions-icon';
import Icon2 from '@patternfly/react-icons/dist/esm/icons/folder-open-icon';

import './topology-example.css';

### Using custom edges

Edges can be styled using properties on `EdgeModel`:
- edgeStyle: choose from the `EdgeStyle` enumeration providing solid, dashed, or dotted
- animationSpeed: choose from the `EdgeAnimationSpeed` enumeration providing various speeds

You can also customize your edges further by providing a custom Edge component. In the component you can specify a variety of parameters to pass to `DefaultEdge` or you can create the SVG elements to depict the edge.

```ts file='./TopologyCustomEdgesDemo.tsx'
```
