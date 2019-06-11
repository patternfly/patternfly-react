import { Tooltip } from '@patternfly/react-core';
import React, { Component } from 'react';

export class TooltipDemo extends Component {
  myTooltipProps = {
    content: <div>World</div>,
    children: <div id="tooltipTarget">Hello</div>
  };

  render() {
    return (
      <Tooltip content={this.myTooltipProps.content}>
        {this.myTooltipProps.children}
      </Tooltip>
    );
  };
}
