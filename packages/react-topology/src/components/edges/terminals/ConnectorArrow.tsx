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

const ConnectorArrow: React.FunctionComponent<ConnectorArrowProps> = ({
  startPoint,
  endPoint,
  className = '',
  size = 14,
  dragRef
}) => {
  const polygonPoints = React.useMemo(
    () =>
      pointsStringFromPoints([
        [0, size / 2],
        [0, -size / 2],
        [size, 0]
      ]),
    [size]
  );

  const boundingPoints = React.useMemo(() => {
    if (startPoint || !endPoint) {
      return null;
    }
    return pointsStringFromPoints(getConnectorBoundingBox(startPoint, endPoint, size));
  }, [endPoint, size, startPoint]);

  if (!startPoint || !endPoint) {
    return null;
  }

  const connectorStartPoint = getConnectorStartPoint(startPoint, endPoint, size);
  const angleDeg = getConnectorRotationAngle(startPoint, endPoint);

  const classNames = css(styles.topologyConnectorArrow, className, dragRef && 'pf-m-draggable');

  return (
    <g
      transform={`translate(${connectorStartPoint[0]}, ${connectorStartPoint[1]}) rotate(${angleDeg})`}
      ref={dragRef}
      className={classNames}
    >
      <polygon points={polygonPoints} />
      <polygon points={boundingPoints} fillOpacity={0} strokeWidth={0} />
    </g>
  );
};

export default ConnectorArrow;
