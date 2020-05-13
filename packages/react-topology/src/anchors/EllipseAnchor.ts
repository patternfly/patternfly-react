import Point from '../geom/Point';
import { getEllipseAnchorPoint } from '../utils/anchor-utils';
import AbstractAnchor from './AbstractAnchor';

export default class EllipseAnchor extends AbstractAnchor {
  getLocation(reference: Point): Point {
    const r = this.owner.getBounds();
    if (r.isEmpty()) {
      return r.getCenter();
    }

    const offset2x = this.offset * 2;
    return getEllipseAnchorPoint(r.getCenter(), r.width + offset2x, r.height + offset2x, reference);
  }
}
