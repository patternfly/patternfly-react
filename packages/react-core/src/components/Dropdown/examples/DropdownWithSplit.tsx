import {
  Dropdown,
  MenuToggle,
  MenuToggleCheckbox,
  DropdownItem,
  DropdownList,
  Divider,
  MenuToggleElement
} from '@patternfly/react-core';
import { useState } from 'react';

export const DropdownSplitButtonText: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = React.useRef<MenuToggleElement>(null);

  const onFocus = () => {
    if (toggleRef.current) {
      const toggleButton = toggleRef.current.querySelector('button[aria-expanded]');
      if (toggleButton) {
        (toggleButton as HTMLElement).focus();
      }
    }
  };

  const onSelect = () => {
    setIsOpen(false);
    onFocus();
  };

  const onToggleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Dropdown
      onSelect={onSelect}
      onOpenChange={(isOpen: boolean) => setIsOpen(isOpen)}
      toggle={(toggleRefCallback: React.Ref<MenuToggleElement>) => (
        <MenuToggle
          ref={(node) => {
            // Handle both callback ref and useRef
            if (typeof toggleRefCallback === 'function') {
              toggleRefCallback(node);
            } else if (toggleRefCallback) {
              (toggleRefCallback as React.MutableRefObject<MenuToggleElement | null>).current = node;
            }
            (toggleRef as React.MutableRefObject<MenuToggleElement | null>).current = node;
          }}
          splitButtonItems={[
            <MenuToggleCheckbox id="split-button-checkbox-example" key="split-checkbox" aria-label="Select all" />
          ]}
          aria-label="Dropdown with checkbox split button"
          onClick={onToggleClick}
          isExpanded={isOpen}
        />
      )}
      isOpen={isOpen}
    >
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
        <DropdownItem value={2} isDisabled key="disabled action">
          Disabled Action
        </DropdownItem>
        <DropdownItem value={3} isDisabled key="disabled link" to="#default-link4">
          Disabled Link
        </DropdownItem>
        <DropdownItem
          value={4}
          isAriaDisabled
          key="aria-disabled link"
          to="#default-link5"
          tooltipProps={{ content: 'aria-disabled link', position: 'top' }}
        >
          Aria-disabled Link
        </DropdownItem>
        <Divider component="li" key="separator" />
        <DropdownItem value={5} key="separated action">
          Separated Action
        </DropdownItem>
        <DropdownItem value={6} key="separated link" to="#default-link6" onClick={(ev) => ev.preventDefault()}>
          Separated Link
        </DropdownItem>
      </DropdownList>
    </Dropdown>
  );
};
