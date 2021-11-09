import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-components';
import * as React from 'react';
import { ShapeProps } from '../../../utils/useCustomNodeShape';
import { useCombineRefs } from '../../../utils';

type EllipseProps = ShapeProps;

const Ellipse: React.FC<EllipseProps> = ({
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
  const refs = useCombineRefs<SVGEllipseElement>(dndDropRef, anchorRef);
  return (
    <ellipse
      className={className}
      onMouseEnter={onShowCreateConnector}
      onMouseLeave={onHideCreateConnector}
      onContextMenu={onContextMenu}
      onClick={onSelect}
      ref={refs}
      cx={width / 2}
      cy={height / 2}
      rx={Math.max(0, width / 2 - 1)}
      ry={Math.max(0, height / 2 - 1)}
      filter={filter}
    />
  );
};

export default Ellipse;
