import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-components';
import { truncateMiddle } from '../../../utils/truncate-middle';
import { createSvgIdUrl, WithBadgeProps, useCombineRefs, useHover, useSize, LabelPosition } from '../../../utils';
import { WithContextMenuProps, WithDndDragProps } from '../../../behavior';
import { NODE_SHADOW_FILTER_ID_DANGER, NODE_SHADOW_FILTER_ID_HOVER } from '../NodeShadows';
import LabelBadge from './LabelBadge';
import LabelContextMenu from './LabelContextMenu';
import LabelIcon from './LabelIcon';

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
  truncateLength?: number; // Defaults to 13
  labelIconClass?: string; // Icon to show in label
  labelIconPadding?: number;
  dragRef?: WithDndDragProps['dndDragRef'];
  hover?: boolean;
  dragging?: boolean;
  edgeDragging?: boolean;
  dropTarget?: boolean;
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
  status,
  badge,
  badgeColor,
  badgeTextColor,
  badgeBorderColor,
  badgeClassName,
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

  const [textSize, textRef] = useSize([textChildren, className, labelHover]);
  const [badgeSize, badgeRef] = useSize([badge]);
  const [contextSize, contextRef] = useSize([onContextMenu, paddingX]);

  const { width, height, startX, startY, contextStartX, iconSpace, badgeSpace } = React.useMemo(() => {
    if (!textSize) {
      return {
        width: 0,
        height: 0,
        startX: 0,
        startY: 0,
        contextStartX: 0,
        iconSpace: 0,
        badgeSpace: 0
      };
    }
    const badgeSpace = badgeSize ? badgeSize.width + paddingX : 0;
    const height = Math.max(textSize.height, badgeSize?.height ?? 0) + paddingY * 2;
    const iconSpace = labelIconClass ? (height + paddingY * 0.5) / 2 : 0;
    const contextSpace = contextSize ? contextSize.width + paddingX / 2 + 1 : 0;

    const width = iconSpace + badgeSpace + paddingX + textSize.width + paddingX + contextSpace;
    const startX = position === LabelPosition.right ? x + iconSpace : x - width / 2 - iconSpace / 2;
    const startY = position === LabelPosition.right ? y - height / 2 : y;
    const contextStartX = iconSpace + badgeSpace + paddingX + textSize.width + paddingX;

    return {
      width,
      height,
      startX,
      startY,
      contextStartX,
      iconSpace,
      badgeSpace
    };
  }, [textSize, badgeSize, paddingX, paddingY, labelIconClass, contextSize, position, x, y]);

  let filterId;
  if (status === 'danger') {
    filterId = NODE_SHADOW_FILTER_ID_DANGER;
  } else if (hover || dragging || edgeDragging || dropTarget) {
    filterId = NODE_SHADOW_FILTER_ID_HOVER;
  }

  return (
    <g className={className} ref={refs} transform={`translate(${startX}, ${startY})`}>
      {textSize && (
        <rect
          className={css(styles.topologyNodeLabelBackground)}
          key={`rect-${filterId}`}
          filter={filterId && createSvgIdUrl(filterId)}
          x={0}
          y={0}
          width={width}
          height={height}
          rx={cornerRadius}
          ry={cornerRadius}
        />
      )}
      {textSize && badge && (
        <LabelBadge
          className={badgeClassName}
          ref={badgeRef}
          x={iconSpace + paddingX}
          y={paddingY}
          badge={badge}
          badgeColor={badgeColor}
          badgeTextColor={badgeTextColor}
          badgeBorderColor={badgeBorderColor}
        />
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
      {textSize && onContextMenu && (
        <>
          <line
            className={css(styles.topologyNodeSeparator)}
            x1={contextStartX}
            y1={1}
            x2={contextStartX}
            y2={height}
            shapeRendering="crispEdges"
          />
          <LabelContextMenu
            ref={contextRef}
            x={contextStartX - 1}
            y={2}
            height={height - 4}
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
