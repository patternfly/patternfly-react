import { Point } from '../../../geom';
import { AbstractAnchor } from '../../../anchors';
import { Node, ScaleDetailsLevel } from '../../../types';

export default class TaskNodeSourceAnchor<E extends Node = Node> extends AbstractAnchor {
  private detailsLevel: ScaleDetailsLevel;
  private lowDetailsStatusIconWidth = 0;

  constructor(owner: E, detailsLevel: ScaleDetailsLevel, lowDetailsStatusIconWidth: number) {
    super(owner);
    this.detailsLevel = detailsLevel;
    this.lowDetailsStatusIconWidth = lowDetailsStatusIconWidth;
  }

  getLocation(): Point {
    return this.getReferencePoint();
  }

  getReferencePoint(): Point {
    const bounds = this.owner.getBounds();
    if (this.detailsLevel !== ScaleDetailsLevel.high) {
      const scale = this.owner.getGraph().getScale();
      return new Point(bounds.x + this.lowDetailsStatusIconWidth * (1 / scale), bounds.y + bounds.height / 2);
    }
    return new Point(bounds.right(), bounds.y + bounds.height / 2);
  }
}
