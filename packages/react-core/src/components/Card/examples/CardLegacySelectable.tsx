import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Dropdown,
  DropdownItem,
  DropdownSeparator,
  KebabToggle
} from '@patternfly/react-core';

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

  const onToggle = (event: any, isOpen: boolean) => {
    event.stopPropagation();
    setIsKebabOpen(isOpen);
  };

  const onSelect = (event: React.SyntheticEvent<HTMLDivElement> | undefined) => {
    event?.stopPropagation();
    setIsKebabOpen(!isKebabOpen);
  };

  const dropdownItems = [
    <DropdownItem key="link">Link</DropdownItem>,
    <DropdownItem key="action" component="button">
      Action
    </DropdownItem>,
    <DropdownItem key="disabled link" isDisabled>
      Disabled Link
    </DropdownItem>,
    <DropdownItem key="disabled action" isDisabled component="button">
      Disabled Action
    </DropdownItem>,
    <DropdownSeparator key="separator" />,
    <DropdownItem key="separated link">Separated Link</DropdownItem>,
    <DropdownItem key="separated action" component="button">
      Separated Action
    </DropdownItem>
  ];

  const headerActions = (
    <>
      <Dropdown
        onSelect={onSelect}
        toggle={<KebabToggle onToggle={onToggle} />}
        isOpen={isKebabOpen}
        isPlain
        dropdownItems={dropdownItems}
        position={'right'}
      />
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
      >
        <CardHeader actions={{actions: headerActions}}/>
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
      >
        <CardTitle>Second legacy selectable card</CardTitle>
        <CardBody>This is a selectable card. Click me to select me. Click again to deselect me.</CardBody>
      </Card>
    </>
  );
};
