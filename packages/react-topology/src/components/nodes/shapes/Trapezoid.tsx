import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-components';
import * as React from 'react';
import { PointTuple } from '../../../types';
import { getHullPath, TRAPEZOID_HULL_PADDING, ShapeProps } from './shapeUtils';
import { usePolygonAnchor } from '../../../behavior';

type TrapezoidProps = ShapeProps & {
  hullPadding?: number;
};

const Trapezoid: React.FC<TrapezoidProps> = ({
  className = css(styles.topologyNodeBackground),
  width,
  height,
  filter,
  hullPadding = TRAPEZOID_HULL_PADDING,
  dndDropRef
}) => {
  const polygonPoints = React.useMemo(() => {
    const topInset = width / 8 + hullPadding / 2;
    if (!hullPadding) {
      const polygonPoints: PointTuple[] = [
        [topInset, 0],
        [width - topInset, 0],
        [width, height],
        [0, height]
      ];
      return polygonPoints;
    }
    const hullExcess = hullPadding / 2;
    const polygonPoints: PointTuple[] = [
      [-hullExcess + topInset, 0],
      [width - topInset + hullExcess, 0],
      [width + hullExcess, height],
      [-hullExcess, height]
    ];
    return polygonPoints;
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
    [width / 8 + (hullPadding || 4), hullPadding],
    [width * (7 / 8) - (hullPadding || 4), hullPadding],
    [width - hullPadding, height - hullPadding],
    [hullPadding, height - hullPadding]
  ];

  return <path className={className} ref={dndDropRef} d={getHullPath(points, hullPadding)} filter={filter} />;
};

export default Trapezoid;
