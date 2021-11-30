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
  WithNodeShapeProps
} from '@patternfly/react-topology';
import { getShapeComponent } from '@patternfly/react-topology/dist/esm/components/nodes/shapes';

type DemoDefaultNodeProps = {
  element: Node;
  droppable?: boolean;
  hover?: boolean;
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
  hover,
  canDrop,
  dndDropRef,
  getCustomShape,
  onHideCreateConnector,
  onShowCreateConnector,
  onContextMenu
}) => {
  const shape = element.getNodeShape();
  const anchorRef = useSvgAnchor();
  const refs = useCombineRefs<SVGEllipseElement>(dragNodeRef, dndDragRef, dndDropRef);
  const { width, height } = element.getDimensions();

  const className = `pf-ri-topology__node__background${canDrop && hover ? ' pf-m-hover' : ''}${
    canDrop && droppable ? ' pf-m-droppable' : ''
  }${selected ? ' pf-m-selected' : ''}`;
  const ShapeComponent = getShapeComponent(shape, element, getCustomShape);

  return (
    <ShapeComponent
      className={className}
      element={element}
      width={width}
      height={height}
      onShowCreateConnector={onShowCreateConnector}
      onHideCreateConnector={onHideCreateConnector}
      onContextMenu={onContextMenu}
      onSelect={onSelect}
      dndDropRef={refs}
      anchorRef={anchorRef}
    />
  );
};

export default observer(DemoDefaultNode);
