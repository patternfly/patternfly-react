import React from 'react';
import { Popover, Button } from '@patternfly/react-core';

export const PopoverCloseUncontrolled: React.FunctionComponent = () => (
  <div style={{ margin: '50px' }}>
    <Popover
      aria-label="Uncontrolled popover with button in the body that can close it"
      headerContent={<div>Popover header</div>}
      bodyContent={hide => (
        <div>
          <div>
            All the content props (headerContent, bodyContent, footerContent) can take a function which the popover
            component passes the hide function to which can be used to close the popover after some user interaction.
          </div>
          <div>
            <button onClick={hide}>Close popover</button>
          </div>
        </div>
      )}
      footerContent="Popover footer"
    >
      <Button>Toggle popover</Button>
    </Popover>
  </div>
);
