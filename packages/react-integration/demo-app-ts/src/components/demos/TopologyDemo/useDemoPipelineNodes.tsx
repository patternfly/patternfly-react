import * as React from 'react';
import {
  DEFAULT_FINALLY_NODE_TYPE,
  DEFAULT_TASK_NODE_TYPE,
  DEFAULT_WHEN_OFFSET,
  DEFAULT_WHEN_SIZE,
  PipelineNodeModel,
  RunStatus,
  WhenStatus
} from '@patternfly/react-topology';
import '@patternfly/react-styles/css/components/Topology/topology-components.css';
import { logos } from './utils/logos';

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
        badge: showBadges ? '3/4' : undefined,
        badgeTooltips,
        taskIconClass: showIcons ? logos.get('icon-java') : undefined,
        taskIconTooltip: showIcons ? 'Environment' : undefined,
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

    const finallyNodes = [];
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
          taskGroup.children.push(task.id);
        }
        return acc;
      }, [] as PipelineNodeModel[]);

      tasks.push(...taskGroups);
    }

    return [...tasks, ...finallyNodes, finallyGroup];
  }, [badgeTooltips, layout, showBadges, showContextMenu, showGroups, showIcons]);
