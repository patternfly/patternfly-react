import * as React from 'react';
import { observer } from 'mobx-react';
import { css } from '@patternfly/react-styles';
import { Tooltip, TooltipPosition } from '@patternfly/react-core';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import styles from '@patternfly/react-styles/css/components/Topology/topology-components';
import { BadgeLocation, GraphElement, LabelPosition, Node, NodeStatus, TopologyQuadrant } from '../../types';
import { ConnectDragSource, ConnectDropTarget, OnSelect, WithDndDragProps } from '../../behavior';
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

interface DefaultNodeProps {
  /** Additional content added to the node */
  children?: React.ReactNode;
  /** Additional classes added to the node */
  className?: string;
  /** The graph node element to represent */
  element: Node;
  /** Flag if the node accepts drop operations */
  droppable?: boolean;
  /** Flag if the user is hovering on the node */
  hover?: boolean;
  /** Flag if the current drag operation can be dropped on the node */
  canDrop?: boolean;
  /** Flag if the user is dragging the node */
  dragging?: boolean;
  /** Flag if the user is dragging an edge connected to the node */
  edgeDragging?: boolean;
  /** Flag if the node is the current drop target */
  dropTarget?: boolean;
  /** Flag indicating the node should be scaled, best on hover of the node at lowest scale level */
  scaleNode?: boolean;
  /** Label for the node. Defaults to element.getLabel() */
  label?: string;
  /** Secondary label for the node */
  secondaryLabel?: string;
  /** Flag to show the label */
  showLabel?: boolean;
  /** Additional classes to add to the label */
  labelClassName?: string;
  /** Flag to scale the label, best on hover of the node at lowest scale level */
  scaleLabel?: boolean;
  /** Position of the label, bottom or left. Defaults to element.getLabelPosition() or bottom */
  labelPosition?: LabelPosition;
  /** The maximum length of the label before truncation */
  truncateLength?: number;
  /** The label icon component to show in the label, takes precedence over labelIconClass */
  labelIcon?: React.ReactNode;
  /** The Icon class to show in the label, ignored when labelIcon is specified */
  labelIconClass?: string;
  /** Padding for the label's icon */
  labelIconPadding?: number;
  /** Text for the label's badge */
  badge?: string;
  /** Color to use for the label's badge background */
  badgeColor?: string;
  /** Color to use for the label's badge text */
  badgeTextColor?: string;
  /** Color to use for the label's badge border */
  badgeBorderColor?: string;
  /** Additional classes to use for the label's badge */
  badgeClassName?: string;
  /** Location of the badge relative to the label's text, inner or below */
  badgeLocation?: BadgeLocation;
  /** Additional items to add to the node, typically decorators */
  attachments?: React.ReactNode;
  /** Status of the node, Defaults to element.getNodeStatus() */
  nodeStatus?: NodeStatus;
  /** Flag indicating whether the node's background color should indicate node status */
  showStatusBackground?: boolean;
  /** Flag which displays the status decorator for the node */
  showStatusDecorator?: boolean;
  /** Contents of a tooltip to show on the status decorator */
  statusDecoratorTooltip?: React.ReactNode;
  /** Callback when the status decorator is clicked */
  onStatusDecoratorClick?: (event: React.MouseEvent<SVGGElement, MouseEvent>, element: GraphElement) => void;
  /** Function to return a custom shape component for the element */
  getCustomShape?: (node: Node) => React.FunctionComponent<ShapeProps>;
  /** Function to return the center for a decorator for the quadrant */
  getShapeDecoratorCenter?: (quadrant: TopologyQuadrant, node: Node) => { x: number; y: number };
  /** Flag if the element selected. Part of WithSelectionProps */
  selected?: boolean;
  /** Function to call when the element should become selected (or deselected). Part of WithSelectionProps */
  onSelect?: OnSelect;
  /** A ref to add to the node for dragging. Part of WithDragNodeProps */
  dragNodeRef?: WithDndDragProps['dndDragRef'];
  /** A ref to add to the node for drag and drop. Part of WithDndDragProps */
  dndDragRef?: ConnectDragSource;
  /** A ref to add to the node for dropping. Part of WithDndDropProps */
  dndDropRef?: ConnectDropTarget;
  /** Function to call for showing a connector creation indicator. Part of WithCreateConnectorProps  */
  onShowCreateConnector?: () => void;
  /** Function to call to hide the connector creation indicator. Part of WithCreateConnectorProps  */
  onHideCreateConnector?: () => void;
  /** Function to call to show a context menu for the node  */
  onContextMenu?: (e: React.MouseEvent) => void;
  /** Flag indicating that the context menu for the node is currently open  */
  contextMenuOpen?: boolean;
}

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
}: DefaultNodeProps) => {
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
