import React from 'react';
import {
  ModelKind,
  withPanZoom,
  GraphComponent,
  useComponentFactory,
  useModel,
  ComponentFactory
} from '@patternfly/react-topology';
import '@patternfly/react-styles/css/components/Topology/topology-components.css';
import withTopologySetup from './utils/withTopologySetup';
import pipelineComponentFactory from './components/pipelineComponentFactory';
import { createFinallyTasks, createStatusTasks, setWhenStatus } from './utils/pipelineUtils';

export const TASKS_TITLE = 'Tasks';

export const PipelineTasks = withTopologySetup(() => {
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
  const tasks = createStatusTasks('task', 4, undefined, false);
  setWhenStatus(tasks);
  const finallyNodes = createFinallyTasks('finally', 2, tasks);
  const finallyGroup = {
    id: 'finally-group',
    type: 'finally-group',
    children: finallyNodes.map(n => n.id),
    group: true,
    style: { padding: 17 }
  };

  useModel({
    graph: {
      id: 'g1',
      type: 'graph',
      x: 25,
      y: 25
    },
    nodes: [...tasks, ...finallyNodes, finallyGroup]
  });
  return null;
});
