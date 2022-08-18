import React from 'react';
import { Popover, Button } from '@patternfly/react-core';

export const PopoverBasic: React.FunctionComponent = () => (
  <div style={{ margin: '50px' }}>
    <Popover
      aria-label="Basic popover"
      headerContent={<div>Popover header</div>}
      bodyContent={<div>Popovers are triggered by click rather than hover.</div>}
      footerContent="Popover footer"
    >
      <Button>Toggle popover</Button>
    </Popover>
  </div>
);
