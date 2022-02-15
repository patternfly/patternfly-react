import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-components';
import * as React from 'react';
import { useAnchor } from '../../../behavior';
import { RectAnchor } from '../../../anchors';
import { ShapeProps } from './shapeUtils';

const Stadium: React.FC<ShapeProps> = ({
  className = css(styles.topologyNodeBackground),
  width,
  height,
  filter,
  dndDropRef
}) => {
  useAnchor(RectAnchor);
  return (
    <rect
      className={className}
      ref={dndDropRef}
      x={0}
      y={0}
      rx={height / 2}
      ry={height / 2}
      width={width}
      height={height}
      filter={filter}
    />
  );
};

export default Stadium;
