import React from 'react';
import { ToggleGroup, ToggleGroupItem, Button, Stack, StackItem } from '@patternfly/react-core';

export const ToggleGroupDefaultMultiple: React.FunctionComponent = () => {
  const [isSelected, setIsSelected] = React.useState({
    'toggle-group-multiple-1': false,
    'toggle-group-multiple-2': false
  });
  const [disableAll, setDisableAll] = React.useState(false);
  const handleItemClick = (isSelected: boolean, event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent) => {
    const id = event.currentTarget.id;
    setIsSelected(prevIsSelected => ({ ...prevIsSelected, [id]: isSelected }));
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
            buttonId="toggle-group-multiple-1"
            isSelected={isSelected['toggle-group-multiple-1']}
            onChange={handleItemClick}
          />
          <ToggleGroupItem
            text="Option 2"
            key={1}
            buttonId="toggle-group-multiple-2"
            isSelected={isSelected['toggle-group-multiple-2']}
            onChange={handleItemClick}
          />
          <ToggleGroupItem text="Option 3" key={2} isDisabled />
        </ToggleGroup>
      </StackItem>
    </Stack>
  );
};
