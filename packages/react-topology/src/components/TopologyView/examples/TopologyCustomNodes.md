---
id: Custom Nodes
section: topology
sortValue: 11
sourceLink: https://github.com/patternfly/patternfly-react/blob/main/packages/react-topology/src/components/TopologyView/examples/TopologyCustomNodesDemo.tsx
propComponents: ['DefaultNode']
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
  VisualizationSurface
} from '@patternfly/react-topology';
import Icon1 from '@patternfly/react-icons/dist/esm/icons/regions-icon';
import Icon2 from '@patternfly/react-icons/dist/esm/icons/folder-open-icon';

import './topology-example.css';

### Using custom nodes

To create nodes with custom styling, you will need to create a custom node component, which your `customComponentFactory` will return.

To do this, you will need:

- A `CustomNode` component, with `CustomNodeProps` as the generic type, and the destructured `element` as the parameter. The code in the example shows how you can get data from `element` and apply it to the attributes of `DefaultNode`.

Within each node in your `NODES` array, you can set `data` to include additional custom attributes.

```ts file='./TopologyCustomNodesDemo.tsx'
```
