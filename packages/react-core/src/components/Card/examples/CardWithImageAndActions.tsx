import React from 'react';
import {
  Brand,
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
import pfLogo from '../../assets/pfLogo.svg';

export const CardWithImageAndActions: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isChecked, setIsChecked] = React.useState<boolean>(false);
  const [hasNoOffset, setHasNoOffset] = React.useState<boolean>(false);

  const onSelect = () => {
    setIsOpen(!isOpen);
  };
  const onClick = (checked: boolean) => {
    setIsChecked(checked);
  };
  const toggleOffset = (checked: boolean) => {
    setHasNoOffset(checked);
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
            aria-label="Card header images and actions example kebab toggle"
          >
            <EllipsisVIcon aria-hidden="true" />
          </MenuToggle>
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
        id="check-1"
        name="check1"
      />
    </>
  );

  return (
    <>
      <Card>
        <CardHeader actions={{ actions: headerActions, hasNoOffset }}>
          <Brand src={pfLogo} alt="PatternFly logo" style={{ width: '300px' }} />
        </CardHeader>
        <CardTitle>Title</CardTitle>
        <CardBody>Body</CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
      <div style={{ marginTop: '20px' }}>
        <Checkbox
          label="actions hasNoOffset"
          isChecked={hasNoOffset}
          onChange={(_event, checked) => toggleOffset(checked)}
          aria-label="remove actions offset"
          id="toggle-actions-offset"
          name="toggle-actions-offset"
        />
      </div>
    </>
  );
};
