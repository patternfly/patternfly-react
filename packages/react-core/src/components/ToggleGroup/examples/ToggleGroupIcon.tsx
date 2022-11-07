import React from 'react';
import { ToggleGroup, ToggleGroupItem } from '@patternfly/react-core';
import UndoIcon from '@patternfly/react-icons/dist/esm/icons/undo-icon';
import CopyIcon from '@patternfly/react-icons/dist/esm/icons/copy-icon';
import ShareSquareIcon from '@patternfly/react-icons/dist/esm/icons/share-square-icon';

export const ToggleGroupIcon: React.FunctionComponent = () => {
  const [isSelected, setIsSelected] = React.useState({
    'toggle-group-icons-1': false,
    'toggle-group-icons-2': false,
    'toggle-group-icons-3': true
  });
  const handleItemClick = (isSelected: boolean, event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent) => {
    const id = event.currentTarget.id;
    setIsSelected(prevIsSelected => ({ ...prevIsSelected, [id]: isSelected }));
  };
  return (
    <ToggleGroup aria-label="Icon variant toggle group">
      <ToggleGroupItem
        icon={<CopyIcon />}
        aria-label="copy"
        buttonId="toggle-group-icons-1"
        isSelected={isSelected['toggle-group-icons-1']}
        onChange={handleItemClick}
      />
      <ToggleGroupItem
        icon={<UndoIcon />}
        aria-label="undo"
        buttonId="toggle-group-icons-2"
        isSelected={isSelected['toggle-group-icons-2']}
        onChange={handleItemClick}
      />
      <ToggleGroupItem
        icon={<ShareSquareIcon />}
        aria-label="share square"
        buttonId="toggle-group-icons-3"
        isSelected={isSelected['toggle-group-icons-3']}
        onChange={handleItemClick}
      />
    </ToggleGroup>
  );
};
