# @patternfly/react-topology

This package provides Topology View components based on [PatternFly 4][patternfly-4]

### Prerequisites

#### Node Environment

This project currently supports Node [Active LTS](https://github.com/nodejs/Release#release-schedule) releases. Please stay current with Node Active LTS when developing patternfly-react.

For example, to develop with Node 8, use the following:

```
nvm install 8
nvm use 8
```

This project also requires a Yarn version of >=1.6.0. The latest version can be installed [here](https://yarnpkg.com/).

### Installing

```
yarn add @patternfly/react-topology
```

or

```
npm install @patternfly/react-topology --save
```

## Basic Usage

To use React Topology out-of-the-box, you will first need to transform your back-end data into a [Model](https://github.com/patternfly/patternfly-react/blob/main/packages/react-topology/src/types.ts#L16-L20). These model objects contain the information needed to display the nodes and edges. Each node and edge has a set of properties used by PF Topology as well as a data field which can be used to customize the nodes and edges by the application.

You will then need to declare a controller, which can be initialized via the `useVisualizationController()` method.

The `fromModel` method must be called on the controller to create the nodes. `fromModel` will take your data model as a parameter. Your data model should include a `graph` object, on which you will need to set `id` , `type` and `layout`.

To create your topology view component, you can use `TopologyView` to Wrap `<VisualizationSurface>` which can accept `state` as a parameter. The state is application specific. It can be any data the application wants to store/retrieve from the controller. Adding state to the surface allows hooks to update when state changes. The state is useful to keep graph state such as selected elements.

Use a controller to wrap your topology view component. In the example below, this is done via the `VisualizationProvider` which consumes the `Controller` via context.

Three `register` methods are accessed by the controller.

The following two must be declared explicitly\:

- `registerLayoutFactory`\: This method sets the layout of your topology view (e.g. Force, Dagre, Cola, etc.). You can use `defaultLayoutFactory` as a parameter if your application supports all layouts. You can also update `defaultLayout` to a custom implementation if you only want to support a subset of the available layout options.

- `registerComponentFactory`\: This method lets you customize the components in your topology view (e.g. nodes, groups, and edges). You can use `defaultComponentFactory` as a parameter.

The register method below is initialized in `Visualization.ts`, therefore it doesn't need to be declared unless you want to support a custom implementation which modifies the types.

- `registerElementFactory`\: This method sets the types of the elements being used (e.g. graphs, nodes, edges). `defaultElementFactory` uses types from `ModelKind` and is exported in `index.ts`.

#### Example Component Usage

```ts
import * as React from 'react';
import {
  EdgeStyle,
  Model,
  NodeShape,
  SELECTION_EVENT,
  Visualization,
  VisualizationProvider,
  VisualizationSurface
} from '@patternfly/react-topology';
import defaultLayoutFactory from './layouts/defaultLayoutFactory';
import defaultComponentFactory from './components/defaultComponentFactory';

const NODE_SHAPE = NodeShape.ellipse;
const NODE_DIAMETER = 75;

const NODES = [
  {
    id: 'node-0',
    type: 'node',
    label: 'Node 0',
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    shape: NODE_SHAPE
  },
  {
    id: 'node-1',
    type: 'node',
    label: 'Node 1',
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    shape: NODE_SHAPE
  },
  {
    id: 'node-2',
    type: 'node',
    label: 'Node 2',
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    shape: NODE_SHAPE
  },
  {
    id: 'node-3',
    type: 'node',
    label: 'Node 3',
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    shape: NODE_SHAPE
  },
  {
    id: 'node-4',
    type: 'node',
    label: 'Node 4',
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    shape: NODE_SHAPE
  },
  {
    id: 'node-5',
    type: 'node',
    label: 'Node 5',
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    shape: NODE_SHAPE
  },
  {
    id: 'Group-1',
    children: ['node-0', 'node-1', 'node-2', 'node-3'],
    type: 'group-hull',
    group: true,
    label: 'Group-1',
    style: {
      padding: 15
    }
  }
];

const EDGES = [
  {
    id: 'edge-node-4-node-5',
    type: 'edge',
    source: 'node-4',
    target: 'node-5',
    edgeStyle: EdgeStyle.default
  },
  {
    id: 'edge-node-0-node-2',
    type: 'edge',
    source: 'node-0',
    target: 'node-2',
    edgeStyle: EdgeStyle.default
  }
];

export const TopologyBaselineDemo = React.memo(() => {
  const [selectedIds, setSelectedIds] = React.useState<string[]>([]);

  const controller = React.useMemo(() => {
    const model: Model = {
      nodes: NODES,
      edges: EDGES,
      graph: {
        id: 'g1',
        type: 'graph',
        layout: 'Cola'
      }
    };

    const newController = new Visualization();
    newController.registerLayoutFactory(defaultLayoutFactory);
    newController.registerComponentFactory(defaultComponentFactory);

    newController.addEventListener(SELECTION_EVENT, setSelectedIds);

    newController.fromModel(model, false);

    return newController;
  }, []);

  return (
    <VisualizationProvider controller={controller}>
      <VisualizationSurface state={{ selectedIds }} />
    </VisualizationProvider>
  );
});
```
