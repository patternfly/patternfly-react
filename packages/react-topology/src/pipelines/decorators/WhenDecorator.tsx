import * as React from 'react';
import { Tooltip } from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-pipelines';
import topologyStyles from '@patternfly/react-styles/css/components/Topology/topology-components';
import { observer } from '../../mobx-exports';
import { Node } from '../../types';
import { WhenStatus } from '../types';
import { WithSelectionProps } from '../../behavior';
import { getWhenStatusModifier } from '../utils';

export const DEFAULT_WHEN_SIZE = 12;
export const DEFAULT_WHEN_OFFSET = 12;

type WhenDecoratorProps = {
  element: Node;
  className?: string;
  leftOffset?: number;
  edgeLength?: number;
  width?: number;
  height?: number;
  nameLabelClass?: string;
  status?: WhenStatus;
  showStatusState?: boolean;
  disableTooltip?: boolean;
  toolTip?: React.ReactNode;
} & Partial<WithSelectionProps>;

export const WhenDecorator: React.FC<WhenDecoratorProps> = ({
  element,
  width = DEFAULT_WHEN_SIZE,
  height = DEFAULT_WHEN_SIZE,
  className,
  status,
  leftOffset = DEFAULT_WHEN_OFFSET,
  edgeLength = DEFAULT_WHEN_OFFSET,
  toolTip,
  disableTooltip = false
}) => {
  const { height: taskHeight } = element.getBounds();
  const y = taskHeight / 2 - height / 2;
  const startX = -width - leftOffset;
  const points = `${startX + width / 2} ${y} ${startX + width} ${y + height / 2} ${startX + width / 2} ${y +
    height} ${startX} ${y + height / 2}`;
  const diamondNode = (
    <g className={className}>
      <line
        className={css(topologyStyles.topologyEdgeBackground)}
        x1={-leftOffset}
        y1={taskHeight / 2 - height / 2}
        x2={-leftOffset + edgeLength}
        y2={taskHeight / 2 - height / 2}
      />
      <line
        className={css(topologyStyles.topologyEdge, styles.topologyPipelinesWhenExpressionEdge)}
        x1={-leftOffset}
        y1={taskHeight / 2}
        x2={-leftOffset + edgeLength}
        y2={taskHeight / 2}
      />
      <polygon
        data-test="diamond-decorator"
        className={css(styles.topologyPipelinesWhenExpressionBackground, getWhenStatusModifier(status))}
        points={points}
      />
    </g>
  );

  return toolTip && !disableTooltip ? (
    <Tooltip position="bottom" enableFlip={false} content={<div data-test="when-expression-tooltip">{toolTip}</div>}>
      {diamondNode}
    </Tooltip>
  ) : (
    diamondNode
  );
};
WhenDecorator.displayName = 'WhenDecorator';

export default observer(WhenDecorator);
