import * as React from 'react';
import {
  GraphElement,
  ComponentFactory,
  ModelKind,
  SpacerNode,
  DefaultTaskGroup,
  DEFAULT_TASK_NODE_TYPE,
  DEFAULT_SPACER_NODE_TYPE,
  DEFAULT_EDGE_TYPE,
  DEFAULT_FINALLY_NODE_TYPE,
  ContextMenuSeparator,
  ContextMenuItem,
  withContextMenu,
  withSelection,
  withPanZoom,
  GraphComponent,
  TaskEdge
} from '@patternfly/react-topology';
import DemoTaskNode from './DemoTaskNode';
import DemoFinallyNode from './DemoFinallyNode';
import DemoTaskGroupEdge from './DemoTaskGroupEdge';

export const GROUPED_EDGE_TYPE = 'GROUPED_EDGE';

const contextMenuItem = (label: string, i: number): React.ReactElement => {
  if (label === '-') {
    return <ContextMenuSeparator key={`separator:${i.toString()}`} />;
  }
  return (
    // eslint-disable-next-line no-alert
    <ContextMenuItem key={label} onClick={() => alert(`Selected: ${label}`)}>
      {label}
    </ContextMenuItem>
  );
};

const createContextMenuItems = (...labels: string[]): React.ReactElement[] => labels.map(contextMenuItem);

const defaultMenu = createContextMenuItems('First', 'Second', 'Third', '-', 'Fourth');

const pipelineComponentFactory: ComponentFactory = (
  kind: ModelKind,
  type: string
): React.ComponentType<{ element: GraphElement }> | undefined => {
  if (kind === ModelKind.graph) {
    return withPanZoom()(GraphComponent);
  }
  switch (type) {
    case DEFAULT_TASK_NODE_TYPE:
      return withContextMenu(() => defaultMenu)(withSelection()(DemoTaskNode));
    case DEFAULT_FINALLY_NODE_TYPE:
      return withContextMenu(() => defaultMenu)(withSelection()(DemoFinallyNode));
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

export default pipelineComponentFactory;
