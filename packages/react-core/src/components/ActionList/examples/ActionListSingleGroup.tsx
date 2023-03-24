import React from 'react';
import { ActionList, ActionListItem, Button } from '@patternfly/react-core';
import {
  Dropdown as DropdownDeprecated,
  DropdownItem as DropdownItemDeprecated,
  DropdownSeparator,
  KebabToggle
} from '@patternfly/react-core/deprecated';

export const ActionListSingleGroup: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onToggle = (
    event: MouseEvent | TouchEvent | KeyboardEvent | React.KeyboardEvent<any> | React.MouseEvent<HTMLButtonElement>,
    isOpen: boolean
  ) => {
    event.stopPropagation();
    setIsOpen(isOpen);
  };

  const onSelect = (event: React.SyntheticEvent<HTMLDivElement, Event>) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  const dropdownItems = [
    <DropdownItemDeprecated key="link">Link</DropdownItemDeprecated>,
    <DropdownItemDeprecated key="action" component="button">
      Action
    </DropdownItemDeprecated>,
    <DropdownItemDeprecated key="disabled link" isDisabled>
      Disabled Link
    </DropdownItemDeprecated>,
    <DropdownItemDeprecated key="disabled action" isDisabled component="button">
      Disabled Action
    </DropdownItemDeprecated>,
    <DropdownSeparator key="separator" />,
    <DropdownItemDeprecated key="separated link">Separated Link</DropdownItemDeprecated>,
    <DropdownItemDeprecated key="separated action" component="button">
      Separated Action
    </DropdownItemDeprecated>
  ];

  return (
    <React.Fragment>
      <ActionList>
        <ActionListItem>
          <Button variant="primary" id="single-group-next-button">
            Next
          </Button>
        </ActionListItem>
        <ActionListItem>
          <Button variant="secondary" id="single-group-back-button">
            Back
          </Button>
        </ActionListItem>
      </ActionList>
      <br />
      With kebab
      <ActionList>
        <ActionListItem>
          <Button variant="primary" id="single-group-next-button2">
            Next
          </Button>
        </ActionListItem>
        <ActionListItem>
          <Button variant="secondary" id="single-group-back-button2">
            Back
          </Button>
        </ActionListItem>
        <ActionListItem>
          <DropdownDeprecated
            onSelect={onSelect}
            toggle={<KebabToggle onToggle={onToggle} />}
            isOpen={isOpen}
            isPlain
            dropdownItems={dropdownItems}
            position="right"
          />
        </ActionListItem>
      </ActionList>
    </React.Fragment>
  );
};
