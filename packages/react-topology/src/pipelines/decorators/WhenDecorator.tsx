import * as React from 'react';
import { Tooltip } from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-pipelines';
import topologyStyles from '@patternfly/react-styles/css/components/Topology/topology-components';
import { observer } from '../../mobx-exports';
import { Node } from '../../types';
import { WhenStatus } from '../types';
import { OnSelect } from '../../behavior';
import { getWhenStatusModifier } from '../utils';

export const DEFAULT_WHEN_SIZE = 12;
export const DEFAULT_WHEN_OFFSET = 12;

interface WhenDecoratorProps {
  /** Additional classes added to the node */
  className?: string;
  /** The graph node element to represent */
  element: Node;
  /** Offest distance from the start of the node area */
  leftOffset?: number;
  /** Length of the edge between the when decorator and the node */
  edgeLength?: number;
  /** Width of the when decorator */
  width?: number;
  /** Height of the when decorator */
  height?: number;
  /** Additional classes added to the label */
  nameLabelClass?: string;
  /** WhenStatus to depict */
  status?: WhenStatus;
  /** Flag indicating the status indicator */
  showStatusState?: boolean;
  /** Flag if the tooltip is disabled */
  disableTooltip?: boolean;
  /** Tooltip to show on decorator hover */
  toolTip?: React.ReactNode;
  /** Flag if the element selected. Part of WithSelectionProps */
  selected?: boolean;
  /** Function to call when the element should become selected (or deselected). Part of WithSelectionProps */
  onSelect?: OnSelect;
}

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
}: WhenDecoratorProps) => {
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
