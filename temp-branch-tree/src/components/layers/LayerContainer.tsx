import * as React from 'react';
import { observer } from 'mobx-react';
import ElementContext from '../../utils/ElementContext';
import { isNode } from '../../types';
import { ATTR_DATA_ID, ATTR_DATA_KIND, ATTR_DATA_TYPE } from '../../const';

type LayerContainerProps = {
  children: React.ReactNode;
};

const LayerContainer: React.RefForwardingComponent<SVGGElement, LayerContainerProps> = (
  { children },
  ref,
) => {
  // accumulate parent positions
  const element = React.useContext(ElementContext);
  let p = element;
  let x = 0;
  let y = 0;
  while (isNode(p)) {
    if (!p.isGroup() || p.isCollapsed()) {
      const { x: px, y: py } = p.getPosition();
      x += px;
      y += py;
    }
    p = p.getParent();
  }
  const commonAttrs = {
    [ATTR_DATA_ID]: element.getId(),
    [ATTR_DATA_KIND]: element.getKind(),
    [ATTR_DATA_TYPE]: element.getType(),
  };
  return (
    <g ref={ref} transform={`translate(${x}, ${y})`} {...commonAttrs}>
      {children}
    </g>
  );
};

export default observer(React.forwardRef(LayerContainer));
