import React from 'react';
import { ToggleGroup, ToggleGroupItem } from '@patternfly/react-core';

export const ToggleGroupDefaultSingle: React.FunctionComponent = () => {
  const [isSelected, setIsSelected] = React.useState('');
  const handleItemClick = (isSelected: boolean, event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent) => {
    const id = event.currentTarget.id;
    setIsSelected(id);
  };
  return (
    <ToggleGroup aria-label="Default with single selectable">
      <ToggleGroupItem
        text="Option 1"
        buttonId="toggle-group-single-1"
        isSelected={isSelected === 'toggle-group-single-1'}
        onChange={handleItemClick}
      />
      <ToggleGroupItem
        text="Option 2"
        buttonId="toggle-group-single-2"
        isSelected={isSelected === 'toggle-group-single-2'}
        onChange={handleItemClick}
      />
      <ToggleGroupItem
        text="Option 3"
        buttonId="toggle-group-single-3"
        isSelected={isSelected === 'toggle-group-single-3'}
        onChange={handleItemClick}
      />
    </ToggleGroup>
  );
};
