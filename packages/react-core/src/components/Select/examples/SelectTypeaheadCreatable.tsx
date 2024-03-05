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
  Button
} from '@patternfly/react-core';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';

let initialSelectOptions: SelectOptionProps[] = [
  { value: 'Alabama', children: 'Alabama' },
  { value: 'Florida', children: 'Florida' },
  { value: 'New Jersey', children: 'New Jersey' },
  { value: 'New Mexico', children: 'New Mexico' },
  { value: 'New York', children: 'New York' },
  { value: 'North Carolina', children: 'North Carolina' }
];

export const SelectTypeaheadCreatable: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string>('');
  const [inputValue, setInputValue] = React.useState<string>('');
  const [filterValue, setFilterValue] = React.useState<string>('');
  const [selectOptions, setSelectOptions] = React.useState<SelectOptionProps[]>(initialSelectOptions);
  const [focusedItemIndex, setFocusedItemIndex] = React.useState<number | null>(null);
  const [activeItem, setActiveItem] = React.useState<string | null>(null);
  const [onCreation, setOnCreation] = React.useState<boolean>(false); // Boolean to refresh filter state after new option is created
  const textInputRef = React.useRef<HTMLInputElement>();

  React.useEffect(() => {
    let newSelectOptions: SelectOptionProps[] = initialSelectOptions;

    // Filter menu items based on the text input value when one exists
    if (filterValue) {
      newSelectOptions = initialSelectOptions.filter((menuItem) =>
        String(menuItem.children).toLowerCase().includes(filterValue.toLowerCase())
      );

      // When no options are found after filtering, display creation option
      if (!newSelectOptions.length) {
        newSelectOptions = [{ isDisabled: false, children: `Create new option "${filterValue}"`, value: 'create' }];
      }

      // Open the menu when the input value changes and the new value is not empty
      if (!isOpen) {
        setIsOpen(true);
      }
    }

    setSelectOptions(newSelectOptions);
    setActiveItem(null);
    setFocusedItemIndex(null);
  }, [filterValue, onCreation]);

  const onToggleClick = () => {
    setIsOpen(!isOpen);
  };

  const onSelect = (_event: React.MouseEvent<Element, MouseEvent> | undefined, value: string | number | undefined) => {
    // eslint-disable-next-line no-console

    if (value) {
      if (value === 'create') {
        if (!initialSelectOptions.some((item) => item.value === filterValue)) {
          initialSelectOptions = [...initialSelectOptions, { value: filterValue, children: filterValue }];
        }
        setSelected(filterValue);
        setOnCreation(!onCreation);
        setFilterValue('');
      } else {
        // eslint-disable-next-line no-console
        console.log('selected', value);
        setInputValue(value as string);
        setFilterValue('');
        setSelected(value as string);
      }
    }

    setIsOpen(false);
    setFocusedItemIndex(null);
    setActiveItem(null);
  };

  const onTextInputChange = (_event: React.FormEvent<HTMLInputElement>, value: string) => {
    setInputValue(value);
    setFilterValue(value);
  };

  const handleMenuArrowKeys = (key: string) => {
    let indexToFocus;

    if (isOpen) {
      if (key === 'ArrowUp') {
        // When no index is set or at the first index, focus to the last, otherwise decrement focus index
        if (focusedItemIndex === null || focusedItemIndex === 0) {
          indexToFocus = selectOptions.length - 1;
        } else {
          indexToFocus = focusedItemIndex - 1;
        }
      }

      if (key === 'ArrowDown') {
        // When no index is set or at the last index, focus to the first, otherwise increment focus index
        if (focusedItemIndex === null || focusedItemIndex === selectOptions.length - 1) {
          indexToFocus = 0;
        } else {
          indexToFocus = focusedItemIndex + 1;
        }
      }

      setFocusedItemIndex(indexToFocus);
      const focusedItem = selectOptions.filter((option) => !option.isDisabled)[indexToFocus];
      setActiveItem(`select-create-typeahead-${focusedItem.value.replace(' ', '-')}`);
    }
  };

  const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const enabledMenuItems = selectOptions.filter((option) => !option.isDisabled);
    const [firstMenuItem] = enabledMenuItems;
    const focusedItem = focusedItemIndex ? enabledMenuItems[focusedItemIndex] : firstMenuItem;

    switch (event.key) {
      // Select the first available option
      case 'Enter':
        if (isOpen) {
          onSelect(undefined, focusedItem.value as string);
          setIsOpen((prevIsOpen) => !prevIsOpen);
          setFocusedItemIndex(null);
          setActiveItem(null);
        }

        setIsOpen((prevIsOpen) => !prevIsOpen);
        setFocusedItemIndex(null);
        setActiveItem(null);

        break;
      case 'Tab':
      case 'Escape':
        setIsOpen(false);
        setActiveItem(null);
        break;
      case 'ArrowUp':
      case 'ArrowDown':
        event.preventDefault();
        handleMenuArrowKeys(event.key);
        break;
    }
  };

  const toggle = (toggleRef: React.Ref<MenuToggleElement>) => (
    <MenuToggle
      ref={toggleRef}
      variant="typeahead"
      aria-label="Typeahead creatable menu toggle"
      onClick={onToggleClick}
      isExpanded={isOpen}
      isFullWidth
    >
      <TextInputGroup isPlain>
        <TextInputGroupMain
          value={inputValue}
          onClick={onToggleClick}
          onChange={onTextInputChange}
          onKeyDown={onInputKeyDown}
          id="create-typeahead-select-input"
          autoComplete="off"
          innerRef={textInputRef}
          placeholder="Select a state"
          {...(activeItem && { 'aria-activedescendant': activeItem })}
          role="combobox"
          isExpanded={isOpen}
          aria-controls="select-create-typeahead-listbox"
        />

        <TextInputGroupUtilities>
          {!!inputValue && (
            <Button
              variant="plain"
              onClick={() => {
                setSelected('');
                setInputValue('');
                setFilterValue('');
                textInputRef?.current?.focus();
              }}
              aria-label="Clear input value"
            >
              <TimesIcon aria-hidden />
            </Button>
          )}
        </TextInputGroupUtilities>
      </TextInputGroup>
    </MenuToggle>
  );

  return (
    <Select
      id="create-typeahead-select"
      isOpen={isOpen}
      selected={selected}
      onSelect={onSelect}
      onOpenChange={() => {
        setIsOpen(false);
      }}
      toggle={toggle}
    >
      <SelectList id="select-create-typeahead-listbox">
        {selectOptions.map((option, index) => (
          <SelectOption
            key={option.value || option.children}
            isFocused={focusedItemIndex === index}
            className={option.className}
            onClick={() => setSelected(option.value)}
            id={`select-typeahead-${option.value.replace(' ', '-')}`}
            {...option}
            ref={null}
          />
        ))}
      </SelectList>
    </Select>
  );
};
