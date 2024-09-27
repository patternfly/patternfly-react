import React from 'react';
import {
  ActionList,
  ActionListGroup,
  ActionListItem,
  Button,
  Dropdown,
  DropdownList,
  DropdownItem,
  MenuToggle,
  MenuToggleElement,
  Divider
} from '@patternfly/react-core';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

export const ActionListSingleGroup: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  const onSelect = (event: React.MouseEvent<Element, MouseEvent> | undefined) => {
    event?.stopPropagation();
    setIsOpen(!isOpen);
  };

  const dropdownItems = (
    <>
      <DropdownItem to="#" key="link">
        Link
      </DropdownItem>
      <DropdownItem key="action">Action</DropdownItem>
      <DropdownItem to="#" key="disabled link" isDisabled>
        Disabled Link
      </DropdownItem>
      <DropdownItem key="disabled action" isDisabled>
        Disabled Action
      </DropdownItem>
      <Divider component="li" key="separator" />
      <DropdownItem to="#" key="separated link">
        Separated Link
      </DropdownItem>
      <DropdownItem key="separated action">Separated Action</DropdownItem>
    </>
  );
  return (
    <React.Fragment>
      <ActionList>
        <ActionListGroup>
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
        </ActionListGroup>
      </ActionList>
      <br />
      With kebab
      <ActionList>
        <ActionListGroup>
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
            <Dropdown
              onSelect={onSelect}
              toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                <MenuToggle
                  ref={toggleRef}
                  onClick={onToggle}
                  variant="plain"
                  isExpanded={isOpen}
                  aria-label="Action list single group kebab"
                  icon={<EllipsisVIcon />}
                />
              )}
              isOpen={isOpen}
              onOpenChange={(isOpen: boolean) => setIsOpen(isOpen)}
            >
              <DropdownList>{dropdownItems}</DropdownList>
            </Dropdown>
          </ActionListItem>
        </ActionListGroup>
      </ActionList>
    </React.Fragment>
  );
};
