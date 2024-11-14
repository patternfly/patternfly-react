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

export const OverflowMenuPersistent: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  const onSelect = () => {
    setIsOpen(!isOpen);
  };

  const dropdownItems = [
    <OverflowMenuDropdownItem itemId={0} key="secondary" isShared>
      Secondary
    </OverflowMenuDropdownItem>,
    <OverflowMenuDropdownItem itemId={1} key="tertiary" isShared>
      Tertiary
    </OverflowMenuDropdownItem>,
    <OverflowMenuDropdownItem itemId={2} key="action">
      Action 4
    </OverflowMenuDropdownItem>
  ];

  return (
    <OverflowMenu breakpoint="lg">
      <OverflowMenuContent isPersistent>
        <OverflowMenuGroup groupType="button" isPersistent>
          <OverflowMenuItem isPersistent>
            <Button variant={ButtonVariant.primary}>Primary</Button>
          </OverflowMenuItem>
          <OverflowMenuItem>
            <Button variant={ButtonVariant.secondary}>Secondary</Button>
          </OverflowMenuItem>
          <OverflowMenuItem>
            <Button variant={ButtonVariant.tertiary}>Tertiary</Button>
          </OverflowMenuItem>
        </OverflowMenuGroup>
      </OverflowMenuContent>
      <OverflowMenuControl hasAdditionalOptions>
        <Dropdown
          onSelect={onSelect}
          toggle={(toggleRef) => (
            <MenuToggle
              ref={toggleRef}
              aria-label="Persistent example overflow menu"
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
