import Point from '../geom/Point';
import { getRectAnchorPoint } from '../utils/anchor-utils';
import AbstractAnchor from './AbstractAnchor';

export default class RectAnchor extends AbstractAnchor {
  getLocation(reference: Point): Point {
    const r = this.owner.getBounds();
    const center = r.getCenter();
    if (r.isEmpty()) {
      return center;
    }

    const offset2x = this.offset * 2;
    return getRectAnchorPoint(center, r.width + offset2x, r.height + offset2x, reference);
  }
}
