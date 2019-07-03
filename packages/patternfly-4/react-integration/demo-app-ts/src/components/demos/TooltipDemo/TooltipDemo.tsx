import { Tooltip } from '@patternfly/react-core';
import React, { Component } from 'react';

export class TooltipDemo extends Component {
  myTooltipProps = {
    content: <div>World</div>,
    children: <div id="tooltipTarget">Hello</div>
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Tooltip content={this.myTooltipProps.content}>
        {this.myTooltipProps.children}
      </Tooltip>
    );
  };
}
