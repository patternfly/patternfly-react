import React from 'react';
import { Popover, PopoverPosition, Checkbox, Button } from '@patternfly/react-core';

export const PopoverAdvanced: React.FunctionComponent = () => {
  const [position, setPosition] = React.useState(PopoverPosition.auto);
  const [show, setShow] = React.useState(false);
  const [keepInViewChecked, setKeepInViewChecked] = React.useState(true);

  const handleKeepInViewChange = (checked: boolean) => {
    setKeepInViewChecked(checked);
  };

  const handleProgrammaticChange = (checked: boolean) => {
    setShow(checked);
  };

  const shouldClose = () => {
    setShow(false);
  };

  const shouldOpen = () => {
    setShow(true);
  };

  return (
    <>
      <div>
        <span style={{ paddingRight: '10px' }}>Popover position</span>
        <select
          aria-label="Popover position"
          onChange={event => {
            setPosition(event.target.value as PopoverPosition);
          }}
        >
          {Object.values(PopoverPosition).map(position => (
            <option key={position} value={position}>
              {position}
            </option>
          ))}
        </select>
        <Checkbox
          label="Flip popover if the position falls outside the view"
          isChecked={keepInViewChecked}
          onChange={handleKeepInViewChange}
          aria-label="Keep in view"
          id="popover-advanced-check-1"
        />
        <Checkbox
          label="Toggle popover from outside"
          isChecked={show}
          onChange={handleProgrammaticChange}
          aria-label="Toggle popover from outside"
          id="popover-advanced-check-2"
        />
      </div>

      <div style={{ margin: '50px' }}>
        <Popover
          aria-label="Advanced popover usages example"
          position={position}
          hideOnOutsideClick={false}
          isVisible={show}
          shouldClose={shouldClose}
          shouldOpen={shouldOpen}
          enableFlip={keepInViewChecked}
          headerContent={<div>Popover header</div>}
          bodyContent={
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
            </div>
          }
          footerContent="Popover footer"
        >
          <Button>Toggle popover</Button>
        </Popover>
      </div>
    </>
  );
};
