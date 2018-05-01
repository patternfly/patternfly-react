import { ComponentClass } from 'react';

export interface TreeViewNodeObject {
  selected?: boolean;
  nodes?: TreeViewNodeObject[];
  icon?: string;
  text?: string;
  selectable?: boolean;
  state?: {
    expanded?: boolean;
  };
}

export interface TreeViewNodeProps {
  level: number;
  node?: TreeViewNodeObject;
  selectNode?(node: TreeViewNodeObject): void;
  visible?: boolean;
}

declare const TreeViewNode: ComponentClass<TreeViewNodeProps>;

export default TreeViewNode;
