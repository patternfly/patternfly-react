import Point from '../geom/Point';

const getEllipseAnchorPoint = (center: Point, width: number, height: number, reference: Point): Point => {
  const { x, y } = reference;
  if (width === 0 || height === 0 || (center.x === x && center.y === y)) {
    return center;
  }

  const dispX = (center.x - x) / (width / 2);
  const dispY = (center.y - y) / (height / 2);

  const len = Math.sqrt(dispX * dispX + dispY * dispY);

  const newLength = len - 1;

  const lenProportion = newLength / len;

  return new Point((center.x - x) * lenProportion + x, (center.y - y) * lenProportion + y);
};

const getRectAnchorPoint = (center: Point, width: number, height: number, reference: Point): Point => {
  let dx = reference.x - center.x;
  let dy = reference.y - center.y;

  if ((dx === 0 && dy === 0) || (width === 0 && height === 0)) {
    return center;
  }

  const scale = 0.5 / Math.max(width === 0 ? 0 : Math.abs(dx) / width, height === 0 ? 0 : Math.abs(dy) / height);

  dx *= scale;
  dy *= scale;

  return center.clone().translate(dx, dy);
};

const svgPointToPoint = (p: SVGPoint): Point => new Point(p.x, p.y);

const distanceToPoint = (p: Point, reference: Point): number => {
  const dx = p.x - reference.x;
  const dy = p.y - reference.y;

  return dx * dx + dy * dy;
};

const isBetween = (a: number, b1: number, b2: number): boolean =>
  Math.ceil(a) >= Math.min(b1, b2) && Math.floor(a) <= Math.max(b1, b2);

const getLinesIntersection = (line1: [Point, Point], line2: [Point, Point]): Point | null => {
  const line1xDelta = line1[0].x - line1[1].x;
  const line1yDelta = line1[0].y - line1[1].y;
  const line2xDelta = line2[0].x - line2[1].x;
  const line2yDelta = line2[0].y - line2[1].y;

  const denominator = line1xDelta * line2yDelta - line1yDelta * line2xDelta;
  if (denominator === 0) {
    // parallel lines do not intersect
    return null;
  }

  const d1 = line1[0].x * line1[1].y - line1[0].y * line1[1].x;
  const d2 = line2[0].x * line2[1].y - line2[0].y * line2[1].x;
  const xValue = d1 * line2xDelta - line1xDelta * d2;
  const yValue = d1 * line2yDelta - d2 * line1yDelta;
  const intersection: Point = new Point(xValue / denominator, yValue / denominator);

  if (
    !isBetween(intersection.x, line1[0].x, line1[1].x) ||
    !isBetween(intersection.y, line1[0].y, line1[1].y) ||
    !isBetween(intersection.x, line2[0].x, line2[1].x) ||
    !isBetween(intersection.y, line2[0].y, line2[1].y)
  ) {
    // intersection is not in range
    return null;
  }

  return intersection;
};

const getPathIntersectionPoint = (pathNode: SVGPathElement, line: [Point, Point]): Point => {
  const pathLength = pathNode.getTotalLength();
  const numSegments = Math.min(Math.round(pathLength / 5), 100);
  for (let i = 0; i < numSegments; i++) {
    const pos1 = pathNode.getPointAtLength((pathLength * i) / numSegments);
    const pos2 = pathNode.getPointAtLength((pathLength * (i + 1)) / numSegments);
    const intersectPoint = getLinesIntersection([svgPointToPoint(pos1), svgPointToPoint(pos2)], line);
    if (intersectPoint) {
      return intersectPoint;
    }
  }

  // No intersection found, return the center point
  const pathBox = pathNode.getBBox();
  return new Point(pathBox.x + pathBox.width / 2, pathBox.y + pathBox.height / 2);
};

const getPathClosestPoint = (pathNode: SVGPathElement, reference: Point) => {
  const pathLength = pathNode.getTotalLength();
  let precision = 8;
  let best: SVGPoint = pathNode.getPointAtLength(0);
  let bestLength = 0;
  let bestDistance = Infinity;

  // linear scan for coarse approximation
  for (let scanLength = 0; scanLength <= pathLength; scanLength += precision) {
    const scan: SVGPoint = pathNode.getPointAtLength(scanLength);
    const scanDistance: number = distanceToPoint(svgPointToPoint(scan), reference);
    if (scanDistance < bestDistance) {
      best = scan;
      bestLength = scanLength;
      bestDistance = scanDistance;
    }
  }

  // binary search for precise estimate
  precision /= 2;
  while (precision > 0.5) {
    const beforeLength: number = bestLength - precision;

    const before: SVGPoint = pathNode.getPointAtLength(beforeLength);
    const beforeDistance: number = distanceToPoint(svgPointToPoint(before), reference);

    if (beforeLength >= 0 && beforeDistance < bestDistance) {
      best = before;
      bestLength = beforeLength;
      bestDistance = beforeDistance;
    } else {
      const afterLength: number = bestLength + precision;
      const after: SVGPoint = pathNode.getPointAtLength(afterLength);
      const afterDistance: number = distanceToPoint(svgPointToPoint(after), reference);

      if (afterLength <= pathLength && afterDistance < bestDistance) {
        best = after;
        bestLength = afterLength;
        bestDistance = afterDistance;
      } else {
        precision /= 2;
      }
    }
  }

  return svgPointToPoint(best);
};

const getPathAnchorPoint = (pathNode: SVGPathElement, reference: Point, useClosestPathPoint: boolean = false) => {
  if (useClosestPathPoint) {
    return getPathClosestPoint(pathNode, reference);
  }

  const pathBox = pathNode.getBBox();
  const pathCenter = new Point(pathBox.x + pathBox.width / 2, pathBox.y + pathBox.height / 2);
  return getPathIntersectionPoint(pathNode, [reference, pathCenter]);
};

const getPolygonAnchorPoint = (polygonNode: SVGPolygonElement, reference: Point) => {
  const polygonBox = polygonNode.getBBox();
  const polygonCenter = new Point(polygonBox.x + polygonBox.width / 2, polygonBox.y + polygonBox.height / 2);
  const { points } = polygonNode;
  let bestPoint: Point = polygonCenter;
  let bestDistance = Infinity;

  for (let i = 0; i < points.length; i++) {
    const intersectPoint: Point | null = getLinesIntersection(
      [svgPointToPoint(points[i]), svgPointToPoint(points[i === points.length - 1 ? 0 : i + 1])],
      [polygonCenter, reference]
    );
    if (intersectPoint) {
      const intersectDistance: number = distanceToPoint(intersectPoint, reference);
      if (intersectDistance < bestDistance) {
        bestPoint = intersectPoint;
        bestDistance = intersectDistance;
      }
    }
  }

  return bestPoint;
};

export { getEllipseAnchorPoint, getRectAnchorPoint, getPathAnchorPoint, getPolygonAnchorPoint };
