import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-components';
import { useAnchor } from '../../../behavior';
import { RectAnchor } from '../../../anchors';
import { ShapeProps } from './shapeUtils';

type RectangleProps = ShapeProps & {
  cornerRadius?: number;
};

const Rectangle: React.FunctionComponent<RectangleProps> = ({
  className = css(styles.topologyNodeBackground),
  width,
  height,
  filter,
  cornerRadius = 15,
  dndDropRef
}) => {
  useAnchor(RectAnchor);
  return (
    <rect
      className={className}
      ref={dndDropRef}
      x={0}
      y={0}
      rx={cornerRadius}
      ry={cornerRadius}
      width={width}
      height={height}
      filter={filter}
    />
  );
};

export default Rectangle;
