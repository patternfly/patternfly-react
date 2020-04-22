import { observable } from 'mobx';
import Point from '../geom/Point';
import {
  getEllipseAnchorPoint,
  getPathAnchorPoint,
  getPolygonAnchorPoint,
  getRectAnchorPoint,
} from '../utils/anchor-utils';
import AbstractAnchor from './AbstractAnchor';

export default class SVGAnchor extends AbstractAnchor {
  @observable.ref
  private svgElement?: SVGElement;

  setSVGElement(svgElement: SVGElement) {
    this.svgElement = svgElement;
  }

  getCircleLocation(circle: SVGCircleElement, reference: Point): Point {
    const center: Point = new Point(circle.cx.baseVal.value, circle.cy.baseVal.value);
    this.owner.translateToParent(center);
    const diameter = circle.r.baseVal.value * 2 + this.offset * 2;

    return getEllipseAnchorPoint(center, diameter, diameter, reference);
  }

  getEllipseLocation(ellipse: SVGEllipseElement, reference: Point): Point {
    const center: Point = new Point(ellipse.cx.baseVal.value, ellipse.cy.baseVal.value);
    this.owner.translateToParent(center);
    const offset2x = this.offset * 2;
    const width = ellipse.rx.baseVal.value * 2 + offset2x;
    const height = ellipse.ry.baseVal.value * 2 + offset2x;

    return getEllipseAnchorPoint(center, width, height, reference);
  }

  getRectLocation(rect: SVGRectElement, reference: Point): Point {
    const width = rect.width.baseVal.value;
    const height = rect.height.baseVal.value;

    const center: Point = new Point(
      rect.x.baseVal.value + width / 2,
      rect.y.baseVal.value + height / 2,
    );
    this.owner.translateToParent(center);

    const offset2x = this.offset * 2;
    return getRectAnchorPoint(center, width + offset2x, height + offset2x, reference);
  }

  getPathLocation(path: SVGPathElement, reference: Point): Point {
    const translatedRef = reference.clone();
    this.owner.translateFromParent(translatedRef);
    const anchorPoint = getPathAnchorPoint(path, translatedRef);
    this.owner.translateToParent(anchorPoint);
    return anchorPoint;
  }

  getPolygonLocation(polygon: SVGPolygonElement, reference: Point): Point {
    const translatedRef = reference.clone();
    this.owner.translateFromParent(translatedRef);
    const anchorPoint = getPolygonAnchorPoint(polygon, translatedRef);
    this.owner.translateToParent(anchorPoint);
    return anchorPoint;
  }

  getLocation(reference: Point): Point {
    if (this.svgElement instanceof SVGCircleElement) {
      return this.getCircleLocation(this.svgElement, reference);
    }

    if (this.svgElement instanceof SVGEllipseElement) {
      return this.getEllipseLocation(this.svgElement, reference);
    }

    if (this.svgElement instanceof SVGRectElement) {
      return this.getRectLocation(this.svgElement, reference);
    }

    if (this.svgElement instanceof SVGPathElement) {
      return this.getPathLocation(this.svgElement, reference);
    }

    if (this.svgElement instanceof SVGPolygonElement) {
      return this.getPolygonLocation(this.svgElement, reference);
    }

    return this.owner.getBounds().getCenter();
  }

  getReferencePoint(): Point {
    if (
      this.svgElement instanceof SVGCircleElement ||
      this.svgElement instanceof SVGEllipseElement ||
      this.svgElement instanceof SVGRectElement ||
      this.svgElement instanceof SVGPathElement ||
      this.svgElement instanceof SVGPolygonElement
    ) {
      const bbox = this.svgElement.getBBox();
      const ref = new Point(bbox.x + bbox.width / 2, bbox.y + bbox.height / 2);

      // this touches the bounds for non-groups
      this.owner.translateToParent(ref);

      // touch the bounds to force a re-render in case this anchor is for a group
      this.owner.getBounds();

      return ref;
    }

    return super.getReferencePoint();
  }
}
