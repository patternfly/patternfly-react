import { Node } from '../types';
import { LayoutNode } from './LayoutNode';
export class LayoutGroup {
  protected readonly node: Node;
  public leaves: LayoutNode[];
  public groups: LayoutGroup[];
  public parent: LayoutGroup;
  public padding: number;
  public index: number;
  constructor(node: Node, padding: number, index: number) {
    this.node = node;
    this.padding = padding;
    this.index = index;
  }
  get element(): Node {
    return this.node;
  }
  get id(): string {
    return this.node.getId();
  }
}
