import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-components';
import AddCircleOIcon from '@patternfly/react-icons/dist/esm/icons/add-circle-o-icon';
import { Tooltip } from '@patternfly/react-core';
import Point from '../geom/Point';
import ConnectorArrow from './edges/terminals/ConnectorArrow';

const cursorSize = 20;

interface DefaultCreateConnectorProps {
  startPoint: Point;
  endPoint: Point;
  hints: string[];
  dragging: boolean;
  hover?: boolean;
  className?: string;
  tipContents?: React.ReactNode;
}

const DefaultCreateConnector: React.FunctionComponent<DefaultCreateConnectorProps> = ({
  startPoint,
  endPoint,
  hints,
  dragging,
  hover,
  tipContents,
  className
}) => {
  const classes = css(
    styles.topologyDefaultCreateConnector,
    className,
    hover && styles.modifiers.hover,
    dragging && styles.modifiers.dragging
  );

  return (
    <g className={classes}>
      <line
        className={css(styles.topologyDefaultCreateConnectorLine)}
        x1={startPoint.x}
        y1={startPoint.y}
        x2={endPoint.x}
        y2={endPoint.y}
      />
      {hints && hints[hints.length - 1] === 'create' ? (
        <g
          transform={`translate(${endPoint.x - cursorSize / 2},${endPoint.y - cursorSize / 2})`}
          className={css(styles.topologyDefaultCreateConnectorCreate)}
        >
          <circle
            className={css(styles.topologyDefaultCreateConnectorCreateBg)}
            cx={cursorSize / 2}
            cy={cursorSize / 2}
            r={cursorSize / 2}
          />
          {tipContents ? (
            <Tooltip
              content={tipContents}
              trigger="manual"
              isVisible
              animationDuration={0}
              entryDelay={0}
              exitDelay={0}
            >
              <AddCircleOIcon
                className={css(styles.topologyDefaultCreateConnectorCreateCursor)}
                style={{ fontSize: cursorSize }}
              />
            </Tooltip>
          ) : (
            <AddCircleOIcon
              className={css(styles.topologyDefaultCreateConnectorCreateCursor)}
              style={{ fontSize: cursorSize }}
            />
          )}
        </g>
      ) : (
        <ConnectorArrow
          className={css(styles.topologyDefaultCreateConnectorArrow)}
          startPoint={startPoint}
          endPoint={endPoint}
        />
      )}
    </g>
  );
};

export default DefaultCreateConnector;
