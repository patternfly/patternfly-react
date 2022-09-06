import React from 'react';
import {
  OverflowMenu,
  OverflowMenuControl,
  OverflowMenuContent,
  OverflowMenuGroup,
  OverflowMenuItem,
  OverflowMenuDropdownItem,
  Dropdown,
  KebabToggle,
  Slider
} from '@patternfly/react-core';

export const OverflowMenuBreakpointOnContainer: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [containerWidth, setContainerWidth] = React.useState(100);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const onToggle = (isOpen: boolean) => {
    setIsOpen(isOpen);
  };

  const onSelect = () => {
    setIsOpen(!isOpen);
  };

  const onChange = (value: number) => {
    setContainerWidth(value);
  };

  const containerStyles = {
    width: `${containerWidth}%`,
    padding: '1rem',
    borderWidth: '2px',
    borderStyle: 'dashed'
  };

  const dropdownItems = [
    <OverflowMenuDropdownItem key="item1" isShared>
      Item 1
    </OverflowMenuDropdownItem>,
    <OverflowMenuDropdownItem key="item2" isShared>
      Item 2
    </OverflowMenuDropdownItem>,
    <OverflowMenuDropdownItem key="item3" isShared>
      Item 3
    </OverflowMenuDropdownItem>,
    <OverflowMenuDropdownItem key="item4" isShared>
      Item 4
    </OverflowMenuDropdownItem>,
    <OverflowMenuDropdownItem key="item5" isShared>
      Item 5
    </OverflowMenuDropdownItem>
  ];

  return (
    <>
      <div style={{ width: '100%', maxWidth: '400px' }}>
        <div>
          <span id="overflowMenu-hasBreakpointOnContainer-slider-label">Current container width</span>: {containerWidth}
          %
        </div>
        <Slider
          value={containerWidth}
          onChange={onChange}
          max={100}
          min={20}
          step={20}
          showTicks
          showBoundaries={false}
          aria-labelledby="overflowMenu-hasBreakpointOnContainer-slider-label"
        />
      </div>
      <div ref={containerRef} id="breakpoint-reference-container" style={containerStyles}>
        <OverflowMenu breakpointReference={containerRef} breakpoint="sm">
          <OverflowMenuContent>
            <OverflowMenuItem>Item 1</OverflowMenuItem>
            <OverflowMenuItem>Item 2</OverflowMenuItem>
            <OverflowMenuGroup>
              <OverflowMenuItem>Item 3</OverflowMenuItem>
              <OverflowMenuItem>Item 4</OverflowMenuItem>
              <OverflowMenuItem>Item 5</OverflowMenuItem>
            </OverflowMenuGroup>
          </OverflowMenuContent>
          <OverflowMenuControl>
            <Dropdown
              onSelect={onSelect}
              toggle={<KebabToggle onToggle={onToggle} />}
              isOpen={isOpen}
              isPlain
              dropdownItems={dropdownItems}
              isFlipEnabled
              menuAppendTo="parent"
            />
          </OverflowMenuControl>
        </OverflowMenu>
      </div>
    </>
  );
};
