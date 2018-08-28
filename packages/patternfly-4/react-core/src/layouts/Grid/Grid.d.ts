import { HTMLProps, ComponentType, ClassAttributes } from 'react';
import { GutterSize } from '../../styles/gutters';
import { OneOf } from '../../typeUtils';

export interface GridProps extends HTMLProps<HTMLDivElement> {
  gutter?: OneOf<typeof GutterSize, keyof typeof GutterSize>;
}

declare const Grid: React.ComponentType<
  GridProps & ClassAttributes<HTMLDivElement>
>;

export default Grid;
