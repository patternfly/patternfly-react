import { observable } from 'mobx';
import Point from '../geom/Point';
import { distanceToPoint, getLinesIntersection } from '../utils/anchor-utils';
import AbstractAnchor from './AbstractAnchor';
import { Rect } from '../geom';
import { PointTuple } from '../types';

export default class PolygonAnchor extends AbstractAnchor {
  @observable.ref
  private points?: Point[];

  setPoints(points: PointTuple[]) {
    this.points = points?.map(p => new Point(p[0], p[1]));
  }

  getLocation(reference: Point): Point {
    let bestPoint: Point = new Point(0, 0);

    if (this.points) {
      const translatedRef = reference.clone();
      this.owner.translateFromParent(translatedRef);

      let bestDistance = Infinity;
      const bbox = this.getBoundingBox();

      for (let i = 0; i < this.points.length; i++) {
        const intersectPoint: Point | null = getLinesIntersection(
          [this.points[i], this.points[i === this.points.length - 1 ? 0 : i + 1]],
          [bbox.getCenter(), translatedRef]
        );
        if (intersectPoint) {
          const intersectDistance: number = distanceToPoint(intersectPoint, translatedRef);
          if (intersectDistance < bestDistance) {
            bestPoint = intersectPoint;
            bestDistance = intersectDistance;
          }
        }
      }
    }

    this.owner.translateToParent(bestPoint);
    return bestPoint;
  }

  getBoundingBox(): Rect {
    if (this.points?.length) {
      const bbox: Rect = new Rect(this.points[0].x, this.points[0].y);
      for (let i = 1; i < this.points.length; i++) {
        bbox.union(new Rect(this.points[i].x, this.points[i].y));
      }
      return bbox;
    }
    return new Rect(0, 0);
  }

  getReferencePoint(): Point {
    if (this.points?.length) {
      const bbox: Rect = this.getBoundingBox();
      const ref = bbox.getCenter();
      this.owner.translateToParent(ref);

      // touch the bounds to force a re-render in case this anchor is for a group
      this.owner.getBounds();

      return ref;
    }

    return super.getReferencePoint();
  }
}
