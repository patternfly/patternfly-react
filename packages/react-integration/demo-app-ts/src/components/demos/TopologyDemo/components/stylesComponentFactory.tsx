import { ComponentType } from 'react';
import {
  GraphElement,
  ComponentFactory,
  withCustomNodeShape,
  withContextMenu,
  ContextMenuSeparator,
  ContextMenuItem
} from '@patternfly/react-topology';
import Node from './DemoDefaultNode';
import Path from './shapes/Path';
import Polygon from './shapes/Polygon';
import StyleNode from './StyleNode';
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

const shapesComponentFactory: ComponentFactory = (kind, type): ComponentType<{ element: GraphElement }> | undefined => {
  switch (type) {
    case 'node':
      return withContextMenu(() => defaultMenu)(StyleNode);
    case 'node-path':
      return withCustomNodeShape(() => Path)(Node);
    case 'node-polygon':
      return withCustomNodeShape(() => Polygon)(Node);
    default:
      return undefined;
  }
};

export default shapesComponentFactory;
