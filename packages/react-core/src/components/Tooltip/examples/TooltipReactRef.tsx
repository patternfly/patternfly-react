import React from 'react';
import { Tooltip } from '@patternfly/react-core';

export const TooltipReactRef: React.FunctionComponent = () => {
  const tooltipRef = React.useRef<HTMLButtonElement>(null);
  return (
    <div style={{ margin: '100px' }}>
      <button aria-describedby="tooltip-ref1" ref={tooltipRef}>
        Tooltip attached via react ref
      </button>
      <Tooltip
        id="tooltip-ref1"
        content={
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
          </div>
        }
        reference={tooltipRef}
      />
    </div>
  );
};
