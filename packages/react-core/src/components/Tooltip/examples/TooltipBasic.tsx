import React from 'react';
import { Button, Tooltip } from '@patternfly/react-core';

export const TooltipBasic: React.FunctionComponent = () => (
  <div style={{ margin: '100px' }}>
    <Tooltip
      content={
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
        </div>
      }
    >
      <Button>I have a tooltip!</Button>
    </Tooltip>
  </div>
);
