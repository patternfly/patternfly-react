import * as React from 'react';
import Point from '../../geom/Point';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-components';
import { StatusModifier, useSize } from '../../utils';
import { NodeStatus } from '../../types';

interface DefaultConnectorTagProps {
  className?: string;
  startPoint: Point;
  endPoint: Point;
  tag: string;
  status?: NodeStatus;
  paddingX?: number;
  paddingY?: number;
}

const DefaultConnectorTag: React.FunctionComponent<DefaultConnectorTagProps> = ({
  className,
  startPoint,
  endPoint,
  tag,
  status,
  paddingX = 4,
  paddingY = 2,
  ...other
}) => {
  const [textSize, textRef] = useSize([tag, className]);
  const { width, height, startX, startY } = React.useMemo(() => {
    if (!textSize) {
      return {
        width: 0,
        height: 0,
        startX: 0,
        startY: 0
      };
    }
    const width = textSize ? textSize.width + paddingX * 2 : 0;
    const height = textSize ? textSize.height + paddingY * 2 : 0;
    const startX = -width / 2;
    const startY = -height / 2;
    return {
      width,
      height,
      startX,
      startY
    };
  }, [textSize, paddingX, paddingY]);

  return (
    <g
      className={css(styles.topologyEdgeTag, className, StatusModifier[status])}
      transform={`translate(${startPoint.x + (endPoint.x - startPoint.x) * 0.5}, ${startPoint.y +
        (endPoint.y - startPoint.y) * 0.5})`}
    >
      {textSize && (
        <rect
          className={css(styles.topologyEdgeTagBackground)}
          x={startX}
          y={startY}
          width={width}
          height={height}
          rx={3}
          ry={3}
        />
      )}
      <text dy="0.35em" {...other} ref={textRef} x={startX + paddingX} y={0}>
        {tag}
      </text>
    </g>
  );
};

export default DefaultConnectorTag;
