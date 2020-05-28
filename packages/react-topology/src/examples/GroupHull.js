import * as React from 'react';
import { observer } from 'mobx-react';
import { polygonHull } from 'd3-polygon';
import * as _ from 'lodash';
import {
  Layer,
  PointTuple,
  NodeStyle,
  NodeShape,
  useCombineRefs,
  maxPadding,
  hullPath,
  useAnchor,
  RectAnchor
} from '@patternfly/react-topology';

const GroupHull = ({
  element,
  children,
  selected,
  onSelect,
  dragNodeRef,
  dndDragRef,
  dndDropRef,
  hover,
  droppable,
  canDrop
}) => {
  const pathRef = React.useRef(null);
  const refs = useCombineRefs(dragNodeRef, dndDragRef, dndDropRef);
  useAnchor(RectAnchor);

  if (element.isCollapsed()) {
    const { width, height } = element.getBounds();
    return (
      <g>
        <rect
          ref={refs}
          x={0}
          y={0}
          width={width}
          height={height}
          rx={5}
          ry={5}
          fill={
            canDrop && hover
              ? 'lightgreen'
              : canDrop && droppable
              ? 'lightblue'
              : `${(element.getData() && element.getData().background) || '#ededed'}`
          }
          strokeWidth={2}
          stroke={selected ? 'blue' : '#cdcdcd'}
        />
      </g>
    );
  }

  if (!droppable || !pathRef.current) {
    const nodeChildren = element.getNodes();
    if (nodeChildren.length === 0) {
      return null;
    }
    const points = [];
    _.forEach(nodeChildren, c => {
      if (c.getNodeShape() === NodeShape.circle) {
        const { width, height } = c.getBounds();
        const { x, y } = c.getBounds().getCenter();
        const radius = Math.max(width, height) / 2;
        points.push([x, y, radius]);
      } else {
        // add all 4 corners
        const { width, height, x, y } = c.getBounds();
        points.push([x, y, 0]);
        points.push([x + width, y, 0]);
        points.push([x, y + height, 0]);
        points.push([x + width, y + height, 0]);
      }
    });
    const hullPoints = points.length > 2 ? polygonHull(points) : points;
    if (!hullPoints) {
      return null;
    }
    // cast to number and coerce
    const padding = maxPadding(element.getStyle().padding);
    const hullPadding = point => (point[2] || 0) + padding;
    // change the box only when not dragging
    pathRef.current = hullPath(hullPoints, hullPadding);
  }

  return (
    <Layer id="groups">
      <path
        ref={refs}
        onClick={onSelect}
        d={pathRef.current}
        fill={
          canDrop && hover
            ? 'lightgreen'
            : canDrop && droppable
            ? 'lightblue'
            : `${(element.getData() && element.getData().background) || '#ededed'}`
        }
        strokeWidth={2}
        stroke={selected ? 'blue' : '#cdcdcd'}
      />
      {children}
    </Layer>
  );
};

export default observer(GroupHull);
