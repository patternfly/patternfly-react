import * as React from 'react';
import { Visualization, VisualizationSurface, Model, ModelKind, withDragNode } from '../src';
import defaultComponentFactory from './components/defaultComponentFactory';
import Node from './components/DefaultNode';

export default {
  title: 'Basic',
};

export const singleNode = () => {
  const vis = new Visualization();
  const model: Model = {
    graph: {
      id: 'g1',
      type: 'graph',
    },
    nodes: [
      {
        id: 'n1',
        type: 'node',
        x: 50,
        y: 50,
        width: 20,
        height: 20,
      },
    ],
  };
  vis.fromModel(model);
  vis.registerComponentFactory(defaultComponentFactory);
  return <VisualizationSurface visualization={vis} />;
};

export const singleEdge = () => {
  const vis = new Visualization();
  const model: Model = {
    graph: {
      id: 'g1',
      type: 'graph',
    },
    nodes: [
      {
        id: 'n1',
        type: 'node',
        x: 20,
        y: 20,
        width: 20,
        height: 20,
      },
      {
        id: 'n2',
        type: 'node',
        x: 200,
        y: 50,
        width: 100,
        height: 30,
      },
    ],
    edges: [
      {
        id: 'e1',
        type: 'edge',
        source: 'n1',
        target: 'n2',
        bendpoints: [
          [80, 30],
          [110, 10],
        ],
      },
    ],
  };
  vis.fromModel(model);
  vis.registerComponentFactory(defaultComponentFactory);
  return <VisualizationSurface visualization={vis} />;
};

export const multiEdge = () => {
  const vis = new Visualization();
  const model: Model = {
    graph: {
      id: 'g1',
      type: 'graph',
    },
    nodes: [
      {
        id: 'n1',
        type: 'node',
        x: 50,
        y: 50,
        width: 100,
        height: 100,
      },
      {
        id: 'n2',
        type: 'node',
        x: 400,
        y: 50,
        width: 100,
        height: 100,
      },
      {
        id: 'n3',
        type: 'node',
        x: 50,
        y: 200,
        width: 100,
        height: 100,
      },
      {
        id: 'n4',
        type: 'node',
        x: 400,
        y: 200,
        width: 100,
        height: 100,
      },
    ],
    edges: [
      {
        id: 'e1',
        type: 'multi-edge',
        source: 'n1',
        target: 'n2',
      },
      {
        id: 'e2',
        type: 'multi-edge',
        source: 'n1',
        target: 'n2',
      },
      {
        id: 'e3',
        type: 'multi-edge',
        source: 'n3',
        target: 'n4',
      },
      {
        id: 'e4',
        type: 'multi-edge',
        source: 'n3',
        target: 'n4',
      },
      {
        id: 'e5',
        type: 'multi-edge',
        source: 'n3',
        target: 'n4',
      },
      {
        id: 'e6',
        type: 'multi-edge',
        source: 'n3',
        target: 'n4',
      },
      {
        id: 'e7',
        type: 'multi-edge',
        source: 'n3',
        target: 'n4',
      },
    ],
  };
  vis.fromModel(model);
  vis.registerComponentFactory(defaultComponentFactory);
  vis.registerComponentFactory((kind) => {
    if (kind === ModelKind.node) {
      return withDragNode()(Node);
    }
    return undefined;
  });
  return <VisualizationSurface visualization={vis} />;
};

const groupStory = (groupType: string) => {
  const vis = new Visualization();
  const model: Model = {
    graph: {
      id: 'g1',
      type: 'graph',
    },
    nodes: [
      {
        id: 'gr1',
        type: groupType,
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

export const group = () => groupStory('group');
export const groupHull = () => groupStory('group-hull');
