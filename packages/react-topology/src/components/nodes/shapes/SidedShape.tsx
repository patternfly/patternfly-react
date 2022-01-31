import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-components';
import * as React from 'react';
import { getPathForSides, getPointsForSides, ShapeProps } from './shapeUtils';
import { usePolygonAnchor } from '../../../behavior';

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
  dndDropRef
}) => {
  const points = React.useMemo(() => getPointsForSides(sides, Math.min(width, height), 0), [height, sides, width]);
  usePolygonAnchor(points);
  if (!hullPadding) {
    return (
      <polygon
        className={className}
        ref={dndDropRef}
        points={points.map(p => `${p[0]},${p[1]}`).join(' ')}
        filter={filter}
      />
    );
  }

  return (
    <path
      className={className}
      ref={dndDropRef}
      d={getPathForSides(sides, Math.min(width, height), hullPadding)}
      filter={filter}
    />
  );
};

export default SidedShape;
