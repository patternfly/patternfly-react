import * as React from 'react';
import { HEXAGON_HULL_PADDING, ShapeProps } from './shapeUtils';
import { SidedShape } from './index';

type HexagonProps = ShapeProps & {
  hullPadding?: number;
};

const Hexagon: React.FC<HexagonProps> = props => (
  <SidedShape hullPadding={props.hullPadding ?? HEXAGON_HULL_PADDING} {...props} sides={6} />
);

export default Hexagon;
