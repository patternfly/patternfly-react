import { Edge } from '../types';
import { LayoutNode } from './LayoutNode';
export class LayoutLink {
  private readonly edge: Edge;
  public sourceNode: LayoutNode;
  public targetNode: LayoutNode;
  public isFalse: boolean;
  constructor(edge: Edge, source: LayoutNode, target: LayoutNode, isFalse: boolean = false) {
    this.edge = edge;
    this.sourceNode = source;
    this.targetNode = target;
    this.isFalse = isFalse;
  }
  get element(): Edge {
    return this.edge;
  }
  get id(): string {
    return this.edge.getId();
  }
  get source(): any {
    return this.sourceNode;
  }
  get target(): any {
    return this.targetNode;
  }
}
