import React from 'react';
import {
  OverflowMenu,
  OverflowMenuControl,
  OverflowMenuContent,
  OverflowMenuGroup,
  OverflowMenuItem,
  OverflowMenuDropdownItem,
  MenuToggle,
  Button,
  ButtonVariant,
  Dropdown,
  DropdownList
} from '@patternfly/react-core';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import AlignLeftIcon from '@patternfly/react-icons/dist/esm/icons/align-left-icon';
import AlignCenterIcon from '@patternfly/react-icons/dist/esm/icons/align-center-icon';
import AlignRightIcon from '@patternfly/react-icons/dist/esm/icons/align-right-icon';

export const OverflowMenuGroupTypes: React.FunctionComponent = () => {
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
    <OverflowMenuDropdownItem itemId={3} key="primary" isShared>
      Primary
    </OverflowMenuDropdownItem>,
    <OverflowMenuDropdownItem itemId={4} key="secondary" isShared>
      Secondary
    </OverflowMenuDropdownItem>,
    <OverflowMenuDropdownItem itemId={5} key="tertiary" isShared>
      Tertiary
    </OverflowMenuDropdownItem>,
    <OverflowMenuDropdownItem itemId={6} key="action1" isShared>
      Action 1
    </OverflowMenuDropdownItem>,
    <OverflowMenuDropdownItem itemId={7} key="action2" isShared>
      Action 2
    </OverflowMenuDropdownItem>,
    <OverflowMenuDropdownItem itemId={8} key="action3" isShared>
      Action 3
    </OverflowMenuDropdownItem>
  ];

  return (
    <OverflowMenu breakpoint="lg">
      <OverflowMenuContent>
        <OverflowMenuGroup>
          <OverflowMenuItem>Item</OverflowMenuItem>
          <OverflowMenuItem>Item</OverflowMenuItem>
          <OverflowMenuItem>Item</OverflowMenuItem>
        </OverflowMenuGroup>
        <OverflowMenuGroup groupType="button">
          <OverflowMenuItem>
            <Button variant={ButtonVariant.primary}>Primary</Button>
          </OverflowMenuItem>
          <OverflowMenuItem>
            <Button variant={ButtonVariant.secondary}>Secondary</Button>
          </OverflowMenuItem>
          <OverflowMenuItem>
            <Button variant={ButtonVariant.tertiary}>Tertiary</Button>
          </OverflowMenuItem>
        </OverflowMenuGroup>
        <OverflowMenuGroup groupType="icon">
          <OverflowMenuItem>
            <Button variant={ButtonVariant.plain} aria-label="Align left" icon={<AlignLeftIcon />} />
          </OverflowMenuItem>
          <OverflowMenuItem>
            <Button variant={ButtonVariant.plain} aria-label="Align center" icon={<AlignCenterIcon />} />
          </OverflowMenuItem>
          <OverflowMenuItem>
            <Button variant={ButtonVariant.plain} aria-label="Align right" icon={<AlignRightIcon />} />
          </OverflowMenuItem>
        </OverflowMenuGroup>
      </OverflowMenuContent>
      <OverflowMenuControl>
        <Dropdown
          onSelect={onSelect}
          toggle={(toggleRef) => (
            <MenuToggle
              ref={toggleRef}
              aria-label="Group example overflow menu"
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
