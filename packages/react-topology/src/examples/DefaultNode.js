import * as React from 'react';
import { observer } from 'mobx-react';
import { useCombineRefs, useAnchor, EllipseAnchor } from '@patternfly/react-topology';

const DefaultNode = ({
  element,
  selected,
  onSelect,
  dragNodeRef,
  dndDragRef,
  droppable,
  hover,
  canDrop,
  dndDropRef,
  onContextMenu,
  onHideCreateConnector,
  onShowCreateConnector
}) => {
  useAnchor(EllipseAnchor);
  const refs = useCombineRefs(dragNodeRef, dndDragRef, dndDropRef);
  const { width, height } = element.getDimensions();

  return (
    <ellipse
      onMouseEnter={onShowCreateConnector}
      onMouseLeave={onHideCreateConnector}
      ref={refs}
      onContextMenu={onContextMenu}
      onClick={onSelect}
      cx={width / 2}
      cy={height / 2}
      rx={Math.max(0, width / 2 - 1)}
      ry={Math.max(0, height / 2 - 1)}
      fill={canDrop && hover ? 'lightgreen' : canDrop && droppable ? 'lightblue' : selected ? 'blue' : 'grey'}
      strokeWidth={1}
      stroke="#333333"
    />
  );
};

export default observer(DefaultNode);
