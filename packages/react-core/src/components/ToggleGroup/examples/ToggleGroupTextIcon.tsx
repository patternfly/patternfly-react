import React from 'react';
import { ToggleGroup, ToggleGroupItem } from '@patternfly/react-core';
import UndoIcon from '@patternfly/react-icons/dist/esm/icons/undo-icon';
import CopyIcon from '@patternfly/react-icons/dist/esm/icons/copy-icon';
import ShareSquareIcon from '@patternfly/react-icons/dist/esm/icons/share-square-icon';

export const ToggleGroupIcon: React.FunctionComponent = () => {
  const [state, setState] = React.useState({
    isSelected: {
      'text-icons-1': false,
      'text-icons-2': false,
      'text-icons-3': true
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
    <ToggleGroup aria-label="Icon variant toggle group">
      <ToggleGroupItem
        icon={<CopyIcon />}
        text="Copy"
        aria-label="copy icon button"
        buttonId="text-icons-1"
        isSelected={state.isSelected['text-icons-1']}
        onChange={handleItemClick}
      />
      <ToggleGroupItem
        icon={<UndoIcon />}
        text="Undo"
        aria-label="undo icon button"
        buttonId="text-icons-2"
        isSelected={state.isSelected['text-icons-2']}
        onChange={handleItemClick}
      />
      <ToggleGroupItem
        icon={<ShareSquareIcon />}
        text="Share"
        aria-label="share square icon button"
        buttonId="text-icons-3"
        isSelected={state.isSelected['text-icons-3']}
        onChange={handleItemClick}
      />
    </ToggleGroup>
  );
};
