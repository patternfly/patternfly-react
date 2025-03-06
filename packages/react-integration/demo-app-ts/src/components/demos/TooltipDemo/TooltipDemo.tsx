import { Component, createRef } from 'react';
import { Tooltip } from '@patternfly/react-core';

export class TooltipDemo extends Component {
  tooltipRef: React.RefObject<HTMLButtonElement | null>;
  myTooltipProps = {
    content: <div>World</div>,
    children: <div id="tooltipTarget">Hello</div>
  };

  constructor(props: any) {
    super(props);
    this.tooltipRef = createRef();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div>
          <Tooltip id="tooltip-children-content" content={<div>Tooltip content attached via children</div>}>
            <button id="tooltip-children-trigger">Tooltip trigger attached via children</button>
          </Tooltip>
        </div>
        <div>
          <button ref={this.tooltipRef as React.RefObject<HTMLButtonElement>} id="tooltip-ref-trigger">
            Tooltip trigger attached via react ref
          </button>
          <Tooltip
            id="tooltip-ref-content"
            content={<div>Tooltip content attached via react ref</div>}
            triggerRef={this.tooltipRef}
          />
        </div>
        <div>
          <button id="tooltip-selector-trigger">Tooltip trigger attached via selector ref</button>
          <Tooltip
            id="tooltip-selector-content"
            content={<div>Tooltip content attached via selector ref</div>}
            triggerRef={() => document.getElementById('tooltip-selector-trigger') as HTMLElement}
          />
        </div>
        <div>
          <Tooltip id="tooltip-click-content" trigger="click" content={<div>Tooltip content with click trigger</div>}>
            <button id="tooltip-click-trigger">Tooltip trigger with click</button>
          </Tooltip>
        </div>
        <div>
          <Tooltip
            id="tooltip-delay-content"
            entryDelay={500}
            exitDelay={500}
            content={<div>Tooltip content with custom delay</div>}
          >
            <button id="tooltip-delay-trigger">Tooltip trigger with custom delay</button>
          </Tooltip>
        </div>
        <div>
          <Tooltip
            id="tooltip-animationDuration-content"
            animationDuration={500}
            content={<div>Tooltip content with animationDuration</div>}
          >
            <button id="tooltip-animationDuration-trigger">Tooltip trigger with animationDuration</button>
          </Tooltip>
        </div>
      </div>
    );
  }
}
