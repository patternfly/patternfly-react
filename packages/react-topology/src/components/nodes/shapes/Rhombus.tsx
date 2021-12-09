import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-components';
import * as React from 'react';
import { polygonHull } from 'd3-polygon';
import { ShapeProps } from '../../../utils/useCustomNodeShape';
import { PointTuple } from '../../../types';
import { hullPath, useCombineRefs } from '../../../utils';

const HULL_PADDING = 10;

const Rhombus: React.FC<ShapeProps> = ({
  className = css(styles.topologyNodeBackground),
  width,
  height,
  filter,
  anchorRef,
  dndDropRef
}) => {
  const refs = useCombineRefs<SVGPathElement>(dndDropRef, anchorRef);
  // cast to number and coerce
  const path = React.useMemo(() => {
    const points: PointTuple[] = [
      [width / 2, HULL_PADDING],
      [width - HULL_PADDING, height / 2],
      [width / 2, height - HULL_PADDING],
      [HULL_PADDING, height / 2]
    ];
    const hullPoints: PointTuple[] = polygonHull(points);
    return hullPath(hullPoints, HULL_PADDING);
  }, [width, height]);

  return <path className={className} ref={refs} d={path} filter={filter} strokeLinejoin="round" strokeWidth={10} />;
};

export default Rhombus;
