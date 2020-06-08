import { Node, NodeStyle } from '../types';
import { Rect } from '../geom';
import { LayoutGroup } from './LayoutGroup';
export class LayoutNode {
  protected readonly node: Node;
  protected xx?: number;
  protected yy?: number;
  protected nodeWidth: number;
  protected nodeHeight: number;
  protected nodeRadius: number;
  public readonly distance: number;
  public parent?: LayoutGroup;
  public index: number;
  // isFixed is used locally for Force simulation during drag events
  public isFixed: boolean = false;
  constructor(node: Node, distance: number, index: number = -1) {
    this.node = node;
    this.distance = distance;
    this.index = index;
    // Currently we support only fixed node sizes, this will need to change if/when dynamic node sizes are supported
    const bounds = this.nodeBounds;
    this.nodeWidth = bounds.width + this.distance * 2;
    this.nodeHeight = bounds.height + this.distance * 2;
    this.nodeRadius = Math.max(bounds.width, bounds.height) / 2;
  }
  get element(): Node {
    return this.node;
  }
  get id(): string {
    return this.node.getId();
  }
  get x(): number {
    return this.xx || this.node.getBounds().getCenter().x;
  }
  set x(x: number) {
    if (!Number.isNaN(x)) {
      this.xx = x;
    }
  }
  get y(): number {
    return this.yy || this.node.getBounds().getCenter().y;
  }
  set y(y: number) {
    if (!Number.isNaN(y)) {
      this.yy = y;
    }
  }
  get fx(): number | undefined {
    return this.isFixed ? this.node.getBounds().getCenter().x : undefined;
  }
  get fy(): number | undefined {
    return this.isFixed ? this.node.getBounds().getCenter().y : undefined;
  }
  setPosition(x: number, y: number) {
    this.node.setBounds(
      this.node
        .getBounds()
        .clone()
        .setCenter(x, y)
    );
  }
  get nodeBounds(): Rect {
    const { padding } = this.node.getStyle<NodeStyle>();
    // Currently non-group nodes do not include their padding in the bounds
    if (!this.node.isGroup() && padding) {
      return this.node
        .getBounds()
        .clone()
        .padding(padding);
    }
    return this.node.getBounds();
  }
  get width(): number {
    return this.nodeWidth;
  }
  get height(): number {
    return this.nodeHeight;
  }
  update() {
    if (this.xx != null && this.yy != null) {
      this.node.setBounds(
        this.node
          .getBounds()
          .clone()
          .setCenter(this.xx, this.yy)
      );
    }
    this.xx = undefined;
    this.yy = undefined;
  }
  get radius(): number {
    return this.nodeRadius;
  }
  get collisionRadius(): number {
    return this.radius + this.distance;
  }
}
