import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-components';
import Point from '../../../geom/Point';
import { ConnectDragSource } from '../../../behavior/dnd-types';
import { getConnectorStartPoint } from './terminalUtils';

interface ConnectorCircleProps {
  startPoint: Point;
  endPoint: Point;
  className?: string;
  isTarget?: boolean;
  size?: number;
  dragRef?: ConnectDragSource;
}

const ConnectorCircle: React.FunctionComponent<ConnectorCircleProps> = ({
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

  const connectorStartPoint = getConnectorStartPoint(startPoint, endPoint, size / 2); // add stroke width rather than rotating
  const classNames = css(
    styles.topologyConnectorArrow,
    styles.topologyConnectorCircle,
    className,
    !isTarget && styles.modifiers.source,
    dragRef && 'pf-m-draggable'
  );

  return (
    <g
      transform={`translate(${connectorStartPoint[0]}, ${connectorStartPoint[1]})`}
      ref={dragRef}
      className={classNames}
    >
      <circle cx={0} cy={0} r={size / 2} />
    </g>
  );
};

export default ConnectorCircle;
