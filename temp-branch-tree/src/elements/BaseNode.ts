import { observable, computed } from 'mobx';
import {
  Node,
  Anchor,
  NodeModel,
  ModelKind,
  isNode,
  isEdge,
  AnchorEnd,
  NodeStyle,
  NodeShape,
  Edge,
  GraphElement,
  NODE_COLLAPSE_CHANGE_EVENT,
} from '../types';
import CenterAnchor from '../anchors/CenterAnchor';
import Rect from '../geom/Rect';
import { Translatable } from '../geom/types';
import BaseElement from './BaseElement';
import Dimensions from '../geom/Dimensions';
import Point from '../geom/Point';

const createAnchorKey = (end: AnchorEnd = AnchorEnd.both, type: string = ''): string =>
  `${end}:${type}`;

export default class BaseNode<E extends NodeModel = NodeModel, D = any> extends BaseElement<E, D>
  implements Node<E, D> {
  @observable.shallow
  private anchors: { [type: string]: Anchor } = {
    [createAnchorKey()]: new CenterAnchor(this),
  };

  @observable.ref
  private dimensions = new Dimensions();

  @observable.ref
  private position = new Point();

  @computed
  private get nodes(): Node[] {
    if (this.isCollapsed()) {
      return [];
    }

    return this.getChildren().filter(isNode);
  }

  @observable
  private group = false;

  @observable
  private collapsed = false;

  @observable
  private shape: NodeShape | undefined;

  @computed
  private get groupBounds(): Rect {
    const children = this.getChildren()
      .filter(isNode)
      .filter((n) => n.isVisible());
    if (!children.length) {
      return this.getInternalBounds();
    }

    let rect: Rect | undefined;
    children.forEach((c) => {
      if (isNode(c)) {
        const { padding } = c.getStyle<NodeStyle>();
        const b = c.getBounds();
        // Currently non-group nodes do not include their padding in the bounds
        if (!c.isGroup() && padding) {
          b.padding(c.getStyle<NodeStyle>().padding);
        }
        if (!rect) {
          rect = b.clone();
        } else {
          rect.union(b);
        }
      }
    });

    if (!rect) {
      rect = new Rect();
    }

    const { padding } = this.getStyle<NodeStyle>();

    return rect.padding(padding);
  }

  @computed
  private get sourceEdges(): Edge[] {
    return this.getGraph()
      .getEdges()
      .filter((e) => e.getSource() === this);
  }

  @computed
  private get targetEdges(): Edge[] {
    return this.getGraph()
      .getEdges()
      .filter((e) => e.getTarget() === this);
  }

  getChildren(): GraphElement[] {
    if (this.isCollapsed()) {
      return super.getChildren().filter(isEdge);
    }
    return super.getChildren();
  }

  getKind(): ModelKind {
    return ModelKind.node;
  }

  private getInternalBounds(): Rect {
    const { position, dimensions } = this;
    return new Rect(position.x, position.y, dimensions.width, dimensions.height);
  }

  getBounds(): Rect {
    return this.group && !this.collapsed ? this.groupBounds : this.getInternalBounds();
  }

  setBounds(bounds: Rect): void {
    const { width, height } = this.dimensions;
    if (bounds.width !== width || bounds.height !== height) {
      this.dimensions = new Dimensions(bounds.width, bounds.height);
    }
    const { x, y } = this.position;
    if (bounds.x !== x || bounds.y !== y) {
      this.position = new Point(bounds.x, bounds.y);
    }
  }

  getPosition(): Point {
    return this.position;
  }

  setPosition(point: Point): void {
    this.position = point;
  }

  getDimensions(): Dimensions {
    return this.dimensions;
  }

  setDimensions(dimensions: Dimensions): void {
    this.dimensions = dimensions;
  }

  getAnchor(end?: AnchorEnd, type?: string): Anchor {
    let anchor = this.anchors[createAnchorKey(end, type)];
    if (!anchor && type) {
      anchor = this.anchors[createAnchorKey(end)];
    }
    if (!anchor && (end === AnchorEnd.source || end === AnchorEnd.target)) {
      anchor = this.anchors[createAnchorKey(AnchorEnd.both, type)];
      if (!anchor && type) {
        anchor = this.anchors[createAnchorKey(AnchorEnd.both)];
      }
    }
    return anchor;
  }

  setAnchor(anchor: Anchor, end?: AnchorEnd, type?: string): void {
    const key = createAnchorKey(end, type);
    if (anchor) {
      this.anchors[key] = anchor;
    } else {
      delete this.anchors[key];
    }
  }

  getNodes(): Node[] {
    return this.nodes;
  }

  isGroup(): boolean {
    return this.group;
  }

  setGroup(group: boolean): void {
    this.group = group;
  }

  isCollapsed(): boolean {
    return this.collapsed;
  }

  setCollapsed(collapsed: boolean): void {
    if (collapsed !== this.collapsed) {
      // Get the location prior to the collapse change and apply it after the collapse.
      // This updates the new node(s) location(s) to be what the node was originally, basically
      // keeping the nodes ln place so the layout doesn't start fresh (putting the new nodes at 0,0
      // TODO: Update to better position the nodes at a point location rather than relying on the setCenter updating the nodes.
      const prevCenter = this.getBounds().getCenter();
      this.collapsed = collapsed;
      this.setBounds(this.getBounds().setCenter(prevCenter.x, prevCenter.y));
      this.getController().fireEvent(NODE_COLLAPSE_CHANGE_EVENT, { node: this });
    }
  }

  getNodeShape(): NodeShape {
    return this.shape || (this.group ? NodeShape.rect : NodeShape.circle);
  }

  setNodeShape(shape: NodeShape): void {
    this.shape = shape;
  }

  getSourceEdges(): Edge[] {
    return this.sourceEdges;
  }

  getTargetEdges(): Edge[] {
    return this.targetEdges;
  }

  setModel(model: E): void {
    super.setModel(model);
    let d: Dimensions | undefined;
    let p: Point | undefined;

    if ('width' in model && model.width != null) {
      if (!d) {
        d = this.dimensions.clone();
      }
      d.width = model.width;
    }
    if ('height' in model && model.height != null) {
      if (!d) {
        d = this.dimensions.clone();
      }
      d.height = model.height;
    }
    if (d) {
      this.setDimensions(d);
    }

    if ('x' in model && model.x != null) {
      if (!p) {
        p = this.position.clone();
      }
      p.x = model.x;
    }
    if ('y' in model && model.y != null) {
      if (!p) {
        p = this.position.clone();
      }
      p.y = model.y;
    }
    if (p) {
      this.setPosition(p);
    }

    if ('group' in model) {
      this.setGroup(!!model.group);
    }
    if ('shape' in model) {
      this.shape = model.shape;
    }
    if ('collapsed' in model) {
      this.setCollapsed(!!model.collapsed);
    }
  }

  translateToParent(t: Translatable): void {
    if (!this.group || this.isCollapsed()) {
      const { x, y } = this.getPosition();
      t.translate(x, y);
    }
  }

  translateFromParent(t: Translatable): void {
    if (!this.group || this.isCollapsed()) {
      const { x, y } = this.getPosition();
      t.translate(-x, -y);
    }
  }
}
