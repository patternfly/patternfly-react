import { IDimensions } from './types';

export default class Dimensions implements IDimensions {
  static readonly EMPTY = new Dimensions();

  width: number = 0;

  height: number = 0;

  private static SINGLETON = new Dimensions();

  static singleUse(width: number = 0, height: number = 0) {
    Dimensions.SINGLETON.width = width;
    Dimensions.SINGLETON.height = height;
    return Dimensions.SINGLETON;
  }

  static fromDimensions(dimension: IDimensions): Dimensions {
    return new Dimensions(dimension.width, dimension.height);
  }

  constructor(width: number = 0, height: number = 0) {
    this.width = width;
    this.height = height;
  }

  isEmpty(): boolean {
    return this.width <= 0 || this.height <= 0;
  }

  setSize(w: number, h: number): Dimensions {
    this.width = w;
    this.height = h;
    return this;
  }

  scale(scaleX: number, scaleY?: number): Dimensions {
    const sy = scaleY != null ? scaleY : scaleX;
    this.width *= scaleX;
    this.height *= sy;
    return this;
  }

  resize(dw: number, dh: number): Dimensions {
    this.width += dw;
    this.height += dh;
    return this;
  }

  expand(h: number, v: number): Dimensions {
    this.height += v * 2;
    this.width += h * 2;
    return this;
  }

  clone(): Dimensions {
    return Dimensions.fromDimensions(this);
  }

  equals(r: IDimensions) {
    return r.width === this.width && r.height === this.height;
  }
}
