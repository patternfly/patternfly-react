import React from 'react';
import { Tooltip } from '@patternfly/react-core';

class SimpleTooltip extends React.Component {
  render() {
    return (
      <Tooltip
        position="right"
        content={
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
          </div>
        }
      >
        <span>I have a tooltip!</span>
      </Tooltip>
    );
  }
}

export default SimpleTooltip;
