import * as React from 'react';
import { reaction } from 'mobx';
import {
  Visualization,
  VisualizationSurface,
  Model,
  ModelKind,
  withPanZoom,
  GraphComponent,
} from '../src';
import defaultComponentFactory from './components/defaultComponentFactory';

export default {
  title: 'Pan Zoom',
};

const model: Model = {
  graph: {
    id: 'g1',
    type: 'graph',
  },
  nodes: [
    {
      id: 'gr1',
      type: 'group-hull',
      group: true,
      children: ['n1', 'n2'],
      style: {
        padding: 10,
      },
    },
    {
      id: 'n1',
      type: 'node',
      x: 200,
      y: 200,
      width: 50,
      height: 50,
    },
    {
      id: 'n2',
      type: 'node',
      x: 300,
      y: 300,
      width: 100,
      height: 100,
    },
  ],
};

export const panZoom: React.FC = () => {
  const vis = new Visualization();
  vis.registerComponentFactory(defaultComponentFactory);
  vis.registerComponentFactory((kind) => {
    if (kind === ModelKind.graph) {
      return withPanZoom()(GraphComponent);
    }
    return undefined;
  });
  vis.fromModel(model);
  reaction(
    () => ({
      x: vis.getGraph().getBounds().x,
      y: vis.getGraph().getBounds().y,
      k: vis.getGraph().getScale(),
    }),
    (transform) => {
      // logging to action panel is too laggy therefore log to console
      // eslint-disable-next-line no-console
      console.log(`Pan zoom event`, transform);
    },
  );
  return <VisualizationSurface visualization={vis} />;
};
