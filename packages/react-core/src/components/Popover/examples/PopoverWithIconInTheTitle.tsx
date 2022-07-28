import React from 'react';
import { Popover, Button } from '@patternfly/react-core';
import BullhornIcon from '@patternfly/react-icons/dist/esm/icons/bullhorn-icon';

export const PopoverWithIconInTheTitle: React.FunctionComponent = () => (
  <div style={{ margin: '50px' }}>
    <Popover
      aria-label="Popover with icon in the title example"
      headerContent="Popover with icon"
      headerIcon={<BullhornIcon />}
      bodyContent={<div>Popovers are triggered by click rather than hover.</div>}
      footerContent="Popover footer"
    >
      <Button>Toggle popover</Button>
    </Popover>
  </div>
);
