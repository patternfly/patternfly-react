import { Node } from '../types';
import { LayoutNode } from './LayoutNode';
import * as webcola from 'webcola';
export class ColaNode extends LayoutNode implements webcola.Node {
  // fixed is used by Cola during node additions: 1 for fixed
  public fixed: number = 0;
  constructor(node: Node, distance: number, index: number = -1) {
    super(node, distance, index);
    // TODO: Investigate why the issue with rectangular nodes causing the layout to become vertical
    //       this setting will be a problem if nodes can change size dynamically
    // Cola layout has issues with non-square nodes
    const maxDimension = Math.max(this.nodeWidth, this.nodeHeight);
    this.nodeWidth = maxDimension;
    this.nodeHeight = maxDimension;
  }
}
