---
id: Anchors
section: topology
---

Note: Topology lives in its own package at [`@patternfly/react-topology`](https://www.npmjs.com/package/@patternfly/react-topology)

import {
  AnchorEnd,
  ColaLayout,
  DefaultEdge,
  DefaultGroup,
  DefaultNode,
  EdgeStyle,
  GraphComponent,
  graphDropTargetSpec,
  groupDropTargetSpec,
  Layer,
  ModelKind,
  nodeDragSourceSpec,
  NodeShape,
  NodeStatus,
  SELECTION_EVENT,
  useSvgAnchor,
  useCombineRefs,
  Visualization,
  VisualizationProvider,
  VisualizationSurface,
  withDndDrop,
  withDragNode,
  withSelection
} from '@patternfly/react-topology';

import './topology-example.css';
import Icon1 from '@patternfly/react-icons/dist/esm/icons/regions-icon';
import Icon2 from '@patternfly/react-icons/dist/esm/icons/folder-open-icon';

### With Anchors

```ts file="./TopologyAnchorsDemo.tsx"
```
