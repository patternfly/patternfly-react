import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-pipelines';
import { Tooltip } from '@patternfly/react-core';
import { observer } from '../../../mobx-exports';
import { Node } from '../../../types';
import { RunStatus } from '../../types';
import { useAnchor, WithSelectionProps } from '../../../behavior';
import { truncateMiddle } from '../../../utils/truncate-middle';
import { useSize } from '../../../utils';
import { getRunStatusModifier } from '../../utils';
import StatusIcon from '../../utils/StatusIcon';
import { RectAnchor } from '../../../anchors';

type FinallyNodeProps = {
  element: Node;
  className?: string;
  paddingX?: number;
  nameLabelClass?: string;
  status?: RunStatus;
  statusWidth?: number;
  showStatusState?: boolean;
  truncateLength?: number;
  disableTooltip?: boolean;
  toolTip?: React.ReactNode;
} & Partial<WithSelectionProps>;

const FinallyNode: React.FC<FinallyNodeProps> = ({
  element,
  className,
  paddingX = 8,
  status,
  statusWidth = 16,
  showStatusState = true,
  truncateLength = 14,
  toolTip,
  disableTooltip = false,
  selected,
  children
}) => {
  const { height, width } = element.getBounds();
  const [textSize, textRef] = useSize([element.getLabel()]);
  const textHeight = textSize?.height ?? 0;
  useAnchor(RectAnchor);

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
    <g className={css(styles.topologyPipelinesPill, className)}>
      <rect
        width={width}
        height={height}
        rx={height / 2}
        className={css(styles.topologyPipelinesPillBackground, selected && styles.modifiers.selected)}
      />
      <g
        transform={`translate(${(status && showStatusState ? statusWidth : 0) + 2 * paddingX}, ${(height +
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
          transform={`translate(${paddingX}, ${(height - statusWidth) / 2 - 1})`}
          width={statusWidth}
          height={statusWidth}
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

export default observer(FinallyNode);
