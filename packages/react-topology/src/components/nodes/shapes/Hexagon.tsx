import * as React from 'react';
import { HEXAGON_CORNER_RADIUS, ShapeProps } from './shapeUtils';
import { SidedShape } from './index';

type HexagonProps = ShapeProps & {
  cornerRadius?: number;
};

const Hexagon: React.FunctionComponent<HexagonProps> = props => (
  <SidedShape cornerRadius={props.cornerRadius ?? HEXAGON_CORNER_RADIUS} {...props} sides={6} />
);

export default Hexagon;
