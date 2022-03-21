import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-components';
import Point from '../../../geom/Point';
import { ConnectDragSource } from '../../../behavior/dnd-types';
import { getConnectorRotationAngle, getConnectorStartPoint } from './terminalUtils';

interface ConnectorSquareProps {
  startPoint: Point;
  endPoint: Point;
  className?: string;
  isTarget?: boolean;
  size?: number;
  dragRef?: ConnectDragSource;
}

const ConnectorSquare: React.FC<ConnectorSquareProps> = ({
  startPoint,
  endPoint,
  className = '',
  isTarget = true,
  size = 18,
  dragRef
}) => {
  if (!startPoint || !endPoint) {
    return null;
  }

  const connectorStartPoint = getConnectorStartPoint(startPoint, endPoint, size);
  const angleDeg = getConnectorRotationAngle(startPoint, endPoint);
  const classNames = css(
    styles.topologyConnectorArrow,
    styles.topologyConnectorSquare,
    !isTarget && styles.modifiers.source,
    className,
    dragRef && 'pf-m-draggable'
  );

  return (
    <g
      transform={`translate(${connectorStartPoint[0]}, ${connectorStartPoint[1]}) rotate(${angleDeg})`}
      ref={dragRef}
      className={classNames}
    >
      <rect x={size / 2} y={-size / 4} width={size / 2} height={size / 2} />
    </g>
  );
};

export default ConnectorSquare;
