import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-components';
import * as React from 'react';
import { ShapeProps } from '../../../utils/useCustomNodeShape';
import { useCombineRefs } from '../../../utils';

const Rectangle: React.FC<ShapeProps> = ({
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
  const refs = useCombineRefs<SVGRectElement>(dndDropRef, anchorRef);
  return (
    <rect
      className={className}
      onMouseEnter={onShowCreateConnector}
      onMouseLeave={onHideCreateConnector}
      onContextMenu={onContextMenu}
      onClick={onSelect}
      ref={refs}
      x={0}
      y={0}
      width={width}
      height={height}
      filter={filter}
    />
  );
};

export default Rectangle;
