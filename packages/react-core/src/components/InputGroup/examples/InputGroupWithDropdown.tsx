import React from 'react';
import {
  Button,
  InputGroup,
  TextInput,
  Dropdown,
  DropdownList,
  DropdownItem,
  MenuToggle,
  MenuToggleElement
} from '@patternfly/react-core';

export const InputGroupWithDropdown: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  const onSelect = () => {
    setIsOpen(false);
  };

  return (
    <React.Fragment>
      <InputGroup>
        <Dropdown
          isOpen={isOpen}
          onSelect={onSelect}
          onOpenChange={(isOpen: boolean) => setIsOpen(isOpen)}
          toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
            <MenuToggle ref={toggleRef} onClick={onToggle} isExpanded={isOpen}>
              Dropdown
            </MenuToggle>
          )}
        >
          <DropdownList>
            <DropdownItem itemId={0} key="option1">
              Option 1
            </DropdownItem>
            <DropdownItem itemId={1} key="option2">
              Option 2
            </DropdownItem>
            <DropdownItem itemId={2} key="option3">
              Option 3
            </DropdownItem>
          </DropdownList>
        </Dropdown>
        <TextInput id="textInput-with-dropdown" aria-label="input with dropdown and button" />
        <Button id="inputDropdownButton1" variant="control">
          Button
        </Button>
      </InputGroup>
    </React.Fragment>
  );
};
