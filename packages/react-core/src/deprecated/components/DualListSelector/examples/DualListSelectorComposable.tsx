import React from 'react';
import {
  Button,
  ButtonVariant,
  SearchInput,
  EmptyState,
  EmptyStateVariant,
  EmptyStateFooter,
  EmptyStateBody,
  EmptyStateActions
} from '@patternfly/react-core';
import {
  DualListSelector as DLSDeprecated,
  DualListSelectorPane as DLSPaneDeprecated,
  DualListSelectorList as DLSListDeprecated,
  DualListSelectorListItem as DLSListItemDeprecated,
  DualListSelectorControlsWrapper as DLSControlsWrapperDeprecated,
  DualListSelectorControl as DLSControlDeprecated
} from '@patternfly/react-core/deprecated';
import AngleDoubleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-left-icon';
import AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';
import AngleDoubleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-right-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import PficonSortCommonAscIcon from '@patternfly/react-icons/dist/esm/icons/pficon-sort-common-asc-icon';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';

interface Option {
  text: string;
  selected: boolean;
  isVisible: boolean;
}

export const DualListSelectorComposable: React.FunctionComponent = () => {
  const [availableOptions, setAvailableOptions] = React.useState<Option[]>([
    { text: 'Apple', selected: false, isVisible: true },
    { text: 'Banana', selected: false, isVisible: true },
    { text: 'Pineapple', selected: false, isVisible: true },
    { text: 'Orange', selected: false, isVisible: true },
    { text: 'Grape', selected: false, isVisible: true },
    { text: 'Peach', selected: false, isVisible: true },
    { text: 'Strawberry', selected: false, isVisible: true }
  ]);
  const [chosenOptions, setChosenOptions] = React.useState<Option[]>([]);
  const [availableFilter, setAvailableFilter] = React.useState('');
  const [chosenFilter, setChosenFilter] = React.useState('');

  // callback for moving selected options between lists
  const moveSelected = (fromAvailable: boolean) => {
    const sourceOptions = fromAvailable ? availableOptions : chosenOptions;
    const destinationOptions = fromAvailable ? chosenOptions : availableOptions;
    for (let i = 0; i < sourceOptions.length; i++) {
      const option = sourceOptions[i];
      if (option.selected && option.isVisible) {
        sourceOptions.splice(i, 1);
        destinationOptions.push(option);
        option.selected = false;
        i--;
      }
    }
    if (fromAvailable) {
      setAvailableOptions([...sourceOptions]);
      setChosenOptions([...destinationOptions]);
    } else {
      setChosenOptions([...sourceOptions]);
      setAvailableOptions([...destinationOptions]);
    }
  };

  // callback for moving all options between lists
  const moveAll = (fromAvailable: boolean) => {
    if (fromAvailable) {
      setChosenOptions([...availableOptions.filter((option) => option.isVisible), ...chosenOptions]);
      setAvailableOptions([...availableOptions.filter((option) => !option.isVisible)]);
    } else {
      setAvailableOptions([...chosenOptions.filter((option) => option.isVisible), ...availableOptions]);
      setChosenOptions([...chosenOptions.filter((option) => !option.isVisible)]);
    }
  };

  // callback when option is selected
  const onOptionSelect = (
    event: React.MouseEvent | React.ChangeEvent | React.KeyboardEvent,
    index: number,
    isChosen: boolean
  ) => {
    if (isChosen) {
      const newChosen = [...chosenOptions];
      newChosen[index].selected = !chosenOptions[index].selected;
      setChosenOptions(newChosen);
    } else {
      const newAvailable = [...availableOptions];
      newAvailable[index].selected = !availableOptions[index].selected;
      setAvailableOptions(newAvailable);
    }
  };

  const onFilterChange = (value: string, isAvailable: boolean) => {
    isAvailable ? setAvailableFilter(value) : setChosenFilter(value);
    const toFilter = isAvailable ? [...availableOptions] : [...chosenOptions];
    toFilter.forEach((option) => {
      option.isVisible = value === '' || option.text.toLowerCase().includes(value.toLowerCase());
    });
  };

  // builds a search input - used in each dual list selector pane
  const buildSearchInput = (isAvailable: boolean) => (
    <SearchInput
      value={isAvailable ? availableFilter : chosenFilter}
      onChange={(_event, value) => onFilterChange(value, isAvailable)}
      onClear={() => onFilterChange('', isAvailable)}
    />
  );

  // builds a sort control - passed to both dual list selector panes
  const buildSort = (isAvailable: boolean) => {
    const onSort = () => {
      const toSort = isAvailable ? [...availableOptions] : [...chosenOptions];
      toSort.sort((a, b) => {
        if (a.text > b.text) {
          return 1;
        }
        if (a.text < b.text) {
          return -1;
        }
        return 0;
      });
      if (isAvailable) {
        setAvailableOptions(toSort);
      } else {
        setChosenOptions(toSort);
      }
    };

    return (
      <Button
        variant={ButtonVariant.plain}
        onClick={onSort}
        aria-label="Sort"
        key="sortButton"
        icon={<PficonSortCommonAscIcon />}
      />
    );
  };

  const buildEmptyState = (isAvailable: boolean) => (
    <EmptyState headingLevel="h4" titleText="No results found" icon={SearchIcon} variant={EmptyStateVariant.sm}>
      <EmptyStateBody>No results match the filter criteria. Clear all filters and try again.</EmptyStateBody>
      <EmptyStateFooter>
        <EmptyStateActions>
          <Button variant="link" onClick={() => onFilterChange('', isAvailable)}>
            Clear all filters
          </Button>
        </EmptyStateActions>
      </EmptyStateFooter>
    </EmptyState>
  );

  return (
    <DLSDeprecated>
      <DLSPaneDeprecated
        title="Available"
        status={`${availableOptions.filter((option) => option.selected && option.isVisible).length} of ${
          availableOptions.filter((option) => option.isVisible).length
        } options selected`}
        searchInput={buildSearchInput(true)}
        actions={[buildSort(true)]}
        listMinHeight="300px"
      >
        {availableFilter !== '' &&
          availableOptions.filter((option) => option.isVisible).length === 0 &&
          buildEmptyState(true)}
        {availableOptions.filter((option) => option.isVisible).length > 0 && (
          <DLSListDeprecated>
            {availableOptions.map((option, index) =>
              option.isVisible ? (
                <DLSListItemDeprecated
                  key={index}
                  isSelected={option.selected}
                  id={`composable-available-option-${index}`}
                  onOptionSelect={(e) => onOptionSelect(e, index, false)}
                >
                  {option.text}
                </DLSListItemDeprecated>
              ) : null
            )}
          </DLSListDeprecated>
        )}
      </DLSPaneDeprecated>
      <DLSControlsWrapperDeprecated>
        <DLSControlDeprecated
          isDisabled={!availableOptions.some((option) => option.selected)}
          onClick={() => moveSelected(true)}
          aria-label="Add selected"
          tooltipContent="Add selected"
        >
          <AngleRightIcon />
        </DLSControlDeprecated>
        <DLSControlDeprecated
          isDisabled={availableOptions.length === 0}
          onClick={() => moveAll(true)}
          aria-label="Add all"
          tooltipContent="Add all"
        >
          <AngleDoubleRightIcon />
        </DLSControlDeprecated>
        <DLSControlDeprecated
          isDisabled={chosenOptions.length === 0}
          onClick={() => moveAll(false)}
          aria-label="Remove all"
          tooltipContent="Remove all"
        >
          <AngleDoubleLeftIcon />
        </DLSControlDeprecated>
        <DLSControlDeprecated
          onClick={() => moveSelected(false)}
          isDisabled={!chosenOptions.some((option) => option.selected)}
          aria-label="Remove selected"
          tooltipContent="Remove selected"
        >
          <AngleLeftIcon />
        </DLSControlDeprecated>
      </DLSControlsWrapperDeprecated>
      <DLSPaneDeprecated
        title="Chosen"
        status={`${chosenOptions.filter((option) => option.selected && option.isVisible).length} of ${
          chosenOptions.filter((option) => option.isVisible).length
        } options selected`}
        searchInput={buildSearchInput(false)}
        actions={[buildSort(false)]}
        isChosen
        listMinHeight="300px"
      >
        {chosenFilter !== '' &&
          chosenOptions.filter((option) => option.isVisible).length === 0 &&
          buildEmptyState(false)}
        {chosenOptions.filter((option) => option.isVisible).length > 0 && (
          <DLSListDeprecated>
            {chosenOptions.map((option, index) =>
              option.isVisible ? (
                <DLSListItemDeprecated
                  key={index}
                  isSelected={option.selected}
                  id={`composable-chosen-option-${index}`}
                  onOptionSelect={(e) => onOptionSelect(e, index, true)}
                >
                  {option.text}
                </DLSListItemDeprecated>
              ) : null
            )}
          </DLSListDeprecated>
        )}
      </DLSPaneDeprecated>
    </DLSDeprecated>
  );
};
