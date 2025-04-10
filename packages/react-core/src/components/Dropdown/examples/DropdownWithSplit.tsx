import {
  Dropdown,
  MenuToggle,
  MenuToggleCheckbox,
  DropdownItem,
  DropdownList,
  Divider,
  MenuToggleElement
} from '@patternfly/react-core';

export const DropdownSplitButtonText: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onToggleClick = () => {
    setIsOpen(!isOpen);
  };

  const onFocus = () => {
    const element = document.getElementById('toggle-split-button-text');
    element?.focus();
  };

  const onSelect = () => {
    setIsOpen(false);
    onFocus();
  };

  return (
    <Dropdown
      onSelect={onSelect}
      toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
        <MenuToggle
          splitButtonItems={[<MenuToggleCheckbox id="split-button-checkbox" key="checkbox"></MenuToggleCheckbox>]}
          aria-label="Split button dropdown"
          ref={toggleRef}
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
