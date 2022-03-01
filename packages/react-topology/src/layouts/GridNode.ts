import { LayoutNode } from './LayoutNode';
import { Node } from '../types';

export class GridNode extends LayoutNode {
  constructor(node: Node, distance: number, index: number = -1) {
    super(node, distance, index);
  }
}
