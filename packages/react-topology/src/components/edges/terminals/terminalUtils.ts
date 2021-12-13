import { Point } from '../../../geom';

export const getConnectorStartPoint = (startPoint: Point, endPoint: Point, size: number): [number, number] => {
  const length = Math.sqrt((endPoint.x - startPoint.x) ** 2 + (endPoint.y - startPoint.y) ** 2);
  if (!length) {
    return [0, 0];
  }
  const ratio = (length - size) / length;

  return [startPoint.x + (endPoint.x - startPoint.x) * ratio, startPoint.y + (endPoint.y - startPoint.y) * ratio];
};

export const getConnectorRotationAngle = (startPoint: Point, endPoint: Point): number =>
  180 - (Math.atan2(endPoint.y - startPoint.y, startPoint.x - endPoint.x) * 180) / Math.PI;

export const getConnectorBoundingBox = (startPoint: Point, endPoint: Point, size: number): [number, number][] => {
  const length = Math.sqrt((endPoint.x - startPoint.x) ** 2 + (endPoint.y - startPoint.y) ** 2);
  if (!length) {
    return null;
  }

  const padding = Math.max(size, 8);
  const deltaY = padding / 2;
  return [
    [0, -deltaY],
    [padding, -deltaY],
    [padding, deltaY],
    [0, deltaY]
  ];
};
