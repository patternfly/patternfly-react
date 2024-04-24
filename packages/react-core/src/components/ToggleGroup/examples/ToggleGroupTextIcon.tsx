import React from 'react';
import { ToggleGroup, ToggleGroupItem } from '@patternfly/react-core';
import UndoIcon from '@patternfly/react-icons/dist/esm/icons/undo-icon';
import CopyIcon from '@patternfly/react-icons/dist/esm/icons/copy-icon';
import ShareSquareIcon from '@patternfly/react-icons/dist/esm/icons/share-square-icon';

export const ToggleGroupIcon: React.FunctionComponent = () => {
  const [isSelected, setIsSelected] = React.useState({
    'text-icons-1': false,
    'text-icons-2': false,
    'text-icons-3': true
  });
  const handleItemClick = (event, isSelected: boolean) => {
    const id = event.currentTarget.id;
    setIsSelected((prevIsSelected) => ({ ...prevIsSelected, [id]: isSelected }));
  };
  return (
    <>
      <ToggleGroup aria-label="Text and icon toggle group with icons at start">
        <ToggleGroupItem
          icon={<CopyIcon />}
          text="Copy"
          buttonId="toggle-group-text-icons-1"
          isSelected={isSelected['toggle-group-text-icons-1']}
          onChange={handleItemClick}
        />
        <ToggleGroupItem
          icon={<UndoIcon />}
          text="Undo"
          buttonId="toggle-group-text-icons-2"
          isSelected={isSelected['toggle-group-text-icons-2']}
          onChange={handleItemClick}
        />
        <ToggleGroupItem
          icon={<ShareSquareIcon />}
          text="Share"
          buttonId="toggle-group-text-icons-3"
          isSelected={isSelected['toggle-group-text-icons-3']}
          onChange={handleItemClick}
        />
      </ToggleGroup>
      <br />
      <ToggleGroup aria-label="Text and icon toggle group with icons at end">
        <ToggleGroupItem
          icon={<CopyIcon />}
          iconPosition="end"
          text="Copy"
          buttonId="toggle-group-text-icons-4"
          isSelected={isSelected['toggle-group-text-icons-4']}
          onChange={handleItemClick}
        />
        <ToggleGroupItem
          icon={<UndoIcon />}
          iconPosition="end"
          text="Undo"
          buttonId="toggle-group-text-icons-5"
          isSelected={isSelected['toggle-group-text-icons-5']}
          onChange={handleItemClick}
        />
        <ToggleGroupItem
          icon={<ShareSquareIcon />}
          iconPosition="end"
          text="Share"
          buttonId="toggle-group-text-icons-6"
          isSelected={isSelected['toggle-group-text-icons-6']}
          onChange={handleItemClick}
        />
      </ToggleGroup>
    </>
  );
};
