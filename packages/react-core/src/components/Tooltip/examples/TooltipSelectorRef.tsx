import { FunctionComponent } from 'react';
import { Tooltip } from '@patternfly/react-core';

export const TooltipSelectorRef: FunctionComponent = () => (
  <div style={{ margin: '100px' }}>
    <button aria-describedby="tooltip-ref2" id="tooltip-selector">
      Tooltip attached via selector ref
    </button>
    <Tooltip
      id="tooltip-ref2"
      content={
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
        </div>
      }
      triggerRef={() => document.getElementById('tooltip-selector') as HTMLButtonElement}
    />
  </div>
);
