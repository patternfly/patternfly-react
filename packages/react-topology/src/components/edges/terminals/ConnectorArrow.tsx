import * as React from 'react';
import * as _ from 'lodash';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-components';
import Point from '../../../geom/Point';
import { ConnectDragSource } from '../../../behavior/dnd-types';
import { getConnectorStartPoint, getConnectorRotationAngle, getConnectorBoundingBox } from './terminalUtils';

interface ConnectorArrowProps {
  startPoint: Point;
  endPoint: Point;
  className?: string;
  isTarget?: boolean;
  size?: number;
  dragRef?: ConnectDragSource;
}

const pointsStringFromPoints = (points: [number, number][]): string =>
  _.reduce(points, (result: string, nextPoint: [number, number]) => `${result} ${nextPoint[0]},${nextPoint[1]}`, '');

const ConnectorArrow: React.FC<ConnectorArrowProps> = ({
  startPoint,
  endPoint,
  className = '',
  size = 14,
  dragRef
}) => {
  if (!startPoint || !endPoint) {
    return null;
  }

  const connectorStartPoint = getConnectorStartPoint(startPoint, endPoint, size);
  const boundingBox = getConnectorBoundingBox(startPoint, endPoint, size);
  const angleDeg = getConnectorRotationAngle(startPoint, endPoint);

  const arrowPolygon = React.useMemo(() => {
    const arrowPoints: [number, number][] = [
      [size / 2, size / 2],
      [size / 2, -size / 2],
      [size, 0]
    ];
    return <polygon points={pointsStringFromPoints(arrowPoints)} />;
  }, [size]);

  return (
    <g
      transform={`translate(${connectorStartPoint[0]}, ${connectorStartPoint[1]}) rotate(${angleDeg})`}
      ref={dragRef}
      className={css(styles.topologyConnectorArrow, className)}
    >
      {arrowPolygon}
      <polygon points={pointsStringFromPoints(boundingBox)} fillOpacity={0} strokeWidth={0} />
    </g>
  );
};

export default ConnectorArrow;
