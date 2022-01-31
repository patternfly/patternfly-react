import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-components';
import { PointTuple } from '../../../types';
import { getHullPath, RHOMBUS_HULL_PADDING, ShapeProps } from './shapeUtils';
import { usePolygonAnchor } from '../../../behavior/usePolygonAnchor';

type RhombusProps = ShapeProps & {
  hullPadding?: number;
};

const Rhombus: React.FC<RhombusProps> = ({
  className = css(styles.topologyNodeBackground),
  width,
  height,
  filter,
  hullPadding = RHOMBUS_HULL_PADDING,
  dndDropRef
}) => {
  const polygonPoints = React.useMemo(() => {
    const hullExcess = hullPadding ? hullPadding / 2 : 0;
    const points: PointTuple[] = [
      [width / 2, -hullExcess],
      [width + hullExcess, height / 2],
      [width / 2, height + hullExcess],
      [-hullExcess, height / 2]
    ];
    return points;
  }, [height, hullPadding, width]);

  usePolygonAnchor(polygonPoints);

  if (!hullPadding) {
    return (
      <polygon
        className={className}
        ref={dndDropRef}
        points={polygonPoints.map(p => `${p[0]},${p[1]}`).join(' ')}
        filter={filter}
      />
    );
  }
  const points: PointTuple[] = [
    [width / 2, hullPadding],
    [width - hullPadding, height / 2],
    [width / 2, height - hullPadding],
    [hullPadding, height / 2]
  ];

  return <path className={className} ref={dndDropRef} d={getHullPath(points, hullPadding)} filter={filter} />;
};

export default Rhombus;
