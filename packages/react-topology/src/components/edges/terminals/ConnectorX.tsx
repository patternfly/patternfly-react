import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-components';
import Point from '../../../geom/Point';
import { ConnectDragSource } from '../../../behavior/dnd-types';
import { getConnectorRotationAngle, getConnectorStartPoint } from './terminalUtils';

interface ConnectorXProps {
  startPoint: Point;
  endPoint: Point;
  className?: string;
  isTarget?: boolean;
  size?: number;
  dragRef?: ConnectDragSource;
}

const ConnectorX: React.FC<ConnectorXProps> = ({
  startPoint,
  endPoint,
  className = '',
  isTarget = true,
  size = 12,
  dragRef
}) => {
  if (!startPoint || !endPoint) {
    return null;
  }

  const connectorStartPoint = getConnectorStartPoint(startPoint, endPoint, size);
  const angleDeg = getConnectorRotationAngle(startPoint, endPoint);

  const classNames = css(styles.topologyConnectorX, className, !isTarget && styles.modifiers.source);

  const lines = React.useMemo(
    () => (
      <>
        <line x1={size / 2} y1={-size / 2} x2={size + size / 2} y2={size / 2} />
        <line x1={size / 2} y1={size / 2} x2={size + size / 2} y2={-size / 2} />
      </>
    ),
    [size]
  );

  return (
    <g
      transform={`translate(${connectorStartPoint[0]}, ${connectorStartPoint[1]}) rotate(${angleDeg})`}
      ref={dragRef}
      className={classNames}
    >
      {lines}
    </g>
  );
};

export default ConnectorX;
