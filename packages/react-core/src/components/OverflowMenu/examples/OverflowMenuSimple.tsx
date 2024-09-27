import React from 'react';
import {
  OverflowMenu,
  OverflowMenuControl,
  OverflowMenuContent,
  OverflowMenuGroup,
  OverflowMenuItem,
  OverflowMenuDropdownItem,
  MenuToggle,
  Dropdown,
  DropdownList
} from '@patternfly/react-core';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

export const OverflowMenuBreakpointOnContainer: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  const onSelect = () => {
    setIsOpen(!isOpen);
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
    <OverflowMenuDropdownItem itemId={5} key="item5" isShared>
      Item 5
    </OverflowMenuDropdownItem>
  ];

  return (
    <OverflowMenu breakpoint="lg">
      <OverflowMenuContent>
        <OverflowMenuItem>Item</OverflowMenuItem>
        <OverflowMenuItem>Item</OverflowMenuItem>
        <OverflowMenuGroup>
          <OverflowMenuItem>Item</OverflowMenuItem>
          <OverflowMenuItem>Item</OverflowMenuItem>
          <OverflowMenuItem>Item</OverflowMenuItem>
        </OverflowMenuGroup>
      </OverflowMenuContent>
      <OverflowMenuControl>
        <Dropdown
          onSelect={onSelect}
          toggle={(toggleRef) => (
            <MenuToggle
              ref={toggleRef}
              aria-label="Simple example overflow menu"
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
  );
};
