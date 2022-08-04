import {
  DEFAULT_FINALLY_NODE_TYPE,
  DEFAULT_TASK_NODE_TYPE,
  PipelineNodeModel,
  RunStatus,
  WhenStatus,
  DEFAULT_WHEN_OFFSET,
  DEFAULT_WHEN_SIZE
} from '@patternfly/react-topology';
import { logos } from './logos';

export const ROW_HEIGHT = 80;
export const COLUMN_WIDTH = 250;

export const DEFAULT_TASK_WIDTH = 170;
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

export const createTask = (options: {
  id: string;
  label?: string;
  status?: RunStatus;
  selected?: boolean;
  row?: number;
  column?: number;
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  marginX?: number;
  marginY?: number;
  noLocation?: boolean;
  showContextMenu?: boolean;
  showBadge?: boolean;
  showIcon?: boolean;
}): PipelineNodeModel => {
  const width = options.width || DEFAULT_TASK_WIDTH;
  const height = options.height || DEFAULT_TASK_HEIGHT;
  const columnWidth = COLUMN_WIDTH + (options.showIcon ? 28 : 0);
  const x =
    options.x !== undefined
      ? options.x
      : (options.marginX ?? +(options.showIcon ? 28 : 0)) + (options.column ?? 0) * columnWidth;
  const y = options.y !== undefined ? options.y : (options.marginY ?? 40) + (options.row ?? 0) * ROW_HEIGHT;
  const taskIconOptions = {
    taskIconClass: options.showIcon ? logos.get('icon-java') : undefined,
    taskIconTooltip: options.showIcon ? 'Environment' : undefined
  };
  return {
    id: options.id,
    type: DEFAULT_TASK_NODE_TYPE,
    label: options.label,
    width,
    height,
    style: { paddingLeft: DEFAULT_WHEN_SIZE + DEFAULT_WHEN_OFFSET },
    x: options.noLocation ? undefined : x,
    y: options.noLocation ? undefined : y,
    runAfterTasks: [],
    data: {
      status,
      badge: options.showBadge ? '3/4' : undefined,
      ...taskIconOptions,
      ...options
    }
  };
};

export const createStatusTasks = (
  baseId: string,
  statusPerRow = 1,
  label: string = '',
  selected?: boolean,
  noLocation?: boolean,
  showContextMenu?: boolean,
  showBadge?: boolean,
  showIcon?: boolean
): PipelineNodeModel[] =>
  TASK_STATUSES.map((status, index) =>
    createTask({
      id: `${baseId}-${status}`,
      status,
      label: `${label ? `${label} ` : ''}${status || 'No status'} Task`,
      row: Math.ceil((index + 1) / statusPerRow) - 1,
      column: index % statusPerRow,
      selected,
      noLocation,
      showContextMenu,
      showBadge,
      showIcon,
      width: DEFAULT_TASK_WIDTH + (showContextMenu ? 10 : 0) + (showBadge ? 40 : 0)
    })
  );

export const setWhenStatus = (tasks: PipelineNodeModel[]): void => {
  tasks.forEach((task, index) => {
    task.data.whenStatus = index % 2 === 0 ? WhenStatus.Met : WhenStatus.Unmet;
  });
};

export const createFinallyTask = (options: {
  id: string;
  label?: string;
  status?: RunStatus;
  selected?: boolean;
  width?: number;
  height?: number;
  x: number;
  y: number;
  noLocation?: boolean;
}): PipelineNodeModel => {
  const width = options.width || FINALLY_TASK_WIDTH;
  const height = options.height || DEFAULT_TASK_HEIGHT;
  const x = options.x;
  const y = options.y;
  return {
    id: options.id,
    type: DEFAULT_FINALLY_NODE_TYPE,
    label: options.label,
    width,
    height,
    style: { paddingLeft: DEFAULT_WHEN_SIZE + DEFAULT_WHEN_OFFSET },
    x: options.noLocation ? undefined : x,
    y: options.noLocation ? undefined : y,
    data: {
      ...options
    }
  };
};

export const createFinallyTasks = (
  baseId: string,
  count = 2,
  tasks: PipelineNodeModel[],
  noLocation?: boolean
): PipelineNodeModel[] => {
  const maxX = noLocation ? 0 : Math.max(...tasks.map(t => t.x));
  const maxY = noLocation ? 0 : Math.max(...tasks.map(t => t.y)) + DEFAULT_TASK_HEIGHT;
  const x = maxX + COLUMN_WIDTH;
  const startY = maxY / 2 - (ROW_HEIGHT * (count - 1)) / 2;

  const nodes = [];
  for (let i = 0; i < count; i++) {
    const node = createFinallyTask({
      id: `finally-${baseId}-${i}`,
      label: `Finally ${baseId}`,
      noLocation,
      x: noLocation ? undefined : x,
      y: noLocation ? undefined : startY + ROW_HEIGHT * i
    });
    nodes.push(node);
  }
  return nodes;
};

export const createParallelTasks = (
  baseId: string,
  runAfterId: string,
  taskCount = 3,
  taskDepth = 2,
  showContextMenu?: boolean,
  showBadge?: boolean
): PipelineNodeModel[] => {
  const nodes: PipelineNodeModel[] = [];

  for (let i = 0; i < taskCount; i++) {
    nodes.push(
      createTask({
        id: `${baseId}-task-${i}`,
        status: RunStatus.Pending,
        label: `${baseId} Sub-Task ${i}`,
        noLocation: true,
        width: DEFAULT_TASK_WIDTH + (showContextMenu ? 10 : 0) + (showBadge ? 40 : 0)
      })
    );
  }
  let usedNodes = 0;
  while (usedNodes < nodes.length) {
    for (let depth = 0; depth < taskDepth; depth++) {
      if (usedNodes < nodes.length) {
        if (depth === 0) {
          nodes[usedNodes].runAfterTasks = [runAfterId];
        } else {
          nodes[usedNodes].runAfterTasks = [nodes[usedNodes - 1].id];
        }
      }
      usedNodes++;
    }
  }
  return nodes;
};
