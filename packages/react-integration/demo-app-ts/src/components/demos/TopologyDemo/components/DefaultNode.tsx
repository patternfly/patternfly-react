import * as React from 'react';
import { observer } from 'mobx-react';
import {
  WithCreateConnectorProps,
  Node,
  WithContextMenuProps,
  WithDragNodeProps,
  WithSelectionProps,
  WithDndDragProps,
  WithDndDropProps,
  useCombineRefs,
  useAnchor,
  EllipseAnchor
} from '@patternfly/react-topology';

type NodeProps = {
  element: Node;
  droppable?: boolean;
  hover?: boolean;
  canDrop?: boolean;
} & WithSelectionProps &
  WithDragNodeProps &
  WithDndDragProps &
  WithDndDropProps &
  WithCreateConnectorProps &
  WithContextMenuProps;

const DefaultNode: React.FC<NodeProps> = ({
  element,
  selected,
  onSelect,
  dragNodeRef,
  dndDragRef,
  droppable,
  hover,
  canDrop,
  dndDropRef,
  onHideCreateConnector,
  onShowCreateConnector,
  onContextMenu
}) => {
  useAnchor(EllipseAnchor);
  const refs = useCombineRefs<SVGEllipseElement>(dragNodeRef, dndDragRef, dndDropRef);
  const { width, height } = element.getDimensions();

  let fill = 'grey';
  if (canDrop && hover) {
    fill = 'lightgreen';
  } else if (canDrop && droppable) {
    fill = 'lightblue';
  } else if (selected) {
    fill = 'blue';
  }

  return (
    <ellipse
      onMouseEnter={onShowCreateConnector}
      onMouseLeave={onHideCreateConnector}
      onContextMenu={onContextMenu}
      ref={refs}
      onClick={onSelect}
      cx={width / 2}
      cy={height / 2}
      rx={Math.max(0, width / 2 - 1)}
      ry={Math.max(0, height / 2 - 1)}
      fill={fill}
      strokeWidth={1}
      stroke="#333333"
    />
  );
};

export default observer(DefaultNode);
