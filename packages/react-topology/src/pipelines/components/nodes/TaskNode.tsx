import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-pipelines';
import { Tooltip } from '@patternfly/react-core';
import { observer } from '../../../mobx-exports';
import { AnchorEnd, Node } from '../../../types';
import { RunStatus } from '../../types';
import { useAnchor, WithSelectionProps } from '../../../behavior';
import { truncateMiddle } from '../../../utils/truncate-middle';
import { useSize } from '../../../utils';
import { getRunStatusModifier } from '../../utils';
import StatusIcon from '../../utils/StatusIcon';
import { TaskNodeSourceAnchor, TaskNodeTargetAnchor } from '../anchors';
import { DEFAULT_WHEN_OFFSET, DEFAULT_WHEN_SIZE } from '../../decorators/WhenDecorator';

const STATUS_WIDTH = 24;
const STATUS_ICON_SIZE = 16;

type TaskNodeProps = {
  element: Node;
  className?: string;
  paddingX?: number;
  nameLabelClass?: string;
  status?: RunStatus;
  statusIconSize?: number;
  statusWidth?: number;
  showStatusState?: boolean;
  truncateLength?: number;
  disableTooltip?: boolean;
  toolTip?: React.ReactNode;
  hasWhenExpression?: boolean;
  whenSize?: number;
  whenOffset?: number;
} & Partial<WithSelectionProps>;

const TaskNode: React.FC<TaskNodeProps> = ({
  element,
  className,
  paddingX = 8,
  status,
  statusWidth = STATUS_WIDTH,
  statusIconSize = STATUS_ICON_SIZE,
  showStatusState = true,
  truncateLength = 14,
  toolTip,
  disableTooltip = false,
  selected,
  hasWhenExpression = false,
  whenSize = DEFAULT_WHEN_SIZE,
  whenOffset = DEFAULT_WHEN_OFFSET,
  children
}) => {
  const { height, width } = element.getBounds();
  const [textSize, textRef] = useSize([element.getLabel()]);
  const textHeight = textSize?.height ?? 0;
  useAnchor(TaskNodeSourceAnchor, AnchorEnd.source);
  useAnchor(
    React.useCallback((node: Node) => new TaskNodeTargetAnchor(node, hasWhenExpression ? 0 : whenSize + whenOffset), [
      hasWhenExpression,
      whenSize,
      whenOffset
    ])
  );

  const truncatedName = React.useMemo(() => truncateMiddle(element.getLabel(), { length: truncateLength }), [
    element,
    truncateLength
  ]);
  const nameLabel = (
    <text ref={textRef} className={css('topology-pipelines--pill__text')}>
      {truncatedName}
    </text>
  );

  const taskPill = (
    <g className={css(styles.topologyPipelinesPill, className)} transform={`translate(${whenOffset + whenSize}, 0)`}>
      <rect
        width={width - whenOffset - whenSize}
        height={height}
        rx={height / 2}
        className={css(styles.topologyPipelinesPillBackground, selected && styles.modifiers.selected)}
      />
      <g
        transform={`translate(${status && showStatusState ? statusWidth + paddingX : 2 * paddingX}, ${(height +
          textHeight / 2) /
          2})`}
      >
        {element.getLabel() !== truncatedName && !disableTooltip ? (
          <Tooltip content={element.getLabel()}>{nameLabel}</Tooltip>
        ) : (
          nameLabel
        )}
      </g>
      {status && showStatusState && (
        <g
          transform={`translate(${paddingX + (statusWidth - statusIconSize) / 2}, ${(height - statusIconSize) / 2})`}
          width={statusWidth}
          height={height}
        >
          <g
            className={css(
              styles.topologyPipelinesPillStatus,
              getRunStatusModifier(status),
              (status === RunStatus.Running || status === RunStatus['In Progress']) && styles.modifiers.spin
            )}
          >
            <StatusIcon status={status} />
          </g>
        </g>
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
