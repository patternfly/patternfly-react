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

export interface IPoint {
  x: number;
  y: number;
}

export interface IDimensions {
  width: number;
  height: number;
}

export interface IRect {
  x: number;
  y: number;
  width: number;
  height: number;
}
