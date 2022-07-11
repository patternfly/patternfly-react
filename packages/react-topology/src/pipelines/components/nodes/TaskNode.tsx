import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-pipelines';
import topologyStyles from '@patternfly/react-styles/css/components/Topology/topology-components';
import { Popover, PopoverProps, Tooltip } from '@patternfly/react-core';
import { observer } from '../../../mobx-exports';
import { AnchorEnd, Node } from '../../../types';
import { RunStatus } from '../../types';
import { useAnchor, WithContextMenuProps, WithSelectionProps } from '../../../behavior';
import { truncateMiddle } from '../../../utils/truncate-middle';
import { createSvgIdUrl, useHover, useSize } from '../../../utils';
import { getRunStatusModifier, nonShadowModifiers } from '../../utils';
import StatusIcon from '../../utils/StatusIcon';
import { TaskNodeSourceAnchor, TaskNodeTargetAnchor } from '../anchors';
import { DEFAULT_WHEN_OFFSET, DEFAULT_WHEN_SIZE } from '../../decorators/WhenDecorator';
import LabelActionIcon from '../../../components/nodes/labels/LabelActionIcon';
import LabelContextMenu from '../../../components/nodes/labels/LabelContextMenu';
import NodeShadows, {
  NODE_SHADOW_FILTER_ID_DANGER,
  NODE_SHADOW_FILTER_ID_HOVER
} from '../../../components/nodes/NodeShadows';
import LabelBadge from '../../../components/nodes/labels/LabelBadge';
import LabelIcon from '../../../components/nodes/labels/LabelIcon';

const STATUS_WIDTH = 24;
const STATUS_ICON_SIZE = 16;

export type TaskNodeProps = {
  element: Node;
  className?: string;
  paddingX?: number;
  nameLabelClass?: string;
  status?: RunStatus;
  statusIconSize?: number;
  statusWidth?: number;
  showStatusState?: boolean;
  badge?: string;
  badgeColor?: string;
  badgeTextColor?: string;
  badgeBorderColor?: string;
  badgeClassName?: string;
  badgePopoverProps?: string;
  badgePopoverParams?: PopoverProps;
  taskIconClass?: string; // Icon to show for the task
  taskIcon?: React.ReactNode;
  taskIconTooltip?: React.ReactNode;
  taskIconPadding?: number;
  hover?: boolean;
  truncateLength?: number;
  disableTooltip?: boolean;
  toolTip?: React.ReactNode;
  hasWhenExpression?: boolean;
  whenSize?: number;
  whenOffset?: number;
  actionIcon?: React.ReactElement;
  actionIconClassName?: string;
  onActionIconClick?: (e: React.MouseEvent) => void;
} & Partial<WithSelectionProps> &
  Partial<WithContextMenuProps>;

const TaskNode: React.FC<TaskNodeProps> = ({
  element,
  className,
  paddingX = 8,
  status,
  statusWidth = STATUS_WIDTH,
  statusIconSize = STATUS_ICON_SIZE,
  showStatusState = true,
  badge,
  badgeColor,
  badgeTextColor,
  badgeBorderColor,
  badgeClassName = styles.topologyPipelinesPillBadge,
  badgePopoverParams,
  taskIconClass,
  taskIcon,
  taskIconTooltip,
  taskIconPadding = 4,
  hover,
  truncateLength = 14,
  toolTip,
  disableTooltip = false,
  selected,
  onSelect,
  hasWhenExpression = false,
  whenSize = DEFAULT_WHEN_SIZE,
  whenOffset = DEFAULT_WHEN_OFFSET,
  onContextMenu,
  contextMenuOpen,
  actionIcon,
  actionIconClassName,
  onActionIconClick,
  children
}) => {
  const [hovered, hoverRef] = useHover();
  const isHover = hover !== undefined ? hover : hovered;
  const { height, width } = element.getBounds();
  const [textSize, textRef] = useSize([element.getLabel()]);
  const [badgeSize, badgeRef] = useSize([badge]);
  const textHeight = textSize?.height ?? 0;
  const [actionSize, actionRef] = useSize([actionIcon, paddingX]);
  const [contextSize, contextRef] = useSize([onContextMenu, paddingX]);

  useAnchor(TaskNodeSourceAnchor, AnchorEnd.source);
  useAnchor(
    React.useCallback((node: Node) => new TaskNodeTargetAnchor(node, hasWhenExpression ? 0 : whenSize + whenOffset), [
      hasWhenExpression,
      whenSize,
      whenOffset
    ])
  );

  const {
    statusStartX,
    labelStartX,
    actionStartX,
    contextStartX,
    pillWidth,
    badgeStartX,
    badgeStartY,
    iconWidth,
    iconStartX
  } = React.useMemo(() => {
    if (!textSize) {
      return {
        statusStartX: 0,
        labelStartX: 0,
        actionStartX: 0,
        contextStartX: 0,
        pillWidth: 0,
        badgeStartX: 0,
        badgeStartY: 0,
        iconWidth: 0,
        iconStartX: 0
      };
    }
    const statusSpace = status && showStatusState ? statusWidth : paddingX / 2;
    const iconWidth = taskIconClass || taskIcon ? height - taskIconPadding : 0;
    const iconStartX = -(iconWidth * 0.75);
    const statusStartX = iconWidth ? iconStartX * 0.25 + paddingX * 2 : paddingX;
    const labelStartX = statusStartX + statusSpace;
    const textSpace = textSize.width + paddingX;
    const badgeSpace = badge && badgeSize ? badgeSize.width + paddingX : 0;
    const actionSpace = actionIcon && actionSize ? actionSize.width + paddingX : 0;
    const contextSpace = onContextMenu && contextSize ? contextSize.width + paddingX / 2 : 0;
    const badgeStartX = labelStartX + textSpace;
    const badgeStartY = (height - (badgeSize?.height ?? 0)) / 2;
    const actionStartX = badgeStartX + badgeSpace;
    const contextStartX = actionStartX + actionSpace;
    const pillWidth = contextStartX + contextSpace;

    return {
      statusStartX,
      labelStartX,
      actionStartX,
      contextStartX,
      badgeStartX,
      badgeStartY,
      iconWidth,
      iconStartX,
      pillWidth
    };
  }, [
    textSize,
    status,
    showStatusState,
    statusWidth,
    paddingX,
    taskIconClass,
    taskIcon,
    height,
    taskIconPadding,
    badge,
    badgeSize,
    actionIcon,
    actionSize,
    onContextMenu,
    contextSize
  ]);

  React.useEffect(() => {
    const sourceEdges = element.getSourceEdges();
    sourceEdges.forEach(edge => {
      const data = edge.getData();
      edge.setData({ ...(data || {}), indent: width - pillWidth });
    });
  }, [element, pillWidth, width]);

  const truncatedName = React.useMemo(() => truncateMiddle(element.getLabel(), { length: truncateLength }), [
    element,
    truncateLength
  ]);

  const nameLabel = (
    <text ref={textRef} className={css(styles.topologyPipelinesPillText)}>
      {truncatedName}
    </text>
  );

  const runStatusModifier = getRunStatusModifier(status);
  const pillClasses = css(
    styles.topologyPipelinesPill,
    className,
    isHover && styles.modifiers.hover,
    runStatusModifier,
    selected && styles.modifiers.selected,
    onSelect && styles.modifiers.selectable
  );

  let filter;
  if (runStatusModifier === styles.modifiers.danger) {
    filter = createSvgIdUrl(NODE_SHADOW_FILTER_ID_DANGER);
  } else if (isHover && !nonShadowModifiers.includes(runStatusModifier)) {
    filter = createSvgIdUrl(NODE_SHADOW_FILTER_ID_HOVER);
  }

  const taskIconComponent = (taskIconClass || taskIcon) && (
    <LabelIcon
      x={iconStartX + iconWidth}
      y={(height - iconWidth) / 2}
      width={iconWidth}
      height={iconWidth}
      iconClass={taskIconClass}
      icon={taskIcon}
      padding={taskIconPadding}
    />
  );

  const badgeComponent = badge && (
    <LabelBadge
      ref={badgeRef}
      x={badgeStartX}
      y={badgeStartY}
      badge={badge}
      badgeClassName={badgeClassName}
      badgeColor={badgeColor}
      badgeTextColor={badgeTextColor}
      badgeBorderColor={badgeBorderColor}
    />
  );

  const taskPill = (
    <g
      className={pillClasses}
      transform={`translate(${whenOffset + whenSize}, 0)`}
      ref={hoverRef}
      onClick={onSelect}
      onContextMenu={onContextMenu}
    >
      <NodeShadows />
      <rect
        x={0}
        y={0}
        width={pillWidth}
        height={height}
        rx={height / 2}
        className={css(styles.topologyPipelinesPillBackground)}
        filter={filter}
      />
      <g transform={`translate(${labelStartX}, ${(height + textHeight / 2) / 2})`}>
        {element.getLabel() !== truncatedName && !disableTooltip ? (
          <Tooltip content={element.getLabel()}>
            <g>{nameLabel}</g>
          </Tooltip>
        ) : (
          nameLabel
        )}
      </g>
      {status && showStatusState && (
        <g
          transform={`translate(${statusStartX + (statusWidth - statusIconSize) / 2}, ${(height - statusIconSize) /
            2})`}
        >
          <g
            className={css(
              styles.topologyPipelinesPillStatus,
              runStatusModifier,
              selected && 'pf-m-selected',
              (status === RunStatus.Running || status === RunStatus.InProgress) && styles.modifiers.spin
            )}
          >
            <StatusIcon status={status} />
          </g>
        </g>
      )}
      {taskIconComponent &&
        (taskIconTooltip ? <Tooltip content={taskIconTooltip}>{taskIconComponent}</Tooltip> : taskIconComponent)}
      {badgeComponent &&
        (badgePopoverParams ? (
          <g onClick={e => e.stopPropagation()}>
            <Popover {...badgePopoverParams}>{badgeComponent}</Popover>
          </g>
        ) : (
          badgeComponent
        ))}
      {actionIcon && (
        <>
          <line
            className={css(topologyStyles.topologyNodeSeparator)}
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
            paddingY={0}
            icon={actionIcon}
            className={actionIconClassName}
            onClick={onActionIconClick}
          />
        </>
      )}
      {textSize && onContextMenu && (
        <>
          <line
            className={css(topologyStyles.topologyNodeSeparator)}
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
            paddingY={0}
            onContextMenu={onContextMenu}
            contextMenuOpen={contextMenuOpen}
          />
        </>
      )}

      {children}
    </g>
  );

  return (
    <g className={css('pf-topology__pipelines__task-node', className)}>
      {!toolTip || disableTooltip ? (
        taskPill
      ) : (
        <Tooltip position="bottom" enableFlip={false} content={toolTip}>
          {taskPill}
        </Tooltip>
      )}
    </g>
  );
};

export default observer(TaskNode);
