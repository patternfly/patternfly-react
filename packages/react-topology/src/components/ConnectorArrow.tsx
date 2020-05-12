import * as React from 'react';
import classNames from 'classnames';
import * as _ from 'lodash';
import Point from '../geom/Point';
import { ConnectDragSource } from '../behavior/dnd-types';

interface ConnectorArrowProps {
  startPoint: Point;
  endPoint: Point;
  className?: string;
  isTarget?: boolean;
  size?: number;
  dragRef?: ConnectDragSource;
}

const pointsStringFromPoints = (points: [number, number][]): string =>
  _.reduce(points, (result: string, nextPoint: [number, number]) => `${result} ${nextPoint[0]},${nextPoint[1]}`, '');

const ConnectorArrow: React.FC<ConnectorArrowProps> = ({
  startPoint,
  endPoint,
  className = '',
  isTarget = true,
  size = 10,
  dragRef
}) => {
  if (!startPoint || !endPoint) {
    return null;
  }
  const arrowEndPoint: [number, number] = isTarget ? [endPoint.x, endPoint.y] : [startPoint.x, startPoint.y];
  const prevPoint: [number, number] = isTarget ? [startPoint.x, startPoint.y] : [endPoint.x, endPoint.y];

  const length = Math.sqrt((arrowEndPoint[0] - prevPoint[0]) ** 2 + (arrowEndPoint[1] - prevPoint[1]) ** 2);
  if (!length) {
    return null;
  }

  const ratio = (length - size) / length;
  const arrowStartPoint: [number, number] = [
    prevPoint[0] + (arrowEndPoint[0] - prevPoint[0]) * ratio,
    prevPoint[1] + (arrowEndPoint[1] - prevPoint[1]) * ratio
  ];

  const arrowPoints: [number, number][] = [[0, size / 2], [0, -size / 2], [size, 0]];
  const padding = Math.max(size, 8);
  const deltaY = padding / 2;
  const boundingBox: [number, number][] = [[0, -deltaY], [padding, -deltaY], [padding, deltaY], [0, deltaY]];

  const angleDeg = 180 - (Math.atan2(arrowEndPoint[1] - prevPoint[1], prevPoint[0] - arrowEndPoint[0]) * 180) / Math.PI;

  return (
    <g
      transform={`translate(${arrowStartPoint[0]}, ${arrowStartPoint[1]}) rotate(${angleDeg})`}
      ref={dragRef}
      className={classNames('pf-topology-connector-arrow', className)}
    >
      <polygon points={pointsStringFromPoints(arrowPoints)} />
      <polygon points={pointsStringFromPoints(boundingBox)} fillOpacity={0} strokeWidth={0} />
    </g>
  );
};

export default ConnectorArrow;
