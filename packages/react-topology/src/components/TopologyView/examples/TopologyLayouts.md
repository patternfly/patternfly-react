---
id: Layouts
section: topology
---

Note: Topology lives in its own package at [`@patternfly/react-topology`](https://www.npmjs.com/package/@patternfly/react-topology)

import {
  BreadthFirstLayout,
  ColaLayout,
  ColaGroupsLayout,
  ConcentricLayout,
  DagreLayout,
  DefaultEdge,
  DefaultGroup,
  DefaultNode,
  EdgeStyle,
  ForceLayout,
  GridLayout,
  GraphComponent,
  ModelKind,
  NodeShape,
  observer,
  SELECTION_EVENT,
  TopologyView,
  Visualization,
  VisualizationProvider,
  VisualizationSurface,
  NodeStatus
} from '@patternfly/react-topology';

import { Select, SelectOption, SelectVariant, ToolbarItem } from '@patternfly/react-core';

import './topology-example.css';
import Icon1 from '@patternfly/react-icons/dist/esm/icons/regions-icon';
import Icon2 from '@patternfly/react-icons/dist/esm/icons/folder-open-icon';

### Layouts

You can choose to customize your topology graph with any of the following layouts:

- Force: [description]
- Dagre: [description]
- Cola: [description]
- ColaGroups: [description]
- ColaNoForce: [description]
- Grid: [description]
- Concentric: [description]
- BreadthFirst: [description]

```ts file='./TopologyLayoutsDemo.tsx'
```
