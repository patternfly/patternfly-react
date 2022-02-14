import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-components';
import Point from '../../../geom/Point';
import { ConnectDragSource } from '../../../behavior/dnd-types';
import ConnectorArrow from './ConnectorArrow';

interface ConnectorArrowAltProps {
  startPoint: Point;
  endPoint: Point;
  className?: string;
  isTarget?: boolean;
  size?: number;
  dragRef?: ConnectDragSource;
}

const ConnectorArrowAlt: React.FC<ConnectorArrowAltProps> = ({
  startPoint,
  endPoint,
  className = '',
  size,
  dragRef
}) => {
  const classes = css(className, styles.modifiers.altConnectorArrow);
  return (
    <ConnectorArrow startPoint={startPoint} endPoint={endPoint} className={classes} size={size} dragRef={dragRef} />
  );
};

export default ConnectorArrowAlt;
