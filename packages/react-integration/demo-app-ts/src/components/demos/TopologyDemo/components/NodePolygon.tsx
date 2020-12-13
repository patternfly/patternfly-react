import * as React from 'react';
import { observer } from 'mobx-react';
import * as _ from 'lodash';
import {
  Node,
  useSvgAnchor,
  WithDragNodeProps,
  WithSelectionProps,
  WithDndDragProps,
  WithDndDropProps,
  useCombineRefs,
  Point
} from '@patternfly/react-topology';

type NodePolygonProps = {
  element: Node;
  droppable?: boolean;
  hover?: boolean;
  canDrop?: boolean;
} & WithSelectionProps &
  WithDragNodeProps &
  WithDndDragProps &
  WithDndDropProps;

const NodePolygon: React.FC<NodePolygonProps> = ({
  element,
  selected,
  onSelect,
  dragNodeRef,
  dndDragRef,
  droppable,
  hover,
  canDrop,
  dndDropRef
}) => {
  const anchorRef = useSvgAnchor();
  const refs = useCombineRefs<SVGPolygonElement>(dragNodeRef, dndDragRef, dndDropRef, anchorRef);
  const { width, height } = element.getDimensions();

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

  let fill = 'grey';
  if (canDrop && hover) {
    fill = 'lightgreen';
  } else if (canDrop && droppable) {
    fill = 'lightblue';
  } else if (selected) {
    fill = 'blue';
  }

  return <polygon ref={refs} onClick={onSelect} points={p} fill={fill} strokeWidth={1} stroke="#333333" />;
};

export default observer(NodePolygon);
