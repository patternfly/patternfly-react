import React from 'react';
import { Card, CardHeader, CardTitle, CardBody } from '@patternfly/react-core';
import {
  Dropdown as DropdownDeprecated,
  DropdownItem as DropdownItemDeprecated,
  DropdownSeparator,
  KebabToggle
} from '@patternfly/react-core/deprecated';

export const CardSelectable: React.FunctionComponent = () => {
  const [selected, setSelected] = React.useState<string>('');
  const [isKebabOpen, setIsKebabOpen] = React.useState<boolean>(false);

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.target !== event.currentTarget) {
      return;
    }
    if ([' ', 'Enter'].includes(event.key)) {
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

  const onToggle = (
    event: MouseEvent | TouchEvent | KeyboardEvent | React.KeyboardEvent<any> | React.MouseEvent<HTMLButtonElement>,
    isOpen: boolean
  ) => {
    event.stopPropagation();
    setIsKebabOpen(isOpen);
  };

  const onSelect = (event: React.SyntheticEvent<HTMLDivElement> | undefined) => {
    event?.stopPropagation();
    setIsKebabOpen(false);
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

  const headerActions = (
    <>
      <DropdownDeprecated
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
    <React.Fragment>
      <Card
        id="selectable-first-card"
        onKeyDown={onKeyDown}
        onClick={onClick}
        hasSelectableInput
        onSelectableInputChange={onChange}
        isSelectableRaised
        isSelected={selected === 'selectable-first-card'}
      >
        <CardHeader actions={{ actions: headerActions }} />
        <CardTitle>First card</CardTitle>
        <CardBody>This is a selectable card. Click me to select me. Click again to deselect me.</CardBody>
      </Card>
      <br />
      <Card
        id="selectable-second-card"
        onKeyDown={onKeyDown}
        onClick={onClick}
        hasSelectableInput
        onSelectableInputChange={onChange}
        isSelectableRaised
        isSelected={selected === 'selectable-second-card'}
      >
        <CardTitle>Second card</CardTitle>
        <CardBody>This is a selectable card. Click me to select me. Click again to deselect me.</CardBody>
      </Card>
      <br />
      <Card id="selectable-third-card" isSelectableRaised isDisabledRaised hasSelectableInput>
        <CardTitle>Third card</CardTitle>
        <CardBody>This is a raised but disabled card.</CardBody>
      </Card>
    </React.Fragment>
  );
};
