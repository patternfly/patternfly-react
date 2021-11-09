import { ShapeProps, useCombineRefs } from '@patternfly/react-topology';
import * as React from 'react';

const Path: React.FC<ShapeProps> = ({
  className,
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

  return (
    <path
      className={className}
      onMouseEnter={onShowCreateConnector}
      onMouseLeave={onHideCreateConnector}
      onContextMenu={onContextMenu}
      onClick={onSelect}
      ref={refs}
      d={`M0 0 L${width / 2} ${height / 4} L${width} 0 L${width} ${height} L${width / 2} ${height -
        height / 4} L0 ${height} Z`}
      filter={filter}
    />
  );
};

export default Path;
