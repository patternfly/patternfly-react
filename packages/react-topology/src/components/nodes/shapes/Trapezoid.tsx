import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-components';
import * as React from 'react';
import { PointTuple } from '../../../types';
import { getHullPath, TRAPEZOID_CORNER_RADIUS, ShapeProps } from './shapeUtils';
import { usePolygonAnchor } from '../../../behavior';

const TOP_INSET_AMOUNT = 1 / 8;

const getTrapezoidPoints = (width: number, height: number, padding: number, outline: boolean = false): PointTuple[] => {
  const yPadding = outline ? 0 : padding;
  const topXPadding = outline ? padding / 4 : padding;
  const bottomXPadding = outline ? -padding / 4 : padding;

  return [
    [width * TOP_INSET_AMOUNT + topXPadding, yPadding],
    [width - width * TOP_INSET_AMOUNT - topXPadding, yPadding],
    [width - bottomXPadding, height - yPadding],
    [bottomXPadding, height - yPadding]
  ];
};

type TrapezoidProps = ShapeProps & {
  cornerRadius?: number;
};

const Trapezoid: React.FunctionComponent<TrapezoidProps> = ({
  className = css(styles.topologyNodeBackground),
  width,
  height,
  filter,
  cornerRadius = TRAPEZOID_CORNER_RADIUS,
  dndDropRef
}) => {
  const [polygonPoints, points] = React.useMemo(() => {
    const polygonPoints: PointTuple[] = getTrapezoidPoints(width, height, cornerRadius, true);

    const path = cornerRadius
      ? getHullPath(getTrapezoidPoints(width, height, cornerRadius), cornerRadius)
      : polygonPoints.map(p => `${p[0]},${p[1]}`).join(' ');

    return [polygonPoints, path];
  }, [height, cornerRadius, width]);

  usePolygonAnchor(polygonPoints);

  return cornerRadius ? (
    <path className={className} ref={dndDropRef} d={points} filter={filter} />
  ) : (
    <polygon className={className} ref={dndDropRef} points={points} filter={filter} />
  );
};

export default Trapezoid;
