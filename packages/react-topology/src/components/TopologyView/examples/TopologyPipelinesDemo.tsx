import React from 'react';
import {
  Graph,
  Layout,
  PipelineDagreLayout,
  Visualization,
  VisualizationProvider,
  useEventListener,
  SelectionEventListener,
  SELECTION_EVENT,
  TopologyView,
  VisualizationSurface,
  useVisualizationController,
  NODE_SEPARATION_HORIZONTAL,
  GRAPH_LAYOUT_END_EVENT,
  getSpacerNodes,
  getEdgesFromNodes,
  DEFAULT_EDGE_TYPE,
  DEFAULT_SPACER_NODE_TYPE,
  DEFAULT_FINALLY_NODE_TYPE,
  DEFAULT_TASK_NODE_TYPE,
  DEFAULT_WHEN_OFFSET,
  DEFAULT_WHEN_SIZE,
  PipelineNodeModel,
  WhenStatus,
  RunStatus
  //   DefaultTaskGroup,
  //   GraphComponent,
  //   GraphElement,
  //   ModelKind,
  //   SpacerNode,
  //   TaskEdge,
  //   withContextMenu,
  //   withPanZoom,
  //   withSelection
} from '@patternfly/react-topology';
import '@patternfly/react-styles/css/components/Topology/topology-components.css';
import { ToolbarItem, Checkbox } from '@patternfly/react-core';

export const PIPELINE_NODE_SEPARATION_VERTICAL = 65;

export const LAYOUT_TITLE = 'Layout';

const PIPELINE_LAYOUT = 'PipelineLayout';
const GROUPED_PIPELINE_LAYOUT = 'GroupedPipelineLayout';

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

const STATUS_PER_ROW = 4;
const GRAPH_MARGIN_TOP = 40;
const PARALLEL_TASKS_COUNT = 3;
const PARALLEL_TASK_DEPTH = 2;
const FINALLY_TASKS_COUNT = 2;

export const usePipelineOptions = (
  allowGroups = false
): {
  contextToolbar: React.ReactNode;
  showContextMenu: boolean;
  showBadges: boolean;
  showIcons: boolean;
  showGroups: boolean;
  badgeTooltips: boolean;
} => {
  const [showContextMenu, setShowContextMenu] = React.useState<boolean>(false);
  const [showBadges, setShowBadges] = React.useState<boolean>(false);
  const [showIcons, setShowIcons] = React.useState<boolean>(false);
  const [showGroups, setShowGroups] = React.useState<boolean>(false);
  const [badgeTooltips, setBadgeTooltips] = React.useState<boolean>(false);

  const contextToolbar = (
    <>
      <ToolbarItem>
        <Checkbox id="icons-switch" isChecked={showIcons} onChange={setShowIcons} label="Show icons" />
      </ToolbarItem>
      <ToolbarItem>
        <Checkbox id="badges-switch" isChecked={showBadges} onChange={setShowBadges} label="Show badges" />
      </ToolbarItem>
      <ToolbarItem>
        <Checkbox id="tooltips-switch" isChecked={badgeTooltips} onChange={setBadgeTooltips} label="Badge tooltips" />
      </ToolbarItem>
      <ToolbarItem>
        <Checkbox id="menus-switch" isChecked={showContextMenu} onChange={setShowContextMenu} label="Context menus" />
      </ToolbarItem>
      {allowGroups ? (
        <ToolbarItem>
          <Checkbox id="groups-switch" isChecked={showGroups} onChange={setShowGroups} label="Show groups" />
        </ToolbarItem>
      ) : null}
    </>
  );

  return { contextToolbar, showContextMenu, showBadges, showIcons, showGroups, badgeTooltips };
};

export const useDemoPipelineNodes = (
  showContextMenu: boolean,
  showBadges: boolean,
  showIcons: boolean,
  badgeTooltips: boolean,
  layout?: string,
  showGroups = false
): PipelineNodeModel[] =>
  React.useMemo(() => {
    // Create a task node for each task status
    const tasks = TASK_STATUSES.map((status, index) => {
      // Set all the standard fields
      const task: PipelineNodeModel = {
        id: `task-${status}`,
        type: DEFAULT_TASK_NODE_TYPE,
        label: `${status || 'No status'} Task`,
        width: DEFAULT_TASK_WIDTH + (showContextMenu ? 10 : 0) + (showBadges ? 40 : 0),
        height: DEFAULT_TASK_HEIGHT,
        style: {
          padding: [NODE_PADDING_VERTICAL, NODE_PADDING_HORIZONTAL + (showIcons ? 25 : 0)]
        },
        runAfterTasks: []
      };

      // put options in data, our DEMO task node will pass them along to the TaskNode
      task.data = {
        status,
        showContextMenu,
        columnGroup: index % STATUS_PER_ROW
      };

      // If not using a layout, manually place the node by setting the x,y location
      if (!layout) {
        const row = Math.ceil((index + 1) / STATUS_PER_ROW) - 1;
        const column = index % STATUS_PER_ROW;
        const columnWidth = COLUMN_WIDTH + (showIcons ? 15 : 0) + (showBadges ? 32 : 0) + (showContextMenu ? 20 : 0);
        task.x = (showIcons ? 28 : 0) + column * columnWidth;
        task.y = GRAPH_MARGIN_TOP + row * ROW_HEIGHT;
      }

      return task;
    });

    // Add when tasks to the nodes that are not first in the row
    const whenTasks = tasks.filter(
      (task, index) => index % (Math.floor(tasks.length / (STATUS_PER_ROW - 1)) + 1) !== 0
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

    if (layout) {
      const parallelTasks: PipelineNodeModel[] = [];

      for (let i = 0; i < PARALLEL_TASKS_COUNT; i++) {
        const parallelTask: PipelineNodeModel = {
          id: `parallelTasks-${i}`,
          type: DEFAULT_TASK_NODE_TYPE,
          label: `Parallel Sub-Task ${i}`,
          width: DEFAULT_TASK_WIDTH + (showContextMenu ? 10 : 0) + (showBadges ? 40 : 0),
          height: DEFAULT_TASK_HEIGHT,
          style: {
            padding: [NODE_PADDING_VERTICAL, NODE_PADDING_HORIZONTAL + (showIcons ? 25 : 0)]
          },
          runAfterTasks: []
        };

        // put options in data, our DEMO task node will pass them along to the TaskNode
        parallelTask.data = {
          status,
          showContextMenu
        };
        parallelTasks.push(parallelTask);
      }

      let usedNodes = 0;
      while (usedNodes < parallelTasks.length) {
        for (let depth = 0; depth < PARALLEL_TASK_DEPTH; depth++) {
          if (usedNodes < parallelTasks.length) {
            if (depth === 0) {
              parallelTasks[usedNodes].runAfterTasks = [tasks[9].id];
            } else {
              parallelTasks[usedNodes].runAfterTasks = [parallelTasks[usedNodes - 1].id];
            }
          }
          usedNodes++;
        }
      }
      tasks.push(...parallelTasks);

      if (showGroups) {
        tasks.push({
          id: `group-parallels`,
          type: 'task-group',
          children: parallelTasks.map(t => t.id),
          group: true,
          label: 'Parallel tasks'
        });
      }
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

      if (!layout) {
        const columnWidth = COLUMN_WIDTH + (showIcons ? 15 : 0) + (showBadges ? 32 : 0) + (showContextMenu ? 20 : 0);
        finallyNode.x = STATUS_PER_ROW * columnWidth;
        finallyNode.y = GRAPH_MARGIN_TOP + ((3 - FINALLY_TASKS_COUNT) * ROW_HEIGHT) / 2 + ROW_HEIGHT * i;
      }
      finallyNodes.push(finallyNode);
    }

    const finallyGroup = {
      id: 'finally-group',
      type: 'finally-group',
      children: finallyNodes.map(n => n.id),
      group: true
    };

    if (showGroups) {
      const taskGroups = tasks.reduce((acc: PipelineNodeModel[], task) => {
        if (task.data?.columnGroup !== undefined) {
          let taskGroup = acc.find((group: PipelineNodeModel) => group.id === `group-${task.data.columnGroup}`);
          if (!taskGroup) {
            taskGroup = {
              id: `group-${task.data.columnGroup}`,
              type: 'task-group',
              children: [],
              group: true,
              label: `Group ${task.data.columnGroup}`
            };
            acc.push(taskGroup);
          }
          taskGroup.children?.push(task.id);
        }
        return acc;
      }, [] as PipelineNodeModel[]);

      tasks.push(...taskGroups);
    }

    return [...tasks, ...finallyNodes, finallyGroup];
  }, [badgeTooltips, layout, showBadges, showContextMenu, showGroups, showIcons]);

const TopologyPipelinesDemo: React.FC = () => {
  const [selectedIds, setSelectedIds] = React.useState<string[]>();

  const controller = useVisualizationController();
  const { contextToolbar, showContextMenu, showBadges, showIcons, showGroups, badgeTooltips } = usePipelineOptions(
    true
  );
  const pipelineNodes = useDemoPipelineNodes(
    showContextMenu,
    showBadges,
    showIcons,
    badgeTooltips,
    'PipelineDagreLayout',
    showGroups
  );

  React.useEffect(() => {
    const spacerNodes = getSpacerNodes(pipelineNodes);
    const nodes = [...pipelineNodes, ...spacerNodes];
    const edgeType = DEFAULT_EDGE_TYPE;
    const edges = getEdgesFromNodes(
      nodes.filter(n => !n.group),
      DEFAULT_SPACER_NODE_TYPE,
      edgeType,
      edgeType,
      [DEFAULT_FINALLY_NODE_TYPE],
      edgeType
    );

    controller.fromModel(
      {
        graph: {
          id: 'g1',
          type: 'graph',
          x: 25,
          y: 25,
          layout: showGroups ? GROUPED_PIPELINE_LAYOUT : PIPELINE_LAYOUT
        },
        nodes,
        edges
      },
      true
    );
    controller.getGraph().layout();
  }, [controller, pipelineNodes, showGroups]);

  useEventListener<SelectionEventListener>(SELECTION_EVENT, ids => {
    setSelectedIds(ids);
  });

  return (
    <TopologyView contextToolbar={contextToolbar}>
      <VisualizationSurface state={{ selectedIds }} />
    </TopologyView>
  );
};

TopologyPipelinesDemo.displayName = 'TopologyPipelinesDemo';

// const pipelineComponentFactory = (kind: ModelKind, type: string) => {
//   if (kind === ModelKind.graph) {
//     return withPanZoom()(GraphComponent);
//   }
//   switch (type) {
//     case DEFAULT_TASK_NODE_TYPE:
//       return withSelection()(DemoTaskNode);
//     case DEFAULT_FINALLY_NODE_TYPE:
//       return withSelection()(DemoFinallyNode);
//     case 'task-group':
//       return DefaultTaskGroup;
//     case 'finally-group':
//       return DefaultTaskGroup;
//     case DEFAULT_SPACER_NODE_TYPE:
//       return SpacerNode;
//     case 'finally-spacer-edge':
//     case DEFAULT_EDGE_TYPE:
//       return TaskEdge;
//     case GROUPED_EDGE_TYPE:
//       return DemoTaskGroupEdge;
//     default:
//       return undefined;
//   }
// };

export const PipelineLayout = React.memo(() => {
  const controller = new Visualization();
  controller.setFitToScreenOnLayout(true);
  //   controller.registerComponentFactory(pipelineComponentFactory);
  controller.registerLayoutFactory(
    (type: string, graph: Graph): Layout | undefined =>
      new PipelineDagreLayout(graph, {
        nodesep: PIPELINE_NODE_SEPARATION_VERTICAL,
        ranksep: NODE_SEPARATION_HORIZONTAL,
        ignoreGroups: true
      })
  );
  controller.fromModel(
    {
      graph: {
        id: 'g1',
        type: 'graph',
        x: 25,
        y: 25,
        layout: PIPELINE_LAYOUT
      }
    },
    false
  );
  controller.addEventListener(GRAPH_LAYOUT_END_EVENT, () => {
    controller.getGraph().fit(75);
  });

  return (
    <VisualizationProvider controller={controller}>
      <TopologyPipelinesDemo />
    </VisualizationProvider>
  );
});
