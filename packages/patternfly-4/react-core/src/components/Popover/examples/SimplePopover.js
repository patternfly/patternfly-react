import React from 'react';
import { Popover, Button } from '@patternfly/react-core';

class SimplePopover extends React.Component {
  render() {
    return (
      <Popover
        position="right"
        headerContent={<div>Popover Header</div>}
        bodyContent={
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
          </div>
        }
      >
        <Button>Toggle Popover</Button>
      </Popover>
    );
  }
}

export default SimplePopover;
