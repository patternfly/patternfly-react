import { Tooltip, TooltipProps } from '@patternfly/react-core';
import React, { Component } from 'react';

export class TooltipDemo extends Component {
  myTooltipProps: TooltipProps = {
    content: <div>World</div>,
    children: <div>Hello</div>
  };

  render = () => {
    return <Tooltip content={this.myTooltipProps.content}>
      {this.myTooltipProps.children}
    </Tooltip>;
  };
}
