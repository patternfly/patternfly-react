import { action } from 'mobx';
import { Edge, Graph, GraphElement, isEdge, Node } from '../../../types';
import {
  CREATE_CONNECTOR_DROP_TYPE,
  CREATE_CONNECTOR_OPERATION,
  DragObjectWithType,
  DragOperationWithType,
  DragSourceSpec,
  DragSpecOperationType,
  DropTargetMonitor,
  DropTargetSpec,
  Modifiers,
  TargetType
} from '../../../behavior';

const MOVE_CONNECTOR_DROP_TYPE = '#moveConnector#';

const NODE_DRAG_TYPE = '#node#';
const EDGE_DRAG_TYPE = '#edge#';

const MOVE_CONNECTOR_OPERATION = 'moveconnector';
const REGROUP_OPERATION = 'regroup';

export interface GraphComponentProps {
  element: Graph;
}

export interface NodeComponentProps {
  element: Node;
}

export interface EdgeComponentProps {
  element: Edge;
}

/**
 * type: the drag operation type
 * edit: true if the operation performs an edit, used to dim invalid drop targets
 * canDropOnNode: true if the drag object can be dropped on node, used to highlight valid drop nodes
 */
export type EditableDragOperationType = DragOperationWithType & {
  edit?: boolean;
  canDropOnNode?: (operationType: string, dragElement: GraphElement, node: Node) => boolean;
};

export interface DragNodeObject {
  element: GraphElement;
  allowRegroup: boolean;
}

const canDropEdgeOnNode = (operation: string, element: GraphElement, node: Node): boolean => {
  if (!isEdge(element)) {
    return false;
  }
  const edge = element as Edge;
  if (edge.getSource() === node) {
    return false;
  }

  if (edge.getTarget() === node) {
    return true;
  }

  return !node.getTargetEdges().find(e => e.getSource() === edge.getSource());
};

const highlightNode = (monitor: DropTargetMonitor, element: Node): boolean => {
  const operation = monitor.getOperation() as EditableDragOperationType;
  if (!monitor.isDragging() || !operation) {
    return false;
  }

  if (operation.type === CREATE_CONNECTOR_OPERATION) {
    return (
      monitor.getItem() !== element &&
      monitor.getItem().getParent() !== element &&
      !monitor
        .getItem()
        .getSourceEdges()
        .find((e: Edge) => e.getTarget() === element)
    );
  }

  return operation.canDropOnNode && operation.canDropOnNode(operation.type, monitor.getItem(), element);
};

const nodeDragSourceSpec = (
  type: string,
  allowRegroup: boolean = true,
  canEdit: boolean = false
): DragSourceSpec<
  DragObjectWithType,
  DragSpecOperationType<EditableDragOperationType>,
  Node,
  {
    dragging?: boolean;
    regrouping?: boolean;
  },
  NodeComponentProps & { canEdit?: boolean }
> => ({
  item: { type: NODE_DRAG_TYPE },
  operation: (monitor, props) =>
    (canEdit || props.canEdit) && allowRegroup
      ? {
          [Modifiers.SHIFT]: { type: REGROUP_OPERATION, edit: true }
        }
      : undefined,
  canCancel: monitor => monitor.getOperation()?.type === REGROUP_OPERATION,
  begin: (monitor, props): DragNodeObject => ({
    element: props.element,
    allowRegroup: (canEdit || props.canEdit) && allowRegroup
  }),
  end: async (dropResult, monitor, props) => {
    if (!monitor.isCancelled() && monitor.getOperation()?.type === REGROUP_OPERATION) {
      if (monitor.didDrop() && dropResult && props && props.element.getParent() !== dropResult) {
        const controller = props.element.getController();

        // perform the update in an action so as not to render too soon
        action(() => {
          if (controller.getNodeById(props.element.getId())) {
            dropResult.appendChild(props.element);
          }
        })();
      } else {
        // cancel operation
        return Promise.reject();
      }
    }
    return undefined;
  },
  collect: monitor => ({
    dragging: monitor.isDragging(),
    regrouping: monitor.getOperation()?.type === REGROUP_OPERATION
  })
});

const noRegroupDragSourceSpec: DragSourceSpec<
  DragObjectWithType,
  DragSpecOperationType<EditableDragOperationType>,
  Node,
  {
    dragging?: boolean;
  },
  NodeComponentProps
> = {
  item: { type: NODE_DRAG_TYPE },
  collect: monitor => ({
    dragging: monitor.isDragging()
  })
};

const nodesEdgeIsDragging = (monitor: any, props: NodeComponentProps) => {
  if (!monitor.isDragging()) {
    return false;
  }
  if (monitor.getOperation() === MOVE_CONNECTOR_OPERATION) {
    return monitor.getItem().getSource() === props.element;
  }
  if (monitor.getOperation() === CREATE_CONNECTOR_OPERATION) {
    return monitor.getItem() === props.element;
  }
  return false;
};

const nodeDropTargetSpec = (
  accept?: TargetType
): DropTargetSpec<
  GraphElement,
  any,
  { canDrop: boolean; dropTarget: boolean; edgeDragging: boolean },
  NodeComponentProps
> => ({
  accept: accept || [EDGE_DRAG_TYPE, CREATE_CONNECTOR_DROP_TYPE],
  canDrop: (item, monitor, props) => {
    if (isEdge(item)) {
      return canDropEdgeOnNode(monitor.getOperation()?.type, item as Edge, props.element);
    }
    if (item === props.element) {
      return false;
    }
    return !props.element.getTargetEdges().find(e => e.getSource() === item);
  },
  collect: (monitor, props) => ({
    canDrop: highlightNode(monitor, props.element),
    dropTarget: monitor.isOver({ shallow: true }),
    edgeDragging: nodesEdgeIsDragging(monitor, props)
  })
});

const graphDropTargetSpec = (
  accept?: TargetType
): DropTargetSpec<DragNodeObject, any, { dragEditInProgress: boolean }, GraphComponentProps> => ({
  accept: accept || [NODE_DRAG_TYPE, EDGE_DRAG_TYPE, CREATE_CONNECTOR_DROP_TYPE],
  hitTest: () => true,
  canDrop: (item, monitor, props) =>
    monitor.isOver({ shallow: monitor.getItemType() === CREATE_CONNECTOR_DROP_TYPE }) &&
    ((monitor.getOperation()?.type === REGROUP_OPERATION &&
      // FIXME: the hasParent check is necessary due to model updates during async actions
      item.element.hasParent() &&
      item.element.getParent() !== props.element) ||
      monitor.getItemType() === CREATE_CONNECTOR_DROP_TYPE),
  collect: monitor => {
    const operation = monitor.getOperation() as EditableDragOperationType;
    const dragEditInProgress =
      monitor.isDragging() && (operation?.type === CREATE_CONNECTOR_OPERATION || operation?.edit);
    const dragCreate =
      dragEditInProgress &&
      (monitor.getItemType() === CREATE_CONNECTOR_DROP_TYPE || monitor.getItemType() === MOVE_CONNECTOR_DROP_TYPE);
    return {
      dragEditInProgress,
      dragCreate,
      hasDropTarget: dragEditInProgress && monitor.hasDropTarget()
    };
  },
  dropHint: 'create'
});

const groupDropTargetSpec: DropTargetSpec<
  any,
  any,
  { droppable: boolean; dropTarget: boolean; canDrop: boolean },
  any
> = {
  accept: [NODE_DRAG_TYPE, EDGE_DRAG_TYPE, CREATE_CONNECTOR_DROP_TYPE],
  canDrop: (item, monitor) =>
    monitor.isOver({ shallow: monitor.getItemType() === CREATE_CONNECTOR_DROP_TYPE }) &&
    (monitor.getOperation()?.type === REGROUP_OPERATION || monitor.getItemType() === CREATE_CONNECTOR_DROP_TYPE),
  collect: monitor => ({
    droppable: monitor.isDragging() && monitor.getOperation()?.type === REGROUP_OPERATION,
    dropTarget: monitor.isOver({ shallow: monitor.getItemType() === CREATE_CONNECTOR_DROP_TYPE }),
    canDrop:
      monitor.isDragging() &&
      (monitor.getOperation()?.type === REGROUP_OPERATION || monitor.getItemType() === CREATE_CONNECTOR_DROP_TYPE),
    dragRegroupable: monitor.isDragging() && monitor.getItem()?.allowRegroup
  }),
  dropHint: 'create'
};

const edgeDragSourceSpec = (
  type: string,
  callback: (sourceNode: Node, targetNode: Node, replaceTargetNode?: Node) => void
): DragSourceSpec<
  DragObjectWithType,
  DragSpecOperationType<EditableDragOperationType>,
  Node,
  { dragging: boolean },
  EdgeComponentProps
> => ({
  item: { type: EDGE_DRAG_TYPE },
  operation: { type: MOVE_CONNECTOR_OPERATION, edit: true, canDropOnNode: canDropEdgeOnNode },
  begin: (monitor, props) => {
    props.element.raise();
    return props.element;
  },
  drag: (event, monitor, props) => {
    props.element.setEndPoint(event.x, event.y);
  },
  end: (dropResult, monitor, props) => {
    props.element.setEndPoint();
    if (monitor.didDrop() && dropResult && canDropEdgeOnNode(monitor.getOperation()?.type, props.element, dropResult)) {
      callback(props.element.getSource(), dropResult, props.element.getTarget());
    }
  },
  collect: monitor => ({
    dragging: monitor.isDragging()
  })
});

const noDropTargetSpec: DropTargetSpec<GraphElement, any, {}, { element: GraphElement }> = {
  accept: [NODE_DRAG_TYPE, EDGE_DRAG_TYPE, CREATE_CONNECTOR_DROP_TYPE],
  canDrop: () => false
};

export {
  nodesEdgeIsDragging,
  noRegroupDragSourceSpec,
  nodeDragSourceSpec,
  nodeDropTargetSpec,
  graphDropTargetSpec,
  groupDropTargetSpec,
  edgeDragSourceSpec,
  noDropTargetSpec,
  REGROUP_OPERATION,
  MOVE_CONNECTOR_DROP_TYPE,
  NODE_DRAG_TYPE,
  EDGE_DRAG_TYPE,
  canDropEdgeOnNode,
  highlightNode
};
