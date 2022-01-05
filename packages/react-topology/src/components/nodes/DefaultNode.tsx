import * as React from 'react';
import { observer } from 'mobx-react';
import { css } from '@patternfly/react-styles';
import { Tooltip, TooltipPosition } from '@patternfly/react-core';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import styles from '@patternfly/react-styles/css/components/Topology/topology-components';
import { LabelPosition, Node, TopologyQuadrant, BadgeLocation, GraphElement } from '../../types';
import {
  WithContextMenuProps,
  WithCreateConnectorProps,
  WithDndDragProps,
  WithDndDropProps,
  WithDragNodeProps,
  WithSelectionProps
} from '../../behavior';
import Decorator from '../decorators/Decorator';
import { createSvgIdUrl, useCombineRefs, useHover, WithNodeShapeProps, StatusModifier } from '../../utils';
import NodeLabel from './labels/NodeLabel';
import NodeShadows, { NODE_SHADOW_FILTER_ID_DANGER, NODE_SHADOW_FILTER_ID_HOVER } from './NodeShadows';
import {
  DEFAULT_DECORATOR_RADIUS,
  getDefaultShapeDecoratorCenter,
  getShapeComponent,
  getShapeParameters
} from './shapes';

const StatusQuadrant = TopologyQuadrant.upperLeft;

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
  label?: string; // Defaults to element.getLabel()
  secondaryLabel?: string;
  showLabel?: boolean; // Defaults to true
  labelPosition?: LabelPosition; // Defaults to bottom
  truncateLength?: number; // Defaults to 13
  labelIconClass?: string; // Icon to show in label
  labelIconPadding?: number;
  badge?: string;
  badgeColor?: string;
  badgeTextColor?: string;
  badgeBorderColor?: string;
  badgeClassName?: string;
  badgeLocation?: BadgeLocation;
  attachments?: React.ReactNode; // ie. decorators
  showStatusDecorator?: boolean;
  statusDecoratorTooltip?: React.ReactNode;
  onStatusDecoratorClick?: (event: React.MouseEvent<SVGGElement, MouseEvent>, element: GraphElement) => void;
} & WithSelectionProps &
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
  attachments,
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
  const refs = useCombineRefs<SVGEllipseElement>(hoverRef, dragNodeRef);
  const { width, height } = element.getDimensions();
  const isHover = hover !== undefined ? hover : hovered;

  const groupClassName = css(
    styles.topologyNode,
    isHover && 'pf-m-hover',
    (dragging || edgeDragging) && 'pf-m-dragging',
    canDrop && dropTarget && 'pf-m-drop-target',
    selected && 'pf-m-selected',
    StatusModifier[status]
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
        icon={<g className={css(styles.topologyNodeDecoratorStatus)}>{icon}</g>}
      />
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
      {attachments}
    </g>
  );
};

export default observer(DefaultNode);
