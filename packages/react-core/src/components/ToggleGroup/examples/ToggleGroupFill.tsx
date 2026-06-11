import { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@patternfly/react-core';

export const ToggleGroupFill: React.FunctionComponent = () => {
  const [isSelectedBasic, setIsSelectedBasic] = useState('toggle-group-fill-1');
  const [isSelectedMulti, setIsSelectedMulti] = useState({
    'toggle-group-fill-multi-1': false,
    'toggle-group-fill-multi-2': false,
    'toggle-group-fill-multi-3': false
  });
  const [isSelectedDisabled, setIsSelectedDisabled] = useState('toggle-group-fill-disabled-1');

  const handleItemClickBasic = (event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent) => {
    const id = event.currentTarget.id;
    setIsSelectedBasic(id);
  };

  const handleItemClickMulti = (
    event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent,
    isSelected: boolean
  ) => {
    const id = event.currentTarget.id;
    setIsSelectedMulti((prevIsSelected) => ({ ...prevIsSelected, [id]: isSelected }));
  };

  const handleItemClickDisabled = (event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent) => {
    const id = event.currentTarget.id;
    setIsSelectedDisabled(id);
  };

  return (
    <>
      <ToggleGroup isFill aria-label="Full width toggle group">
        <ToggleGroupItem
          text="Option 1"
          buttonId="toggle-group-fill-1"
          isSelected={isSelectedBasic === 'toggle-group-fill-1'}
          onChange={handleItemClickBasic}
        />
        <ToggleGroupItem
          text="Option 2"
          buttonId="toggle-group-fill-2"
          isSelected={isSelectedBasic === 'toggle-group-fill-2'}
          onChange={handleItemClickBasic}
        />
        <ToggleGroupItem
          text="Option 3"
          buttonId="toggle-group-fill-3"
          isSelected={isSelectedBasic === 'toggle-group-fill-3'}
          onChange={handleItemClickBasic}
        />
      </ToggleGroup>
      <br />
      <ToggleGroup isFill aria-label="Full width multi-select toggle group">
        <ToggleGroupItem
          text="Option 1"
          buttonId="toggle-group-fill-multi-1"
          isSelected={isSelectedMulti['toggle-group-fill-multi-1']}
          onChange={handleItemClickMulti}
        />
        <ToggleGroupItem
          text="Option 2"
          buttonId="toggle-group-fill-multi-2"
          isSelected={isSelectedMulti['toggle-group-fill-multi-2']}
          onChange={handleItemClickMulti}
        />
        <ToggleGroupItem
          text="Option 3"
          buttonId="toggle-group-fill-multi-3"
          isSelected={isSelectedMulti['toggle-group-fill-multi-3']}
          onChange={handleItemClickMulti}
        />
      </ToggleGroup>
      <br />
      <ToggleGroup isFill aria-label="Full width toggle group with disabled item">
        <ToggleGroupItem
          text="Option 1"
          buttonId="toggle-group-fill-disabled-1"
          isSelected={isSelectedDisabled === 'toggle-group-fill-disabled-1'}
          onChange={handleItemClickDisabled}
        />
        <ToggleGroupItem
          text="Option 2"
          buttonId="toggle-group-fill-disabled-2"
          isSelected={isSelectedDisabled === 'toggle-group-fill-disabled-2'}
          onChange={handleItemClickDisabled}
        />
        <ToggleGroupItem text="Option 3" isDisabled />
      </ToggleGroup>
    </>
  );
};
