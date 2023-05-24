import React from 'react';
import {
  Button,
  Tooltip,
  Checkbox,
  Select,
  SelectList,
  SelectOption,
  MenuToggle,
  MenuToggleElement,
  TextInput,
  TooltipPosition
} from '@patternfly/react-core';

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
            onChange={(_event, checked) => {
              const updatedTrigger = checked ? trigger.concat('mouseenter') : trigger.filter((t) => t !== 'mouseenter');
              setIsVisible(false);
              setTrigger(updatedTrigger);
            }}
            aria-label="trigger: mouseenter"
            id="trigger_mouseenter"
          />
          <Checkbox
            label="trigger: focus"
            isChecked={trigger.includes('focus')}
            onChange={(_event, checked) => {
              const updatedTrigger = checked ? trigger.concat('focus') : trigger.filter((t) => t !== 'focus');
              setIsVisible(false);
              setTrigger(updatedTrigger);
            }}
            aria-label="trigger: focus"
            id="trigger_focus"
          />
          <Checkbox
            label="trigger: click"
            isChecked={trigger.includes('click')}
            onChange={(_event, checked) => {
              const updatedTrigger = checked ? trigger.concat('click') : trigger.filter((t) => t !== 'click');
              setIsVisible(false);
              setTimeout(() => setTrigger(updatedTrigger));
            }}
            aria-label="trigger: click"
            id="trigger_click"
          />
          <Checkbox
            label="trigger: manual"
            isChecked={trigger.includes('manual')}
            onChange={(_event, checked) => {
              const updatedTrigger = checked ? trigger.concat('manual') : trigger.filter((t) => t !== 'manual');
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
            onChange={(_event, checked) => setContentLeftAligned(checked)}
            aria-label="content left-aligned"
            id="content_left_aligned"
          />
        </div>
        <div style={{ border: '1px solid' }}>
          <Checkbox
            label="enableFlip"
            isChecked={enableFlip}
            onChange={(_event, checked) => setEnableFlip(checked)}
            aria-label="enableFlip"
            id="enable_flip"
          />
        </div>
        <div style={{ border: '1px solid' }}>
          position (will flip if enableFlip is true). The 'auto' position requires enableFlip to be set to true.
          <Select
            toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
              <MenuToggle
                ref={toggleRef}
                onClick={() => setPositionSelectOpen(!positionSelectOpen)}
                isExpanded={positionSelectOpen}
                style={
                  {
                    width: '200px'
                  } as React.CSSProperties
                }
              >
                {position}
              </MenuToggle>
            )}
            onOpenChange={setPositionSelectOpen}
            onSelect={(_event, selection) => {
              setPosition(selection.toString() as TooltipPosition);
              setPositionSelectOpen(false);
            }}
            isOpen={positionSelectOpen}
            selected={position}
          >
            <SelectList>
              <SelectOption value={TooltipPosition.auto}>{TooltipPosition.auto}</SelectOption>
              <SelectOption value={TooltipPosition.top}>{TooltipPosition.top}</SelectOption>
              <SelectOption value={TooltipPosition.bottom}>{TooltipPosition.bottom}</SelectOption>
              <SelectOption value={TooltipPosition.left}>{TooltipPosition.left}</SelectOption>
              <SelectOption value={TooltipPosition.right}>{TooltipPosition.right}</SelectOption>
              <SelectOption value={TooltipPosition.topStart}>{TooltipPosition.topStart}</SelectOption>
              <SelectOption value={TooltipPosition.topEnd}>{TooltipPosition.topEnd}</SelectOption>
              <SelectOption value={TooltipPosition.bottomStart}>{TooltipPosition.bottomStart}</SelectOption>
              <SelectOption value={TooltipPosition.bottomEnd}>{TooltipPosition.bottomEnd}</SelectOption>
              <SelectOption value={TooltipPosition.leftStart}>{TooltipPosition.leftStart}</SelectOption>
              <SelectOption value={TooltipPosition.leftEnd}>{TooltipPosition.leftEnd}</SelectOption>
              <SelectOption value={TooltipPosition.rightStart}>{TooltipPosition.rightStart}</SelectOption>
              <SelectOption value={TooltipPosition.rightEnd}>{TooltipPosition.rightEnd}</SelectOption>
            </SelectList>
          </Select>
        </div>
        <div style={{ border: '1px solid' }}>
          <Checkbox
            label="isVisible (also set trigger to only manual to programmatically control it)"
            isChecked={isVisible}
            onChange={(_event, checked) => setIsVisible(checked)}
            aria-label="isVisible"
            id="is_visible"
          />
        </div>
        <div style={{ border: '1px solid' }}>
          Entry delay (ms){' '}
          <TextInput
            value={entryDelayInput}
            type="number"
            onChange={(_event, val) => setEntryDelayInput(Number(val))}
            aria-label="entry delay"
          />
          Exit delay (ms){' '}
          <TextInput
            value={exitDelayInput}
            type="number"
            onChange={(_event, val) => setExitDelayInput(Number(val))}
            aria-label="exit delay"
          />
          Animation duration (ms){' '}
          <TextInput
            value={animationDuration}
            type="number"
            onChange={(_event, val) => setAnimationDuration(Number(val))}
            aria-label="animation duration"
          />
        </div>
        <div style={{ border: '1px solid' }}>
          flip behavior examples (enableFlip has to be true). "flip" will try to flip the tooltip to the opposite of the
          starting position. The second option ensures that there are 3 escape positions for every possible starting
          position (default). This setting is ignored if position prop is set to 'auto'.
          <Select
            onOpenChange={setFlipSelectOpen}
            onSelect={(_event, selection) => {
              setFlipBehavior(selection as string);
              setFlipSelectOpen(false);
            }}
            isOpen={flipSelectOpen}
            selected={flipBehavior}
            toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
              <MenuToggle
                ref={toggleRef}
                onClick={() => setFlipSelectOpen(!flipSelectOpen)}
                isExpanded={flipSelectOpen}
                style={
                  {
                    width: '450px'
                  } as React.CSSProperties
                }
              >
                {flipBehavior}
              </MenuToggle>
            )}
          >
            <SelectList>
              <SelectOption value="flip">flip</SelectOption>
              <SelectOption value="clockwise">
                ['top', 'right', 'bottom', 'left', 'top', 'right', 'bottom']
              </SelectOption>
            </SelectList>
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
