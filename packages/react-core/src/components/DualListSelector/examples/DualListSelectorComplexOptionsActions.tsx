import React from 'react';
import {
  Button,
  ButtonVariant,
  Checkbox,
  Dropdown,
  DropdownList,
  DropdownItem,
  DualListSelector,
  DualListSelectorPane,
  DualListSelectorList,
  DualListSelectorListItem,
  DualListSelectorControlsWrapper,
  DualListSelectorControl,
  SearchInput,
  EmptyState,
  EmptyStateVariant,
  EmptyStateFooter,
  EmptyStateBody,
  EmptyStateActions,
  MenuToggle,
  MenuToggleElement
} from '@patternfly/react-core';
import AngleDoubleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-left-icon';
import AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';
import AngleDoubleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-right-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import PficonSortCommonAscIcon from '@patternfly/react-icons/dist/esm/icons/pficon-sort-common-asc-icon';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

interface Option {
  text: string;
  selected: boolean;
  isVisible: boolean;
}

export const DualListSelectorComplexOptionsActionsNext: React.FunctionComponent = () => {
  const [availableOptions, setAvailableOptions] = React.useState<Option[]>([
    { text: 'Option 1', selected: false, isVisible: true },
    { text: 'Option 2', selected: false, isVisible: true },
    { text: 'Option 3', selected: false, isVisible: true },
    { text: 'Option 4', selected: false, isVisible: true }
  ]);

  const [chosenOptions, setChosenOptions] = React.useState<Option[]>([]);
  const [isAvailableKebabOpen, setIsAvailableKebabOpen] = React.useState(false);
  const [isChosenKebabOpen, setIsChosenKebabOpen] = React.useState(false);
  const [availableFilter, setAvailableFilter] = React.useState('');
  const [chosenFilter, setChosenFilter] = React.useState('');
  const [isDisabled, setIsDisabled] = React.useState(false);

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
      isDisabled={isDisabled}
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

    const onToggle = (pane: string) => {
      if (pane === 'available') {
        setIsAvailableKebabOpen(!isAvailableKebabOpen);
      } else {
        setIsChosenKebabOpen(!isChosenKebabOpen);
      }
    };

    return isAvailable
      ? [
          <Button
            variant={ButtonVariant.plain}
            onClick={onSort}
            aria-label="Sort Available"
            key="availableSortButton"
            isDisabled={isDisabled}
            icon={<PficonSortCommonAscIcon />}
          />,
          <Dropdown
            toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
              <MenuToggle
                ref={toggleRef}
                isDisabled={isDisabled}
                isExpanded={isAvailableKebabOpen}
                onClick={() => onToggle('available')}
                variant="plain"
                id="complex-available-toggle"
                aria-label="Complex actions example available kebab toggle"
                icon={<EllipsisVIcon aria-hidden="true" />}
              />
            )}
            isOpen={isAvailableKebabOpen}
            onOpenChange={(isOpen: boolean) => setIsAvailableKebabOpen(isOpen)}
            onSelect={() => setIsAvailableKebabOpen(false)}
            key="availableDropdown"
          >
            <DropdownList>
              <DropdownItem key="available action">Available Action</DropdownItem>
              <DropdownItem key="available link" to="#" onClick={(event: any) => event.preventDefault()}>
                Available Link
              </DropdownItem>
            </DropdownList>
          </Dropdown>
        ]
      : [
          <Button
            variant={ButtonVariant.plain}
            onClick={onSort}
            aria-label="Sort Chosen"
            key="chosenSortButton"
            isDisabled={isDisabled}
            icon={<PficonSortCommonAscIcon />}
          />,
          <Dropdown
            toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
              <MenuToggle
                ref={toggleRef}
                isDisabled={isDisabled}
                isExpanded={isChosenKebabOpen}
                onClick={() => onToggle('chosen')}
                variant="plain"
                id="complex-chosen-toggle"
                aria-label="Complex actions example chosen kebab toggle"
                icon={<EllipsisVIcon aria-hidden="true" />}
              />
            )}
            isOpen={isChosenKebabOpen}
            onOpenChange={(isOpen: boolean) => setIsChosenKebabOpen(isOpen)}
            onSelect={() => setIsChosenKebabOpen(false)}
            key="chosenDropdown"
          >
            <DropdownList>
              <DropdownItem key="chosen action">Chosen Action</DropdownItem>
              <DropdownItem key="chosen link" to="#" onClick={(event: any) => event.preventDefault()}>
                Chosen Link
              </DropdownItem>
            </DropdownList>
          </Dropdown>
        ];
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
    <React.Fragment>
      <DualListSelector>
        <DualListSelectorPane
          title="Available options"
          status={`${availableOptions.filter((option) => option.selected && option.isVisible).length} of ${
            availableOptions.filter((option) => option.isVisible).length
          } options selected`}
          searchInput={buildSearchInput(true)}
          actions={[buildSort(true)]}
          listMinHeight="300px"
          isDisabled={isDisabled}
        >
          {availableFilter !== '' &&
            availableOptions.filter((option) => option.isVisible).length === 0 &&
            buildEmptyState(true)}

          <DualListSelectorList>
            {availableOptions.map((option, index) =>
              option.isVisible ? (
                <DualListSelectorListItem
                  key={index}
                  isSelected={option.selected}
                  id={`complex-available-option-${index}`}
                  onOptionSelect={(e) => onOptionSelect(e, index, false)}
                  isDisabled={isDisabled}
                >
                  {option.text}
                </DualListSelectorListItem>
              ) : null
            )}
          </DualListSelectorList>
        </DualListSelectorPane>
        <DualListSelectorControlsWrapper>
          <DualListSelectorControl
            isDisabled={!availableOptions.some((option) => option.selected) || isDisabled}
            onClick={() => moveSelected(true)}
            aria-label="Add selected"
            icon={<AngleRightIcon />}
          />
          <DualListSelectorControl
            isDisabled={availableOptions.length === 0 || isDisabled}
            onClick={() => moveAll(true)}
            aria-label="Add all"
            icon={<AngleDoubleRightIcon />}
          />
          <DualListSelectorControl
            isDisabled={chosenOptions.length === 0 || isDisabled}
            onClick={() => moveAll(false)}
            aria-label="Remove all"
            icon={<AngleDoubleLeftIcon />}
          />
          <DualListSelectorControl
            onClick={() => moveSelected(false)}
            isDisabled={!chosenOptions.some((option) => option.selected) || isDisabled}
            aria-label="Remove selected"
            icon={<AngleLeftIcon />}
          />
        </DualListSelectorControlsWrapper>
        <DualListSelectorPane
          title="Chosen options"
          status={`${chosenOptions.filter((option) => option.selected && option.isVisible).length} of ${
            chosenOptions.filter((option) => option.isVisible).length
          } options selected`}
          searchInput={buildSearchInput(false)}
          actions={[buildSort(false)]}
          listMinHeight="300px"
          isChosen
        >
          {chosenFilter !== '' &&
            chosenOptions.filter((option) => option.isVisible).length === 0 &&
            buildEmptyState(false)}
          {chosenOptions.filter((option) => option.isVisible).length > 0 && (
            <DualListSelectorList>
              {chosenOptions.map((option, index) =>
                option.isVisible ? (
                  <DualListSelectorListItem
                    key={index}
                    isSelected={option.selected}
                    id={`composable-complex-chosen-option-${index}`}
                    onOptionSelect={(e) => onOptionSelect(e, index, true)}
                    isDisabled={isDisabled}
                  >
                    {option.text}
                  </DualListSelectorListItem>
                ) : null
              )}
            </DualListSelectorList>
          )}
        </DualListSelectorPane>
      </DualListSelector>
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
