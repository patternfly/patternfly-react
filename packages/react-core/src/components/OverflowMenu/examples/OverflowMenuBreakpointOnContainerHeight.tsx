import { useRef, useState } from 'react';
import {
  OverflowMenu,
  OverflowMenuControl,
  OverflowMenuContent,
  OverflowMenuGroup,
  OverflowMenuItem,
  OverflowMenuDropdownItem,
  MenuToggle,
  Slider,
  SliderOnChangeEvent,
  Dropdown,
  DropdownList
} from '@patternfly/react-core';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

export const OverflowMenuBreakpointOnContainerHeight: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [containerHeight, setContainerHeight] = useState(100);
  const containerRef = useRef<HTMLDivElement>(null);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  const onSelect = () => {
    setIsOpen(!isOpen);
  };

  const onChange = (_event: SliderOnChangeEvent, value: number) => {
    setContainerHeight(value);
  };

  const containerStyles = {
    height: `${containerHeight}%`,
    padding: '1rem',
    borderWidth: '2px',
    borderStyle: 'dashed'
  };

  const dropdownItems = [
    <OverflowMenuDropdownItem itemId={0} key="item1" isShared>
      Item 1
    </OverflowMenuDropdownItem>,
    <OverflowMenuDropdownItem itemId={1} key="item2" isShared>
      Item 2
    </OverflowMenuDropdownItem>,
    <OverflowMenuDropdownItem itemId={2} key="item3" isShared>
      Item 3
    </OverflowMenuDropdownItem>,
    <OverflowMenuDropdownItem itemId={3} key="item4" isShared>
      Item 4
    </OverflowMenuDropdownItem>,
    <OverflowMenuDropdownItem itemId={4} key="item5" isShared>
      Item 5
    </OverflowMenuDropdownItem>
  ];

  return (
    <>
      <span id="overflowMenu-hasBreakpointOnContainer-height-slider-label">Current container height</span>:{' '}
      {containerHeight}%
      <Slider
        value={containerHeight}
        onChange={onChange}
        max={100}
        min={20}
        step={20}
        showTicks
        showBoundaries={false}
        aria-labelledby="overflowMenu-hasBreakpointOnContainer-height-slider-label"
      />
      <div style={{ height: '100%' }}>
        <div ref={containerRef} id="height-breakpoint-reference-container" style={containerStyles}>
          <OverflowMenu breakpointReference={containerRef} breakpoint="md" isVertical>
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
                toggle={(toggleRef) => (
                  <MenuToggle
                    ref={toggleRef}
                    aria-label="Height breakpoint on container example overflow menu"
                    variant="plain"
                    onClick={onToggle}
                    isExpanded={isOpen}
                    icon={<EllipsisVIcon />}
                  />
                )}
                isOpen={isOpen}
                onOpenChange={(isOpen) => setIsOpen(isOpen)}
              >
                <DropdownList>{dropdownItems}</DropdownList>
              </Dropdown>
            </OverflowMenuControl>
          </OverflowMenu>
        </div>
      </div>
    </>
  );
};
