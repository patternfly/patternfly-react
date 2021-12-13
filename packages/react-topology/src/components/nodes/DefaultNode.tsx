import * as React from 'react';
import { observer } from 'mobx-react';
import { css } from '@patternfly/react-styles';
import { Tooltip, TooltipPosition } from '@patternfly/react-core';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import styles from '@patternfly/react-styles/css/components/Topology/topology-components';
import { Node, NodeStatus, TopologyQuadrant } from '../../types';
import {
  useSvgAnchor,
  WithContextMenuProps,
  WithCreateConnectorProps,
  WithDndDragProps,
  WithDndDropProps,
  WithDragNodeProps,
  WithSelectionProps
} from '../../behavior';
import Decorator from '../decorators/Decorator';
import {
  createSvgIdUrl,
  useCombineRefs,
  useHover,
  WithBadgeProps,
  WithStatusProps,
  WithNodeShapeProps,
  LabelPosition,
  WithLabelProps
} from '../../utils';
import NodeLabel from './labels/NodeLabel';
import NodeShadows, { NODE_SHADOW_FILTER_ID_DANGER, NODE_SHADOW_FILTER_ID_HOVER } from './NodeShadows';
import {
  DEFAULT_DECORATOR_RADIUS,
  getDefaultShapeDecoratorCenter,
  getShapeComponent,
  getShapeParameters
} from './shapes';

const StatusQuadrant = TopologyQuadrant.upperLeft;

const StatusClass = {
  [NodeStatus.default]: '',
  [NodeStatus.info]: 'pf-m-info',
  [NodeStatus.success]: 'pf-m-success',
  [NodeStatus.warning]: 'pf-m-warning',
  [NodeStatus.danger]: 'pf-m-danger'
};

const getStatusIcon = (status: string, height: number) => {
  switch (status) {
    case 'danger':
      return <ExclamationCircleIcon height={height} width={height} className="pf-m-danger" />;
    case 'warning':
      return <ExclamationTriangleIcon height={height} width={height} className="pf-m-warning" />;
    case 'success':
      return <CheckCircleIcon height={height} width={height} className="pf-m-success" />;
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
  secondaryLabel,
  labelPosition = LabelPosition.bottom,
  truncateLength,
  labelIconClass,
  showStatusDecorator = false,
  statusDecoratorTooltip,
  getShapeDecoratorCenter,
  onStatusDecoratorClick,
  badge,
  badgeColor,
  badgeTextColor,
  badgeBorderColor,
  badgeClassName,
  badgeLocation,
  getCustomShape,
  onSelect,
  children,
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
    const icon = getStatusIcon(status, DEFAULT_DECORATOR_RADIUS * 2);
    if (!icon) {
      return null;
    }

    const { x, y } = getShapeDecoratorCenter
      ? getShapeDecoratorCenter(StatusQuadrant, element, DEFAULT_DECORATOR_RADIUS)
      : getDefaultShapeDecoratorCenter(StatusQuadrant, element, DEFAULT_DECORATOR_RADIUS);

    const decorator = (
      <Decorator
        x={x}
        y={y}
        radius={DEFAULT_DECORATOR_RADIUS}
        showBackground={false}
        onClick={e => onStatusDecoratorClick(e, element)}
      >
        <g
          className="pf-topology__node__decorator__status pf-topology__node__decorator__bg"
          transform={`translate(-${DEFAULT_DECORATOR_RADIUS}, -${DEFAULT_DECORATOR_RADIUS})`}
        >
          {icon}
        </g>
      </Decorator>
    );

    if (statusDecoratorTooltip) {
      return (
        <Tooltip content={statusDecoratorTooltip} position={TooltipPosition.left}>
          {decorator}
        </Tooltip>
      );
    }

    return decorator;
  }, [status, showStatusDecorator, getShapeDecoratorCenter, element, statusDecoratorTooltip, onStatusDecoratorClick]);

  React.useEffect(() => {
    if (isHover) {
      onShowCreateConnector && onShowCreateConnector();
    } else {
      onHideCreateConnector && onHideCreateConnector();
    }
  }, [isHover, onShowCreateConnector, onHideCreateConnector]);

  const ShapeComponent = getShapeComponent(shape, element, getCustomShape);

  return (
    <g className={groupClassName}>
      <NodeShadows />
      <g ref={refs} onClick={onSelect} onContextMenu={onContextMenu}>
        {ShapeComponent && (
          <ShapeComponent
            className={css(styles.topologyNodeBackground)}
            element={element}
            width={width}
            height={height}
            {...getShapeParameters(shape)}
            dndDropRef={dndDropRef}
            anchorRef={anchorRef}
            filter={filter}
          />
        )}
        {showLabel && (label || element.getLabel()) && (
          <NodeLabel
            className={css(styles.topologyNodeLabel)}
            x={labelPosition === LabelPosition.right ? width + 8 : width / 2}
            y={labelPosition === LabelPosition.right ? height / 2 : height + 6}
            position={labelPosition}
            paddingX={8}
            paddingY={4}
            secondaryLabel={secondaryLabel}
            truncateLength={truncateLength}
            status={status}
            badge={badge}
            badgeColor={badgeColor}
            badgeTextColor={badgeTextColor}
            badgeBorderColor={badgeBorderColor}
            badgeClassName={badgeClassName}
            badgeLocation={badgeLocation}
            onContextMenu={onContextMenu}
            contextMenuOpen={contextMenuOpen}
            hover={isHover}
            labelIconClass={labelIconClass}
          >
            {label || element.getLabel()}
          </NodeLabel>
        )}
        {children}
      </g>
      {statusDecorator}
    </g>
  );
};

export default observer(DefaultNode);
