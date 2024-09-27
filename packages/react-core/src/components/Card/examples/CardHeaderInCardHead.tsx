import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  Checkbox,
  Dropdown,
  DropdownList,
  DropdownItem,
  MenuToggle,
  MenuToggleElement,
  Divider
} from '@patternfly/react-core';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

export const CardTitleInHeader: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isChecked, setIsChecked] = React.useState<boolean>(false);

  const onSelect = () => {
    setIsOpen(!isOpen);
  };
  const onClick = (checked: boolean) => {
    setIsChecked(checked);
  };

  const dropdownItems = (
    <>
      <DropdownItem key="action">Action</DropdownItem>
      {/* Prevent default onClick functionality for example purposes */}
      <DropdownItem key="link" to="#" onClick={(event: any) => event.preventDefault()}>
        Link
      </DropdownItem>
      <DropdownItem key="disabled action" isDisabled>
        Disabled Action
      </DropdownItem>
      <DropdownItem key="disabled link" isDisabled to="#" onClick={(event: any) => event.preventDefault()}>
        Disabled Link
      </DropdownItem>
      <Divider component="li" key="separator" />
      <DropdownItem key="separated action">Separated Action</DropdownItem>
      <DropdownItem key="separated link" to="#" onClick={(event: any) => event.preventDefault()}>
        Separated Link
      </DropdownItem>
    </>
  );

  const headerActions = (
    <>
      <Dropdown
        onSelect={onSelect}
        toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
          <MenuToggle
            ref={toggleRef}
            isExpanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            variant="plain"
            aria-label="Card title inline with images and actions example kebab toggle"
            icon={<EllipsisVIcon aria-hidden="true" />}
          />
        )}
        isOpen={isOpen}
        onOpenChange={(isOpen: boolean) => setIsOpen(isOpen)}
      >
        <DropdownList>{dropdownItems}</DropdownList>
      </Dropdown>
      <Checkbox
        isChecked={isChecked}
        onChange={(_event, checked) => onClick(checked)}
        aria-label="card checkbox example"
        id="check-2"
        name="check2"
      />
    </>
  );

  return (
    <Card>
      <CardHeader actions={{ actions: headerActions }}>
        <CardTitle>
          This is a really really really really really really really really really really long header
        </CardTitle>
      </CardHeader>
      <CardBody>Body</CardBody>
      <CardFooter>Footer</CardFooter>
    </Card>
  );
};
