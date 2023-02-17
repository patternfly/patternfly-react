import React from 'react';
import {
  TopologyView,
  Visualization,
  VisualizationProvider,
  VisualizationSurface,
  useVisualizationController,
  DefaultTaskGroup,
  DEFAULT_EDGE_TYPE,
  DEFAULT_SPACER_NODE_TYPE,
  GraphComponent,
  ModelKind,
  SpacerNode,
  TaskEdge,
  FinallyNode,
  Edge,
  DEFAULT_FINALLY_NODE_TYPE,
  DEFAULT_TASK_NODE_TYPE,
  DEFAULT_WHEN_SIZE,
  PipelineNodeModel,
  RunStatus,
  WhenStatus,
  DEFAULT_LAYER,
  DEFAULT_WHEN_OFFSET,
  Layer,
  Node,
  ScaleDetailsLevel,
  TaskNode,
  TOP_LAYER,
  useDetailsLevel,
  useHover,
  WhenDecorator,
  WithContextMenuProps,
  WithSelectionProps
} from '@patternfly/react-topology';
import '@patternfly/react-styles/css/components/Topology/topology-components.css';
import '@patternfly/react-styles/css/components/Topology/topology-components.css';

type DemoTaskNodeProps = {
  element: Node;
} & WithContextMenuProps &
  WithSelectionProps;

const DemoTaskNode: React.FunctionComponent<DemoTaskNodeProps> = ({ element, ...rest }) => {
  const data = element.getData();
  const [hover, hoverRef] = useHover();
  const detailsLevel = useDetailsLevel();

  const passedData = React.useMemo(() => {
    const newData = { ...data };
    Object.keys(newData).forEach(key => {
      if (newData[key] === undefined) {
        delete newData[key];
      }
    });
    return newData;
  }, [data]);

  const whenDecorator = data.whenStatus ? (
    <WhenDecorator element={element} status={data.whenStatus} leftOffset={DEFAULT_WHEN_OFFSET} />
  ) : null;

  return (
    <Layer id={detailsLevel !== ScaleDetailsLevel.high && hover ? TOP_LAYER : DEFAULT_LAYER}>
      <TaskNode ref={hoverRef} element={element} {...passedData} {...rest}>
        {whenDecorator}
      </TaskNode>
    </Layer>
  );
};

type DemoFinallyNodeProps = {
  element: Node;
} & WithContextMenuProps &
  WithSelectionProps;

const DemoFinallyNode: React.FunctionComponent<DemoFinallyNodeProps> = ({ ...props }) => {
  const [hover, hoverRef] = useHover();
  const detailsLevel = useDetailsLevel();

  return (
    <Layer id={detailsLevel !== ScaleDetailsLevel.high && hover ? TOP_LAYER : DEFAULT_LAYER}>
      <g ref={hoverRef as React.LegacyRef<SVGGElement>}>
        <FinallyNode scaleNode={hover && detailsLevel !== ScaleDetailsLevel.high} hideDetailsAtMedium {...props} />
      </g>
    </Layer>
  );
};

export const GROUPED_PIPELINE_NODE_SEPARATION_HORIZONTAL = 200;

interface DemoTaskEdgeProps {
  element: Edge;
}

export const GROUPED_EDGE_TYPE = 'GROUPED_EDGE';

const DemoTaskGroupEdge: React.FunctionComponent<DemoTaskEdgeProps> = props => (
  <TaskEdge nodeSeparation={GROUPED_PIPELINE_NODE_SEPARATION_HORIZONTAL} {...props} />
);

export const NODE_PADDING_VERTICAL = 45;
export const NODE_PADDING_HORIZONTAL = 15;

export const ROW_HEIGHT = 100;
export const COLUMN_WIDTH = 250;

export const DEFAULT_TASK_WIDTH = 180;
export const FINALLY_TASK_WIDTH = DEFAULT_TASK_WIDTH - DEFAULT_WHEN_OFFSET - DEFAULT_WHEN_SIZE;
export const DEFAULT_TASK_HEIGHT = 32;

export const TASK_STATUSES = [
  undefined,
  RunStatus.Succeeded,
  RunStatus.Failed,
  RunStatus.Running,
  RunStatus.InProgress,
  RunStatus.FailedToStart,
  RunStatus.Skipped,
  RunStatus.Cancelled,
  RunStatus.Pending,
  RunStatus.Idle
];

const STATUS_PER_ROW = 2;
const GRAPH_MARGIN_TOP = 40;
const FINALLY_TASKS_COUNT = 2;

export const useDemoPipelineNodes = (): PipelineNodeModel[] =>
  React.useMemo(() => {
    // Create a task node for each task status
    const tasks = TASK_STATUSES.map((status, index) => {
      // Set all the standard fields
      const task: PipelineNodeModel = {
        id: `task-${status}`,
        type: DEFAULT_TASK_NODE_TYPE,
        label: `${status || 'No status'} Task`,
        width: DEFAULT_TASK_WIDTH,
        height: DEFAULT_TASK_HEIGHT,
        style: {
          padding: [NODE_PADDING_VERTICAL, NODE_PADDING_HORIZONTAL]
        },
        runAfterTasks: []
      };

      // put options in data, our DEMO task node will pass them along to the TaskNode
      task.data = {
        status,
        columnGroup: index % STATUS_PER_ROW
      };

      // If not using a layout, manually place the node by setting the x,y location
      const row = Math.ceil((index + 1) / STATUS_PER_ROW) - 1;
      const column = index % STATUS_PER_ROW;
      const columnWidth = COLUMN_WIDTH;
      task.x = column * columnWidth;
      task.y = GRAPH_MARGIN_TOP + row * ROW_HEIGHT;

      return task;
    });

    // Add when tasks to the nodes that are not first in the row
    const whenTasks = tasks.filter(
      (_task, index) => index % (Math.floor(tasks.length / (STATUS_PER_ROW - 1)) + 1) !== 0
    );
    whenTasks.forEach((task, index) => {
      task.data.whenStatus = index % 2 === 0 ? WhenStatus.Met : WhenStatus.Unmet;
      task.data.whenOffset = DEFAULT_WHEN_OFFSET;
      task.data.whenSize = DEFAULT_WHEN_SIZE;
    });

    // Connect the tasks in each row by setting the `runAfterTasks` value for each task
    for (let i = 0; i < tasks.length; i++) {
      tasks[i + 1].runAfterTasks?.push(tasks[i].id);
      i++;
      if (i + 1 < tasks.length) {
        tasks[i + 1].runAfterTasks?.push(tasks[i].id);
      }
      i++;
      if (i + 1 < tasks.length) {
        tasks[i + 1].runAfterTasks?.push(tasks[i].id);
      }
      i++;
    }

    const finallyNodes: PipelineNodeModel[] = [];
    for (let i = 0; i < FINALLY_TASKS_COUNT; i++) {
      const finallyNode: PipelineNodeModel = {
        id: `finally-${i}`,
        type: DEFAULT_FINALLY_NODE_TYPE,
        label: `Finally task ${i}`,
        width: FINALLY_TASK_WIDTH,
        height: DEFAULT_TASK_HEIGHT,
        style: { paddingLeft: DEFAULT_WHEN_SIZE + DEFAULT_WHEN_OFFSET }
      };

      const columnWidth = COLUMN_WIDTH;
      finallyNode.x = STATUS_PER_ROW * columnWidth;
      finallyNode.y = GRAPH_MARGIN_TOP + ((3 - FINALLY_TASKS_COUNT) * ROW_HEIGHT) / 2 + ROW_HEIGHT * i;

      finallyNodes.push(finallyNode);
    }

    const finallyGroup = {
      id: 'finally-group',
      type: 'finally-group',
      children: finallyNodes.map(n => n.id),
      group: true
    };

    return [...tasks, ...finallyNodes, finallyGroup];
  }, []);

export const TASKS_TITLE = 'Tasks';

const pipelineComponentFactory = (kind: ModelKind, type: string) => {
  if (kind === ModelKind.graph) {
    return GraphComponent;
  }
  switch (type) {
    case DEFAULT_TASK_NODE_TYPE:
      return DemoTaskNode;
    case DEFAULT_FINALLY_NODE_TYPE:
      return DemoFinallyNode;
    case 'task-group':
      return DefaultTaskGroup;
    case 'finally-group':
      return DefaultTaskGroup;
    case DEFAULT_SPACER_NODE_TYPE:
      return SpacerNode;
    case 'finally-spacer-edge':
    case DEFAULT_EDGE_TYPE:
      return TaskEdge;
    case GROUPED_EDGE_TYPE:
      return DemoTaskGroupEdge;
    default:
      return undefined;
  }
};

export const PipelineTasks: React.FC = () => {
  const controller = useVisualizationController();
  const pipelineNodes = useDemoPipelineNodes();

  React.useEffect(() => {
    controller.fromModel(
      {
        graph: {
          id: 'g1',
          type: 'graph',
          x: 25,
          y: 25
        },
        nodes: pipelineNodes
      },
      false
    );
  }, [controller, pipelineNodes]);

  return (
    <TopologyView>
      <VisualizationSurface />
    </TopologyView>
  );
};

PipelineTasks.displayName = 'PipelineTasks';

export const TopologyPipelineTasks = React.memo(() => {
  const controller = new Visualization();
  controller.registerComponentFactory(pipelineComponentFactory as any);
  return (
    <VisualizationProvider controller={controller}>
      <PipelineTasks />
    </VisualizationProvider>
  );
});
