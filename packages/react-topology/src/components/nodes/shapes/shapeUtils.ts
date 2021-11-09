import * as React from 'react';
import { NodeShape, PointTuple } from '../../../types';
import { polygonHull } from 'd3-polygon';
import { hullPath, ShapeProps } from '../../../utils';
import { Ellipse, Hexagon, Octagon, Rectangle, Triangle } from './index';

export const getPointsForSides = (numSides: number, width: number, height: number, padding: number): string => {
  const radius = width / 2 - padding;
  const points: PointTuple[] = [];
  const innerWidth = width - 2 * padding;
  const innerHeight = width - 2 * padding;

  for (let i = 0; i < numSides; i++) {
    const angleDegrees = (360 / numSides) * i - 180 / numSides;
    const angleRadians = (Math.PI / 180) * angleDegrees;
    points.push([
      padding + innerWidth / 2 + radius * Math.cos(angleRadians),
      padding + innerHeight / 2 + radius * Math.sin(angleRadians)
    ]);
  }

  const hullPoints: PointTuple[] = polygonHull(points);
  return hullPath(hullPoints, padding);
};

export const getShapeComponent = (shape: NodeShape): React.FC<ShapeProps> => {
  switch (shape) {
    case NodeShape.circle:
      return Ellipse;
    case NodeShape.triangle:
      return Triangle;
    case NodeShape.rect:
      return Rectangle;
    case NodeShape.hexagon:
      return Hexagon;
    case NodeShape.octagon:
      return Octagon;
    default:
      return null;
  }
};
