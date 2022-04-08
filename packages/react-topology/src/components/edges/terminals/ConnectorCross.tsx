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

const ConnectorCross: React.FunctionComponent<ConnectorCrossProps> = ({
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

  const width = size / 4;
  const yDelta = size / 2;
  const connectorStartPoint = getConnectorStartPoint(startPoint, endPoint, size);
  const angleDeg = getConnectorRotationAngle(startPoint, endPoint);

  const classNames = css(
    styles.topologyConnectorArrow,
    styles.topologyConnectorCross,
    className,
    !isTarget && 'pf-m-source',
    dragRef && 'pf-m-draggable'
  );

  return (
    <g
      transform={`translate(${connectorStartPoint[0]}, ${connectorStartPoint[1]}) rotate(${angleDeg})`}
      ref={dragRef}
      className={classNames}
    >
      <rect x={0} y={-yDelta} width={size} height={size} fillOpacity={0} strokeOpacity={0} />
      {isTarget ? (
        <>
          <line x1={width} y1={yDelta} x2={width} y2={-yDelta} />
          <line x1={2 * width} y1={yDelta} x2={2 * width} y2={-yDelta} />
        </>
      ) : (
        <rect x={width} y={-yDelta} width={width} height={size} />
      )}
    </g>
  );
};

export default ConnectorCross;
