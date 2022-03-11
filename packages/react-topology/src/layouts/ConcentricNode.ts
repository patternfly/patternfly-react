import { LayoutNode } from './LayoutNode';
import { Node } from '../types';

export class ConcentricNode extends LayoutNode {
  constructor(node: Node, distance: number, index: number = -1) {
    super(node, distance, index);
  }
}
