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

export const CardLegacySelectable: React.FunctionComponent = () => {
  const [selected, setSelected] = React.useState<string>('');
  const [isKebabOpen, setIsKebabOpen] = React.useState<boolean>(false);

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.target !== event.currentTarget) {
      return;
    }
    if (['Enter', ' '].includes(event.key)) {
      event.preventDefault();
      const newSelected = event.currentTarget.id === selected ? '' : event.currentTarget.id;
      setSelected(newSelected);
    }
  };

  const onClick = (event: React.MouseEvent) => {
    const newSelected = event.currentTarget.id === selected ? '' : event.currentTarget.id;
    setSelected(newSelected);
  };

  const onChange = (_event: React.FormEvent<HTMLInputElement>, labelledById: string) => {
    const newSelected = labelledById === selected ? '' : labelledById;
    setSelected(newSelected);
  };

  const onToggle = (event: React.MouseEvent) => {
    event?.stopPropagation();
    setIsKebabOpen(!isKebabOpen);
  };

  const onSelect = (event: React.MouseEvent | undefined) => {
    event?.stopPropagation();
    setIsKebabOpen(!isKebabOpen);
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
            aria-label="Card legacy selectable example kebab toggle"
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
    <>
      <Card
        id="legacy-first-card"
        onKeyDown={onKeyDown}
        onClick={onClick}
        onSelectableInputChange={onChange}
        isSelectable
        isSelected={selected === 'legacy-first-card'}
        hasSelectableInput
        tabIndex={0}
      >
        <CardHeader actions={{ actions: headerActions }} />
        <CardTitle>First legacy selectable card</CardTitle>
        <CardBody>This is a selectable card. Click me to select me. Click again to deselect me.</CardBody>
      </Card>
      <br />
      <Card
        id="legacy-second-card"
        onKeyDown={onKeyDown}
        onClick={onClick}
        onSelectableInputChange={onChange}
        isSelectable
        isSelected={selected === 'legacy-second-card'}
        hasSelectableInput
        tabIndex={0}
      >
        <CardTitle>Second legacy selectable card</CardTitle>
        <CardBody>This is a selectable card. Click me to select me. Click again to deselect me.</CardBody>
      </Card>
    </>
  );
};
