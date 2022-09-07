import React from 'react';
import {
  Model,
  ModelKind,
  withPanZoom,
  GraphComponent,
  useComponentFactory,
  useModel,
  ComponentFactory,
  useLayoutFactory,
  Graph,
  Layout,
  PipelineDagreLayout,
  PipelineNodeModel,
  getSpacerNodes,
  getEdgesFromNodes
} from '@patternfly/react-topology';
import '@patternfly/react-styles/css/components/Topology/topology-components.css';
import withTopologySetup from './utils/withTopologySetup';
import pipelineComponentFactory from './components/pipelineComponentFactory';
import { createFinallyTasks, createParallelTasks, createStatusTasks, setWhenStatus } from './utils/pipelineUtils';

export const LAYOUT_TITLE = 'Layout';

const getModel = (layout: string): Model => {
  const tasks: PipelineNodeModel[] = createStatusTasks('task', 4, undefined, false, true, true, true);

  const whenTasks = tasks.reduce((acc, task, index) => {
    if (index % (Math.floor(tasks.length / 3) + 1) !== 0) {
      acc.push(task);
    }
    return acc;
  }, []);
  setWhenStatus(whenTasks);

  for (let i = 0; i < tasks.length; i++) {
    tasks[i + 1].runAfterTasks.push(tasks[i].id);
    i++;
    if (i + 1 < tasks.length) {
      tasks[i + 1].runAfterTasks.push(tasks[i].id);
    }
    i++;
    if (i + 1 < tasks.length) {
      tasks[i + 1].runAfterTasks.push(tasks[i].id);
    }
    i++;
  }

  const parallelTasks = createParallelTasks('parallelTasks', tasks[9].id, 3, 2, true, true);
  tasks.push(...parallelTasks);

  const finallyNodes = createFinallyTasks('finally', 2, tasks, true);
  const finallyGroup = {
    id: 'finally-group',
    type: 'finally-group',
    children: finallyNodes.map(n => n.id),
    group: true,
    style: { padding: [35, 17] }
  };

  const spacerNodes = getSpacerNodes([...tasks, ...finallyNodes]);
  const edges = getEdgesFromNodes([...tasks, ...finallyNodes, ...spacerNodes]);

  return {
    graph: {
      id: 'g1',
      type: 'graph',
      x: 25,
      y: 25,
      layout
    },
    nodes: [...tasks, ...finallyNodes, ...spacerNodes, finallyGroup],
    edges
  };
};

export const PipelineLayout = withTopologySetup(() => {
  useLayoutFactory((type: string, graph: Graph): Layout | undefined => new PipelineDagreLayout(graph, { nodesep: 95 }));
  useComponentFactory(pipelineComponentFactory);
  // support pan zoom and drag
  useComponentFactory(
    React.useCallback<ComponentFactory>(kind => {
      if (kind === ModelKind.graph) {
        return withPanZoom()(GraphComponent);
      }
      return undefined;
    }, [])
  );

  useModel(getModel('PipelineDagreLayout'));
  return null;
});
