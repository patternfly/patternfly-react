import * as React from 'react';
import * as _ from 'lodash';
import {
  EdgeModel,
  Model,
  ModelKind,
  NodeModel,
  Visualization,
  withPanZoom,
  GraphComponent,
  withDragNode,
  VisualizationSurface,
} from '../src';
import defaultLayoutFactory from './layouts/defaultLayoutFactory';
import data from './data/miserables';
import defaultComponentFactory from './components/defaultComponentFactory';
import GroupHull from './components/GroupHull';
import Group from './components/DefaultGroup';
import Node from './components/DefaultNode';

export default {
  title: 'Layout',
};

const getModel = (layout: string): Model => {
  // create nodes from data
  const nodes: NodeModel[] = data.nodes.map((d) => {
    // randomize size somewhat
    const width = 10 + d.id.length;
    const height = 10 + d.id.length;
    return {
      id: d.id,
      type: 'node',
      width,
      height,
      x: 0,
      y: 0,
      data: d,
    };
  });

  // create groups from data
  const groupNodes: NodeModel[] = _.map(
    _.groupBy(nodes, (n) => n.data.group),
    (v, k) => ({
      type: 'group-hull',
      id: k,
      group: true,
      children: v.map((n: NodeModel) => n.id),
      label: `group-${k}`,
      style: {
        padding: 10,
      },
    }),
  );

  // create links from data
  const edges = data.links.map(
    (d): EdgeModel => ({
      data: d,
      source: d.source,
      target: d.target,
      id: `${d.source}_${d.target}`,
      type: 'edge',
    }),
  );

  // create topology model
  const model: Model = {
    graph: {
      id: 'g1',
      type: 'graph',
      layout,
    },
    nodes: [...nodes, ...groupNodes],
    edges,
  };

  return model;
};

const getVisualization = (model: Model): Visualization => {
  const vis = new Visualization();

  vis.registerLayoutFactory(defaultLayoutFactory);
  vis.registerComponentFactory(defaultComponentFactory);

  // support pan zoom and drag
  vis.registerComponentFactory((kind, type) => {
    if (kind === ModelKind.graph) {
      return withPanZoom()(GraphComponent);
    }
    if (type === 'group-hull') {
      return withDragNode()(GroupHull);
    }
    if (type === 'group') {
      return withDragNode()(Group);
    }
    if (kind === ModelKind.node) {
      return withDragNode()(Node);
    }
    return undefined;
  });
  vis.fromModel(model);

  return vis;
};

export const Force = () => {
  const vis: Visualization = getVisualization(getModel('Force'));
  return <VisualizationSurface visualization={vis} />;
};

export const Dagre = () => {
  const vis: Visualization = getVisualization(getModel('Dagre'));
  return <VisualizationSurface visualization={vis} />;
};

export const Cola = () => {
  const vis: Visualization = getVisualization(getModel('Cola'));
  return <VisualizationSurface visualization={vis} />;
};
