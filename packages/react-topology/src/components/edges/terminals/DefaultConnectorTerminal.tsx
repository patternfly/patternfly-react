import * as React from 'react';
import { observer } from 'mobx-react';
import * as _ from 'lodash';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-components';
import { Edge, EdgeTerminalType, NodeStatus } from '../../../types';
import { ConnectDragSource } from '../../../behavior/dnd-types';
import ConnectorArrow from './ConnectorArrow';
import ConnectorCross from './ConnectorCross';
import ConnectorSquare from './ConnectorSquare';
import ConnectorCircle from './ConnectorCircle';
import ConnectorArrowAlt from './ConnectorArrowAlt';
import { StatusModifier } from '../../../utils';

interface EdgeConnectorArrowProps {
  edge: Edge;
  className?: string;
  highlight?: boolean;
  isTarget?: boolean;
  status?: NodeStatus;
  terminalType?: EdgeTerminalType;
  size?: number;
  dragRef?: ConnectDragSource;
}

const DefaultConnectorTerminal: React.FunctionComponent<EdgeConnectorArrowProps> = ({
  className,
  edge,
  isTarget = true,
  terminalType,
  status,
  ...others
}) => {
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
    default:
      return null;
  }
  if (!Terminal) {
    return null;
  }
  const bendPoints = edge.getBendpoints();
  const startPoint = isTarget ? _.last(bendPoints) || edge.getStartPoint() : _.head(bendPoints) || edge.getEndPoint();
  const endPoint = isTarget ? edge.getEndPoint() : edge.getStartPoint();
  const classes = css(styles.topologyEdge, className, StatusModifier[status]);

  return <Terminal className={classes} startPoint={startPoint} endPoint={endPoint} isTarget={isTarget} {...others} />;
};

export default observer(DefaultConnectorTerminal);
