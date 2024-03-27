import { type FunctionComponent, type MouseEvent as ReactMouseEvent, type ReactNode, useState } from 'react';
import { DualListSelector } from '@patternfly/react-core';

export const DualListSelectorBasicSearch: FunctionComponent = () => {
  const [availableOptions, setAvailableOptions] = useState<ReactNode[]>([
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4'
  ]);
  const [chosenOptions, setChosenOptions] = useState<ReactNode[]>([]);

  const onListChange = (
    event: ReactMouseEvent<HTMLElement>,
    newAvailableOptions: ReactNode[],
    newChosenOptions: ReactNode[]
  ) => {
    setAvailableOptions(newAvailableOptions.sort());
    setChosenOptions(newChosenOptions.sort());
  };

  return (
    <DualListSelector
      isSearchable
      availableOptions={availableOptions}
      chosenOptions={chosenOptions}
      onListChange={onListChange}
      id="dual-list-selector-basic-search"
    />
  );
};
