import React from 'react';
import { ToggleGroup, ToggleGroupItem } from '@patternfly/react-core';
import UndoIcon from '@patternfly/react-icons/dist/esm/icons/undo-icon';
import CopyIcon from '@patternfly/react-icons/dist/esm/icons/copy-icon';
import ShareSquareIcon from '@patternfly/react-icons/dist/esm/icons/share-square-icon';

export const ToggleGroupIcon: React.FunctionComponent = () => {
  const [state, setState] = React.useState({
    isSelected: {
      'icons-1': false,
      'icons-2': false,
      'icons-3': true
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
        aria-label="copy icon button"
        buttonId="icons-1"
        isSelected={state.isSelected['icons-1']}
        onChange={handleItemClick}
      />
      <ToggleGroupItem
        icon={<UndoIcon />}
        aria-label="undo icon button"
        buttonId="icons-2"
        isSelected={state.isSelected['icons-2']}
        onChange={handleItemClick}
      />
      <ToggleGroupItem
        icon={<ShareSquareIcon />}
        aria-label="share square icon button"
        buttonId="icons-3"
        isSelected={state.isSelected['icons-3']}
        onChange={handleItemClick}
      />
    </ToggleGroup>
  );
};
