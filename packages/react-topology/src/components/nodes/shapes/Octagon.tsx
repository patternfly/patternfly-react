import * as React from 'react';
import { OCTAGON_HULL_PADDING, ShapeProps } from './shapeUtils';
import { SidedShape } from './index';

type OctagonProps = ShapeProps & {
  hullPadding?: number;
};

const Octagon: React.FC<OctagonProps> = props => (
  <SidedShape hullPadding={props.hullPadding ?? OCTAGON_HULL_PADDING} {...props} sides={8} />
);

export default Octagon;
