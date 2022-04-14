import { LayoutNode } from './LayoutNode';
import { Node } from '../types';

export class BreadthFirstNode extends LayoutNode {
  constructor(node: Node, distance: number, index: number = -1) {
    super(node, distance, index);
  }
}
