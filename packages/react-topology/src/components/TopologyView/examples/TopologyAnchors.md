---
id: Anchors
section: topology
sortValue: 13
---

Note: Topology lives in its own package at [`@patternfly/react-topology`](https://www.npmjs.com/package/@patternfly/react-topology)

import {
  AbstractAnchor,
  AnchorEnd,
  ColaLayout,
  DefaultEdge,
  DefaultNode,
  GraphComponent,
  Layer,
  ModelKind,
  NodeShape,
  Point,
  useAnchor,
  useSvgAnchor,
  Visualization,
  VisualizationProvider,
  VisualizationSurface,
  withDragNode,
} from '@patternfly/react-topology';

import './topology-example.css';

### Using custom anchors

By default, Nodes use a default anchor `CenterAnchor` which use the center of the bounds of the node. A variety of anchors are provided for different node shapes that will set the anchor locations to the edge of the node.

You can customize the start and end locations for edges on a node by specifying the anchors to use on the node.

Hooks are provided to enable you to specify the SVG element you wish to use for determining the edge locations: `usePolygonAnchor`, and `useSvgAnchor`
These hooks accept parameters allowing you to customize when to use the anchor:
- `points` (usePolygonAnchor only) to specify the points for the polygon
- `AnchorEnd` to specify use for start, end or both
- `type` to specify which edge types to use the anchor for (optional)

The `useAnchor` hook allows you to specify your own custom anchor or provide a function to return a specific anchor (useful for adjusting the anchor based on the node being displayed).

A custom anchor must extend the `AbstractAnchor` class. There are two methods used for anchors:

- `getLocation(reference: Point): Point`
  - Should return the location of the anchor based on the incoming reference point. Default anchors use the point on the node border closest to the reference point.
- `getReferencePoint(): Point`
  - Should return the location where outgoing edges would initiate from

```ts file="./TopologyAnchorsDemo.tsx"
```
