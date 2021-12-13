import * as React from 'react';
import {
  GraphElement,
  ComponentFactory,
  withCustomNodeShape,
  withContextMenu,
  ContextMenuSeparator,
  ContextMenuItem,
  withCollapsibleGroup,
  withDragNode,
  withSelection,
  ModelKind
} from '@patternfly/react-topology';
import DemoDefaultNode from './DemoDefaultNode';
import Path from './shapes/Path';
import Polygon from './shapes/Polygon';
import StyleNode from './StyleNode';
import StyleGroup from './StyleGroup';
import StyleEdge from './StyleEdge';

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

const stylesComponentFactory: ComponentFactory = (
  kind: ModelKind,
  type: string
): React.ComponentType<{ element: GraphElement }> | undefined => {
  switch (type) {
    case 'node':
      return withContextMenu(() => defaultMenu)(withDragNode()(withSelection()(StyleNode)));
    case 'node-path':
      return withCustomNodeShape(() => Path)(DemoDefaultNode);
    case 'node-polygon':
      return withCustomNodeShape(() => Polygon)(DemoDefaultNode);
    case 'group':
      return withContextMenu(() => defaultMenu)(withSelection()(withCollapsibleGroup(75, 75)(StyleGroup)));
    case 'edge':
      return withContextMenu(() => defaultMenu)(withSelection()(StyleEdge));
    default:
      return undefined;
  }
};

export default stylesComponentFactory;
