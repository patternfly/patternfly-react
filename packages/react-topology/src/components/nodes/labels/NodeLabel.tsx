import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-components';
import { truncateMiddle } from '../../../utils/truncate-middle';
import {
  BadgeLocation,
  createSvgIdUrl,
  LabelPosition,
  useCombineRefs,
  useHover,
  useSize,
  WithBadgeProps
} from '../../../utils';
import { WithContextMenuProps, WithDndDragProps } from '../../../behavior';
import NodeShadows, { NODE_SHADOW_FILTER_ID_DANGER, NODE_SHADOW_FILTER_ID_HOVER } from '../NodeShadows';
import LabelBadge from './LabelBadge';
import LabelContextMenu from './LabelContextMenu';
import LabelIcon from './LabelIcon';
import LabelActionIcon from './LabelActionIcon';

type NodeLabelProps = {
  children?: string;
  className?: string;
  paddingX?: number;
  paddingY?: number;
  x?: number;
  y?: number;
  position?: LabelPosition;
  cornerRadius?: number;
  status?: string;
  secondaryLabel?: string;
  truncateLength?: number; // Defaults to 13
  labelIconClass?: string; // Icon to show in label
  labelIconPadding?: number;
  dragRef?: WithDndDragProps['dndDragRef'];
  hover?: boolean;
  dragging?: boolean;
  edgeDragging?: boolean;
  dropTarget?: boolean;
  actionIcon?: React.ReactElement;
  actionIconClassName?: string;
  onActionIconClick?: (e: React.MouseEvent) => void;
} & WithBadgeProps &
  WithContextMenuProps;

/**
 * Renders a `<text>` component with a `<rect>` box behind.
 */
const NodeLabel: React.FC<NodeLabelProps> = ({
  children,
  className,
  paddingX = 0,
  paddingY = 0,
  cornerRadius = 4,
  x = 0,
  y = 0,
  position = LabelPosition.bottom,
  secondaryLabel,
  status,
  badge,
  badgeColor,
  badgeTextColor,
  badgeBorderColor,
  badgeClassName,
  badgeLocation = BadgeLocation.inner,
  labelIconClass,
  labelIconPadding = 4,
  truncateLength,
  dragRef,
  hover,
  dragging,
  edgeDragging,
  dropTarget,
  onContextMenu,
  contextMenuOpen,
  actionIcon,
  actionIconClassName,
  onActionIconClick,
  ...other
}) => {
  const [labelHover, labelHoverRef] = useHover();
  const refs = useCombineRefs(dragRef, typeof truncateLength === 'number' ? labelHoverRef : undefined);

  const textChildren = React.useMemo(() => {
    if (truncateLength > 0) {
      return labelHover ? children : truncateMiddle(children, { length: truncateLength });
    }
    return children;
  }, [truncateLength, children, labelHover]);

  const secondaryTextChildren = React.useMemo(() => {
    if (truncateLength > 0) {
      return labelHover ? secondaryLabel : truncateMiddle(secondaryLabel, { length: truncateLength });
    }
    return secondaryLabel;
  }, [truncateLength, secondaryLabel, labelHover]);

  const [textSize, textRef] = useSize([textChildren, className, labelHover]);
  const [secondaryTextSize, secondaryTextRef] = useSize([secondaryTextChildren, className, labelHover]);
  const [badgeSize, badgeRef] = useSize([badge]);
  const [actionSize, actionRef] = useSize([actionIcon, paddingX]);
  const [contextSize, contextRef] = useSize([onContextMenu, paddingX]);

  const {
    width,
    height,
    startX,
    startY,
    badgeStartX,
    badgeStartY,
    actionStartX,
    contextStartX,
    iconSpace,
    badgeSpace
  } = React.useMemo(() => {
    if (!textSize) {
      return {
        width: 0,
        height: 0,
        startX: 0,
        startY: 0,
        badgeStartX: 0,
        badgeStartY: 0,
        actionStartX: 0,
        contextStartX: 0,
        iconSpace: 0,
        badgeSpace: 0
      };
    }
    const badgeSpace = badgeSize && badgeLocation === BadgeLocation.inner ? badgeSize.width + paddingX : 0;
    const height = Math.max(textSize.height, badgeSize?.height ?? 0) + paddingY * 2;
    const iconSpace = labelIconClass ? (height + paddingY * 0.5) / 2 : 0;
    const actionSpace = actionSize ? actionSize.width : 0;
    const contextSpace = contextSize ? contextSize.width : 0;
    const primaryWidth = iconSpace + badgeSpace + paddingX + textSize.width + actionSpace + contextSpace + paddingX;
    const secondaryWidth = secondaryTextSize ? secondaryTextSize.width + 2 * paddingX : 0;
    const width = Math.max(primaryWidth, secondaryWidth);
    const startX = position === LabelPosition.right ? x + iconSpace : x - width / 2 - iconSpace / 2;
    const startY = position === LabelPosition.right ? y - height / 2 : y;
    const actionStartX = iconSpace + badgeSpace + paddingX + textSize.width + paddingX;
    const contextStartX = actionStartX + actionSpace;

    let badgeStartX = 0;
    let badgeStartY = 0;
    if (badgeSize) {
      if (badgeLocation === BadgeLocation.below) {
        badgeStartX = (width - badgeSize.width) / 2;
        badgeStartY = height + paddingY;
      } else {
        badgeStartX = iconSpace + paddingX;
        badgeStartY = (height - badgeSize.height) / 2;
      }
    }

    return {
      width,
      height,
      startX,
      startY,
      actionStartX,
      contextStartX,
      badgeStartX,
      badgeStartY,
      iconSpace,
      badgeSpace: badgeSize && badgeLocation === BadgeLocation.inner ? badgeSpace : 0
    };
  }, [
    textSize,
    badgeSize,
    badgeLocation,
    paddingX,
    paddingY,
    labelIconClass,
    actionSize,
    contextSize,
    secondaryTextSize,
    position,
    x,
    y
  ]);

  let filterId;
  if (status === 'danger') {
    filterId = NODE_SHADOW_FILTER_ID_DANGER;
  } else if (hover || dragging || edgeDragging || dropTarget) {
    filterId = NODE_SHADOW_FILTER_ID_HOVER;
  }

  return (
    <g className={className} ref={refs} transform={`translate(${startX}, ${startY})`}>
      <NodeShadows />
      {textSize && (
        <rect
          className={css(styles.topologyNodeLabelBackground)}
          key={`rect-${filterId}`}
          filter={filterId && createSvgIdUrl(filterId)}
          x={0}
          y={0}
          width={width}
          height={height + (secondaryTextSize ? secondaryTextSize.height + paddingY * 2 : 0)}
          rx={cornerRadius}
          ry={cornerRadius}
        />
      )}
      {textSize && badge && (
        <LabelBadge
          className={badgeClassName}
          ref={badgeRef}
          x={badgeStartX}
          y={badgeStartY}
          badge={badge}
          badgeColor={badgeColor}
          badgeTextColor={badgeTextColor}
          badgeBorderColor={badgeBorderColor}
        />
      )}
      {textSize && secondaryLabel && (
        <>
          <line
            className={css(styles.topologyNodeSeparator)}
            x1={0}
            y1={height}
            x2={width}
            y2={height}
            shapeRendering="crispEdges"
          />
          <text
            className="pf-m-secondary"
            ref={secondaryTextRef}
            x={width / 2}
            y={height + paddingY + (secondaryTextSize?.height ?? 0) / 2}
            dy="0.35em"
            textAnchor="middle"
          >
            {secondaryTextChildren}
          </text>
        </>
      )}
      {textSize && labelIconClass && (
        <LabelIcon
          x={iconSpace}
          y={paddingY * -0.25}
          width={iconSpace * 2}
          height={iconSpace * 2}
          iconClass={labelIconClass}
          padding={labelIconPadding}
        />
      )}
      <text {...other} ref={textRef} x={iconSpace + badgeSpace + paddingX} y={height / 2} dy="0.35em">
        {textChildren}
      </text>
      {textSize && actionIcon && (
        <>
          <line
            className={css(styles.topologyNodeSeparator)}
            x1={actionStartX}
            y1={0}
            x2={actionStartX}
            y2={height}
            shapeRendering="crispEdges"
          />
          <LabelActionIcon
            ref={actionRef}
            x={actionStartX}
            y={0}
            height={height}
            paddingX={paddingX}
            paddingY={paddingY}
            icon={actionIcon}
            className={actionIconClassName}
            onClick={onActionIconClick}
          />
        </>
      )}
      {textSize && onContextMenu && (
        <>
          <line
            className={css(styles.topologyNodeSeparator)}
            x1={contextStartX}
            y1={0}
            x2={contextStartX}
            y2={height}
            shapeRendering="crispEdges"
          />
          <LabelContextMenu
            ref={contextRef}
            x={contextStartX}
            y={0}
            height={height}
            paddingX={paddingX}
            paddingY={paddingY}
            onContextMenu={onContextMenu}
            contextMenuOpen={contextMenuOpen}
          />
        </>
      )}
    </g>
  );
};

export default NodeLabel;
