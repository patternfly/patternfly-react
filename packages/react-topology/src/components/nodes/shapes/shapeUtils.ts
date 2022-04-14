import * as React from 'react';
import { Node, NodeShape, PointTuple, TopologyQuadrant } from '../../../types';
import { polygonHull } from 'd3-polygon';
import { hullPath, pointTuplesToPath } from '../../../utils';
import { Ellipse, Hexagon, Octagon, Rectangle, Trapezoid, Rhombus, Stadium } from './index';

const TWO_PI = Math.PI * 2;

export const HEXAGON_CORNER_RADIUS = 6;
export const OCTAGON_CORNER_RADIUS = 4;
export const RHOMBUS_CORNER_RADIUS = 10;
export const TRAPEZOID_CORNER_RADIUS = 10;

export const LOWER_LEFT_RADIANS = (3 * Math.PI) / 4;
export const LOWER_RIGHT_RADIANS = Math.PI / 4;
export const UPPER_LEFT_RADIANS = (5 * Math.PI) / 4;
export const UPPER_RIGHT_RADIANS = (7 * Math.PI) / 4;

export const DEFAULT_DECORATOR_RADIUS = 12;
export const DEFAULT_DECORATOR_PADDING = 4;

export interface ShapeProps {
  className?: string;
  element: Node;
  width: number;
  height: number;
  filter?: string;
  sides?: number;
  cornerRadius?: number;
  dndDropRef?: (node: SVGElement | null) => void;
}

const quadrantRadians = (quadrant: TopologyQuadrant): number => {
  switch (quadrant) {
    case TopologyQuadrant.upperRight:
      return UPPER_RIGHT_RADIANS;
    case TopologyQuadrant.lowerRight:
      return LOWER_RIGHT_RADIANS;
    case TopologyQuadrant.upperLeft:
      return UPPER_LEFT_RADIANS;
    case TopologyQuadrant.lowerLeft:
      return LOWER_LEFT_RADIANS;
  }
  return UPPER_RIGHT_RADIANS;
};

export const getPointsForSides = (numSides: number, size: number, padding = 0): PointTuple[] => {
  const points: PointTuple[] = [];
  const angle = TWO_PI / numSides;
  const radius = size / 2;

  for (let point = 0; point < numSides; point++) {
    points.push([
      radius + (radius - padding) * Math.cos(angle * point),
      radius + (radius - padding) * Math.sin(angle * point)
    ]);
  }

  return points;
};

export const getHullPath = (points: PointTuple[], padding: number): string => {
  const hullPoints: PointTuple[] = polygonHull(points);
  return hullPath(hullPoints, padding);
};
export const getPathForSides = (numSides: number, size: number, padding = 0): string => {
  const points = getPointsForSides(numSides, size, padding);
  if (!padding) {
    return pointTuplesToPath(points);
  }

  return getHullPath(points, padding);
};

export const getShapeComponent = (node: Node): React.FunctionComponent<ShapeProps> => {
  switch (node.getNodeShape()) {
    case NodeShape.circle:
    case NodeShape.ellipse:
      return Ellipse;
    case NodeShape.stadium:
      return Stadium;
    case NodeShape.rhombus:
      return Rhombus;
    case NodeShape.trapezoid:
      return Trapezoid;
    case NodeShape.rect:
      return Rectangle;
    case NodeShape.hexagon:
      return Hexagon;
    case NodeShape.octagon:
      return Octagon;
    default:
      return Ellipse;
  }
};

export const getDefaultShapeDecoratorCenter = (quadrant: TopologyQuadrant, node: Node): { x: number; y: number } => {
  const { width, height } = node.getDimensions();
  const shape = node.getNodeShape();
  const nodeCenterX = width / 2;
  const nodeCenterY = height / 2;
  let deltaX = width / 2;
  let deltaY = height / 2;

  switch (shape) {
    case NodeShape.circle:
    case NodeShape.ellipse:
      return {
        x: nodeCenterX + Math.cos(quadrantRadians(quadrant)) * deltaX,
        y: nodeCenterY + Math.sin(quadrantRadians(quadrant)) * deltaY
      };
    case NodeShape.rect:
      break;
    case NodeShape.rhombus:
      deltaX = width / 3;
      deltaY = height / 3;
      break;
    case NodeShape.trapezoid:
      if (quadrant === TopologyQuadrant.upperRight || quadrant === TopologyQuadrant.upperLeft) {
        deltaX = deltaX * 0.875 - TRAPEZOID_CORNER_RADIUS;
      }
      break;
    case NodeShape.hexagon:
      deltaX = deltaX * 0.75 - HEXAGON_CORNER_RADIUS;
      deltaY = deltaY * 0.75;
      break;
    case NodeShape.octagon:
      deltaX = deltaX - OCTAGON_CORNER_RADIUS;
      deltaY = deltaY - height / 5;
      break;
    default:
      break;
  }

  switch (quadrant) {
    case TopologyQuadrant.upperRight:
      return {
        x: nodeCenterX + deltaX,
        y: nodeCenterY - deltaY
      };
    case TopologyQuadrant.lowerRight:
      return {
        x: nodeCenterX + deltaX,
        y: nodeCenterY + deltaY
      };
    case TopologyQuadrant.upperLeft:
      return {
        x: nodeCenterX - deltaX,
        y: nodeCenterY - deltaY
      };
    case TopologyQuadrant.lowerLeft:
      return {
        x: nodeCenterX - deltaX,
        y: nodeCenterY + deltaY
      };
    default:
      return {
        x: nodeCenterX,
        y: nodeCenterY
      };
  }
};
