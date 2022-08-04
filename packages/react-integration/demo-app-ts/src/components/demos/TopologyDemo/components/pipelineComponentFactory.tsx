import { ComponentType } from 'react';
import {
  GraphElement,
  ComponentFactory,
  ModelKind,
  SpacerNode,
  DefaultTaskGroup,
  TaskEdge,
  DEFAULT_TASK_NODE_TYPE,
  DEFAULT_SPACER_NODE_TYPE,
  DEFAULT_EDGE_TYPE,
  DEFAULT_FINALLY_NODE_TYPE,
  FinallyNode,
  ContextMenuSeparator,
  ContextMenuItem,
  withContextMenu,
  withSelection,
  withPanZoom,
  GraphComponent
} from '@patternfly/react-topology';
import DemoTaskNode from './DemoTaskNode';
import * as React from 'react';

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
): ComponentType<{ element: GraphElement }> | undefined => {
  if (kind === ModelKind.graph) {
    return withPanZoom()(GraphComponent);
  }
  switch (type) {
    case DEFAULT_TASK_NODE_TYPE:
      return withContextMenu(() => defaultMenu)(withSelection()(DemoTaskNode));
    case DEFAULT_FINALLY_NODE_TYPE:
      return withContextMenu(() => defaultMenu)(withSelection()(FinallyNode));
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

export default pipelineComponentFactory;
