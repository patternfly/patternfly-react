import Point from '../geom/Point';
import { Anchor, Node } from '../types';

export default abstract class AbstractAnchor<E extends Node = Node> implements Anchor {
  protected readonly owner: E;

  // Consumption of the offset depends on the concrete anchor implementation but it is
  // indended that the reference point is moved by the offset relative to the point location
  // in the direction of the opposing reference point.
  protected readonly offset: number;

  constructor(owner: E, offset: number = 0) {
    this.owner = owner;
    this.offset = offset;
  }

  abstract getLocation(reference: Point): Point;

  getReferencePoint(): Point {
    return this.owner
      .getBounds()
      .getCenter()
      .translate(this.offset, this.offset);
  }
}
