import * as React from 'react';
import { action } from '@storybook/addon-actions';
import {
  Visualization,
  VisualizationSurface,
  Model,
  ModelKind,
  NodeModel,
  withSelection,
  SELECTION_EVENT,
  SelectionEventListener,
} from '../src';
import defaultComponentFactory from './components/defaultComponentFactory';

export default {
  title: 'Selection',
};

const create2NodeModel = (): Model => ({
  graph: {
    id: 'g1',
    type: 'graph',
  },
  nodes: [
    {
      id: 'gr1',
      type: 'group',
      group: true,
      children: ['n1', 'n2'],
      style: {
        padding: 10,
      },
    },
    {
      id: 'n1',
      type: 'node',
      x: 30,
      y: 30,
      width: 20,
      height: 20,
    },
    {
      id: 'n2',
      type: 'node',
      x: 100,
      y: 30,
      width: 20,
      height: 20,
    },
  ],
});

export const uncontrolled: React.FC = () => {
  const vis = new Visualization();
  vis.registerComponentFactory((kind, type) => {
    const widget = defaultComponentFactory(kind, type);
    if (kind === ModelKind.node || kind === ModelKind.graph) {
      // TODO fix any type
      return withSelection(false, false)(widget as any);
    }
    return widget;
  });
  vis.fromModel(create2NodeModel());
  vis.addEventListener<SelectionEventListener>(SELECTION_EVENT, (id) => {
    action(`Selection event`)(id);
  });
  return <VisualizationSurface visualization={vis} />;
};

export const controlled = () => {
  const vis = new Visualization();
  vis.registerComponentFactory((kind, type) => {
    const widget = defaultComponentFactory(kind, type);
    if (kind === ModelKind.node || kind === ModelKind.graph) {
      // TODO fix any type
      return withSelection(false, false)(widget as any);
    }
    return widget;
  });
  vis.fromModel(create2NodeModel());
  const Component = () => {
    const [selectedIds, setSelectedIds] = React.useState<string[]>();
    React.useEffect(() => {
      vis.addEventListener<SelectionEventListener>(SELECTION_EVENT, (ids) => {
        action(`Selection event`)(ids);
        setSelectedIds(ids);
      });
    }, []);
    return <VisualizationSurface visualization={vis} state={{ selectedIds }} />;
  };
  return <Component />;
};

export const multiSelect: React.FC = () => {
  const vis = new Visualization();
  vis.registerComponentFactory((kind, type) => {
    const widget = defaultComponentFactory(kind, type);
    if (kind === ModelKind.node || kind === ModelKind.graph) {
      // TODO fix any type
      return withSelection(true, false)(widget as any);
    }
    return widget;
  });
  vis.fromModel(create2NodeModel());
  vis.addEventListener<SelectionEventListener>(SELECTION_EVENT, (id) => {
    action(`Selection event`)(id);
  });
  return <VisualizationSurface visualization={vis} />;
};

export const performance = () => {
  const vis = new Visualization();
  vis.registerComponentFactory((kind, type) => {
    const widget = defaultComponentFactory(kind, type);
    if (kind === ModelKind.node || kind === ModelKind.graph) {
      // TODO fix any type
      return withSelection(true, false)(widget as any);
    }
    return widget;
  });
  const model: Model = {
    graph: {
      id: 'g1',
      type: 'graph',
    },
    nodes: [],
  };
  for (let i = 1; i <= 100; i++) {
    for (let j = 1; j <= 100; j++) {
      const node: NodeModel = {
        id: `${i}-${j}`,
        type: 'node',
        x: j * 20,
        y: i * 20,
        width: 10,
        height: 10,
      };
      model.graph && model.graph.children && model.graph.children.push(node.id);
      model.nodes && model.nodes.push(node);
    }
  }
  vis.fromModel(model);
  return <VisualizationSurface visualization={vis} />;
};
