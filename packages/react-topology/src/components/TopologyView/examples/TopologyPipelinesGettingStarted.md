---
id: Pipelines
section: topology
---

Note: Topology lives in its own package at [`@patternfly/react-topology`](https://www.npmjs.com/package/@patternfly/react-topology)

import {
  TopologyView,
  Visualization,
  VisualizationProvider,
  VisualizationSurface,
  useVisualizationController,
  DefaultTaskGroup,
  DEFAULT_EDGE_TYPE,
  DEFAULT_SPACER_NODE_TYPE,
  GraphComponent,
  ModelKind,
  SpacerNode,
  TaskEdge,
  FinallyNode,
  DEFAULT_FINALLY_NODE_TYPE,
  DEFAULT_TASK_NODE_TYPE,
  DEFAULT_WHEN_SIZE,
  RunStatus,
  WhenStatus,
  DEFAULT_LAYER,
  DEFAULT_WHEN_OFFSET,
  Layer,
  ScaleDetailsLevel,
  TaskNode,
  TOP_LAYER,
  useDetailsLevel,
  useHover,
  WhenDecorator,
} from '@patternfly/react-topology';
import '@patternfly/react-styles/css/components/Topology/topology-components.css';

### Getting Started with Topology Pipelines

```ts file='./TopologyPipelinesGettingStartedDemo.tsx'
```
