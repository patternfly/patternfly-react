import React from 'react';
import {
  Dropdown,
  DropdownGroup,
  DropdownItem,
  DropdownList,
  MenuToggle,
  MenuToggleElement,
  Divider
} from '@patternfly/react-core';

export const DropdownWithGroups: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onToggleClick = () => {
    setIsOpen(!isOpen);
  };

  const onSelect = (_event: React.MouseEvent<Element, MouseEvent> | undefined, value: string | number | undefined) => {
    // eslint-disable-next-line no-console
    console.log('selected', value);
    setIsOpen(false);
  };

  return (
    <Dropdown
      isOpen={isOpen}
      onSelect={onSelect}
      onOpenChange={(isOpen: boolean) => setIsOpen(isOpen)}
      toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
        <MenuToggle ref={toggleRef} onClick={onToggleClick} isExpanded={isOpen}>
          Dropdown
        </MenuToggle>
      )}
      shouldFocusToggleOnSelect
    >
      <DropdownGroup>
        <DropdownList>
          <DropdownItem value={0} key="action">
            Action
          </DropdownItem>
          <DropdownItem
            value={1}
            key="link"
            to="#default-link2"
            // Prevent the default onClick functionality for example purposes
            onClick={(ev: any) => ev.preventDefault()}
          >
            Link
          </DropdownItem>
        </DropdownList>
      </DropdownGroup>
      <Divider component="li" />
      <DropdownGroup label="Group 2" labelHeadingLevel="h3">
        <DropdownList>
          <DropdownItem value={2} key="group2 action">
            Group 2 action
          </DropdownItem>
          <DropdownItem value={3} key="group2 link" to="#default-link4" onClick={(ev: any) => ev.preventDefault()}>
            Group 2 link
          </DropdownItem>
        </DropdownList>
      </DropdownGroup>
      <Divider />
      <DropdownGroup label="Group 3" labelHeadingLevel="h3">
        <DropdownList>
          <DropdownItem value={4} key="group3 action">
            Group 3 action
          </DropdownItem>
          <DropdownItem value={5} key="group3 link" to="#default-link6" onClick={(ev: any) => ev.preventDefault()}>
            Group 3 link
          </DropdownItem>
        </DropdownList>
      </DropdownGroup>
    </Dropdown>
  );
};
