import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-components';
import * as React from 'react';
import { getPathForSides, getPointsForSides } from './shapeUtils';
import { useCombineRefs, ShapeProps } from '../../../utils';

type SidedProps = ShapeProps & {
  sides?: number;
  hullPadding?: number;
};

const SidedShape: React.FC<SidedProps> = ({
  className = css(styles.topologyNodeBackground),
  width,
  height,
  filter,
  sides = 6,
  hullPadding = 0,
  anchorRef,
  dndDropRef
}) => {
  const refs = useCombineRefs<SVGPolygonElement>(dndDropRef, anchorRef);
  const points = getPointsForSides(sides, Math.min(width, height), 0);
  if (!hullPadding) {
    return (
      <polygon className={className} ref={refs} points={points.map(p => `${p[0]},${p[1]}`).join(' ')} filter={filter} />
    );
  }

  return (
    <>
      <polygon
        className={className}
        ref={anchorRef}
        points={points.map(p => `${p[0]},${p[1]}`).join(' ')}
        fillOpacity={0}
      />
      <path
        className={className}
        ref={dndDropRef}
        d={getPathForSides(sides, Math.min(width, height), hullPadding)}
        filter={filter}
      />
    </>
  );
};

export default SidedShape;
