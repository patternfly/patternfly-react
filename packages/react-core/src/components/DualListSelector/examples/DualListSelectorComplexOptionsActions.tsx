import { type FunctionComponent, type ReactNode, type ReactElement, type Ref, useState } from 'react';
import {
  Button,
  ButtonVariant,
  Checkbox,
  DualListSelector,
  Dropdown,
  DropdownList,
  DropdownItem,
  MenuToggle,
  MenuToggleElement
} from '@patternfly/react-core';
import PficonSortCommonAscIcon from '@patternfly/react-icons/dist/esm/icons/pficon-sort-common-asc-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

export const DualListSelectorComplexOptionsActions: FunctionComponent = () => {
  const [availableOptions, setAvailableOptions] = useState<ReactNode[]>([
    <span key="option1">Option 1</span>,
    <span key="option3">Option 3</span>,
    <span key="option4">Option 4</span>,
    <span key="option2">Option 2</span>
  ]);
  const [chosenOptions, setChosenOptions] = useState<ReactNode[]>([]);
  const [isAvailableKebabOpen, setIsAvailableKebabOpen] = useState(false);
  const [isChosenKebabOpen, setIsChosenKebabOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const onListChange = (newAvailableOptions: ReactNode[], newChosenOptions: ReactNode[]) => {
    setAvailableOptions(newAvailableOptions);
    setChosenOptions(newChosenOptions);
  };

  const onSort = (pane: string) => {
    const toSort = pane === 'available' ? [...availableOptions] : [...chosenOptions];
    (toSort as ReactElement[]).sort((a, b) => {
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

  const onToggle = (pane: string) => {
    if (pane === 'available') {
      setIsAvailableKebabOpen(!isAvailableKebabOpen);
    } else {
      setIsChosenKebabOpen(!isChosenKebabOpen);
    }
  };

  const filterOption = (option: ReactNode, input: string) => (option as ReactElement).props.children.includes(input);

  const availableOptionsActions = [
    <Button
      variant={ButtonVariant.plain}
      onClick={() => onSort('available')}
      aria-label="Sort available options"
      key="availableSortButton"
      isDisabled={isDisabled}
    >
      <PficonSortCommonAscIcon />
    </Button>,
    <Dropdown
      toggle={(toggleRef: Ref<MenuToggleElement>) => (
        <MenuToggle
          ref={toggleRef}
          isDisabled={isDisabled}
          isExpanded={isAvailableKebabOpen}
          onClick={() => onToggle('available')}
          variant="plain"
          id="complex-available-toggle"
          aria-label="Complex actions example available kebab toggle"
        >
          <EllipsisVIcon aria-hidden="true" />
        </MenuToggle>
      )}
      isOpen={isAvailableKebabOpen}
      onOpenChange={(isOpen: boolean) => setIsAvailableKebabOpen(isOpen)}
      onSelect={() => setIsAvailableKebabOpen(false)}
      key="availableDropdown"
    >
      <DropdownList>
        <DropdownItem key="available action">Action</DropdownItem>
        {/* Prevent default onClick functionality for example purposes */}
        <DropdownItem key="available link" to="#" onClick={(event: any) => event.preventDefault()}>
          Link
        </DropdownItem>
      </DropdownList>
    </Dropdown>
  ];

  const chosenOptionsActions = [
    <Button
      variant={ButtonVariant.plain}
      onClick={() => onSort('chosen')}
      aria-label="Sort chosen options"
      key="chosenSortButton"
      isDisabled={isDisabled}
    >
      <PficonSortCommonAscIcon />
    </Button>,
    <Dropdown
      toggle={(toggleRef: Ref<MenuToggleElement>) => (
        <MenuToggle
          ref={toggleRef}
          isDisabled={isDisabled}
          isExpanded={isChosenKebabOpen}
          variant="plain"
          onClick={() => onToggle('chosen')}
          id="complex-chosen-toggle"
          aria-label="Complex actions example chosen kebab toggle"
        >
          <EllipsisVIcon aria-hidden="true" />
        </MenuToggle>
      )}
      isOpen={isChosenKebabOpen}
      onOpenChange={(isOpen) => setIsChosenKebabOpen(isOpen)}
      onSelect={() => setIsChosenKebabOpen(false)}
      key="chosenDropdown"
    >
      <DropdownList>
        <DropdownItem key="chosen action">Action</DropdownItem>
        {/* Prevent default onClick functionality for example purposes */}
        <DropdownItem key="chosen link" to="#" onClick={(event: any) => event.preventDefault()}>
          Link
        </DropdownItem>
      </DropdownList>
    </Dropdown>
  ];

  return (
    <>
      <DualListSelector
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
    </>
  );
};
