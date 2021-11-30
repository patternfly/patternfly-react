import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-components';
import * as React from 'react';
import { ShapeProps } from '../../../utils/useCustomNodeShape';
import { getPointsForSides, HEXAGON_HULL_PADDING } from './shapeUtils';
import { useCombineRefs } from '../../../utils';

const Hexagon: React.FC<ShapeProps> = ({
  className = css(styles.topologyNodeBackground),
  width,
  height,
  filter,
  onShowCreateConnector,
  onHideCreateConnector,
  onSelect,
  onContextMenu,
  dndDropRef,
  anchorRef
}) => {
  const refs = useCombineRefs<SVGPathElement>(dndDropRef, anchorRef);
  const path = React.useMemo(() => getPointsForSides(6, width, height, HEXAGON_HULL_PADDING), [width, height]);

  return (
    <path
      className={className}
      onMouseEnter={onShowCreateConnector}
      onMouseLeave={onHideCreateConnector}
      onContextMenu={onContextMenu}
      onClick={onSelect}
      ref={refs}
      d={path}
      filter={filter}
      strokeLinejoin="round"
      strokeWidth={10}
    />
  );
};

export default Hexagon;
