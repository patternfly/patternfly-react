import { observable, computed } from 'mobx';
import Point from '../geom/Point';
import { Edge, Node, EdgeModel, ModelKind, AnchorEnd, Anchor } from '../types';
import { getTopCollapsedParent } from '../utils';
import BaseElement from './BaseElement';

export default class BaseEdge<E extends EdgeModel = EdgeModel, D = any> extends BaseElement<E, D>
  implements Edge<E, D> {
  @observable.ref
  private source?: Node;

  @observable.ref
  private target?: Node;

  @observable.shallow
  private bendpoints?: Point[];

  @observable.ref
  private startPoint?: Point;

  @observable.ref
  private endPoint?: Point;

  @computed
  private get sourceAnchor(): Anchor {
    return this.getSourceAnchorNode().getAnchor(AnchorEnd.source, this.getType());
  }

  @computed
  private get targetAnchor(): Anchor {
    return this.getTargetAnchorNode().getAnchor(AnchorEnd.target, this.getType());
  }

  getKind(): ModelKind {
    return ModelKind.edge;
  }

  getSource(): Node {
    if (!this.source) {
      throw new Error(`Edge with ID '${this.getId()}' has no source.`);
    }
    return this.source;
  }

  setSource(source: Node) {
    this.source = source;
  }

  getTarget(): Node {
    if (!this.target) {
      throw new Error(`Edge with ID '${this.getId()}' has no target.`);
    }
    return this.target;
  }

  setTarget(target: Node) {
    this.target = target;
  }

  getSourceAnchorNode(): Node {
    if (!this.source) {
      throw new Error(`Edge with ID '${this.getId()}' has no source.`);
    }
    return getTopCollapsedParent(this.source);
  }

  getTargetAnchorNode(): Node {
    if (!this.target) {
      throw new Error(`Edge with ID '${this.getId()}' has no target.`);
    }
    return getTopCollapsedParent(this.target);
  }

  getBendpoints(): Point[] {
    return this.bendpoints || [];
  }

  setBendpoints(points: Point[]) {
    this.bendpoints = points;
  }

  removeBendpoint(point: Point | number): void {
    if (this.bendpoints) {
      if (typeof point === 'number') {
        this.bendpoints.splice(point, 1);
      } else {
        const idx = this.bendpoints.indexOf(point);
        if (idx !== -1) {
          this.bendpoints.splice(idx, 1);
        }
      }
    }
  }

  getStartPoint(): Point {
    if (this.startPoint) {
      return this.startPoint;
    }
    const bendpoints = this.getBendpoints();
    let referencePoint: Point;
    if (bendpoints && bendpoints.length > 0) {
      [referencePoint] = bendpoints;
    } else if (this.endPoint) {
      referencePoint = this.endPoint;
    } else {
      referencePoint = this.targetAnchor.getReferencePoint();
    }
    return this.sourceAnchor.getLocation(referencePoint);
  }

  setStartPoint(x?: number, y?: number): void {
    if (x == null || y == null) {
      this.startPoint = undefined;
    } else {
      this.startPoint = new Point(x, y);
    }
  }

  getEndPoint(): Point {
    if (this.endPoint) {
      return this.endPoint;
    }
    const bendpoints = this.getBendpoints();
    let referencePoint: Point;
    if (bendpoints && bendpoints.length > 0) {
      referencePoint = bendpoints[bendpoints.length - 1];
    } else if (this.startPoint) {
      referencePoint = this.startPoint;
    } else {
      referencePoint = this.sourceAnchor.getReferencePoint();
    }
    return this.targetAnchor.getLocation(referencePoint);
  }

  setEndPoint(x?: number, y?: number): void {
    if (x == null || y == null) {
      this.endPoint = undefined;
    } else {
      this.endPoint = new Point(x, y);
    }
  }

  setModel(model: E): void {
    super.setModel(model);
    if (model.source) {
      const node = this.getController().getNodeById(model.source);
      if (!node) {
        throw new Error(`No source node found with ID '${model.source}'.`);
      }
      this.source = node;
    }
    if (model.target) {
      const node = this.getController().getNodeById(model.target);
      if (!node) {
        throw new Error(`No target node found with ID '${model.target}'.`);
      }
      this.target = node;
    }
    if ('bendpoints' in model) {
      this.bendpoints = model.bendpoints ? model.bendpoints.map(b => new Point(b[0], b[1])) : [];
    }
  }
}
