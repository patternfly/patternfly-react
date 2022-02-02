import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-components';
import { PointTuple } from '../../../types';
import { getHullPath, RHOMBUS_CORNER_RADIUS, ShapeProps } from './shapeUtils';
import { usePolygonAnchor } from '../../../behavior/usePolygonAnchor';

type RhombusProps = ShapeProps & {
  cornerRadius?: number;
};

const getRhombusPoints = (width: number, height: number, padding: number): PointTuple[] => [
  [width / 2, -padding],
  [width + padding, height / 2],
  [width / 2, height + padding],
  [-padding, height / 2]
];

const Rhombus: React.FC<RhombusProps> = ({
  className = css(styles.topologyNodeBackground),
  width,
  height,
  filter,
  cornerRadius = RHOMBUS_CORNER_RADIUS,
  dndDropRef
}) => {
  const [polygonPoints, points] = React.useMemo(() => {
    const polygonPoints: PointTuple[] = getRhombusPoints(width, height, cornerRadius / 2);

    return [
      polygonPoints,
      cornerRadius
        ? getHullPath(getRhombusPoints(width, height, -cornerRadius), cornerRadius)
        : polygonPoints.map(p => `${p[0]},${p[1]}`).join(' ')
    ];
  }, [cornerRadius, height, width]);

  usePolygonAnchor(polygonPoints);

  return cornerRadius ? (
    <path className={className} ref={dndDropRef} d={points} filter={filter} />
  ) : (
    <polygon className={className} ref={dndDropRef} points={points} filter={filter} />
  );
};

export default Rhombus;
