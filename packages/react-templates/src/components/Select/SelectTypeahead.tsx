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

export interface SelectTypeaheadOption extends Omit<SelectOptionProps, 'content'> {
  /** Content of the select option. */
  content: string | number;
  /** Value of the select option. */
  value: string | number;
}

export interface SelectTypeaheadProps {
  /** @hide Forwarded ref */
  innerRef?: React.Ref<any>;
  /** Initial options of the select. */
  initialOptions?: SelectTypeaheadOption[];
  /** Callback triggered on selection. */
  onSelect?: (_event: React.MouseEvent<Element, MouseEvent>, selection: string | number) => void;
  /** Callback triggered when the select opens or closes. */
  onToggle?: (nextIsOpen: boolean) => void;
  /** Callback triggered when the text in the input field changes. */
  onInputChange?: (newValue: string) => void;
  /** Placeholder text for the select input. */
  placeholder?: string;
  /** Message to display when no options match the filter. */
  noOptionsFoundMessage?: string | ((filter: string) => string);
  /** Flag indicating the select should be disabled. */
  isDisabled?: boolean;
}

export const SelectTypeaheadBase: React.FunctionComponent<SelectTypeaheadProps> = ({
  innerRef,
  initialOptions,
  onSelect,
  onToggle,
  onInputChange,
  placeholder = 'Select an option',
  noOptionsFoundMessage = (filter) => `No results found for "${filter}"`,
  isDisabled,
  ...props
}: SelectTypeaheadProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string>('');
  const [inputValue, setInputValue] = React.useState<string>('');
  const [filterValue, setFilterValue] = React.useState<string>('');
  const [selectOptions, setSelectOptions] = React.useState<SelectTypeaheadOption[]>(initialOptions);
  const [focusedItemIndex, setFocusedItemIndex] = React.useState<number | null>(null);
  const [activeItem, setActiveItem] = React.useState<string | null>(null);
  const textInputRef = React.useRef<HTMLInputElement>();

  const NO_RESULTS = 'no results';

  React.useEffect(() => {
    let newSelectOptions: SelectTypeaheadOption[] = initialOptions;

    // Filter menu items based on the text input value when one exists
    if (filterValue) {
      newSelectOptions = initialOptions.filter((option) =>
        String(option.content).toLowerCase().includes(filterValue.toLowerCase())
      );

      // When no options are found after filtering, display 'No results found'
      if (!newSelectOptions.length) {
        newSelectOptions = [
          {
            isAriaDisabled: true,
            content:
              typeof noOptionsFoundMessage === 'string' ? noOptionsFoundMessage : noOptionsFoundMessage(filterValue),
            value: NO_RESULTS
          }
        ];
        resetActiveAndFocusedItem();
      }

      // Open the menu when the input value changes and the new value is not empty
      if (!isOpen) {
        setIsOpen(true);
      }
    }

    setSelectOptions(newSelectOptions);
  }, [filterValue]);

  React.useEffect(() => {
    if (isOpen && selectOptions.length && selectOptions[0].value !== NO_RESULTS) {
      setActiveAndFocusedItem(0);
    }
  }, [isOpen, filterValue]);

  const setActiveAndFocusedItem = (itemIndex: number) => {
    setFocusedItemIndex(itemIndex);
    const focusedItem = selectOptions.filter((option) => !option.isDisabled)[itemIndex];
    setActiveItem(`select-typeahead-${String(focusedItem.value).replace(' ', '-')}`);
  };

  const resetActiveAndFocusedItem = () => {
    setFocusedItemIndex(null);
    setActiveItem(null);
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

  const _onSelect = (_event: React.MouseEvent<Element, MouseEvent> | undefined, value: string | number | undefined) => {
    onSelect && onSelect(_event, value);

    if (value && value !== NO_RESULTS) {
      const inputText = selectOptions.find((option) => option.value === value).content;
      setInputValue(String(inputText));
      setFilterValue('');
      setSelected(String(value));
    }
    closeMenu();
  };

  const onTextInputChange = (_event: React.FormEvent<HTMLInputElement>, value: string) => {
    setInputValue(value);
    onInputChange && onInputChange(value);
    setFilterValue(value);

    if (value !== selected) {
      setSelected('');
    }
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

      setActiveAndFocusedItem(indexToFocus);
    }
  };

  const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const enabledMenuItems = selectOptions.filter((option) => !option.isDisabled);
    const [firstMenuItem] = enabledMenuItems;
    const focusedItem = focusedItemIndex ? enabledMenuItems[focusedItemIndex] : firstMenuItem;

    switch (event.key) {
      // Select the first available option
      case 'Enter':
        if (isOpen && focusedItem.value !== NO_RESULTS) {
          setInputValue(String(focusedItem.content));
          setFilterValue('');
          setSelected(String(focusedItem.value));
        }

        setIsOpen((prevIsOpen) => !prevIsOpen);
        resetActiveAndFocusedItem();

        break;
      case 'ArrowUp':
      case 'ArrowDown':
        event.preventDefault();
        handleMenuArrowKeys(event.key);
        break;
    }
  };

  const onToggleClick = () => {
    onToggle && onToggle(!isOpen);
    setIsOpen(!isOpen);
    textInputRef?.current?.focus();
  };

  const toggle = (toggleRef: React.Ref<MenuToggleElement>) => (
    <MenuToggle
      ref={toggleRef}
      variant="typeahead"
      aria-label="Typeahead menu toggle"
      onClick={onToggleClick}
      isExpanded={isOpen}
      isDisabled={isDisabled}
      isFullWidth
    >
      <TextInputGroup isPlain>
        <TextInputGroupMain
          value={inputValue}
          onClick={onInputClick}
          onChange={onTextInputChange}
          onKeyDown={onInputKeyDown}
          id="typeahead-select-input"
          autoComplete="off"
          innerRef={textInputRef}
          placeholder={placeholder}
          {...(activeItem && { 'aria-activedescendant': activeItem })}
          role="combobox"
          isExpanded={isOpen}
          aria-controls="select-typeahead-listbox"
        />

        <TextInputGroupUtilities>
          {!!inputValue && (
            <Button
              variant="plain"
              onClick={() => {
                setSelected('');
                setInputValue('');
                onInputChange && onInputChange('');
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
      id="typeahead-select"
      isOpen={isOpen}
      selected={selected}
      onSelect={_onSelect}
      onOpenChange={(isOpen) => {
        !isOpen && closeMenu();
      }}
      toggle={toggle}
      shouldFocusFirstMenuItemOnOpen={false}
      ref={innerRef}
      {...props}
    >
      <SelectList id="select-typeahead-listbox">
        {selectOptions.map((option, index) => {
          const { content, value, ...props } = option;

          return (
            <SelectOption
              {...props}
              key={value}
              value={value}
              isFocused={focusedItemIndex === index}
              onMouseEnter={() => setActiveAndFocusedItem(index)}
              id={`select-typeahead-${String(value).replace(' ', '-')}`}
            >
              {content}
            </SelectOption>
          );
        })}
      </SelectList>
    </Select>
  );
};
SelectTypeaheadBase.displayName = 'SelectTypeaheadBase';

export const SelectTypeahead = React.forwardRef((props: SelectTypeaheadProps, ref: React.Ref<any>) => (
  <SelectTypeaheadBase {...props} innerRef={ref} />
));

SelectTypeahead.displayName = 'SelectTypeahead';
