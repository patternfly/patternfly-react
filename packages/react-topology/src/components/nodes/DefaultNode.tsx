import * as React from 'react';
import { observer } from 'mobx-react';
import { css } from '@patternfly/react-styles';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import styles from '@patternfly/react-styles/css/components/Topology/topology-components';
import { Node, NodeShape, NodeStatus } from '../../types';
import {
  useSvgAnchor,
  WithContextMenuProps,
  WithCreateConnectorProps,
  WithDndDragProps,
  WithDndDropProps,
  WithDragNodeProps,
  WithSelectionProps
} from '../../behavior';
import Decorator, { TopologyDecoratorQuadrant } from '../decorators/Decorator';
import { createSvgIdUrl, useCombineRefs, useHover, WithStatusProps } from '../../utils';
import { WithNodeShapeProps } from '../../utils/useCustomNodeShape';
import { LabelPosition, WithLabelProps } from '../../utils/useLabel';
import { WithBadgeProps } from '../../utils/useBadge';
import NodeLabel from './labels/NodeLabel';
import NodeShadows, { NODE_SHADOW_FILTER_ID_DANGER, NODE_SHADOW_FILTER_ID_HOVER } from './NodeShadows';
import { getShapeComponent } from './shapes';

const StatusClass = {
  [NodeStatus.default]: '',
  [NodeStatus.info]: 'pf-m-info',
  [NodeStatus.success]: 'pf-m-success',
  [NodeStatus.warning]: 'pf-m-warning',
  [NodeStatus.danger]: 'pf-m-danger'
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'danger':
      return <ExclamationCircleIcon className="pf-m-danger" />;
    case 'warning':
      return <ExclamationTriangleIcon className="pf-m-warning" />;
    case 'success':
      return <CheckCircleIcon className="pf-m-success" />;
    default:
      return null;
  }
};

type DefaultNodeProps = {
  element: Node;
  droppable?: boolean;
  hover?: boolean;
  canDrop?: boolean;
  dragging?: boolean;
  edgeDragging?: boolean;
  dropTarget?: boolean;
} & WithSelectionProps &
  WithLabelProps &
  WithStatusProps &
  WithBadgeProps &
  WithNodeShapeProps &
  WithDragNodeProps &
  WithDndDragProps &
  WithDndDropProps &
  WithCreateConnectorProps &
  WithContextMenuProps;

const DefaultNode: React.FC<DefaultNodeProps> = ({
  element,
  selected,
  hover,
  showLabel = true,
  label,
  labelPosition = LabelPosition.bottom,
  truncateLength,
  labelIconClass,
  showStatusDecorator = false,
  onStatusDecoratorClick,
  badge,
  badgeColor,
  badgeTextColor,
  badgeBorderColor,
  badgeClassName,
  getCustomShape,
  onSelect,
  dragNodeRef,
  dragging,
  edgeDragging,
  canDrop,
  dropTarget,
  dndDropRef,
  onHideCreateConnector,
  onShowCreateConnector,
  onContextMenu,
  contextMenuOpen
}) => {
  const [hovered, hoverRef] = useHover();
  const shape = element.getNodeShape();
  const status = element.getNodeStatus();
  const anchorRef = useSvgAnchor();
  const refs = useCombineRefs<SVGEllipseElement>(hoverRef, dragNodeRef);
  const { width, height } = element.getDimensions();
  const isHover = hover !== undefined ? hover : hovered;

  const groupClassName = css(
    styles.topologyNode,
    isHover && 'pf-m-hover',
    (dragging || edgeDragging) && 'pf-m-dragging',
    canDrop && dropTarget && 'pf-m-drop-target',
    selected && 'pf-m-selected',
    StatusClass[status]
  );

  let filter;
  if (status === 'danger') {
    filter = createSvgIdUrl(NODE_SHADOW_FILTER_ID_DANGER);
  } else if (isHover || dragging || edgeDragging || dropTarget) {
    filter = createSvgIdUrl(NODE_SHADOW_FILTER_ID_HOVER);
  }

  const statusDecorator = React.useMemo(() => {
    if (!status || !showStatusDecorator) {
      return null;
    }
    const icon = getStatusIcon(status);
    if (!icon) {
      return null;
    }

    const decoratorRadius = Math.min(width / 2, height / 2) * 0.25;
    return (
      <Decorator
        quadrant={TopologyDecoratorQuadrant.upperLeft}
        nodeCenterX={width / 2}
        nodeCenterY={height / 2}
        nodeRadius={shape === NodeShape.circle && width === height ? width / 2 : undefined}
        nodeWidth={width}
        nodeHeight={height}
        radius={decoratorRadius}
        showBackground={false}
        onClick={e => onStatusDecoratorClick(e, element)}
      >
        <g
          className="pf-topology__node__decorator__status"
          transform={`translate(-${decoratorRadius}, -${decoratorRadius})`}
        >
          {icon}
        </g>
      </Decorator>
    );
  }, [status, showStatusDecorator, width, height, shape, onStatusDecoratorClick, element]);

  const ShapeComponent = (getCustomShape && getCustomShape()) || getShapeComponent(shape) || null;

  return (
    <g className={groupClassName}>
      <NodeShadows />
      <g ref={refs}>
        {ShapeComponent && (
          <ShapeComponent
            className={css(styles.topologyNodeBackground)}
            element={element}
            width={width}
            height={height}
            onShowCreateConnector={onShowCreateConnector}
            onHideCreateConnector={onHideCreateConnector}
            onContextMenu={onContextMenu}
            onSelect={onSelect}
            dndDropRef={dndDropRef}
            anchorRef={anchorRef}
            filter={filter}
          />
        )}
        {statusDecorator}
        {showLabel && (label || element.getLabel()) && (
          <NodeLabel
            className={css(styles.topologyNodeLabel)}
            x={labelPosition === LabelPosition.right ? width + 8 : width / 2}
            y={labelPosition === LabelPosition.right ? height / 2 : height + 6}
            position={labelPosition}
            paddingX={8}
            paddingY={4}
            truncateLength={truncateLength}
            status={status}
            badge={badge}
            badgeColor={badgeColor}
            badgeTextColor={badgeTextColor}
            badgeBorderColor={badgeBorderColor}
            badgeClassName={badgeClassName}
            onContextMenu={onContextMenu}
            contextMenuOpen={contextMenuOpen}
            hover={isHover}
            labelIconClass={labelIconClass}
          >
            {label || element.getLabel()}
          </NodeLabel>
        )}
      </g>
    </g>
  );
};

export default observer(DefaultNode);
