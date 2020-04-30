import { Translatable, IPoint } from './types';

export default class Point implements Translatable, IPoint {
  static readonly EMPTY = new Point();

  x: number;

  y: number;

  private static SINGLETON = new Point();

  static singleUse(x: number = 0, y: number = 0) {
    Point.SINGLETON.x = x;
    Point.SINGLETON.y = y;
    return Point.SINGLETON;
  }

  static fromPoint(point: IPoint): Point {
    return new Point(point.x, point.y);
  }

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  setLocation(x: number, y: number): Point {
    this.x = x;
    this.y = y;
    return this;
  }

  negate(): Point {
    this.x = -this.x;
    this.y = -this.y;
    return this;
  }

  translate(dx: number, dy: number): Point {
    this.x += dx;
    this.y += dy;
    return this;
  }

  scale(scaleX: number, scaleY?: number): Point {
    this.x *= scaleX;
    this.y *= scaleY != null ? scaleY : scaleX;
    return this;
  }

  clone(): Point {
    return Point.fromPoint(this);
  }

  equals(p: IPoint) {
    return p.x === this.x && p.y === this.y;
  }
}
