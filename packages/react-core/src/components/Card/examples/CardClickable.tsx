import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Dropdown,
  DropdownList,
  DropdownItem,
  MenuToggle,
  MenuToggleElement,
  Divider
} from '@patternfly/react-core';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

export const CardSelectable: React.FunctionComponent = () => {
  const [isKebabOpen, setIsKebabOpen] = React.useState<boolean>(false);

  const onToggle = (event: React.MouseEvent | undefined) => {
    event?.stopPropagation();
    setIsKebabOpen(!isKebabOpen);
  };

  const onSelect = (event: React.MouseEvent | undefined) => {
    event?.stopPropagation();
    setIsKebabOpen(false);
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
            isExpanded={isKebabOpen}
            onClick={onToggle}
            variant="plain"
            aria-label="Card selectable example kebab toggle"
          >
            <EllipsisVIcon aria-hidden="true" />
          </MenuToggle>
        )}
        isOpen={isKebabOpen}
        onOpenChange={(isOpen: boolean) => setIsKebabOpen(isOpen)}
      >
        <DropdownList>{dropdownItems}</DropdownList>
      </Dropdown>
    </>
  );

  return (
    <React.Fragment>
      <Card id="selectable-first-card" isClickable>
        <CardHeader
          actions={{ actions: headerActions }}
          // eslint-disable-next-line no-console
          selectableActions={{ onClickAction: () => console.log('I got clicked') }}
        />
        <CardTitle>First card</CardTitle>
        <CardBody>This is a clickable card.</CardBody>
      </Card>
    </React.Fragment>
  );
};
