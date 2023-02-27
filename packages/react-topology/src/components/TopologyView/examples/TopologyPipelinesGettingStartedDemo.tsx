import * as React from 'react';
import {
  TopologyView,
  Visualization,
  VisualizationProvider,
  VisualizationSurface,
  useVisualizationController,
  DefaultTaskGroup,
  GraphComponent,
  ModelKind,
  TaskNode,
  SpacerNode,
  TaskEdge,
  FinallyNode,
  DEFAULT_FINALLY_NODE_TYPE,
  DEFAULT_TASK_NODE_TYPE,
  DEFAULT_EDGE_TYPE,
  DEFAULT_SPACER_NODE_TYPE,
  DEFAULT_WHEN_OFFSET,
  Node,
  WhenDecorator,
  RunStatus,
  Graph,
  Layout,
  Model,
  PipelineNodeModel,
  getEdgesFromNodes,
  getSpacerNodes,
  PipelineDagreLayout
} from '@patternfly/react-topology';
import './topology-example.css';

const TASK_NODES: PipelineNodeModel[] = [
  {
    id: 'task-undefined',
    type: 'DEFAULT_TASK_NODE',
    label: 'No status Task',
    width: 180,
    height: 32,
    style: {
      padding: [45, 15]
    }
  },
  {
    id: 'task-Succeeded',
    type: 'DEFAULT_TASK_NODE',
    label: 'Succeeded Task',
    width: 180,
    height: 32,
    style: {
      padding: [45, 15]
    },
    runAfterTasks: ['task-undefined'],
    data: {
      status: RunStatus.Succeeded
    }
  },
  {
    id: 'finally-0',
    type: 'DEFAULT_FINALLY_NODE',
    label: 'Finally task 0',
    width: 156,
    height: 32,
    style: {
      paddingLeft: 24
    }
  },
  {
    id: 'finally-1',
    type: 'DEFAULT_FINALLY_NODE',
    label: 'Finally task 1',
    width: 156,
    height: 32,
    style: {
      paddingLeft: 24
    }
  }
];
interface DemoTaskNodeProps {
  element: Node;
}

const DemoTaskNode: React.FunctionComponent<DemoTaskNodeProps> = ({ element }) => {
  const data = element.getData();

  const whenDecorator = data?.whenStatus ? (
    <WhenDecorator element={element} status={data.whenStatus} leftOffset={DEFAULT_WHEN_OFFSET} />
  ) : null;

  return (
    <TaskNode element={element} status={data?.status}>
      {whenDecorator}
    </TaskNode>
  );
};

const pipelineComponentFactory = (kind: ModelKind, type: string) => {
  if (kind === ModelKind.graph) {
    return GraphComponent;
  }
  switch (type) {
    case DEFAULT_TASK_NODE_TYPE:
      return DemoTaskNode;
    case DEFAULT_FINALLY_NODE_TYPE:
      return FinallyNode;
    case 'task-group':
      return DefaultTaskGroup;
    case 'finally-group':
      return DefaultTaskGroup;
    case DEFAULT_SPACER_NODE_TYPE:
      return SpacerNode;
    case 'finally-spacer-edge':
    case DEFAULT_EDGE_TYPE:
      return TaskEdge;
    default:
      return undefined;
  }
};

export const PipelineTasks: React.FC = () => {
  const controller = useVisualizationController();
  React.useEffect(() => {
    controller.fromModel(
      {
        graph: {
          id: 'g1',
          type: 'graph'
        },
        nodes: TASK_NODES
      },
      false
    );
  }, [controller]);

  return (
    <TopologyView>
      <VisualizationSurface />
    </TopologyView>
  );
};

PipelineTasks.displayName = 'PipelineTasks';

export const TopologyPipelinesGettingStartedDemo: React.FC = () => {
  const controller = new Visualization();
  controller.setFitToScreenOnLayout(true);
  controller.registerComponentFactory(pipelineComponentFactory);
  controller.registerLayoutFactory((type: string, graph: Graph): Layout | undefined => new PipelineDagreLayout(graph));
  const spacerNodes = getSpacerNodes(TASK_NODES);
  const nodes = [...TASK_NODES, ...spacerNodes];
  const edges = getEdgesFromNodes(nodes);

  const model: Model = {
    nodes,
    edges,
    graph: {
      id: 'g1',
      type: 'graph',
      layout: 'pipelineLayout'
    }
  };

  controller.fromModel(model, false);

  return (
    <VisualizationProvider controller={controller}>
      <VisualizationSurface />
    </VisualizationProvider>
  );
};
