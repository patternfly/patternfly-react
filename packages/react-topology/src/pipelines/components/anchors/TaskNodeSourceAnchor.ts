import { Point } from '../../../geom';
import { AbstractAnchor } from '../../../anchors';

export default class TaskNodeSourceAnchor extends AbstractAnchor {
  getLocation(): Point {
    return this.getReferencePoint();
  }

  getReferencePoint(): Point {
    const bounds = this.owner.getBounds();
    return new Point(bounds.right(), bounds.y + bounds.height / 2);
  }
}
