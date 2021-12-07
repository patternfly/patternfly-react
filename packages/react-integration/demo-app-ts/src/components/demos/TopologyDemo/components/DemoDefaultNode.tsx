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
  useSvgAnchor,
  WithNodeShapeProps,
  useHover,
  getShapeComponent
} from '@patternfly/react-topology';

type DemoDefaultNodeProps = {
  element: Node;
  droppable?: boolean;
  canDrop?: boolean;
} & WithSelectionProps &
  WithDragNodeProps &
  WithDndDragProps &
  WithDndDropProps &
  WithCreateConnectorProps &
  WithContextMenuProps &
  WithNodeShapeProps;

const DemoDefaultNode: React.FC<DemoDefaultNodeProps> = ({
  element,
  selected,
  onSelect,
  dragNodeRef,
  dndDragRef,
  droppable,
  canDrop,
  dndDropRef,
  getCustomShape,
  onHideCreateConnector,
  onShowCreateConnector,
  onContextMenu
}) => {
  const [hover, hoverRef] = useHover();
  const refs = useCombineRefs(hoverRef, dragNodeRef, dndDragRef);
  const shape = element.getNodeShape();
  const anchorRef = useSvgAnchor();
  const { width, height } = element.getDimensions();

  const className = `pf-ri-topology__node__background${canDrop && hover ? ' pf-m-hover' : ''}${
    canDrop && droppable ? ' pf-m-droppable' : ''
  }${selected ? ' pf-m-selected' : ''}`;
  const ShapeComponent = getShapeComponent(shape, element, getCustomShape);

  React.useEffect(() => {
    if (hover) {
      onShowCreateConnector && onShowCreateConnector();
    } else {
      onHideCreateConnector && onHideCreateConnector();
    }
  }, [hover, onShowCreateConnector, onHideCreateConnector]);

  return (
    <g ref={refs} onClick={onSelect} onContextMenu={onContextMenu}>
      <ShapeComponent
        className={className}
        element={element}
        width={width}
        height={height}
        dndDropRef={dndDropRef}
        anchorRef={anchorRef}
      />
    </g>
  );
};

export default observer(DemoDefaultNode);
