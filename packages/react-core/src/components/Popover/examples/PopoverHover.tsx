import React from 'react';
import { Popover, Button } from '@patternfly/react-core';

export const PopoverHover: React.FunctionComponent = () => (
  <div style={{ margin: '50px' }}>
    <Popover
      triggerAction="hover"
      aria-label="Hoverable popover"
      headerContent={<div>Popover header</div>}
      bodyContent={<div>This popover opens on hover.</div>}
      footerContent="Popover footer"
    >
      <Button disabled>Hover to trigger popover</Button>
    </Popover>
  </div>
);
