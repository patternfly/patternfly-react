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
      <div>
        <Tooltip content={this.myTooltipProps.content}>{this.myTooltipProps.children}</Tooltip>
        <Tooltip content="test deprecated props" tippyProps={{ duration: 0, delay: 0 }} isAppLauncher>
          <button>Trigger</button>
        </Tooltip>
      </div>
    );
  }
}
