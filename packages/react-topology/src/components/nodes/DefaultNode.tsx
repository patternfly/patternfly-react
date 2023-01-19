import * as React from 'react';
import { observer } from 'mobx-react';
import { css } from '@patternfly/react-styles';
import { Tooltip, TooltipPosition } from '@patternfly/react-core';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import styles from '@patternfly/react-styles/css/components/Topology/topology-components';
import { BadgeLocation, GraphElement, LabelPosition, Node, NodeStatus, TopologyQuadrant } from '../../types';
import {
  WithContextMenuProps,
  WithCreateConnectorProps,
  WithDndDragProps,
  WithDndDropProps,
  WithDragNodeProps,
  WithSelectionProps
} from '../../behavior';
import Decorator from '../decorators/Decorator';
import { createSvgIdUrl, StatusModifier, useCombineRefs, useHover } from '../../utils';
import NodeLabel from './labels/NodeLabel';
import NodeShadows, { NODE_SHADOW_FILTER_ID_DANGER, NODE_SHADOW_FILTER_ID_HOVER } from './NodeShadows';
import { DEFAULT_DECORATOR_RADIUS, getDefaultShapeDecoratorCenter, getShapeComponent, ShapeProps } from './shapes';

const StatusQuadrant = TopologyQuadrant.upperLeft;

const getStatusIcon = (status: NodeStatus) => {
  switch (status) {
    case NodeStatus.danger:
      return <ExclamationCircleIcon className="pf-m-danger" />;
    case NodeStatus.warning:
      return <ExclamationTriangleIcon className="pf-m-warning" />;
    case NodeStatus.success:
      return <CheckCircleIcon className="pf-m-success" />;
    default:
      return null;
  }
};

type DefaultNodeProps = {
  children?: React.ReactNode;
  className?: string;
  element: Node;
  droppable?: boolean;
  hover?: boolean;
  canDrop?: boolean;
  dragging?: boolean;
  edgeDragging?: boolean;
  dropTarget?: boolean;
  scaleNode?: boolean; // Whether or not to scale the node, best on hover of node at lowest scale level
  label?: string; // Defaults to element.getLabel()
  secondaryLabel?: string;
  showLabel?: boolean; // Defaults to true
  labelClassName?: string;
  scaleLabel?: boolean; // Whether or not to scale the label, best at lower scale levels
  labelPosition?: LabelPosition; // Defaults to element.getLabelPosition()
  truncateLength?: number; // Defaults to 13
  labelIconClass?: string; // Icon to show in label
  labelIcon?: React.ReactNode;
  labelIconPadding?: number;
  badge?: string;
  badgeColor?: string;
  badgeTextColor?: string;
  badgeBorderColor?: string;
  badgeClassName?: string;
  badgeLocation?: BadgeLocation;
  attachments?: React.ReactNode; // ie. decorators
  nodeStatus?: NodeStatus; // Defaults to element.getNodeStatus()
  showStatusBackground?: boolean;
  showStatusDecorator?: boolean;
  statusDecoratorTooltip?: React.ReactNode;
  onStatusDecoratorClick?: (event: React.MouseEvent<SVGGElement, MouseEvent>, element: GraphElement) => void;
  getCustomShape?: (node: Node) => React.FunctionComponent<ShapeProps>;
  getShapeDecoratorCenter?: (quadrant: TopologyQuadrant, node: Node) => { x: number; y: number };
} & Partial<
  WithSelectionProps &
    WithDragNodeProps &
    WithDndDragProps &
    WithDndDropProps &
    WithCreateConnectorProps &
    WithContextMenuProps
>;

const SCALE_UP_TIME = 200;

const DefaultNode: React.FunctionComponent<DefaultNodeProps> = ({
  className,
  element,
  selected,
  hover,
  scaleNode,
  showLabel = true,
  label,
  secondaryLabel,
  labelClassName,
  labelPosition,
  scaleLabel,
  truncateLength,
  labelIconClass,
  labelIcon,
  labelIconPadding,
  nodeStatus,
  showStatusBackground,
  showStatusDecorator = false,
  statusDecoratorTooltip,
  getCustomShape,
  getShapeDecoratorCenter,
  onStatusDecoratorClick,
  badge,
  badgeColor,
  badgeTextColor,
  badgeBorderColor,
  badgeClassName,
  badgeLocation,
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
  const status = nodeStatus || element.getNodeStatus();
  const refs = useCombineRefs<SVGEllipseElement>(hoverRef, dragNodeRef);
  const { width, height } = element.getDimensions();
  const isHover = hover !== undefined ? hover : hovered;
  const [nodeScale, setNodeScale] = React.useState<number>(1);

  const statusDecorator = React.useMemo(() => {
    if (!status || !showStatusDecorator) {
      return null;
    }

    const icon = getStatusIcon(status);
    if (!icon) {
      return null;
    }

    const { x, y } = getShapeDecoratorCenter
      ? getShapeDecoratorCenter(StatusQuadrant, element)
      : getDefaultShapeDecoratorCenter(StatusQuadrant, element);

    const decorator = (
      <Decorator
        x={x}
        y={y}
        radius={DEFAULT_DECORATOR_RADIUS}
        showBackground
        onClick={e => onStatusDecoratorClick(e, element)}
        icon={<g className={css(styles.topologyNodeDecoratorStatus)}>{icon}</g>}
        ariaLabel={status}
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
  }, [showStatusDecorator, status, getShapeDecoratorCenter, element, statusDecoratorTooltip, onStatusDecoratorClick]);

  React.useEffect(() => {
    if (isHover) {
      onShowCreateConnector && onShowCreateConnector();
    } else {
      onHideCreateConnector && onHideCreateConnector();
    }
  }, [isHover, onShowCreateConnector, onHideCreateConnector]);

  const ShapeComponent = (getCustomShape && getCustomShape(element)) || getShapeComponent(element);

  const groupClassName = css(
    styles.topologyNode,
    className,
    isHover && 'pf-m-hover',
    (dragging || edgeDragging) && 'pf-m-dragging',
    canDrop && 'pf-m-highlight',
    canDrop && dropTarget && 'pf-m-drop-target',
    selected && 'pf-m-selected',
    StatusModifier[status]
  );

  const backgroundClassName = css(
    styles.topologyNodeBackground,
    showStatusBackground && StatusModifier[status],
    showStatusBackground && selected && 'pf-m-selected'
  );

  let filter;
  if (status === 'danger') {
    filter = createSvgIdUrl(NODE_SHADOW_FILTER_ID_DANGER);
  } else if (isHover || dragging || edgeDragging || dropTarget) {
    filter = createSvgIdUrl(NODE_SHADOW_FILTER_ID_HOVER);
  }

  const nodeLabelPosition = labelPosition || element.getLabelPosition();
  const scale = element.getGraph().getScale();

  const animationRef = React.useRef<number>();
  const scaleGoal = React.useRef<number>(1);
  const nodeScaled = React.useRef<boolean>(false);

  React.useEffect(() => {
    if (!scaleNode || scale >= 1) {
      setNodeScale(1);
      nodeScaled.current = false;
      if (animationRef.current) {
        window.cancelAnimationFrame(animationRef.current);
        animationRef.current = 0;
      }
    } else {
      scaleGoal.current = 1 / scale;
      const scaleDelta = scaleGoal.current - scale;
      const initTime = performance.now();

      const bumpScale = (bumpTime: number) => {
        const scalePercent = (bumpTime - initTime) / SCALE_UP_TIME;
        const nextScale = Math.min(scale + scaleDelta * scalePercent, scaleGoal.current);
        setNodeScale(nextScale);
        if (nextScale < scaleGoal.current) {
          animationRef.current = window.requestAnimationFrame(bumpScale);
        } else {
          nodeScaled.current = true;
          animationRef.current = 0;
        }
      };

      if (nodeScaled.current) {
        setNodeScale(scaleGoal.current);
      } else if (!animationRef.current) {
        animationRef.current = window.requestAnimationFrame(bumpScale);
      }
    }
    return () => {
      if (animationRef.current) {
        window.cancelAnimationFrame(animationRef.current);
        animationRef.current = 0;
      }
    };
  }, [scale, scaleNode]);

  // counter scale label
  const counterScale = (scale: number, scaleMin: number, scaleMax: number, valueMin: number, valueMax: number) => {
    if (scale >= scaleMax) {
      return valueMin;
    } else if (scale <= scaleMin) {
      return valueMax;
    }
    return valueMin + (1 - (scale - scaleMin) / (scaleMax - scaleMin)) * (valueMax - valueMin);
  };
  const labelScale = scaleLabel ? counterScale(scale, 0.35, 0.85, 1, 1.6) : 1;
  const labelPositionScale = scaleLabel ? Math.min(1, 1 / labelScale) : 1;

  const { translateX, translateY } = React.useMemo(() => {
    if (!scaleNode) {
      return { translateX: 0, translateY: 0 };
    }
    const bounds = element.getBounds();
    const translateX = bounds.width / 2 - (bounds.width / 2) * nodeScale;
    const translateY = bounds.height / 2 - (bounds.height / 2) * nodeScale;

    return { translateX, translateY };
  }, [element, nodeScale, scaleNode]);

  return (
    <g
      className={groupClassName}
      transform={`${scaleNode ? `translate(${translateX}, ${translateY})` : ''} scale(${nodeScale})`}
    >
      <NodeShadows />
      <g ref={refs} onClick={onSelect} onContextMenu={onContextMenu}>
        {ShapeComponent && (
          <ShapeComponent
            className={backgroundClassName}
            element={element}
            width={width}
            height={height}
            dndDropRef={dndDropRef}
            filter={filter}
          />
        )}
        {showLabel && (label || element.getLabel()) && (
          <g transform={`scale(${labelScale})`}>
            <NodeLabel
              className={css(styles.topologyNodeLabel, labelClassName)}
              x={(nodeLabelPosition === LabelPosition.right ? width + 8 : width / 2) * labelPositionScale}
              y={(nodeLabelPosition === LabelPosition.right ? height / 2 : height + 6) * labelPositionScale}
              position={nodeLabelPosition}
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
              labelIcon={labelIcon}
              labelIconPadding={labelIconPadding}
            >
              {label || element.getLabel()}
            </NodeLabel>
          </g>
        )}
        {children}
      </g>
      {statusDecorator}
      {attachments}
    </g>
  );
};

export default observer(DefaultNode);
