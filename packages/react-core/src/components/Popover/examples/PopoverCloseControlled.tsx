import React from 'react';
import { Popover, Button } from '@patternfly/react-core';

export const PopoverCloseControlled: React.FunctionComponent = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div style={{ margin: '50px' }}>
      <Popover
        aria-label="Popover with button in the body that can close it"
        isVisible={isVisible}
        shouldOpen={() => setIsVisible(true)}
        shouldClose={() => setIsVisible(false)}
        headerContent={<div>Popover header</div>}
        bodyContent={
          <div>
            <div>A controlled popover can be closed by updating its isVisible state after some user interaction.</div>
            <div>
              <button onClick={() => setIsVisible(false)}>Close popover</button>
            </div>
          </div>
        }
        footerContent="Popover footer"
      >
        <Button>Toggle popover</Button>
      </Popover>
    </div>
  );
};
