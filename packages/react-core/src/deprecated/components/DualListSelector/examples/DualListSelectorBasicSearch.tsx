import React from 'react';
import { DualListSelector as DLSDeprecated } from '@patternfly/react-core/deprecated';

export const DualListSelectorBasicSearch: React.FunctionComponent = () => {
  const [availableOptions, setAvailableOptions] = React.useState<React.ReactNode[]>([
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4'
  ]);
  const [chosenOptions, setChosenOptions] = React.useState<React.ReactNode[]>([]);

  const onListChange = (
    event: React.MouseEvent<HTMLElement>,
    newAvailableOptions: React.ReactNode[],
    newChosenOptions: React.ReactNode[]
  ) => {
    setAvailableOptions(newAvailableOptions.sort());
    setChosenOptions(newChosenOptions.sort());
  };

  return (
    <DLSDeprecated
      isSearchable
      availableOptions={availableOptions}
      chosenOptions={chosenOptions}
      onListChange={onListChange}
      id="dual-list-selector-basic-search"
    />
  );
};
