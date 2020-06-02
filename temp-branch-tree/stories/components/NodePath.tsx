import * as React from 'react';
import { observer } from 'mobx-react';
import {
  Node,
  useSvgAnchor,
  WithDragNodeProps,
  WithSelectionProps,
  WithDndDragProps,
  WithDndDropProps,
  useCombineRefs,
} from '../../src';

type NodePathProps = {
  element: Node;
  droppable?: boolean;
  hover?: boolean;
  canDrop?: boolean;
} & WithSelectionProps &
  WithDragNodeProps &
  WithDndDragProps &
  WithDndDropProps;

const NodePath: React.FC<NodePathProps> = ({
  element,
  selected,
  onSelect,
  dragNodeRef,
  dndDragRef,
  droppable,
  hover,
  canDrop,
  dndDropRef,
}) => {
  const anchorRef = useSvgAnchor();
  const refs = useCombineRefs<SVGPathElement>(dragNodeRef, dndDragRef, dndDropRef, anchorRef);
  const { width, height } = element.getDimensions();

  return (
    <path
      ref={refs}
      onClick={onSelect}
      d={`M0 0 L${width / 2} ${height / 4} L${width} 0 L${width} ${height} L${width / 2} ${height -
        height / 4} L0 ${height} Z`}
      fill={
        canDrop && hover
          ? 'lightgreen'
          : canDrop && droppable
          ? 'lightblue'
          : selected
          ? 'blue'
          : 'grey'
      }
      strokeWidth={1}
      stroke="#333333"
    />
  );
};

export default observer(NodePath);
