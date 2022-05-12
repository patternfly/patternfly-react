import { Point } from '../../../geom';
import { AbstractAnchor } from '../../../anchors';
import { Node } from '../../../types';

export default class TaskNodeTargetAnchor<E extends Node = Node> extends AbstractAnchor {
  private whenOffset = 0;

  constructor(owner: E, whenOffset: number) {
    super(owner);
    this.whenOffset = whenOffset;
  }

  getLocation(): Point {
    return this.getReferencePoint();
  }

  getReferencePoint(): Point {
    const bounds = this.owner.getBounds();
    return new Point(bounds.x + this.whenOffset, bounds.y + bounds.height / 2);
  }
}
