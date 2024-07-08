import React from 'react';
import { Dropdown, DropdownList, DropdownItem, Divider, MenuToggle } from '@patternfly/react-core';

const dropDownItems = (
  <DropdownList>
    <DropdownItem id="first-item" value={0} key="link">
      Link
    </DropdownItem>
    <DropdownItem
      data-cy="dropdown-item"
      value={1}
      key="action"
      to="#default-link2"
      onClick={(ev) => ev.preventDefault()}
    >
      Action
    </DropdownItem>
    <DropdownItem value={2} isDisabled key="disabled link">
      Disabled link
    </DropdownItem>
    <DropdownItem value={3} isDisabled key="disabled action" to="#default-link4">
      Disabled action
    </DropdownItem>
    <Divider key="separator" />
    <DropdownItem value={4} key="separated link">
      Separated link
    </DropdownItem>
    <DropdownItem value={5} key="separated action">
      Separated action
    </DropdownItem>
    <DropdownItem value={6} key="download" to="#default-link7" download="download.txt">
      Download
    </DropdownItem>
  </DropdownList>
);

export const DropdownDemo: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isNoAutofocusOpen, setIsNoAutofocusOpen] = React.useState(false);

  const onToggleClick = () => {
    setIsOpen(!isOpen);
  };
  const onNoAutofocusToggleClick = () => {
    setIsOpen(!isOpen);
  };

  const onSelect = (_event: React.MouseEvent<Element, MouseEvent> | undefined) => {
    setIsOpen(false);
  };
  const onNoAutofocusSelect = (_event: React.MouseEvent<Element, MouseEvent> | undefined) => {
    setIsOpen(false);
  };

  return (
    <>
      <Dropdown
        isOpen={isOpen}
        onOpenChange={(isOpen) => setIsOpen(isOpen)}
        onSelect={onSelect}
        toggle={(toggleRef) => (
          <MenuToggle data-cy="toggle" onClick={onToggleClick} isExpanded={isOpen} ref={toggleRef}>
            Dropdown
          </MenuToggle>
        )}
      >
        {dropDownItems}
      </Dropdown>
      <Dropdown
        isOpen={isNoAutofocusOpen}
        shouldFocusFirstItemOnOpen={false}
        onOpenChange={(isOpen) => setIsNoAutofocusOpen(isOpen)}
        onSelect={onNoAutofocusSelect}
        toggle={(toggleRef) => (
          <MenuToggle
            data-cy="no-autofocus-toggle"
            onClick={onNoAutofocusToggleClick}
            isExpanded={isNoAutofocusOpen}
            ref={toggleRef}
          >
            Dropdown
          </MenuToggle>
        )}
      >
        {dropDownItems}
      </Dropdown>
    </>
  );
};
DropdownDemo.displayName = 'DropdownDemo';
