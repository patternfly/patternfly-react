---
id: Pipelines
section: topology
sortValue: 71
sourceLink: https://github.com/patternfly/patternfly-react/blob/main/packages/react-topology/src/components/TopologyView/examples/TopologyPipelinesGettingStartedDemo.tsx
propComponents: ['TaskNode', 'TaskEdge', 'WhenDecorator']
---

Note: Topology lives in its own package at [`@patternfly/react-topology`](https://www.npmjs.com/package/@patternfly/react-topology)

import {
  TopologyView,
  Visualization,
  VisualizationProvider,
  VisualizationSurface,
  useVisualizationController,
  DefaultTaskGroup,
  GraphComponent,
  ModelKind,
  SpacerNode,
  TaskEdge,
  FinallyNode,
  DEFAULT_FINALLY_NODE_TYPE,
  DEFAULT_TASK_NODE_TYPE,
  DEFAULT_EDGE_TYPE,
  DEFAULT_SPACER_NODE_TYPE,
  DEFAULT_WHEN_OFFSET,
  TaskNode,
  WhenDecorator,
  RunStatus,
  getEdgesFromNodes,
  getSpacerNodes,
  PipelineDagreLayout
} from '@patternfly/react-topology';

import './topology-pipelines-example.css';

### Getting Started with Topology Pipelines

1. Create a new Controller which can be done using the default `Visualization` class.

  It is important to note that three `register` methods are accessed by the controller.

  The following two must be declared explicitly:

    - `registerLayoutFactory`: This method sets the layout of your topology view. For topology pipelines, this shouls use the `PipleineDagreLayout` layout or an extension of it.

    - `registerComponentFactory`: This method lets you customize the components in your topology view (e.g. nodes, groups, and edges).
  For topology pipelines, nodes and edges should use the elements with a `PipelineNodeModel`, which adds the model field `runAfterTasks`.

  The register method below is initialized in `Visualization.ts`. It doesn't need to be declared unless you support a custom implementation which modifies the types.

    - `registerElementFactory`: This method sets the types of the elements being used (e.g. graphs, nodes, edges). `defaultElementFactory` uses types from `ModelKind` and is exported in `index.ts`.

1. Set the task nodes and their relationships using the `runAfterTasks` field.

1. Use the `getSpacerNodes` function to determine the necessary spacer nodes. Spacer nodes are used to aggregate edges to/from multiple task nodes.

1. Determine the edges in your model by calling the `getEdgesFromNodes` function, passing it all the nodes including the spacer nodes.

1. The `fromModel` method can then be called, passing along all nodes and determined edges. Your data model should include a `graph` object, on which you will need to set `id` , `type` and `layout`.

1. To create your topology view component, add a `VisualizationProvider`, which is a useful context provider. It allows access to the created Controller and is required when using the `VisualizationSurface` component.

1. You can use the provided `VisualizationSurface` to provide the SVG component required for the topology components. The `VisualizationSurface` can take a state parameter that will allow you to pass your state settings along to the Controller.

```ts file='./TopologyPipelinesGettingStartedDemo.tsx'
```

## Functions
### getSpacerNodes
```noLive
/**
 * parameters:
 *   nodes: PipelineNodeModel[] - List of task and finally nodes in the model
 *   spacerNodeType: string     - Type to use for Spacer nodes
 *   finallyNodeTypes: string[] - Types to consider as finally nodes on incoming nodes
 *
 * Returns:
 *   PipelineNodeModel[]: a list of spacer nodes required to layout the pipeline view
 **/
 
const getSpacerNodes = (
  nodes: PipelineNodeModel[],
  spacerNodeType = DEFAULT_SPACER_NODE_TYPE,
  finallyNodeTypes: string[] = [DEFAULT_FINALLY_NODE_TYPE]
): PipelineNodeModel[]
```

### getEdgesFromNodes
```noLive
/**
 * parameters:
 *   nodes: PipelineNodeModel[] - List of all nodes in the model
 *   spacerNodeType: string     - Type set on spacer nodes
 *   edgeType:                  - Type to set on created edges
 *   spacerEdgeType:            - Type to set on edges between spacer nodes
 *   finallyNodeTypes: string[] - Types to consider as finally nodes on incoming nodes
 *   finallyEdgeType: string[]  - Type to set on edges to finally nodes
 *
 * Returns:
 *   EdgeModel[]: a list edges required to layout the pipeline view
 **/
const getEdgesFromNodes = (
  nodes: PipelineNodeModel[],
  spacerNodeType = DEFAULT_SPACER_NODE_TYPE,
  edgeType = DEFAULT_EDGE_TYPE,
  spacerEdgeType = DEFAULT_EDGE_TYPE,
  finallyNodeTypes: string[] = [DEFAULT_FINALLY_NODE_TYPE],
  finallyEdgeType = DEFAULT_EDGE_TYPE
): EdgeModel[]
```

