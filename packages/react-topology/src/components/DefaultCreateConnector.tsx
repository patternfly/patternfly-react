import * as React from 'react';
import classNames from 'classnames';
import { AddCircleOIcon } from '@patternfly/react-icons';
import { Tooltip } from '@patternfly/react-core';
import Point from '../geom/Point';
import ConnectorArrow from './ConnectorArrow';

import './DefaultCreateConnector.scss';

const cursorSize = 20;

type DefaultCreateConnectorProps = {
  startPoint: Point;
  endPoint: Point;
  hints: string[];
  dragging: boolean;
  className?: string;
  tipContents?: React.ReactNode;
};

const DefaultCreateConnector: React.FC<DefaultCreateConnectorProps> = ({
  startPoint,
  endPoint,
  hints,
  tipContents,
  className,
}) => {
  const classes = classNames('topology-default-create-connector', className);
  return (
    <g className={classes}>
      <line
        className="topology-default-create-connector__line"
        x1={startPoint.x}
        y1={startPoint.y}
        x2={endPoint.x}
        y2={endPoint.y}
      />
      {hints && hints[hints.length - 1] === 'create' ? (
        <g
          transform={`translate(${endPoint.x - cursorSize / 2},${endPoint.y - cursorSize / 2})`}
          className="topology-default-create-connector__create"
        >
          <circle
            className="topology-default-create-connector__create__bg"
            cx={cursorSize / 2}
            cy={cursorSize / 2}
            r={cursorSize / 2}
          />
          {tipContents ? (
            <Tooltip
              content={tipContents}
              trigger="manual"
              isVisible
              tippyProps={{ duration: 0, delay: 0 }}
            >
              <AddCircleOIcon
                className="topology-default-create-connector__create__cursor"
                style={{ fontSize: cursorSize }}
              />
            </Tooltip>
          ) : (
            <AddCircleOIcon
              className="topology-default-create-connector__create__cursor"
              style={{ fontSize: cursorSize }}
            />
          )}
        </g>
      ) : (
        <ConnectorArrow startPoint={startPoint} endPoint={endPoint} />
      )}
    </g>
  );
};

export default DefaultCreateConnector;
