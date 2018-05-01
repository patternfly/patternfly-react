import { TreeViewNodeObject } from './TreeViewNode';
import { MouseEvent, SFC } from 'react';

export interface TreeViewExpandProps {
  expanded?: boolean;
  nodes?: TreeViewNodeObject[];
  toggleExpand?(event: MouseEvent<HTMLSpanElement>): void;
}

declare const TreeViewExpand: SFC<TreeViewExpandProps>;

export default TreeViewExpand;
