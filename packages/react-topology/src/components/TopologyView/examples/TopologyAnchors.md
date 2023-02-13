---
id: Anchors
section: topology
---

Note: Topology lives in its own package at [`@patternfly/react-topology`](https://www.npmjs.com/package/@patternfly/react-topology)

import {
  AnchorEnd,
  DefaultEdge,
  GraphComponent,
  graphDropTargetSpec,
  Layer,
  ModelKind,
  SELECTION_EVENT,
  useCombineRefs,
  useSvgAnchor,
  Visualization,
  VisualizationProvider,
  VisualizationSurface,
  withDndDrop,
  withDragNode,
} from '@patternfly/react-topology';

import './topology-example.css';
import Icon1 from '@patternfly/react-icons/dist/esm/icons/regions-icon';
import Icon2 from '@patternfly/react-icons/dist/esm/icons/folder-open-icon';

### With Anchors

Anchors differ from basic connectors in that they [insert description here]. To add anchors to your node, create a custom component to which the anchors will attach. Call `useSvgAnchor()` on your connector refs.

`useSvgAnchor()` accepts two optional parameters:

 - `end`: the end target for the anchor
 - `type`: the edge type. Should be set to `edge-point` for the `targetRef` and for the edges that will include anchor points.

```ts file="./TopologyAnchorsDemo.tsx"
```
