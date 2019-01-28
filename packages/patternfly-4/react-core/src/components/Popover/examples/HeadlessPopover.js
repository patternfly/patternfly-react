import React from 'react';
import { Popover, Button } from '@patternfly/react-core';

class HeadlessPopover extends React.Component {
  render() {
    return (
      <Popover
        position="right"
        bodyContent={
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
          </div>
        }
        aria-label="Headless Popover"
        footerContent="Popover Footer"
      >
        <Button>Toggle Popover</Button>
      </Popover>
    );
  }
}

export default HeadlessPopover;
