import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-pipelines';
import topologyStyles from '@patternfly/react-styles/css/components/Topology/topology-components';
import { Popover, PopoverProps, Tooltip } from '@patternfly/react-core';
import { observer } from '../../../mobx-exports';
import { AnchorEnd, Node, ScaleDetailsLevel } from '../../../types';
import { RunStatus } from '../../types';
import { useAnchor, WithContextMenuProps, WithSelectionProps } from '../../../behavior';
import { truncateMiddle } from '../../../utils/truncate-middle';
import { createSvgIdUrl, getNodeScaleTranslation, useCombineRefs, useHover, useSize } from '../../../utils';
import { getRunStatusModifier, nonShadowModifiers } from '../../utils';
import StatusIcon from '../../utils/StatusIcon';
import { TaskNodeSourceAnchor, TaskNodeTargetAnchor } from '../anchors';
import LabelActionIcon from '../../../components/nodes/labels/LabelActionIcon';
import LabelContextMenu from '../../../components/nodes/labels/LabelContextMenu';
import NodeShadows, {
  NODE_SHADOW_FILTER_ID_DANGER,
  NODE_SHADOW_FILTER_ID_HOVER
} from '../../../components/nodes/NodeShadows';
import LabelBadge from '../../../components/nodes/labels/LabelBadge';
import LabelIcon from '../../../components/nodes/labels/LabelIcon';
import useDetailsLevel from '../../../hooks/useDetailsLevel';
import { useScaleNode } from '../../../hooks';

const STATUS_ICON_SIZE = 16;
const SCALE_UP_TIME = 200;

export type TaskNodeProps = {
  children?: React.ReactNode;
  element: Node;
  className?: string;
  paddingX?: number;
  paddingY?: number;
  nameLabelClass?: string;
  status?: RunStatus;
  statusIconSize?: number;
  showStatusState?: boolean;
  scaleNode?: boolean; // Whether or not to scale the node, best on hover when details are hidden
  hideDetailsAtMedium?: boolean; // Whether or not to hide details at medium scale
  hiddenDetailsShownStatuses?: RunStatus[]; // Statuses to show at when details are hidden
  badge?: string;
  badgeColor?: string;
  badgeTextColor?: string;
  badgeBorderColor?: string;
  badgeClassName?: string;
  /** @deprecated Use badgePopoverParams instead */
  badgePopoverProps?: string;
  badgeTooltip?: React.ReactNode; // Set to use a tooltip on the badge, takes precedence over the badgePopoverParams
  badgePopoverParams?: PopoverProps; // Set to use a popover on the badge, ignored if the badgeTooltip parameter is set
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

const TaskNode: React.FC<TaskNodeProps & { innerRef: React.Ref<SVGGElement> }> = ({
  innerRef,
  element,
  className,
  paddingX = 8,
  paddingY = 8,
  status,
  statusIconSize = STATUS_ICON_SIZE,
  showStatusState = true,
  scaleNode,
  hideDetailsAtMedium,
  hiddenDetailsShownStatuses = [RunStatus.Failed, RunStatus.FailedToStart, RunStatus.Cancelled],
  badge,
  badgeColor,
  badgeTextColor,
  badgeBorderColor,
  badgeClassName = styles.topologyPipelinesPillBadge,
  badgeTooltip,
  badgePopoverProps,
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
  whenSize = 0,
  whenOffset = 0,
  onContextMenu,
  contextMenuOpen,
  actionIcon,
  actionIconClassName,
  onActionIconClick,
  children
}) => {
  const [hovered, innerHoverRef] = useHover();
  const hoverRef = useCombineRefs(innerRef, innerHoverRef);
  const isHover = hover !== undefined ? hover : hovered;
  const { width } = element.getBounds();
  const label = truncateMiddle(element.getLabel(), { length: truncateLength, omission: '...' });
  const [textSize, textRef] = useSize([label, className]);
  const [statusSize, statusRef] = useSize([status, showStatusState, statusIconSize]);
  const [badgeSize, badgeRef] = useSize([badge]);
  const [actionSize, actionRef] = useSize([actionIcon, paddingX]);
  const [contextSize, contextRef] = useSize([onContextMenu, paddingX]);
  const detailsLevel = useDetailsLevel();

  if (badgePopoverProps) {
    // eslint-disable-next-line no-console
    console.warn('badgePopoverProps is deprecated. Use badgePopoverParams instead.');
  }

  const textWidth = textSize?.width ?? 0;
  const textHeight = textSize?.height ?? 0;
  useAnchor(
    // Include scaleNode to cause an update when it changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
    React.useCallback((node: Node) => new TaskNodeSourceAnchor(node, detailsLevel, statusIconSize + 4), [
      detailsLevel,
      statusIconSize,
      scaleNode
    ]),
    AnchorEnd.source
  );
  useAnchor(
    React.useCallback((node: Node) => new TaskNodeTargetAnchor(node, hasWhenExpression ? 0 : whenSize + whenOffset), [
      hasWhenExpression,
      whenSize,
      whenOffset
    ]),
    AnchorEnd.target
  );

  const {
    height,
    statusStartX,
    textStartX,
    actionStartX,
    contextStartX,
    pillWidth,
    badgeStartX,
    iconWidth,
    iconStartX
  } = React.useMemo(() => {
    if (!textSize) {
      return {
        height: 0,
        statusStartX: 0,
        textStartX: 0,
        actionStartX: 0,
        contextStartX: 0,
        pillWidth: 0,
        badgeStartX: 0,
        iconWidth: 0,
        iconStartX: 0
      };
    }
    const height: number = textHeight + 2 * paddingY;
    const startX = paddingX + paddingX / 2;

    const iconWidth = taskIconClass || taskIcon ? height - taskIconPadding : 0;
    const iconStartX = -(iconWidth * 0.75);

    const statusStartX = startX - statusIconSize / 4; // Adjust for icon padding
    const statusSpace = status && showStatusState && statusSize ? statusSize.width + paddingX : 0;

    const textStartX = startX + statusSpace;
    const textSpace = textWidth + paddingX;

    const badgeStartX = textStartX + textSpace;
    const badgeSpace = badge && badgeSize ? badgeSize.width + paddingX : 0;

    const actionStartX = badgeStartX + badgeSpace;
    const actionSpace = actionIcon && actionSize ? actionSize.width + paddingX : 0;

    const contextStartX = actionStartX + actionSpace;
    const contextSpace = onContextMenu && contextSize ? contextSize.width + paddingX / 2 : 0;

    const pillWidth = contextStartX + contextSpace + paddingX / 2;

    return {
      height,
      statusStartX,
      textStartX,
      actionStartX,
      contextStartX,
      badgeStartX,
      iconWidth,
      iconStartX,
      pillWidth
    };
  }, [
    textSize,
    textHeight,
    textWidth,
    paddingY,
    paddingX,
    taskIconClass,
    taskIcon,
    taskIconPadding,
    statusIconSize,
    status,
    showStatusState,
    statusSize,
    badgeSize,
    badge,
    actionIcon,
    actionSize,
    onContextMenu,
    contextSize
  ]);

  React.useEffect(() => {
    const sourceEdges = element.getSourceEdges();
    sourceEdges.forEach(edge => {
      const data = edge.getData();
      edge.setData({ ...(data || {}), indent: detailsLevel === ScaleDetailsLevel.high ? width - pillWidth : 0 });
    });
  }, [detailsLevel, element, pillWidth, width]);

  const scale = element.getGraph().getScale();
  const nodeScale = useScaleNode(scaleNode, scale, SCALE_UP_TIME);
  const { translateX, translateY } = getNodeScaleTranslation(element, nodeScale, scaleNode);

  const nameLabel = (
    <text ref={textRef} className={css(styles.topologyPipelinesPillText)} dominantBaseline="middle">
      {label}
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

  let filter: string;
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

  const badgeLabel = badge ? (
    <LabelBadge
      ref={badgeRef}
      x={badgeStartX}
      y={(height - (badgeSize?.height ?? 0)) / 2}
      badge={badge}
      badgeClassName={badgeClassName}
      badgeColor={badgeColor}
      badgeTextColor={badgeTextColor}
      badgeBorderColor={badgeBorderColor}
    />
  ) : null;

  let badgeComponent: React.ReactNode;
  if (badgeLabel && badgeTooltip) {
    badgeComponent = <Tooltip content={badgeTooltip}>{badgeLabel}</Tooltip>;
  } else if (badgeLabel && badgePopoverParams) {
    badgeComponent = (
      <g onClick={e => e.stopPropagation()}>
        <Popover {...badgePopoverParams}>{badgeLabel}</Popover>
      </g>
    );
  } else {
    badgeComponent = badgeLabel;
  }

  const renderTask = () => {
    if (showStatusState && !scaleNode && hideDetailsAtMedium && detailsLevel !== ScaleDetailsLevel.high) {
      const statusBackgroundRadius = statusIconSize / 2 + 4;
      const height = element.getBounds().height;
      const upScale = 1 / scale;

      return (
        <g transform={`translate(0, ${(height - statusBackgroundRadius * 2 * upScale) / 2}) scale(${upScale})`}>
          <circle
            className={css(
              styles.topologyPipelinesStatusIconBackground,
              styles.topologyPipelinesPillStatus,
              runStatusModifier,
              selected && 'pf-m-selected'
            )}
            cx={statusBackgroundRadius}
            cy={statusBackgroundRadius}
            r={statusBackgroundRadius}
          />
          {status && (!hiddenDetailsShownStatuses || hiddenDetailsShownStatuses.includes(status)) ? (
            <g transform={`translate(4, 4)`}>
              <g
                className={css(
                  styles.topologyPipelinesStatusIcon,
                  runStatusModifier,
                  selected && 'pf-m-selected',
                  (status === RunStatus.Running || status === RunStatus.InProgress) && styles.modifiers.spin
                )}
              >
                <StatusIcon status={status} />
              </g>
            </g>
          ) : null}
        </g>
      );
    }
    return (
      <g
        className={pillClasses}
        transform={`translate(${whenOffset + whenSize}, 0)`}
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
        <g transform={`translate(${textStartX}, ${paddingY + textHeight / 2 + 1})`}>
          {element.getLabel() !== label && !disableTooltip ? (
            <Tooltip content={element.getLabel()}>
              <g>{nameLabel}</g>
            </Tooltip>
          ) : (
            nameLabel
          )}
        </g>
        {status && showStatusState && (
          <g transform={`translate(${statusStartX + paddingX / 2}, ${(height - statusIconSize) / 2})`} ref={statusRef}>
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
        {badgeComponent}
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
  };

  return (
    <g
      className={css('pf-topology__pipelines__task-node', className)}
      transform={`${scaleNode ? `translate(${translateX}, ${translateY})` : ''} scale(${nodeScale})`}
      ref={hoverRef}
    >
      {!toolTip || disableTooltip ? (
        renderTask()
      ) : (
        <Tooltip position="bottom" enableFlip={false} content={toolTip}>
          {renderTask()}
        </Tooltip>
      )}
    </g>
  );
};

export default observer(
  React.forwardRef((props: TaskNodeProps, ref: React.Ref<SVGGElement>) => <TaskNode innerRef={ref} {...props} />)
);
