import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-pipelines';
import topologyStyles from '@patternfly/react-styles/css/components/Topology/topology-components';
import { Tooltip } from '@patternfly/react-core';
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

  const { labelStartX, actionStartX, contextStartX, pillWidth, updatedTruncateLength } = React.useMemo(() => {
    const pillWidth = width - whenOffset - whenSize;
    const statusSpace = status && showStatusState ? statusWidth : paddingX;
    const labelStartX = paddingX + statusSpace;
    const actionSpace = actionIcon && actionSize ? actionSize.width + paddingX : 0;
    const contextSpace = onContextMenu && contextSize ? contextSize.width + paddingX : 0;
    const actionStartX = pillWidth - actionSpace;
    const contextStartX = actionStartX - contextSpace;

    let updatedTruncateLength = truncateLength;
    if (contextSpace) {
      updatedTruncateLength -= 4;
    }
    if (actionSpace) {
      updatedTruncateLength -= 4;
    }

    return {
      labelStartX,
      actionStartX,
      contextStartX,
      pillWidth,
      updatedTruncateLength
    };
  }, [
    actionIcon,
    actionSize,
    contextSize,
    onContextMenu,
    paddingX,
    showStatusState,
    status,
    statusWidth,
    truncateLength,
    whenOffset,
    whenSize,
    width
  ]);

  const truncatedName = React.useMemo(() => truncateMiddle(element.getLabel(), { length: updatedTruncateLength }), [
    element,
    updatedTruncateLength
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
        <g transform={`translate(${paddingX + (statusWidth - statusIconSize) / 2}, ${(height - statusIconSize) / 2})`}>
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
