import React from 'react';
import { Popover, Button } from '@patternfly/react-core';

export const PopoverWidthAuto: React.FunctionComponent = () => (
  <div style={{ margin: '50px' }}>
    <Popover
      aria-label="Popover with auto-width"
      hasAutoWidth
      bodyContent={() => <div>Removes fixed-width and allows width to be defined by contents</div>}
    >
      <Button>Toggle popover</Button>
    </Popover>
  </div>
);
