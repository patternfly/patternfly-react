import * as React from 'react';
import classNames from 'classnames';
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
  useHover,
  getShapeComponent,
  ShapeProps
} from '@patternfly/react-topology';

type DemoDefaultNodeProps = {
  element: Node;
  droppable?: boolean;
  canDrop?: boolean;
  getCustomShape?: (node: Node) => React.FunctionComponent<React.PropsWithChildren<ShapeProps>>;
} & WithSelectionProps &
  WithDragNodeProps &
  WithDndDragProps &
  WithDndDropProps &
  WithCreateConnectorProps &
  WithContextMenuProps;

const DemoDefaultNode: React.FunctionComponent<React.PropsWithChildren<DemoDefaultNodeProps>> = ({
  element,
  selected,
  onSelect,
  dragNodeRef,
  dndDragRef,
  canDrop,
  dndDropRef,
  getCustomShape,
  onHideCreateConnector,
  onShowCreateConnector,
  onContextMenu
}) => {
  const [hover, hoverRef] = useHover();
  const refs = useCombineRefs(hoverRef, dragNodeRef, dndDragRef);
  const { width, height } = element.getDimensions();

  const className = classNames('pf-ri-topology__node__background', {
    'pf-m-hover': canDrop && hover,
    'pf-m-selected': selected
  });
  const ShapeComponent = (getCustomShape && getCustomShape(element)) || getShapeComponent(element);

  React.useEffect(() => {
    if (hover) {
      onShowCreateConnector && onShowCreateConnector();
    } else {
      onHideCreateConnector && onHideCreateConnector();
    }
  }, [hover, onShowCreateConnector, onHideCreateConnector]);

  return (
    <g ref={refs} onClick={onSelect} onContextMenu={onContextMenu}>
      <ShapeComponent className={className} element={element} width={width} height={height} dndDropRef={dndDropRef} />
    </g>
  );
};

export default observer(DemoDefaultNode);
