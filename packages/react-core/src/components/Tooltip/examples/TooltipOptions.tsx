import React from 'react';
import { Button, Tooltip, Checkbox, Select, SelectOption, TextInput, TooltipPosition } from '@patternfly/react-core';

export const TooltipOptions: React.FunctionComponent = () => {
  const [trigger, setTrigger] = React.useState(['mouseenter', 'focus']);
  const [isVisible, setIsVisible] = React.useState(true);
  const [contentLeftAligned, setContentLeftAligned] = React.useState(false);
  const [enableFlip, setEnableFlip] = React.useState(true);
  const [position, setPosition] = React.useState<TooltipPosition>(TooltipPosition.top);
  const [positionSelectOpen, setPositionSelectOpen] = React.useState(false);
  const [flipSelectOpen, setFlipSelectOpen] = React.useState(false);
  const [flipBehavior, setFlipBehavior] = React.useState('flip');
  const [entryDelayInput, setEntryDelayInput] = React.useState(0);
  const [exitDelayInput, setExitDelayInput] = React.useState(0);
  const [animationDuration, setAnimationDuration] = React.useState(300);
  const tipBoxRef = React.useRef(null);

  const scrollToRef = (ref: React.RefObject<any>) => {
    if (ref && ref.current) {
      ref.current.scrollTop = 400;
      ref.current.scrollLeft = 300;
    }
  };

  React.useEffect(() => {
    scrollToRef(tipBoxRef);
  }, []);

  return (
    <>
      <div>
        <div style={{ border: '1px solid' }}>
          <Checkbox
            label="trigger: mouseenter"
            isChecked={trigger.includes('mouseenter')}
            onChange={checked => {
              const updatedTrigger = checked ? trigger.concat('mouseenter') : trigger.filter(t => t !== 'mouseenter');
              setIsVisible(false);
              setTrigger(updatedTrigger);
            }}
            aria-label="trigger: mouseenter"
            id="trigger_mouseenter"
          />
          <Checkbox
            label="trigger: focus"
            isChecked={trigger.includes('focus')}
            onChange={checked => {
              const updatedTrigger = checked ? trigger.concat('focus') : trigger.filter(t => t !== 'focus');
              setIsVisible(false);
              setTrigger(updatedTrigger);
            }}
            aria-label="trigger: focus"
            id="trigger_focus"
          />
          <Checkbox
            label="trigger: click"
            isChecked={trigger.includes('click')}
            onChange={checked => {
              const updatedTrigger = checked ? trigger.concat('click') : trigger.filter(t => t !== 'click');
              setIsVisible(false);
              setTimeout(() => setTrigger(updatedTrigger));
            }}
            aria-label="trigger: click"
            id="trigger_click"
          />
          <Checkbox
            label="trigger: manual"
            isChecked={trigger.includes('manual')}
            onChange={checked => {
              const updatedTrigger = checked ? trigger.concat('manual') : trigger.filter(t => t !== 'manual');
              setIsVisible(false);
              setTrigger(updatedTrigger);
            }}
            aria-label="trigger: manual"
            id="trigger_manual"
          />
        </div>
        <div style={{ border: '1px solid' }}>
          <Checkbox
            label="content left-aligned"
            isChecked={contentLeftAligned}
            onChange={checked => setContentLeftAligned(checked)}
            aria-label="content left-aligned"
            id="content_left_aligned"
          />
        </div>
        <div style={{ border: '1px solid' }}>
          <Checkbox
            label="enableFlip"
            isChecked={enableFlip}
            onChange={checked => setEnableFlip(checked)}
            aria-label="enableFlip"
            id="enable_flip"
          />
        </div>
        <div style={{ border: '1px solid' }}>
          position (will flip if enableFlip is true). The 'auto' position requires enableFlip to be set to true.
          <Select
            onToggle={() => setPositionSelectOpen(!positionSelectOpen)}
            onSelect={(_event, selection) => {
              setPosition(selection.toString() as TooltipPosition);
              setPositionSelectOpen(false);
            }}
            isOpen={positionSelectOpen}
            selections={position}
            menuAppendTo={() => document.body}
          >
            <SelectOption value={TooltipPosition.auto} />
            <SelectOption value={TooltipPosition.top} />
            <SelectOption value={TooltipPosition.bottom} />
            <SelectOption value={TooltipPosition.left} />
            <SelectOption value={TooltipPosition.right} />
            <SelectOption value={TooltipPosition.topStart} />
            <SelectOption value={TooltipPosition.topEnd} />
            <SelectOption value={TooltipPosition.bottomStart} />
            <SelectOption value={TooltipPosition.bottomEnd} />
            <SelectOption value={TooltipPosition.leftStart} />
            <SelectOption value={TooltipPosition.leftEnd} />
            <SelectOption value={TooltipPosition.rightStart} />
            <SelectOption value={TooltipPosition.rightEnd} />
          </Select>
        </div>
        <div style={{ border: '1px solid' }}>
          <Checkbox
            label="isVisible (also set trigger to only manual to programmatically control it)"
            isChecked={isVisible}
            onChange={checked => setIsVisible(checked)}
            aria-label="isVisible"
            id="is_visible"
          />
        </div>
        <div style={{ border: '1px solid' }}>
          Entry delay (ms){' '}
          <TextInput
            value={entryDelayInput}
            type="number"
            onChange={val => setEntryDelayInput(Number(val))}
            aria-label="entry delay"
          />
          Exit delay (ms){' '}
          <TextInput
            value={exitDelayInput}
            type="number"
            onChange={val => setExitDelayInput(Number(val))}
            aria-label="exit delay"
          />
          Animation duration (ms){' '}
          <TextInput
            value={animationDuration}
            type="number"
            onChange={val => setAnimationDuration(Number(val))}
            aria-label="animation duration"
          />
        </div>
        <div style={{ border: '1px solid' }}>
          flip behavior examples (enableFlip has to be true). "flip" will try to flip the tooltip to the opposite of the
          starting position. The second option ensures that there are 3 escape positions for every possible starting
          position (default). This setting is ignored if position prop is set to 'auto'.
          <Select
            onToggle={() => setFlipSelectOpen(!flipSelectOpen)}
            onSelect={(_event, selection) => {
              setFlipBehavior(selection.toString());
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
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
            </div>
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
          appendTo={() => document.getElementById('tooltip-boundary') as HTMLElement}
        >
          <Button className="tooltip-button">Tooltip</Button>
        </Tooltip>
      </div>
    </>
  );
};
