import { forwardRef, useEffect, useRef, useState } from 'react';
import { Button } from '@patternfly/react-core/dist/esm/components/Button';
import { MenuToggle, MenuToggleElement, MenuToggleProps } from '@patternfly/react-core/dist/esm/components/MenuToggle';
import {
  Select,
  SelectList,
  SelectOption,
  SelectOptionProps,
  SelectProps
} from '@patternfly/react-core/dist/esm/components/Select';
import {
  TextInputGroup,
  TextInputGroupMain,
  TextInputGroupUtilities
} from '@patternfly/react-core/dist/esm/components/TextInputGroup';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';

export interface TypeaheadSelectOption extends Omit<SelectOptionProps, 'content'> {
  /** Content of the select option. */
  content: string | number;
  /** Value of the select option. */
  value: string | number;
}

export interface TypeaheadSelectProps extends Omit<SelectProps, 'toggle' | 'onSelect' | 'onToggle'> {
  /** @hide Forwarded ref */
  innerRef?: React.Ref<any>;
  /** Initial options of the select. */
  initialOptions: TypeaheadSelectOption[];
  /** Callback triggered on selection. */
  onSelect?: (
    _event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<HTMLInputElement> | undefined,
    selection: TypeaheadSelectOption['value']
  ) => void;
  /** Callback triggered when the select opens or closes. */
  onToggle?: (nextIsOpen: boolean) => void;
  /** Callback triggered when the text in the input field changes. */
  onInputChange?: (newValue: string) => void;
  /** Custom callback triggered when the input field has focus and a keyboard event is triggered.
   * This will override the default keydown behavior for the input field.
   */
  onInputKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  /** Callback triggered when the clear button is selected */
  onClearSelection?: () => void;
  /** Placeholder text for the select input. */
  placeholder?: string;
  /** Flag to indicate if the typeahead select allows new items */
  isCreatable?: boolean;
  /** Flag to indicate if create option should be at top of typeahead */
  isCreateOptionOnTop?: boolean;
  /** Message to display to create a new option */
  createOptionMessage?: string | ((newValue: string) => string);
  /** Message to display when no options are available. */
  noOptionsAvailableMessage?: string;
  /** Message to display when no options match the filter. */
  noOptionsFoundMessage?: string | ((filter: string) => string);
  /** Flag indicating the select should be disabled. */
  isDisabled?: boolean;
  /** Width of the toggle. */
  toggleWidth?: string;
  /** Additional props passed to the toggle. */
  toggleProps?: MenuToggleProps;
}

const defaultNoOptionsFoundMessage = (filter: string) => `No results found for "${filter}"`;
const defaultCreateOptionMessage = (newValue: string) => `Create "${newValue}"`;

export const TypeaheadSelectBase: React.FunctionComponent<TypeaheadSelectProps> = ({
  innerRef,
  initialOptions,
  onSelect,
  onToggle,
  onInputChange,
  onInputKeyDown: onInputKeyDownProp,
  onClearSelection,
  placeholder = 'Select an option',
  noOptionsAvailableMessage = 'No options are available',
  noOptionsFoundMessage = defaultNoOptionsFoundMessage,
  isCreatable = false,
  isCreateOptionOnTop = false,
  createOptionMessage = defaultCreateOptionMessage,
  isDisabled,
  toggleWidth,
  toggleProps,
  ...props
}: TypeaheadSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>(String(initialOptions.find((o) => o.selected)?.content ?? ''));
  const [inputValue, setInputValue] = useState<string>(String(initialOptions.find((o) => o.selected)?.content ?? ''));
  const [filterValue, setFilterValue] = useState<string>('');
  const [selectOptions, setSelectOptions] = useState<TypeaheadSelectOption[]>(initialOptions);
  const [focusedItemIndex, setFocusedItemIndex] = useState<number | null>(null);
  const [activeItemId, setActiveItemId] = useState<string | null>(null);
  const textInputRef = useRef<HTMLInputElement>(undefined);

  const NO_RESULTS = 'no results';

  useEffect(() => {
    let newSelectOptions: TypeaheadSelectOption[] = initialOptions;

    // Filter menu items based on the text input value when one exists
    if (filterValue) {
      newSelectOptions = initialOptions.filter((option) =>
        String(option.content).toLowerCase().includes(filterValue.toLowerCase())
      );

      if (
        isCreatable &&
        filterValue &&
        !initialOptions.find((o) => String(o.content).toLowerCase() === filterValue.toLowerCase())
      ) {
        const createOption = {
          content: typeof createOptionMessage === 'string' ? createOptionMessage : createOptionMessage(filterValue),
          value: filterValue
        };
        newSelectOptions = isCreateOptionOnTop
          ? [createOption, ...newSelectOptions]
          : [...newSelectOptions, createOption];
      }

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
      }

      // Open the menu when the input value changes and the new value is not empty
      openMenu();
    }

    // When no options are  available,  display 'No options available'
    if (!newSelectOptions.length) {
      newSelectOptions = [
        {
          isAriaDisabled: true,
          content: noOptionsAvailableMessage,
          value: NO_RESULTS
        }
      ];
    }

    setSelectOptions(newSelectOptions);
  }, [
    filterValue,
    initialOptions,
    noOptionsFoundMessage,
    isCreatable,
    isCreateOptionOnTop,
    createOptionMessage,
    noOptionsAvailableMessage
  ]);

  useEffect(() => {
    // If the selected option changed and the current input value is the previously selected item, update the displayed value.
    const selectedOption = initialOptions.find((o) => o.selected);
    if (inputValue === selected && selectedOption?.value !== selected) {
      setInputValue(String(selectedOption?.content ?? ''));
    }
    // Only update when options change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialOptions]);

  const setActiveAndFocusedItem = (itemIndex: number) => {
    setFocusedItemIndex(itemIndex);
    const focusedItem = selectOptions[itemIndex];
    setActiveItemId(String(focusedItem.value));
  };

  const resetActiveAndFocusedItem = () => {
    setFocusedItemIndex(null);
    setActiveItemId(null);
  };

  const openMenu = () => {
    if (!isOpen) {
      onToggle && onToggle(true);
      setIsOpen(true);
    }
  };

  const closeMenu = () => {
    onToggle && onToggle(false);
    setIsOpen(false);
    resetActiveAndFocusedItem();
    const option = initialOptions.find((o) => o.value === selected);
    if (option) {
      setInputValue(String(option.content));
    }
  };

  const onInputClick = () => {
    if (!isOpen) {
      openMenu();
    } else if (!inputValue) {
      closeMenu();
    }
  };

  const selectOption = (
    _event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<HTMLInputElement> | undefined,
    option: TypeaheadSelectOption
  ) => {
    onSelect && onSelect(_event, option.value);

    setInputValue(String(option.content));
    setFilterValue('');
    setSelected(String(option.value));

    closeMenu();
  };

  const _onSelect = (_event: React.MouseEvent<Element, MouseEvent> | undefined, value: string | number | undefined) => {
    if (value && value !== NO_RESULTS) {
      const optionToSelect = selectOptions.find((option) => option.value === value);
      selectOption(_event, optionToSelect);
    }
  };

  const onTextInputChange = (_event: React.FormEvent<HTMLInputElement>, value: string) => {
    setInputValue(value);
    onInputChange && onInputChange(value);
    setFilterValue(value);

    resetActiveAndFocusedItem();
  };

  const handleMenuArrowKeys = (key: string) => {
    let indexToFocus = 0;

    openMenu();

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

  const defaultOnInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const focusedItem = focusedItemIndex !== null ? selectOptions[focusedItemIndex] : null;

    switch (event.key) {
      case 'Enter':
        event.preventDefault();
        if (isOpen && focusedItem && focusedItem.value !== NO_RESULTS && !focusedItem.isAriaDisabled) {
          selectOption(event, focusedItem);
        }

        openMenu();

        break;
      case 'ArrowUp':
      case 'ArrowDown':
        event.preventDefault();
        handleMenuArrowKeys(event.key);
        break;
    }
  };

  const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (onInputKeyDownProp) {
      onInputKeyDownProp(event);
    } else {
      defaultOnInputKeyDown(event);
    }
  };

  const onToggleClick = () => {
    onToggle && onToggle(!isOpen);
    setIsOpen(!isOpen);
    textInputRef.current?.focus();
  };

  const onClearButtonClick = () => {
    setSelected('');
    setInputValue('');
    onInputChange && onInputChange('');
    setFilterValue('');
    resetActiveAndFocusedItem();
    textInputRef.current?.focus();
    onClearSelection && onClearSelection();
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
      style={
        {
          width: toggleWidth
        } as React.CSSProperties
      }
      {...toggleProps}
    >
      <TextInputGroup isPlain>
        <TextInputGroupMain
          value={inputValue}
          onClick={onInputClick}
          onChange={onTextInputChange}
          onKeyDown={onInputKeyDown}
          autoComplete="off"
          innerRef={textInputRef}
          placeholder={placeholder}
          {...(activeItemId && { 'aria-activedescendant': activeItemId })}
          role="combobox"
          isExpanded={isOpen}
          aria-controls="select-typeahead-listbox"
        />

        <TextInputGroupUtilities {...(!inputValue ? { style: { display: 'none' } } : {})}>
          <Button variant="plain" onClick={onClearButtonClick} aria-label="Clear input value" icon={<TimesIcon />} />
        </TextInputGroupUtilities>
      </TextInputGroup>
    </MenuToggle>
  );

  return (
    <Select
      isOpen={isOpen}
      selected={selected}
      onSelect={_onSelect}
      onOpenChange={(isOpen) => {
        !isOpen && closeMenu();
      }}
      toggle={toggle}
      variant="typeahead"
      ref={innerRef}
      {...props}
    >
      <SelectList>
        {selectOptions.map((option, index) => {
          const { content, value, ...props } = option;

          return (
            <SelectOption key={value} value={value} isFocused={focusedItemIndex === index} {...props}>
              {content}
            </SelectOption>
          );
        })}
      </SelectList>
    </Select>
  );
};
TypeaheadSelectBase.displayName = 'TypeaheadSelectBase';

export const TypeaheadSelect = forwardRef((props: TypeaheadSelectProps, ref: React.Ref<any>) => (
  <TypeaheadSelectBase {...props} innerRef={ref} />
));

TypeaheadSelect.displayName = 'TypeaheadSelect';
