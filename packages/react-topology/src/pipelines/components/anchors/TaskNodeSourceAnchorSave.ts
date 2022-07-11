import { Point } from '../../../geom';
import { AbstractAnchor } from '../../../anchors';
import { Node } from '../../../types';

export default class TaskNodeSourceAnchor<E extends Node = Node> extends AbstractAnchor {
  private pillWidth = 0;
  private whenOffset = 0;

  constructor(owner: E, whenOffset: number, pillWidth: number) {
    super(owner);
    this.whenOffset = whenOffset;
    this.pillWidth = pillWidth;
  }
  getLocation(): Point {
    return this.getReferencePoint();
  }

  getReferencePoint(): Point {
    const bounds = this.owner.getBounds();
    return new Point(bounds.x + this.pillWidth + this.whenOffset, bounds.y + bounds.height / 2);
  }
}
