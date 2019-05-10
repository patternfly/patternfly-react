import { Tooltip } from '@patternfly/react-core';
import React, { Component } from 'react';

export class TooltipDemo extends Component {
  render() {
    return (
      <Tooltip content={<div>World</div>}>
        <div>Hello</div>
      </Tooltip>
    );
  };
}
