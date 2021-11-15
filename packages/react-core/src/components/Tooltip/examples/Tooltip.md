---
id: Tooltip
section: components
cssPrefix: pf-c-tooltip
propComponents: ['Tooltip']
---

import OutlinedQuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/outlined-question-circle-icon';
import CopyIcon from '@patternfly/react-icons/dist/esm/icons/copy-icon';
import './TooltipExamples.css';

## Examples

### Basic
```js
import React from 'react';
import { Tooltip } from '@patternfly/react-core';

<div style={{ margin: '100px' }}>
  <Tooltip
    content={
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>
    }
  >
    <span tabIndex="0" style={{ border: '1px dashed' }}>I have a tooltip!</span>
  </Tooltip>
</div>
```

### Tooltip react ref
```js
import React from 'react';
import { Tooltip } from '@patternfly/react-core';

TooltipReactRef = () => {
  const tooltipRef = React.useRef();
  return (
    <div style={{ margin: '100px' }}>
      <button ref={tooltipRef}>Tooltip attached via react ref</button>
      <Tooltip
        content={
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>
        }
        reference={tooltipRef}
      />
    </div>
  );
}
```

### Tooltip selector ref
```js
import React from 'react';
import { Tooltip } from '@patternfly/react-core';

<div style={{ margin: '100px' }}>
  <button id="tooltip-selector">Tooltip attached via selector ref</button>
  <Tooltip
    content={
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>
    }
    reference={() => document.getElementById('tooltip-selector')}
  />
</div>
```

### On icon
```js
import React from 'react';
import { Tooltip, Button } from '@patternfly/react-core';
import CopyIcon from '@patternfly/react-icons/dist/esm/icons/copy-icon';

IconExample = () => {
  const [showSuccessContent, setShowSuccessContent] = React.useState(false);
  const copyText = 'Copy to clipboard';
  const doneCopyText = 'Successfully copied to clipboard!';
  const [content, setContent] = React.useState(copyText);
  return (
    <div style={{ margin: '100px' }}>
      <Tooltip content={showSuccessContent ? doneCopyText : copyText}>
        <Button variant="plain" id="tt-ref" onClick={() => setShowSuccessContent(!showSuccessContent)}>
          <CopyIcon />
        </Button>
      </Tooltip>
    </div>
  );
};
```

### Options
```js
import React from 'react';
import { Button, Tooltip, Checkbox, Select, SelectOption, TextInput } from '@patternfly/react-core';

OptionsTooltip = () => {
  const [trigger, setTrigger] = React.useState(['mouseenter', 'focus']);
  const [isVisible, setIsVisible] = React.useState(true);
  const [contentLeftAligned, setContentLeftAligned] = React.useState(false);
  const [enableFlip, setEnableFlip] = React.useState(true);
  const [position, setPosition] = React.useState('top');
  const [positionSelectOpen, setPositionSelectOpen] = React.useState(false);
  const [flipSelectOpen, setFlipSelectOpen] = React.useState(false);
  const [flipBehavior, setFlipBehavior] = React.useState('flip');
  const [entryDelayInput, setEntryDelayInput] = React.useState(0);
  const [exitDelayInput, setExitDelayInput] = React.useState(0);
  const [animationDuration, setAnimationDuration] = React.useState(300);
  const tipBoxRef = React.useRef(null);
  const scrollToRef = ref => ref && ref.current && (ref.current.scrollTop = 400);
  React.useEffect(() => {
    scrollToRef(tipBoxRef);
  }, []);
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
              setIsVisible(false);
              setTrigger(updatedTrigger);
            }}
            aria-label="trigger: mouseenter"
          />
          <Checkbox
            label="trigger: focus"
            isChecked={trigger.includes('focus')}
            onChange={(checked) => {
              let updatedTrigger;
              checked && (updatedTrigger = trigger.concat('focus'));
              !checked && (updatedTrigger = trigger.filter(t => t !== 'focus'));
              setIsVisible(false);
              setTrigger(updatedTrigger);
            }}
            aria-label="trigger: focus"
          />
          <Checkbox
            label="trigger: click"
            isChecked={trigger.includes('click')}
            onChange={(checked) => {
              let updatedTrigger;
              checked && (updatedTrigger = trigger.concat('click'));
              !checked && (updatedTrigger = trigger.filter(t => t !== 'click'));
              setIsVisible(false);
              setTimeout(() => setTrigger(updatedTrigger));
            }}
            aria-label="trigger: click"
          />
          <Checkbox
            label="trigger: manual"
            isChecked={trigger.includes('manual')}
            onChange={(checked) => {
              let updatedTrigger;
              checked && (updatedTrigger = trigger.concat('manual'));
              !checked && (updatedTrigger = trigger.filter(t => t !== 'manual'));
              setIsVisible(false);
              setTrigger(updatedTrigger);
            }}
            aria-label="trigger: manual"            
          />
        </div>
        <div style={{ border: '1px solid'}}>
          <Checkbox
            label="content left-aligned"
            isChecked={contentLeftAligned}
            onChange={(checked) => setContentLeftAligned(checked)}
            aria-label="content left-aligned"          
          />
        </div>
        <div style={{ border: '1px solid'}}>
          <Checkbox
            label="enableFlip"
            isChecked={enableFlip}
            onChange={(checked) => setEnableFlip(checked)}
            aria-label="enableFlip"        
          />
        </div>
        <div style={{ border: '1px solid'}}>
          position (will flip if enableFlip is true). The 'auto' position requires enableFlip to be set to true.
          <Select
            onToggle={() => setPositionSelectOpen(!positionSelectOpen)}
            onSelect={(event, selection) => {
              setPosition(selection);
              setPositionSelectOpen(false);
            }}
            isOpen={positionSelectOpen}
            selections={position}
            menuAppendTo={() => document.body}
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
            aria-label="isVisible"        
          />
        </div>
        <div style={{ border: '1px solid'}}>
          Entry delay (ms) <TextInput value={entryDelayInput} type="number" onChange={val => setEntryDelayInput(val)} aria-label="entry delay" />
          Exit delay (ms) <TextInput value={exitDelayInput} type="number" onChange={val => setExitDelayInput(val)} aria-label="exit delay" />
          Animation duration (ms) <TextInput value={animationDuration} type="number" onChange={val => setAnimationDuration(val)} aria-label="animation duration" />
        </div>
        <div style={{ border: '1px solid'}}>
          flip behavior examples (enableFlip has to be true). "flip" will try to flip the tooltip to the opposite of the starting position. The second option ensures that there are 3 escape positions for every possible starting position (default). This setting is ignored if position prop is set to 'auto'.
          <Select
            onToggle={() => setFlipSelectOpen(!flipSelectOpen)}
            onSelect={(event, selection) => {
              console.log(selection);
              setFlipBehavior(selection);
              setFlipSelectOpen(false);
            }}
            isOpen={flipSelectOpen}
            selections={flipBehavior}
            menuAppendTo={() => document.body}
          >
            <SelectOption value="flip" />
            <SelectOption value="clockwise">['top', 'right', 'bottom', 'left', 'top', 'right', 'bottom']</SelectOption>
          </Select>
        </div>
      </div>
      <div id="tooltip-boundary" className="tooltip-box" ref={tipBoxRef}>
        <Tooltip
          content={
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>
          }
          trigger={trigger.join(' ')}
          enableFlip={enableFlip}
          flipBehavior={flipBehavior === 'flip' ? 'flip' : ['top', 'right', 'bottom', 'left', 'top', 'right', 'bottom']}
          position={position}
          isVisible={isVisible}
          entryDelay={entryDelayInput}
          exitDelay={exitDelayInput}
          animationDuration={animationDuration}
          isContentLeftAligned={contentLeftAligned}
          appendTo={() => document.getElementById('tooltip-boundary')}
        >
          <Button className="tooltip-button">Tooltip</Button>
        </Tooltip>
      </div>
    </>
  );
}
```
