import React from 'react';
import { Dropdown, DropdownGroup, DropdownItem, DropdownList } from '@patternfly/react-core/next';
import { MenuToggle, Divider } from '@patternfly/react-core';

export const DropdownWithGroups: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onToggleClick = () => {
    setIsOpen(!isOpen);
  };

  const onSelect = (_event: React.MouseEvent<Element, MouseEvent> | undefined, itemId: string | number | undefined) => {
    // eslint-disable-next-line no-console
    console.log('selected', itemId);
    setIsOpen(false);
  };

  return (
    <Dropdown
      isOpen={isOpen}
      onSelect={onSelect}
      onOpenChange={isOpen => setIsOpen(isOpen)}
      toggle={toggleRef => (
        <MenuToggle ref={toggleRef} onClick={onToggleClick} isExpanded={isOpen}>
          Dropdown
        </MenuToggle>
      )}
    >
      <DropdownGroup>
        <DropdownList>
          <DropdownItem itemId={0} key="link">
            Link
          </DropdownItem>
          <DropdownItem itemId={1} key="action" to="#default-link2" onClick={ev => ev.preventDefault()}>
            Action
          </DropdownItem>
        </DropdownList>
      </DropdownGroup>
      <Divider />
      <DropdownGroup label="Group 2" labelHeadingLevel="h3">
        <DropdownList>
          <DropdownItem itemId={2} key="group2 link">
            Group 2 link
          </DropdownItem>
          <DropdownItem itemId={3} key="group2 action" to="#default-link4">
            group 2 action
          </DropdownItem>
        </DropdownList>
      </DropdownGroup>
      <Divider />
      <DropdownGroup label="Group 3" labelHeadingLevel="h3">
        <DropdownList>
          <DropdownItem itemId={4} key="group3 link">
            Group 3 link
          </DropdownItem>
          <DropdownItem itemId={5} key="group3 action">
            Group 3 action
          </DropdownItem>
        </DropdownList>
      </DropdownGroup>
    </Dropdown>
  );
};
