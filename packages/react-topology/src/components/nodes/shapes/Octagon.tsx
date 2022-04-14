import * as React from 'react';
import { OCTAGON_CORNER_RADIUS, ShapeProps } from './shapeUtils';
import { SidedShape } from './index';

type OctagonProps = ShapeProps & {
  cornerRadius?: number;
};

const Octagon: React.FunctionComponent<OctagonProps> = props => (
  <SidedShape cornerRadius={props.cornerRadius ?? OCTAGON_CORNER_RADIUS} {...props} sides={8} />
);

export default Octagon;
