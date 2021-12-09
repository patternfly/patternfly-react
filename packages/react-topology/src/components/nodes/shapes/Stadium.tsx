import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-components';
import * as React from 'react';
import { ShapeProps } from '../../../utils/useCustomNodeShape';
import { useCombineRefs } from '../../../utils';

const Stadium: React.FC<ShapeProps> = ({
  className = css(styles.topologyNodeBackground),
  width,
  height,
  filter,
  anchorRef,
  dndDropRef
}) => {
  const refs = useCombineRefs<SVGRectElement>(dndDropRef, anchorRef);
  return (
    <rect
      className={className}
      ref={refs}
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
