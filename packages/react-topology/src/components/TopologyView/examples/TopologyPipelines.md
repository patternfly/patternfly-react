---
id: Pipelines
section: topology
---

Note: Topology lives in its own package at [`@patternfly/react-topology`](https://www.npmjs.com/package/@patternfly/react-topology)

import {
  PipelineDagreLayout,
  Visualization,
  VisualizationProvider,
  useEventListener,
  SELECTION_EVENT,
  TopologyView,
  VisualizationSurface,
  useVisualizationController,
  NODE_SEPARATION_HORIZONTAL,
  GRAPH_LAYOUT_END_EVENT,
  getSpacerNodes,
  getEdgesFromNodes,
  DEFAULT_EDGE_TYPE,
  DEFAULT_SPACER_NODE_TYPE,
  DEFAULT_FINALLY_NODE_TYPE,
  DEFAULT_TASK_NODE_TYPE,
  DEFAULT_WHEN_OFFSET,
  DEFAULT_WHEN_SIZE,
  WhenStatus,
  RunStatus
} from '@patternfly/react-topology';
import '@patternfly/react-styles/css/components/Topology/topology-components.css';

### Pipelines

☺︎☺︎☺︎☺︎☺︎☺︎☺︎☺︎☺︎☺︎☺︎☺︎☺︎☺︎☺︎☺︎☺︎☺︎☺︎☺︎☺︎☺︎☺︎☺︎☺︎☺︎☺︎☺︎☺︎☺︎☺︎☺︎☺︎☺︎☺︎☺︎☺︎☺︎☺︎☺︎☺︎☺︎☺︎☺︎

```ts file='./TopologyPipelinesDemo.tsx'
```
