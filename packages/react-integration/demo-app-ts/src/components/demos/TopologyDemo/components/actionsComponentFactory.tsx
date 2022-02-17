import * as React from 'react';
import {
  GraphElement,
  ComponentFactory,
  withContextMenu,
  ContextMenuSeparator,
  ContextMenuItem,
  withDragNode,
  withSelection,
  ModelKind,
  NodeComponentProps,
  DefaultNode,
  withPanZoom,
  GraphComponent,
  ContextSubMenuItem,
  withDndDrop,
  nodeDropTargetSpec,
  nodeDragSourceSpec
} from '@patternfly/react-topology';
import GroupHull from './GroupHull';
import CustomPathNode from './CustomPathNode';

const contextMenuItem = (label: string, i: number): React.ReactElement => {
  if (label === '-') {
    return <ContextMenuSeparator key={`separator:${i.toString()}`} />;
  }
  if (label.includes('->')) {
    const parent = label.slice(0, label.indexOf('->'));
    const children = label.slice(label.indexOf('->') + 2).split(',');

    return (
      <ContextSubMenuItem label={parent} key={parent}>
        {children.map((child, j) => contextMenuItem(child.trim(), j))}
      </ContextSubMenuItem>
    );
  }
  return (
    // eslint-disable-next-line no-alert
    <ContextMenuItem key={label} onClick={() => alert(`Selected: ${label}`)}>
      {label}
    </ContextMenuItem>
  );
};

const createContextMenuItems = (...labels: string[]): React.ReactElement[] => labels.map(contextMenuItem);

const defaultMenu = createContextMenuItems(
  'First',
  'Second',
  'Third',
  '-',
  'Fourth',
  'Sub Menu-> Child1, Child2, Child3, -, Child4'
);

const actionsComponentFactory: ComponentFactory = (
  kind: ModelKind,
  type: string
): React.ComponentType<{ element: GraphElement }> | undefined => {
  if (kind === ModelKind.graph) {
    return withPanZoom()(GraphComponent);
  }
  if (type === 'group') {
    return withDragNode({ canCancel: false })(GroupHull);
  }
  if (type === 'default-node' || type === 'node') {
    return withDndDrop<any, any, { droppable?: boolean; hover?: boolean; canDrop?: boolean }, NodeComponentProps>(
      nodeDropTargetSpec()
    )(withDragNode(nodeDragSourceSpec(type))(withSelection()(withContextMenu(() => defaultMenu)(DefaultNode))));
  }
  if (type === 'custom-node') {
    return withDndDrop<any, any, { droppable?: boolean; hover?: boolean; canDrop?: boolean }, NodeComponentProps>(
      nodeDropTargetSpec()
    )(withDragNode(nodeDragSourceSpec(type))(withSelection()(withContextMenu(() => defaultMenu)(CustomPathNode))));
  }
  return undefined;
};

export default actionsComponentFactory;
