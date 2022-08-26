import React from 'react';
import { Popover } from '@patternfly/react-core';

export const PopoverSelectorRef: React.FunctionComponent = () => (
  <div style={{ margin: '50px' }}>
    <button id="popover-selector">Popover attached via selector ref</button>
    <Popover
      aria-label="Popover with selector reference example"
      headerContent={<div>Popover header</div>}
      bodyContent={
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
        </div>
      }
      footerContent="Popover footer"
      reference={() => document.getElementById('popover-selector') as HTMLButtonElement}
    />
  </div>
);
