---
title: 'Tooltip'
section: components
cssPrefix: 'pf-c-tooltip'
typescript: true
propComponents: ['Tooltip']
---

import { TooltipPopper, Button, Tooltip, TooltipPosition, Checkbox, Select, SelectOption } from '@patternfly/react-core';
import { OutlinedQuestionCircleIcon } from '@patternfly/react-icons';

## Examples

```js title=Basic
import React from 'react';
import { TooltipPopper, Tooltip, TooltipPosition, Checkbox, Select, SelectOption } from '@patternfly/react-core';

BasicTooltip = () => {
  const [trigger, setTrigger] = React.useState(['mouseenter', 'focus']);
  const [isVisible, setIsVisible] = React.useState(false);
  const [enableFlip, setEnableFlip] = React.useState(true);
  const [position, setPosition] = React.useState('top');
  const [positionSelectOpen, setPositionSelectOpen] = React.useState(false);
  return (
    <>
      <div>
        <div style={{ border: '1px solid'}}>
          <Checkbox
            label="trigger: mouseenter"
            isChecked={trigger.includes('mouseenter')}
            onChange={(checked) => {
              let updatedTrigger;
              checked && (updatedTrigger = trigger.concat('mouseenter'));
              !checked && (updatedTrigger = trigger.filter(t => t !== 'mouseenter'));
              setTrigger(updatedTrigger);
            }}
          />
          <Checkbox
            label="trigger: focus"
            isChecked={trigger.includes('focus')}
            onChange={(checked) => {
              let updatedTrigger;
              checked && (updatedTrigger = trigger.concat('focus'));
              !checked && (updatedTrigger = trigger.filter(t => t !== 'focus'));
              setTrigger(updatedTrigger);
            }}
          />
          <Checkbox
            label="trigger: click"
            isChecked={trigger.includes('click')}
            onChange={(checked) => {
              let updatedTrigger;
              checked && (updatedTrigger = trigger.concat('click'));
              !checked && (updatedTrigger = trigger.filter(t => t !== 'click'));
              setTrigger(updatedTrigger);
            }}
          />
          <Checkbox
            label="trigger: manual"
            isChecked={trigger.includes('manual')}
            onChange={(checked) => {
              let updatedTrigger;
              checked && (updatedTrigger = trigger.concat('manual'));
              !checked && (updatedTrigger = trigger.filter(t => t !== 'manual'));
              setTrigger(updatedTrigger);
            }}
          />
        </div>
        <div style={{ border: '1px solid'}}>
          <Checkbox
            label="enableFlip"
            isChecked={enableFlip}
            onChange={(checked) => setEnableFlip(checked)}
          />
        </div>
        <div style={{ border: '1px solid'}}>
          position (will flip if enableFlip is true)
          <Select
            onToggle={() => setPositionSelectOpen(!positionSelectOpen)}
            onSelect={(event, selection) => {
              setPosition(selection);
              setPositionSelectOpen(false);
            }}
            isOpen={positionSelectOpen}
            selections={position}
          >
            <SelectOption value="auto" />
            <SelectOption value="top" />
            <SelectOption value="bottom" />
            <SelectOption value="left" />
            <SelectOption value="right" />
          </Select>
        </div>
        <div style={{ border: '1px solid'}}>
          <Checkbox
            label="isVisible (also set trigger to only manual to programmatically control it)"
            isChecked={isVisible}
            onChange={(checked) => setIsVisible(checked)}
          />
        </div>
      </div>
      <div style={{ margin: '150px'}}>
        <Tooltip
          content={
            <div>Old Tip Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>
          }
          trigger={trigger.join(' ')}
          enableFlip={enableFlip}
          position={position}
          isVisible={isVisible}
        >
          <span tabIndex="0">Old tooltip</span>
        </Tooltip>
        <TooltipPopper
          content={
            <div>TooltipPopper Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>
          }
          trigger={trigger.join(' ')}
          enableFlip={enableFlip}
          position={position}
          isVisible={isVisible}
        >
          <Button>Popper tooltip</Button>
        </TooltipPopper>
      </div>
    </>
  );
}
```

```js title=With-left-aligned-text
import React from 'react';
import { Tooltip, TooltipPosition } from '@patternfly/react-core';

LeftAlignedTooltip = () => (
  <Tooltip
    isContentLeftAligned
    content={
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>
    }
  >
    <span tabIndex="0">I have a tooltip!</span>
  </Tooltip>
)
```

```js title=On-icon
import React from 'react';
import { Tooltip, TooltipPosition } from '@patternfly/react-core';
import { OutlinedQuestionCircleIcon } from '@patternfly/react-icons';

OnIconTooltip = () => (
  <div style={{ margin: '50px' }}>
    <Tooltip
      position={TooltipPosition.top}
      content={
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>
      }
    >
      <OutlinedQuestionCircleIcon />
    </Tooltip>
  </div>
)
```

```js title=Positions
import React from 'react';
import { Button, Tooltip, TooltipPosition, Checkbox } from '@patternfly/react-core';

class TooltipPositions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: TooltipPosition.top,
      keepInViewChecked: true
    };
    this.handleKeepInViewChange = checked => {
      this.setState({ keepInViewChecked: checked });
    };
  }

  render() {
    return (
      <div>
        <div>
          <span style={{ paddingRight: '10px' }}>Tooltip Position</span>
          <select
            aria-label="Tooltip position"
            onChange={event => {
              this.setState({ position: event.target.value });
            }}
          >
            {Object.keys(TooltipPosition).map(key => (
              <option key={key} value={TooltipPosition[key]}>
                {TooltipPosition[key]}
              </option>
            ))}
          </select>
          <Checkbox
            label="Flip tooltip if the position falls outside the view"
            isChecked={this.state.keepInViewChecked}
            onChange={this.handleKeepInViewChange}
            aria-label="Keep in view"
            id="check-3"
          />
        </div>

        <div style={{ margin: '50px' }}>
          <Tooltip
            position={this.state.position}
            enableFlip={this.state.keepInViewChecked}
            content={
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
              </div>
            }
          >
            <Button>I have a tooltip!</Button>
          </Tooltip>
        </div>
      </div>
    );
  }
}
```
