import { Point, ShapeProps, useCombineRefs } from '@patternfly/react-topology';
import * as React from 'react';
import * as _ from 'lodash';

const Polygon: React.FC<ShapeProps> = ({
  className,
  width,
  height,
  filter,
  onShowCreateConnector,
  onHideCreateConnector,
  onSelect,
  onContextMenu,
  dndDropRef,
  anchorRef
}) => {
  const refs = useCombineRefs<SVGPolygonElement>(dndDropRef, anchorRef);
  const points: Point[] = [
    new Point(width / 2, 0),
    new Point(width - width / 8, height),
    new Point(0, height / 3),
    new Point(width, height / 3),
    new Point(width / 8, height)
  ];

  const p: string = _.reduce(
    points,
    (result: string, nextPoint: Point) => `${result}${nextPoint.x},${nextPoint.y} `,
    ''
  );

  return (
    <polygon
      className={className}
      onMouseEnter={onShowCreateConnector}
      onMouseLeave={onHideCreateConnector}
      onContextMenu={onContextMenu}
      onClick={onSelect}
      ref={refs}
      points={p}
      filter={filter}
    />
  );
};

export default Polygon;
