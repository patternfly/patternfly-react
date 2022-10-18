import React from 'react';
import { ToggleGroup, ToggleGroupItem } from '@patternfly/react-core';

export const ToggleGroupDefaultSingle: React.FunctionComponent = () => {
  const [isSelected, setIsSelected] = React.useState('');
  const handleItemClick = (isSelected, event) => {
    const id = event.currentTarget.id;
    setIsSelected(id);
  };
  return (
    <ToggleGroup aria-label="Default with single selectable">
      <ToggleGroupItem
        text="Option 1"
        buttonId="firstRadio"
        isSelected={isSelected === 'firstRadio'}
        onChange={handleItemClick}
      />
      <ToggleGroupItem
        text="Option 2"
        buttonId="secondRadio"
        isSelected={isSelected === 'secondRadio'}
        onChange={handleItemClick}
      />
      <ToggleGroupItem
        text="Option 3"
        buttonId="thirdRadio"
        isSelected={isSelected === 'thirdRadio'}
        onChange={handleItemClick}
      />
    </ToggleGroup>
  );
};
