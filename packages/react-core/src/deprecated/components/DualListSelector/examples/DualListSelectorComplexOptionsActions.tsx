import React from 'react';
import { Button, ButtonVariant, Checkbox } from '@patternfly/react-core';
import { DualListSelector as DLSDeprecated } from '@patternfly/react-core/deprecated';
import PficonSortCommonAscIcon from '@patternfly/react-icons/dist/esm/icons/pficon-sort-common-asc-icon';

export const DualListSelectorComplexOptionsActions: React.FunctionComponent = () => {
  const [availableOptions, setAvailableOptions] = React.useState<React.ReactNode[]>([
    <span key="option1">Option 1</span>,
    <span key="option3">Option 3</span>,
    <span key="option4">Option 4</span>,
    <span key="option2">Option 2</span>
  ]);
  const [chosenOptions, setChosenOptions] = React.useState<React.ReactNode[]>([]);
  const [isDisabled, setIsDisabled] = React.useState(false);

  const onListChange = (newAvailableOptions: React.ReactNode[], newChosenOptions: React.ReactNode[]) => {
    setAvailableOptions(newAvailableOptions);
    setChosenOptions(newChosenOptions);
  };

  const onSort = (pane: string) => {
    const toSort = pane === 'available' ? [...availableOptions] : [...chosenOptions];
    (toSort as React.ReactElement[]).sort((a, b) => {
      if (a.props.children > b.props.children) {
        return 1;
      }
      if (a.props.children < b.props.children) {
        return -1;
      }
      return 0;
    });

    if (pane === 'available') {
      setAvailableOptions(toSort);
    } else {
      setChosenOptions(toSort);
    }
  };

  const filterOption = (option: React.ReactNode, input: string) =>
    (option as React.ReactElement).props.children.includes(input);

  const availableOptionsActions = [
    <Button
      variant={ButtonVariant.plain}
      onClick={() => onSort('available')}
      aria-label="Sort available options"
      key="availableSortButton"
      isDisabled={isDisabled}
      icon={<PficonSortCommonAscIcon />}
    />
  ];

  const chosenOptionsActions = [
    <Button
      variant={ButtonVariant.plain}
      onClick={() => onSort('chosen')}
      aria-label="Sort chosen options"
      key="chosenSortButton"
      isDisabled={isDisabled}
      icon={<PficonSortCommonAscIcon />}
    />
  ];

  return (
    <React.Fragment>
      <DLSDeprecated
        isSearchable
        availableOptions={availableOptions}
        availableOptionsActions={availableOptionsActions}
        chosenOptions={chosenOptions}
        chosenOptionsActions={chosenOptionsActions}
        addAll={onListChange}
        removeAll={onListChange}
        addSelected={onListChange}
        removeSelected={onListChange}
        filterOption={filterOption}
        isDisabled={isDisabled}
        id="dual-list-selector-complex"
      />
      <Checkbox
        key="isDisabled"
        id="isDisabled"
        label="isDisabled"
        aria-label="isDisabled"
        isChecked={isDisabled}
        onChange={() => setIsDisabled(!isDisabled)}
      />
    </React.Fragment>
  );
};
