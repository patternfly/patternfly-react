export interface Translatable {
  translate(dx: number, dy: number): Translatable;
  scale(s: number): Translatable;
}

export type Padding =
  | number
  | [number]
  | [number, number]
  | [number, number, number]
  | [number, number, number, number];

export interface PointIface {
  x: number;
  y: number;
}

export interface DimensionsIface {
  width: number;
  height: number;
}

export interface RectIface {
  x: number;
  y: number;
  width: number;
  height: number;
}
