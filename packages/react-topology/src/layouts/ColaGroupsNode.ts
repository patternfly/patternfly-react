import * as webcola from 'webcola';
import { isNode, Node } from '../types';
import { LayoutNode } from './LayoutNode';
import { Point } from '../geom';

export class ColaGroupsNode extends LayoutNode implements webcola.Node {
  // fixed is used by Cola during node additions: 1 for fixed
  public fixed: number = 0;

  constructor(node: Node, distance: number, index: number = -1) {
    super(node, distance, index);
    // TODO: Investigate why the issue with rectangular nodes causing the layout to become vertical
    // may need to do more here like what is done in ColaNode
  }
  setFixed(fixed: boolean): void {
    super.setFixed(fixed);
    this.fixed = fixed ? 1 : 0;
  }

  update() {
    if (!this.isFixed && this.xx != null && this.yy != null) {
      if (this.node.isGroup()) {
        const prevLocation = this.node.getBounds().getCenter();
        const xOffset = this.xx - prevLocation.x;
        const yOffset = this.yy - prevLocation.y;

        this.node.getChildren().forEach(child => {
          if (isNode(child)) {
            const node = child as Node;
            const position = node.getPosition();
            node.setPosition(new Point(position.x + xOffset, position.y + yOffset));
          }
        });
      } else {
        this.setPosition(this.xx, this.yy);
      }
    }
    this.xx = undefined;
    this.yy = undefined;
  }

  get width(): number {
    return this.nodeBounds.width + this.distance * 2;
  }

  get height(): number {
    return this.nodeBounds.height + this.distance * 2;
  }

  get radius(): number {
    const bounds = this.nodeBounds;
    return Math.max(bounds.width, bounds.height) / 2;
  }

  get collisionRadius(): number {
    return this.radius + this.distance;
  }
}
