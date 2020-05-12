import * as React from 'react';
import { observer } from 'mobx-react';
import * as _ from 'lodash';
import { Edge } from '../types';
import { ConnectDragSource } from '../behavior/dnd-types';
import ConnectorArrow from './ConnectorArrow';

interface EdgeConnectorArrowProps {
  edge: Edge;
  className?: string;
  isTarget?: boolean;
  size?: number;
  dragRef?: ConnectDragSource;
}

const EdgeConnectorArrow: React.FC<EdgeConnectorArrowProps> = ({ edge, isTarget = true, ...others }) => {
  const bendPoints = edge.getBendpoints();
  const startPoint = isTarget ? _.last(bendPoints) || edge.getStartPoint() : _.head(bendPoints) || edge.getEndPoint();
  const endPoint = isTarget ? edge.getEndPoint() : edge.getStartPoint();
  return <ConnectorArrow startPoint={startPoint} endPoint={endPoint} {...others} />;
};

export default observer(EdgeConnectorArrow);
