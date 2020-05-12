import * as React from 'react';
import { Tooltip, TooltipPosition } from '@patternfly/react-core';
import TrashIcon from '@patternfly/react-icons/dist/js/icons/trash-icon';
import Point from '../geom/Point';

interface DefaultRemoveConnectorProps {
  startPoint: Point;
  endPoint: Point;
  onRemove(): void;
  size?: number;
}

/**
 * @param startPoint
 * @param endPoint
 */
function computeTooltipPosition(startPoint: Point, endPoint: Point): TooltipPosition {
  const angle = Math.abs((Math.atan2(endPoint.y - startPoint.y, endPoint.x - startPoint.x) * 180) / Math.PI);
  return angle < 135 && angle > 90
    ? TooltipPosition.left
    : angle > 45 && angle <= 90
    ? TooltipPosition.right
    : TooltipPosition.top;
}

const DefaultRemoveConnector: React.FC<DefaultRemoveConnectorProps> = ({
  startPoint,
  endPoint,
  onRemove,
  size = 14
}) => (
  <Tooltip content="Delete Connector" position={computeTooltipPosition(startPoint, endPoint)}>
    <g
      transform={`translate(${startPoint.x + (endPoint.x - startPoint.x) * 0.5}, ${startPoint.y +
        (endPoint.y - startPoint.y) * 0.5})`}
      onClick={e => {
        e.stopPropagation();
        onRemove();
      }}
    >
      <circle className="topology-connector__remove-bg" cx={0} cy={0} r={size} />
      <g transform={`translate(-${size / 2}, -${size / 2})`}>
        <TrashIcon className="topology-connector__remove-icon" style={{ fontSize: size }} alt="Delete Connector" />
      </g>
    </g>
  </Tooltip>
);

export default DefaultRemoveConnector;
