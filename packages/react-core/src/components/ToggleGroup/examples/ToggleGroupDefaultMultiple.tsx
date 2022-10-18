import React from 'react';
import { ToggleGroup, ToggleGroupItem, Button, Stack, StackItem } from '@patternfly/react-core';

export const ToggleGroupDefaultMultiple: React.FunctionComponent = () => {
  const [state, setState] = React.useState({
    isSelected: {
      first: false,
      second: false
    }
  });
  const [disableAll, setDisableAll] = React.useState(false);
  const handleItemClick = (isSelected, event) => {
    const id = event.currentTarget.id;
    setState(prevState => {
      prevState.isSelected[id] = isSelected;
      return {
        isSelected: prevState.isSelected
      };
    });
  };
  const disableAllClick = () => {
    setDisableAll(!disableAll);
  };
  return (
    <Stack hasGutter>
      <StackItem>
        <Button onClick={disableAllClick}>{disableAll ? 'Enable back' : 'Disable all'}</Button>
      </StackItem>
      <StackItem>
        <ToggleGroup areAllGroupsDisabled={disableAll} aria-label="Default with multiple selectable">
          <ToggleGroupItem
            text="Option 1"
            key={0}
            buttonId="first"
            isSelected={state.isSelected.first}
            onChange={handleItemClick}
          />
          <ToggleGroupItem
            text="Option 2"
            key={1}
            buttonId="second"
            isSelected={state.isSelected.second}
            onChange={handleItemClick}
          />
          <ToggleGroupItem text="Option 3" key={2} isDisabled />
        </ToggleGroup>
      </StackItem>
    </Stack>
  );
};
