import { Node } from '../../types';
import * as React from 'react';
import { ShapeProps } from '../nodes';

export interface CollapsibleGroupProps {
  collapsible?: boolean;
  collapsedWidth?: number;
  collapsedHeight?: number;
  onCollapseChange?: (group: Node, collapsed: boolean) => void;
  getCollapsedShape?: (node: Node) => React.FunctionComponent<ShapeProps>;
  collapsedShadowOffset?: number; // defaults to 10
}
