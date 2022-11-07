import React from 'react';
import { ToggleGroup, ToggleGroupItem } from '@patternfly/react-core';

export const ToggleGroupCompact: React.FunctionComponent = () => {
  const [isSelected, setIsSelected] = React.useState({
    'toggle-group-compact-1': false,
    'toggle-group-compact-2': false
  });
  const handleItemClick = (isSelected: boolean, event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent) => {
    const id = event.currentTarget.id;
    setIsSelected(prevIsSelected => ({ ...prevIsSelected, [id]: isSelected }));
  };
  return (
    <ToggleGroup isCompact aria-label="Compact variant toggle group">
      <ToggleGroupItem
        text="Option 1"
        buttonId="toggle-group-compact-1"
        isSelected={isSelected['toggle-group-compact-1']}
        onChange={handleItemClick}
      />
      <ToggleGroupItem
        text="Option 2"
        buttonId="toggle-group-compact-2"
        isSelected={isSelected['toggle-group-compact-2']}
        onChange={handleItemClick}
      />
      <ToggleGroupItem text="Option 3" isDisabled />
    </ToggleGroup>
  );
};
