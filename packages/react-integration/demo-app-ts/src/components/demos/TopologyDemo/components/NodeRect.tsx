import * as React from 'react';
import { observer } from 'mobx-react';
import {
  Node,
  useSvgAnchor,
  WithDragNodeProps,
  WithSelectionProps,
  WithDndDragProps,
  WithDndDropProps,
  useCombineRefs
} from '@patternfly/react-topology';

type NodeRectProps = {
  element: Node;
  droppable?: boolean;
  hover?: boolean;
  canDrop?: boolean;
} & WithSelectionProps &
  WithDragNodeProps &
  WithDndDragProps &
  WithDndDropProps;

const NodeRect: React.FunctionComponent<NodeRectProps> = ({
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
  const refs = useCombineRefs<SVGRectElement>(dragNodeRef, dndDragRef, dndDropRef, anchorRef);
  const { width, height } = element.getDimensions();

  let fill = 'lightgrey';
  if (canDrop && hover) {
    fill = 'lightgreen';
  } else if (canDrop && droppable) {
    fill = 'lightblue';
  } else if (selected) {
    fill = 'blue';
  }

  return (
    <rect
      ref={refs}
      onClick={onSelect}
      x={0}
      y={0}
      width={Math.max(0, width) - 2}
      height={Math.max(0, height) - 2}
      fill={fill}
      strokeWidth={1}
      stroke="#333333"
    />
  );
};

export default observer(NodeRect);
