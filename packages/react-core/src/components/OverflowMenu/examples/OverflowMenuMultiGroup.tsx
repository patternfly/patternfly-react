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

export const OverflowMenuMultiGroup: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  const onSelect = () => {
    setIsOpen(!isOpen);
  };

  const dropdownItems = [
    <OverflowMenuDropdownItem itemId={0} key="1" isShared>
      Primary
    </OverflowMenuDropdownItem>,
    <OverflowMenuDropdownItem itemId={1} key="2" isShared>
      Secondary
    </OverflowMenuDropdownItem>,
    <OverflowMenuDropdownItem itemId={2} key="3" isShared>
      Tertiary
    </OverflowMenuDropdownItem>,
    <OverflowMenuDropdownItem itemId={3} key="4" isShared>
      Action 4
    </OverflowMenuDropdownItem>,
    <OverflowMenuDropdownItem itemId={4} key="5" isShared>
      Action 5
    </OverflowMenuDropdownItem>,
    <OverflowMenuDropdownItem itemId={5} key="6" isShared>
      Action 6
    </OverflowMenuDropdownItem>,
    <OverflowMenuDropdownItem itemId={6} key="7">
      Action 7
    </OverflowMenuDropdownItem>
  ];

  return (
    <OverflowMenu breakpoint="lg">
      <OverflowMenuContent>
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
      <OverflowMenuControl hasAdditionalOptions>
        <Dropdown
          onSelect={onSelect}
          toggle={(toggleRef) => (
            <MenuToggle
              ref={toggleRef}
              aria-label="Multiple group example overflow menu"
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
