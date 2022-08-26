import React from 'react';
import { Popover } from '@patternfly/react-core';

export const PopoverReactRef: React.FunctionComponent = () => {
  const popoverRef = React.useRef<HTMLButtonElement>(null);

  return (
    <div style={{ margin: '50px' }}>
      <button ref={popoverRef}>Popover attached via react ref</button>
      <Popover
        aria-label="Popover with react reference example"
        headerContent={<div>Popover header</div>}
        bodyContent={
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
          </div>
        }
        footerContent="Popover footer"
        reference={popoverRef}
      />
    </div>
  );
};
