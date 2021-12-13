import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-components';
import Point from '../../../geom/Point';
import { ConnectDragSource } from '../../../behavior/dnd-types';
import { getConnectorRotationAngle, getConnectorStartPoint } from './terminalUtils';

interface ConnectorCrossProps {
  startPoint: Point;
  endPoint: Point;
  className?: string;
  isTarget?: boolean;
  size?: number;
  dragRef?: ConnectDragSource;
}

const ConnectorCross: React.FC<ConnectorCrossProps> = ({
  startPoint,
  endPoint,
  className = '',
  isTarget = true,
  size = 14,
  dragRef
}) => {
  if (!startPoint || !endPoint) {
    return null;
  }

  const connectorStartPoint = getConnectorStartPoint(startPoint, endPoint, size);
  const angleDeg = getConnectorRotationAngle(startPoint, endPoint);

  const classNames = css(styles.topologyConnectorCross, className, !isTarget && 'pf-m-source');
  const x = size / 4;
  const width = size / 4;
  const yDelta = size / 2;

  return (
    <g
      transform={`translate(${connectorStartPoint[0]}, ${connectorStartPoint[1]}) rotate(${angleDeg})`}
      ref={dragRef}
      className={classNames}
    >
      {isTarget ? (
        <>
          <line x1={x} y1={yDelta} x2={x} y2={-yDelta} />
          <line x1={x + width} y1={yDelta} x2={x + width} y2={-yDelta} />
        </>
      ) : (
        <rect x={x} y={-yDelta} width={width} height={size} />
      )}
    </g>
  );
};

export default ConnectorCross;
