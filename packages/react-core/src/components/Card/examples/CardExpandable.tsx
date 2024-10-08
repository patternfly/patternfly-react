import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  CardExpandableContent,
  Checkbox,
  Dropdown,
  DropdownList,
  DropdownItem,
  Divider,
  MenuToggle,
  MenuToggleElement
} from '@patternfly/react-core';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

export const CardExpandable: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isChecked, setIsChecked] = React.useState<boolean>(false);
  const [isExpanded, setIsExpanded] = React.useState<boolean>(false);
  const [isToggleRightAligned, setIsToggleRightAligned] = React.useState<boolean>(false);

  const onSelect = () => {
    setIsOpen(!isOpen);
  };

  const onClick = (checked: boolean) => {
    setIsChecked(checked);
  };

  const onExpand = (event: React.MouseEvent, id: string) => {
    // eslint-disable-next-line no-console
    console.log(id);
    setIsExpanded(!isExpanded);
  };

  const onRightAlign = () => {
    setIsToggleRightAligned(!isToggleRightAligned);
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
            aria-label="Card expandable example kebab toggle"
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
        id="check-4"
        name="check4"
      />
    </>
  );

  return (
    <React.Fragment>
      <div style={{ marginBottom: '12px' }}>
        <Checkbox
          id={'isToggleRightAligned-1'}
          key={'isToggleRightAligned'}
          label={'isToggleRightAligned'}
          isChecked={isToggleRightAligned}
          onChange={onRightAlign}
        />
      </div>
      <Card id="expandable-card" isExpanded={isExpanded}>
        <CardHeader
          actions={{ actions: headerActions }}
          onExpand={onExpand}
          isToggleRightAligned={isToggleRightAligned}
          toggleButtonProps={{
            id: 'toggle-button1',
            'aria-label': 'Details',
            'aria-labelledby': 'expandable-card-title toggle-button1',
            'aria-expanded': isExpanded
          }}
        >
          <CardTitle id="expandable-card-title">Title</CardTitle>
        </CardHeader>
        <CardExpandableContent>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </CardExpandableContent>
      </Card>
    </React.Fragment>
  );
};
