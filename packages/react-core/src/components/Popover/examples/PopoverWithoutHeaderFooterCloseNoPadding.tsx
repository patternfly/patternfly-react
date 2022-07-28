import React from 'react';
import { Popover, Button } from '@patternfly/react-core';

export const PopoverWithoutHeaderFooterCloseNoPadding: React.FunctionComponent = () => (
  <div style={{ margin: '50px' }}>
    <Popover
      aria-label="Popover with no header, footer, close button, and padding"
      hasNoPadding
      showClose={false}
      bodyContent={() => (
        <div>
          This popover has no padding and is intended for use with content that has its own spacing and should touch the
          edges of the popover container.
        </div>
      )}
      withFocusTrap={false /* no focusable content in this example */}
    >
      <Button>Toggle popover</Button>
    </Popover>
  </div>
);
