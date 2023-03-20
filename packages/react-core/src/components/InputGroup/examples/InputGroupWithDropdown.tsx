import React from 'react';
import { Button, InputGroup, TextInput } from '@patternfly/react-core';
import {
  Dropdown as DropdownDeprecated,
  DropdownToggle,
  DropdownItem as DropdownItemDeprecated
} from '@patternfly/react-core/deprecated';

export const InputGroupWithDropdown: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const onToggle = (_event: any, isOpen: boolean) => {
    setIsOpen(isOpen);
  };

  const onSelect = () => {
    setIsOpen(false);
  };

  const dropdownItems = [
    <DropdownItemDeprecated key="opt-1" value="Option 1" component="button">
      Option 1
    </DropdownItemDeprecated>,
    <DropdownItemDeprecated key="opt-2" value="Option 2" component="button">
      Option 2
    </DropdownItemDeprecated>,
    <DropdownItemDeprecated key="opt-3" value="Option 3" component="button">
      Option 3
    </DropdownItemDeprecated>
  ];

  return (
    <React.Fragment>
      <InputGroup>
        <DropdownDeprecated
          onSelect={onSelect}
          toggle={<DropdownToggle onToggle={onToggle}>Dropdown</DropdownToggle>}
          isOpen={isOpen}
          dropdownItems={dropdownItems}
        />
        <TextInput id="textInput-with-dropdown" aria-label="input with dropdown and button" />
        <Button id="inputDropdownButton1" variant="control">
          Button
        </Button>
      </InputGroup>
    </React.Fragment>
  );
};
