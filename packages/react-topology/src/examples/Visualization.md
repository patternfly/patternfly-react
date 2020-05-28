---
title: 'Topology Visualization'
section: components
typescript: true
beta: true
---

Note: Topology lives in its own package at [`@patternfly/react-topology`](https://www.npmjs.com/package/@patternfly/react-topology)

## Preface

It's possible to render graphs with Visualization components.

import { Visualization, VisualizationSurface, withDragNode, ModelKind } from '@patternfly/react-topology';
import defaultComponentFactory from './defaultComponentFactory';
import Node from './DefaultNode';
import './topology-example.css';

## Basic examples

```js title=Single-node
import React from 'react';
import { Visualization, VisualizationSurface, withDragNode, ModelKind } from '@patternfly/react-topology';
import defaultComponentFactory from './defaultComponentFactory';
import Node from './DefaultNode';

() => {
  const vis = new Visualization();
  const model = {
    graph: {
      id: 'g1',
      type: 'graph'
    },
    nodes: [
      {
        id: 'n1',
        type: 'node',
        x: 50,
        y: 50,
        width: 20,
        height: 20
      }
    ]
  };
  vis.fromModel(model);
  vis.registerComponentFactory(defaultComponentFactory);
  return <VisualizationSurface visualization={vis} />;
};
```

```js title=With-multiple-edges-and-dragabble-nodes
() => {
  const vis = new Visualization();
  const model = {
    graph: {
      id: 'g1',
      type: 'graph'
    },
    nodes: [
      {
        id: 'n1',
        type: 'node',
        x: 50,
        y: 50,
        width: 100,
        height: 100
      },
      {
        id: 'n2',
        type: 'node',
        x: 400,
        y: 50,
        width: 100,
        height: 100
      },
      {
        id: 'n3',
        type: 'node',
        x: 50,
        y: 200,
        width: 100,
        height: 100
      },
      {
        id: 'n4',
        type: 'node',
        x: 400,
        y: 200,
        width: 100,
        height: 100
      }
    ],
    edges: [
      {
        id: 'e1',
        type: 'multi-edge',
        source: 'n1',
        target: 'n2'
      },
      {
        id: 'e2',
        type: 'multi-edge',
        source: 'n1',
        target: 'n2'
      },
      {
        id: 'e3',
        type: 'multi-edge',
        source: 'n3',
        target: 'n4'
      },
      {
        id: 'e4',
        type: 'multi-edge',
        source: 'n3',
        target: 'n4'
      },
      {
        id: 'e5',
        type: 'multi-edge',
        source: 'n3',
        target: 'n4'
      },
      {
        id: 'e6',
        type: 'multi-edge',
        source: 'n3',
        target: 'n4'
      },
      {
        id: 'e7',
        type: 'multi-edge',
        source: 'n3',
        target: 'n4'
      }
    ]
  };
  vis.fromModel(model);
  vis.registerComponentFactory(defaultComponentFactory);
  vis.registerComponentFactory(kind => {
    if (kind === ModelKind.node) {
      return withDragNode()(Node);
    }
    return undefined;
  });
  return <VisualizationSurface visualization={vis} />;
};
```

```js title=Grouping
() => {
  const vis = new Visualization();
  const model= {
    graph: {
      id: 'g1',
      type: 'graph',
    },
    nodes: [
      {
        id: 'gr1',
        type: 'group',
        group: true,
        children: ['n1', 'n2', 'n3'],
        style: {
          padding: 10,
        },
      },
      {
        id: 'n1',
        type: 'node',
        x: 50,
        y: 50,
        width: 30,
        height: 30,
      },
      {
        id: 'n2',
        type: 'node',
        x: 200,
        y: 20,
        width: 10,
        height: 10,
      },
      {
        id: 'n3',
        type: 'node',
        x: 150,
        y: 100,
        width: 20,
        height: 20,
      },
    ],
  };
  vis.fromModel(model);
  vis.registerComponentFactory(defaultComponentFactory);
  return <VisualizationSurface visualization={vis} />;
};
```
