import * as React from 'react';
import SVGDefs from './defs/SVGDefs';

declare const global: any;

// workaround to pass docs building
if (!global.SVGElement) {
  global.SVGElement = global.Element;
}

interface SVGArrowMarkerProps {
  id: string;
  nodeSize: number;
  markerSize: number;
  className?: string;
}

const SVGArrowMarker: React.FC<SVGArrowMarkerProps> = ({ id, nodeSize, markerSize, className }) => (
  <SVGDefs id={id}>
    <marker
      id={id}
      markerWidth={markerSize}
      markerHeight={markerSize}
      refX={nodeSize / 2 + markerSize - 1}
      refY={markerSize / 2}
      orient="auto"
      markerUnits="userSpaceOnUse"
    >
      <path d={`M0,0 L0,${markerSize} L${markerSize},${markerSize / 2} z`} className={className} />
    </marker>
  </SVGDefs>
);

export default SVGArrowMarker;
