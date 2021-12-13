import * as React from 'react';
import { Edge, EdgeTerminalType } from '../../types';
import { observer } from '../../mobx-exports';
import { WithContextMenuProps, WithRemoveConnectorProps, WithSelectionProps } from '../../behavior';
import { useHover } from '../../utils';
import { Layer } from '../layers';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-components';
import { getEdgeAnimationDuration, getEdgeStyleClassModifier } from './edgeUtils';
import DefaultConnectorTerminal from './terminals/DefaultConnectorTerminal';
import { TOP_LAYER } from '../../const';

type BaseEdgeProps = {
  element: Edge;
  dragging?: boolean;
  className?: string;
  animationDuration?: number;
  startTerminalType?: EdgeTerminalType;
  startTerminalClass?: string;
  startTerminalStatus?: string;
  endTerminalType?: EdgeTerminalType;
  endTerminalClass?: string;
  endTerminalStatus?: string;
} & WithRemoveConnectorProps &
  WithSelectionProps &
  Partial<WithContextMenuProps>;

const BaseEdge: React.FC<BaseEdgeProps> = ({
  element,
  dragging,
  animationDuration,
  onShowRemoveConnector,
  onHideRemoveConnector,
  startTerminalType,
  startTerminalClass,
  startTerminalStatus,
  endTerminalType,
  endTerminalClass,
  endTerminalStatus,
  children,
  className,
  selected,
  onSelect,
  onContextMenu
}) => {
  const [hover, hoverRef] = useHover();
  const startPoint = element.getStartPoint();
  const endPoint = element.getEndPoint();

  // eslint-disable-next-line patternfly-react/no-layout-effect
  React.useLayoutEffect(() => {
    if (hover && !dragging) {
      onShowRemoveConnector && onShowRemoveConnector();
    } else {
      onHideRemoveConnector && onHideRemoveConnector();
    }
  }, [hover, dragging, onShowRemoveConnector, onHideRemoveConnector]);

  const groupClassName = css(
    styles.topologyEdge,
    className,
    hover && 'pf-m-hover',
    dragging && 'pf-m-dragging',
    selected && 'pf-m-selected'
  );

  const edgeAnimationDuration = animationDuration ?? getEdgeAnimationDuration(element.getEdgeAnimationSpeed());
  const linkClassName = css(styles.topologyEdgeLink, getEdgeStyleClassModifier(element.getEdgeStyle()));

  return (
    <Layer id={dragging || hover ? TOP_LAYER : undefined}>
      <g
        ref={hoverRef}
        data-test-id="edge-handler"
        className={groupClassName}
        onClick={onSelect}
        onContextMenu={onContextMenu}
      >
        <line
          x1={startPoint.x}
          y1={startPoint.y}
          x2={endPoint.x}
          y2={endPoint.y}
          strokeWidth={10}
          stroke="transparent"
        />
        <line
          className={linkClassName}
          x1={startPoint.x}
          y1={startPoint.y}
          x2={endPoint.x}
          y2={endPoint.y}
          style={{ animationDuration: `${edgeAnimationDuration}s` }}
        />
        {startTerminalType && (
          <DefaultConnectorTerminal
            className={startTerminalClass}
            isTarget={false}
            edge={element}
            terminalType={startTerminalType}
            status={startTerminalStatus}
          />
        )}
        {endTerminalType && (
          <DefaultConnectorTerminal
            className={endTerminalClass}
            isTarget
            edge={element}
            terminalType={endTerminalType}
            status={endTerminalStatus}
          />
        )}
        {children}
      </g>
    </Layer>
  );
};

export default observer(BaseEdge);
