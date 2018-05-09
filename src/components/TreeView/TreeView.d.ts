import { SFC } from 'react';
import { TreeViewNodeObject } from './TreeViewNode';

export interface TreeViewProps {
  highlightOnHover?: boolean;
  highlightOnSelect?: boolean;
  nodes?: TreeViewNodeObject[];
  selectNode?(node: TreeViewNodeObject): void;
}

declare const TreeView: SFC<TreeViewProps>;

export default TreeView;
