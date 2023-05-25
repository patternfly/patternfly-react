import React from 'react';
import { Select, SelectOption, SelectList, MenuToggle, MenuToggleElement } from '@patternfly/react-core';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';

export const SelectOptionVariations: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string>('Select a value');

  const onToggleClick = () => {
    setIsOpen(!isOpen);
  };

  const onSelect = (_event: React.MouseEvent<Element, MouseEvent> | undefined, value: string | number | undefined) => {
    // eslint-disable-next-line no-console
    console.log('selected', value);

    setSelected(value as string);
    setIsOpen(false);
  };

  const toggle = (toggleRef: React.Ref<MenuToggleElement>) => (
    <MenuToggle
      ref={toggleRef}
      onClick={onToggleClick}
      isExpanded={isOpen}
      style={
        {
          width: '200px'
        } as React.CSSProperties
      }
    >
      {selected}
    </MenuToggle>
  );

  return (
    <Select
      id="option-variations-select"
      isOpen={isOpen}
      selected={selected}
      onSelect={onSelect}
      onOpenChange={(isOpen) => setIsOpen(isOpen)}
      toggle={toggle}
      shouldFocusToggleOnSelect
    >
      <SelectList>
        <SelectOption value="Basic option">Basic option</SelectOption>
        <SelectOption value="Option with description" description="This is a description">
          Option with description
        </SelectOption>
        <SelectOption
          to="#"
          // Prevent default clicking functionality for example purposes only
          onClick={(event) => event.preventDefault()}
          value="Option with link"
          isExternalLink
        >
          Option with link
        </SelectOption>
        <SelectOption value="Option with icon" icon={<BellIcon />}>
          Option with icon
        </SelectOption>
        <SelectOption value="Disabled option" isDisabled>
          Disabled option
        </SelectOption>
        <SelectOption value="See Menu for additional variations!">See Menu for additional variations!</SelectOption>
      </SelectList>
    </Select>
  );
};
