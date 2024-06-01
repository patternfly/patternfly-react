import React from 'react';
import {
  Select,
  SelectOption,
  SelectList,
  SelectOptionProps,
  MenuToggle,
  MenuToggleElement,
  TextInputGroup,
  TextInputGroupMain,
  TextInputGroupUtilities,
  ChipGroup,
  Chip,
  Button
} from '@patternfly/react-core';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';

const initialSelectOptions: SelectOptionProps[] = [
  { value: 'Alabama', children: 'Alabama' },
  { value: 'Florida', children: 'Florida' },
  { value: 'New Jersey', children: 'New Jersey' },
  { value: 'New Mexico', children: 'New Mexico' },
  { value: 'New York', children: 'New York' },
  { value: 'North Carolina', children: 'North Carolina' }
];

export const SelectMultiTypeahead: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState<string>('');
  const [selected, setSelected] = React.useState<string[]>([]);
  const [selectOptions, setSelectOptions] = React.useState<SelectOptionProps[]>(initialSelectOptions);
  const [focusedItemIndex, setFocusedItemIndex] = React.useState<number | null>(null);
  const [activeItemId, setActiveItemId] = React.useState<string | null>(null);
  const textInputRef = React.useRef<HTMLInputElement>();

  const NO_RESULTS = 'no results';

  React.useEffect(() => {
    let newSelectOptions: SelectOptionProps[] = initialSelectOptions;

    // Filter menu items based on the text input value when one exists
    if (inputValue) {
      newSelectOptions = initialSelectOptions.filter((menuItem) =>
        String(menuItem.children).toLowerCase().includes(inputValue.toLowerCase())
      );

      // When no options are found after filtering, display 'No results found'
      if (!newSelectOptions.length) {
        newSelectOptions = [
          { isAriaDisabled: true, children: `No results found for "${inputValue}"`, value: NO_RESULTS }
        ];
      }

      // Open the menu when the input value changes and the new value is not empty
      if (!isOpen) {
        setIsOpen(true);
      }
    }

    setSelectOptions(newSelectOptions);
  }, [inputValue]);

  const createItemId = (value: any) => `select-multi-typeahead-${value.replace(' ', '-')}`;

  const setActiveAndFocusedItem = (itemIndex: number) => {
    setFocusedItemIndex(itemIndex);
    const focusedItem = selectOptions[itemIndex];
    setActiveItemId(createItemId(focusedItem.value));
  };

  const resetActiveAndFocusedItem = () => {
    setFocusedItemIndex(null);
    setActiveItemId(null);
  };

  const closeMenu = () => {
    setIsOpen(false);
    resetActiveAndFocusedItem();
  };

  const onInputClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else if (!inputValue) {
      closeMenu();
    }
  };

  const onSelect = (value: string) => {
    if (value && value !== NO_RESULTS) {
      // eslint-disable-next-line no-console
      console.log('selected', value);

      setSelected(
        selected.includes(value) ? selected.filter((selection) => selection !== value) : [...selected, value]
      );
    }

    textInputRef.current?.focus();
  };

  const onTextInputChange = (_event: React.FormEvent<HTMLInputElement>, value: string) => {
    setInputValue(value);
    resetActiveAndFocusedItem();
  };

  const handleMenuArrowKeys = (key: string) => {
    let indexToFocus = 0;

    if (!isOpen) {
      setIsOpen(true);
    }

    if (selectOptions.every((option) => option.isDisabled)) {
      return;
    }

    if (key === 'ArrowUp') {
      // When no index is set or at the first index, focus to the last, otherwise decrement focus index
      if (focusedItemIndex === null || focusedItemIndex === 0) {
        indexToFocus = selectOptions.length - 1;
      } else {
        indexToFocus = focusedItemIndex - 1;
      }

      // Skip disabled options
      while (selectOptions[indexToFocus].isDisabled) {
        indexToFocus--;
        if (indexToFocus === -1) {
          indexToFocus = selectOptions.length - 1;
        }
      }
    }

    if (key === 'ArrowDown') {
      // When no index is set or at the last index, focus to the first, otherwise increment focus index
      if (focusedItemIndex === null || focusedItemIndex === selectOptions.length - 1) {
        indexToFocus = 0;
      } else {
        indexToFocus = focusedItemIndex + 1;
      }

      // Skip disabled options
      while (selectOptions[indexToFocus].isDisabled) {
        indexToFocus++;
        if (indexToFocus === selectOptions.length) {
          indexToFocus = 0;
        }
      }
    }

    setActiveAndFocusedItem(indexToFocus);
  };

  const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const focusedItem = focusedItemIndex !== null ? selectOptions[focusedItemIndex] : null;

    switch (event.key) {
      case 'Enter':
        if (isOpen && focusedItem && focusedItem.value !== NO_RESULTS && !focusedItem.isAriaDisabled) {
          onSelect(focusedItem.value);
        }

        if (!isOpen) {
          setIsOpen(true);
        }

        break;
      case 'ArrowUp':
      case 'ArrowDown':
        event.preventDefault();
        handleMenuArrowKeys(event.key);
        break;
    }
  };

  const onToggleClick = () => {
    setIsOpen(!isOpen);
    textInputRef?.current?.focus();
  };

  const onClearButtonClick = () => {
    setSelected([]);
    setInputValue('');
    resetActiveAndFocusedItem();
    textInputRef?.current?.focus();
  };

  const getChildren = (value: string) => initialSelectOptions.find((option) => option.value === value)?.children;

  const toggle = (toggleRef: React.Ref<MenuToggleElement>) => (
    <MenuToggle
      variant="typeahead"
      aria-label="Multi typeahead menu toggle"
      onClick={onToggleClick}
      innerRef={toggleRef}
      isExpanded={isOpen}
      isFullWidth
    >
      <TextInputGroup isPlain>
        <TextInputGroupMain
          value={inputValue}
          onClick={onInputClick}
          onChange={onTextInputChange}
          onKeyDown={onInputKeyDown}
          id="multi-typeahead-select-input"
          autoComplete="off"
          innerRef={textInputRef}
          placeholder="Select a state"
          {...(activeItemId && { 'aria-activedescendant': activeItemId })}
          role="combobox"
          isExpanded={isOpen}
          aria-controls="select-multi-typeahead-listbox"
        >
          <ChipGroup aria-label="Current selections">
            {selected.map((selection, index) => (
              <Chip
                key={index}
                onClick={(ev) => {
                  ev.stopPropagation();
                  onSelect(selection);
                }}
              >
                {getChildren(selection)}
              </Chip>
            ))}
          </ChipGroup>
        </TextInputGroupMain>
        <TextInputGroupUtilities {...(selected.length === 0 ? { style: { display: 'none' } } : {})}>
          <Button variant="plain" onClick={onClearButtonClick} aria-label="Clear input value">
            <TimesIcon aria-hidden />
          </Button>
        </TextInputGroupUtilities>
      </TextInputGroup>
    </MenuToggle>
  );

  return (
    <Select
      id="multi-typeahead-select"
      isOpen={isOpen}
      selected={selected}
      onSelect={(_event, selection) => onSelect(selection as string)}
      onOpenChange={(isOpen) => {
        !isOpen && closeMenu();
      }}
      toggle={toggle}
      shouldFocusFirstItemOnOpen={false}
    >
      <SelectList isAriaMultiselectable id="select-multi-typeahead-listbox">
        {selectOptions.map((option, index) => (
          <SelectOption
            key={option.value || option.children}
            isFocused={focusedItemIndex === index}
            className={option.className}
            id={createItemId(option.value)}
            {...option}
            ref={null}
          />
        ))}
      </SelectList>
    </Select>
  );
};
