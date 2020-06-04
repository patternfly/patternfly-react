import * as React from 'react';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import Dimensions from '../geom/Dimensions';
import { Node } from '../types';

interface ComputeElementDimensionsProps {
  element: Node;
}

const ComputeElementDimensions: React.FC<ComputeElementDimensionsProps> = ({ element, children }) => {
  const gRef = React.useRef<SVGGElement>(null);
  React.useEffect(() => {
    if (gRef.current && !element.isDimensionsInitialized()) {
      const { width, height } = gRef.current.getBBox();
      action(() => element.setDimensions(new Dimensions(width, height)))();
    }
  }, [element]);

  // render an invisible node
  return (
    <g ref={gRef} style={{ visibility: 'hidden' }}>
      {children}
    </g>
  );
};

// export for testing
export const InternalComputeElementDimensions = ComputeElementDimensions;

export default observer(ComputeElementDimensions);
