import React from 'react';
import { ToggleGroup, ToggleGroupItem } from '@patternfly/react-core';

export const ToggleGroupCompact: React.FunctionComponent = () => {
  const [state, setState] = React.useState({
    isSelected: {
      'compact-1': false,
      'compact-2': false
    }
  });
  const handleItemClick = (isSelected, event) => {
    const id = event.currentTarget.id;
    setState(prevState => {
      prevState.isSelected[id] = isSelected;
      return {
        isSelected: prevState.isSelected
      };
    });
  };
  return (
    <ToggleGroup isCompact aria-label="Compact variant toggle group">
      <ToggleGroupItem
        text="Option 1"
        buttonId="compact-1"
        isSelected={state.isSelected['compact-1']}
        onChange={handleItemClick}
      />
      <ToggleGroupItem
        text="Option 2"
        buttonId="compact-2"
        isSelected={state.isSelected['compact-2']}
        onChange={handleItemClick}
      />
      <ToggleGroupItem text="Option 3" isDisabled />
    </ToggleGroup>
  );
};
