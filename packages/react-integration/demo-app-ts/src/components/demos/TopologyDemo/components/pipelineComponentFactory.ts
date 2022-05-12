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
  FinallyNode
} from '@patternfly/react-topology';
import DemoTaskNode from './DemoTaskNode';

const shapesComponentFactory: ComponentFactory = (
  kind: ModelKind,
  type: string
): ComponentType<{ element: GraphElement }> | undefined => {
  switch (type) {
    case DEFAULT_TASK_NODE_TYPE:
      return DemoTaskNode;
    case DEFAULT_FINALLY_NODE_TYPE:
      return FinallyNode;
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

export default shapesComponentFactory;
