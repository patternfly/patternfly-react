import * as React from 'react';
import { observer } from 'mobx-react';
import * as _ from 'lodash';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-components';
import { Edge, EdgeTerminalType } from '../../../types';
import { ConnectDragSource } from '../../../behavior/dnd-types';
import ConnectorArrow from './ConnectorArrow';
import ConnectorCross from './ConnectorCross';
import ConnectorSquare from './ConnectorSquare';
import ConnectorCircle from './ConnectorCircle';
import ConnectorX from './ConnectorX';
import ConnectorArrowAlt from './ConnectorArrowAlt';
import { Layer } from '../../layers';
import { CONNECTOR_ENDPOINT_LAYER } from '../../../const';

interface EdgeConnectorArrowProps {
  edge: Edge;
  className?: string;
  isTarget?: boolean;
  status?: string;
  terminalType?: EdgeTerminalType;
  size?: number;
  dragRef?: ConnectDragSource;
}

const DefaultConnectorTerminal: React.FC<EdgeConnectorArrowProps> = ({
  className,
  edge,
  isTarget = true,
  terminalType,
  ...others
}) => {
  if (!terminalType || terminalType === EdgeTerminalType.none) {
    return null;
  }
  const bendPoints = edge.getBendpoints();
  const startPoint = isTarget ? _.last(bendPoints) || edge.getStartPoint() : _.head(bendPoints) || edge.getEndPoint();
  const endPoint = isTarget ? edge.getEndPoint() : edge.getStartPoint();
  const classes = css(styles.topologyEdge, className);

  let Terminal;
  switch (terminalType) {
    case EdgeTerminalType.directional:
      Terminal = ConnectorArrow;
      break;
    case EdgeTerminalType.directionalAlt:
      Terminal = ConnectorArrowAlt;
      break;
    case EdgeTerminalType.cross:
      Terminal = ConnectorCross;
      break;
    case EdgeTerminalType.square:
      Terminal = ConnectorSquare;
      break;
    case EdgeTerminalType.circle:
      Terminal = ConnectorCircle;
      break;
    case EdgeTerminalType.x:
      Terminal = ConnectorX;
      break;
    default:
      return null;
  }
  return (
    <Layer id={CONNECTOR_ENDPOINT_LAYER}>
      <Terminal className={classes} startPoint={startPoint} endPoint={endPoint} isTarget={isTarget} {...others} />
    </Layer>
  );
};

export default observer(DefaultConnectorTerminal);
