import { Tooltip } from '@patternfly/react-core';
import React, { Component } from 'react';

export class TooltipDemo extends Component {
  tooltipRef: React.RefObject<HTMLButtonElement>;
  myTooltipProps = {
    content: <div>World</div>,
    children: <div id="tooltipTarget">Hello</div>
  };

  constructor(props: any) {
    super(props);
    this.tooltipRef = React.createRef();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Tooltip content={this.myTooltipProps.content}>{this.myTooltipProps.children}</Tooltip>
        <div>
          <button ref={this.tooltipRef} id="tooltip-ref">
            Tooltip attached via react ref
          </button>
          <Tooltip content={<div>Tooltip attached via react ref</div>} triggerRef={this.tooltipRef} />
        </div>
        <div>
          <button id="tooltip-selector">Tooltip attached via selector ref</button>
          <Tooltip
            content={<div>Tooltip attached via selector ref</div>}
            triggerRef={() => document.getElementById('tooltip-selector')}
          />
        </div>
      </div>
    );
  }
}
