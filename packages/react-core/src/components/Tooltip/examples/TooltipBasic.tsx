import React from 'react';
import { Tooltip } from '@patternfly/react-core';

export const TooltipBasic: React.FunctionComponent = () => (
  <div style={{ margin: '100px' }}>
    <Tooltip
      content={
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
        </div>
      }
    >
      <span tabIndex={0} style={{ border: '1px dashed' }}>
        I have a tooltip!
      </span>
    </Tooltip>
  </div>
);
