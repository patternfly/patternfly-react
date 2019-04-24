import { HTMLProps, ComponentType, ClassAttributes } from 'react';
import { GutterSize } from '../../styles/gutters';
import { OneOf } from '../../helpers/typeUtils';

export type gridItemSpanValueShape = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface GridProps extends HTMLProps<HTMLDivElement> {
  gutter?: OneOf<typeof GutterSize, keyof typeof GutterSize>;
  span?: gridItemSpanValueShape;
  sm?: gridItemSpanValueShape;
  md?: gridItemSpanValueShape;
  lg?: gridItemSpanValueShape;
  xl?: gridItemSpanValueShape;
}

declare const Grid: React.ComponentType<
  GridProps & ClassAttributes<HTMLDivElement>
>;

export default Grid;
