import React from 'react';
import { Button } from '@patternfly/react-core/dist/esm/components/Button';
import { Label, LabelGroup } from '@patternfly/react-core/dist/esm/components/Label';
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

export interface MultiTypeaheadSelectOption extends Omit<SelectOptionProps, 'content'> {
  /** Content of the select option. */
  content: string | number;
  /** Value of the select option. */
  value: string | number;
}

export interface MultiTypeaheadSelectProps extends Omit<SelectProps, 'toggle' | 'onSelect'> {
  /** @hide Forwarded ref */
  innerRef?: React.Ref<any>;
  /** Initial options of the select. */
  initialOptions: MultiTypeaheadSelectOption[];
  /** Callback triggered on selection. */
  onSelectionChange?: (
    _event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<HTMLInputElement>,
    selections: (string | number)[]
  ) => void;
  /** Callback triggered when the select opens or closes. */
  onToggle?: (nextIsOpen: boolean) => void;
  /** Callback triggered when the text in the input field changes. */
  onInputChange?: (newValue: string) => void;
  /** Custom callback triggered when the input field has focus and a keyboard event is triggered.
   * This will override the default keydown behavior for the input field.
   */
  onInputKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  /** Placeholder text for the select input. */
  placeholder?: string;
  /** Message to display when no options match the filter. */
  noOptionsFoundMessage?: string | ((filter: string) => string);
  /** Flag indicating the select should be disabled. */
  isDisabled?: boolean;
  /** Width of the toggle. */
  toggleWidth?: string;
  /** Additional props passed to the toggle. */
  toggleProps?: MenuToggleProps;
}

export const MultiTypeaheadSelectBase: React.FunctionComponent<MultiTypeaheadSelectProps> = ({
  innerRef,
  initialOptions,
  onSelectionChange,
  onToggle,
  onInputChange,
  onInputKeyDown: onInputKeyDownProp,
  placeholder = 'Select an option',
  noOptionsFoundMessage = (filter) => `No results found for "${filter}"`,
  isDisabled,
  toggleWidth,
  toggleProps,
  ...props
}: MultiTypeaheadSelectProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<(string | number)[]>(
    (initialOptions?.filter((o) => o.selected) ?? []).map((o) => o.value)
  );
  const [inputValue, setInputValue] = React.useState<string>();
  const [selectOptions, setSelectOptions] = React.useState<MultiTypeaheadSelectOption[]>(initialOptions);
  const [focusedItemIndex, setFocusedItemIndex] = React.useState<number | null>(null);
  const [activeItemId, setActiveItemId] = React.useState<string | null>(null);
  const textInputRef = React.useRef<HTMLInputElement>(undefined);

  const NO_RESULTS = 'no results';

  const openMenu = () => {
    onToggle && onToggle(true);
    setIsOpen(true);
  };

  React.useEffect(() => {
    let newSelectOptions: MultiTypeaheadSelectOption[] = initialOptions;

    // Filter menu items based on the text input value when one exists
    if (inputValue) {
      newSelectOptions = initialOptions.filter((option) =>
        String(option.content).toLowerCase().includes(inputValue.toLowerCase())
      );

      // When no options are found after filtering, display 'No results found'
      if (!newSelectOptions.length) {
        newSelectOptions = [
          {
            isAriaDisabled: true,
            content:
              typeof noOptionsFoundMessage === 'string' ? noOptionsFoundMessage : noOptionsFoundMessage(inputValue),
            value: NO_RESULTS
          }
        ];
      }

      // Open the menu when the input value changes and the new value is not empty
      openMenu();
    }

    setSelectOptions(newSelectOptions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue, initialOptions]);

  React.useEffect(
    () => setSelected((initialOptions?.filter((o) => o.selected) ?? []).map((o) => o.value)),
    [initialOptions]
  );

  const setActiveAndFocusedItem = (itemIndex: number) => {
    setFocusedItemIndex(itemIndex);
    const focusedItem = selectOptions[itemIndex];
    setActiveItemId(focusedItem.value as string);
  };

  const resetActiveAndFocusedItem = () => {
    setFocusedItemIndex(null);
    setActiveItemId(null);
  };

  const closeMenu = () => {
    onToggle && onToggle(false);
    setIsOpen(false);
    resetActiveAndFocusedItem();
    setInputValue('');
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
    option: string | number
  ) => {
    const selections = selected.includes(option) ? selected.filter((o) => option !== o) : [...selected, option];

    onSelectionChange && onSelectionChange(_event, selections);
    setSelected(selections);
  };

  const clearOption = (
    _event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<HTMLInputElement> | undefined,
    option: string | number
  ) => {
    const selections = selected.filter((o) => option !== o);
    onSelectionChange && onSelectionChange(_event, selections);
    setSelected(selections);
  };

  const _onSelect = (_event: React.MouseEvent<Element, MouseEvent> | undefined, value: string | number | undefined) => {
    if (value && value !== NO_RESULTS) {
      selectOption(_event, value);
    }
  };

  const onTextInputChange = (_event: React.FormEvent<HTMLInputElement>, value: string) => {
    setInputValue(value);
    onInputChange && onInputChange(value);

    resetActiveAndFocusedItem();
  };

  const handleMenuArrowKeys = (key: string) => {
    let indexToFocus = 0;

    if (!isOpen) {
      openMenu();
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

  const defaultOnInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const focusedItem = focusedItemIndex !== null ? selectOptions[focusedItemIndex] : null;

    switch (event.key) {
      case 'Enter':
        event.preventDefault();
        if (isOpen && focusedItem && focusedItem.value !== NO_RESULTS && !focusedItem.isAriaDisabled) {
          selectOption(event, focusedItem?.value);
        }

        if (!isOpen) {
          onToggle && onToggle(true);
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
    textInputRef?.current?.focus();
  };

  const onClearButtonClick = (ev: React.MouseEvent) => {
    setSelected([]);
    onInputChange && onInputChange('');
    resetActiveAndFocusedItem();
    textInputRef?.current?.focus();
    onSelectionChange && onSelectionChange(ev, []);
  };

  const toggle = (toggleRef: React.Ref<MenuToggleElement>) => (
    <MenuToggle
      ref={toggleRef}
      variant="typeahead"
      aria-label="Multi select Typeahead menu toggle"
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
        >
          <LabelGroup aria-label="Current selections">
            {selected.map((selection, index) => (
              <Label
                key={index}
                datatest-id={`${selection}-chip`}
                onClick={(ev) => {
                  ev.stopPropagation();
                  clearOption(ev, selection);
                }}
              >
                {initialOptions.find((o) => o.value === selection)?.content}
              </Label>
            ))}
          </LabelGroup>
        </TextInputGroupMain>
        <TextInputGroupUtilities {...(selected.length === 0 ? { style: { display: 'none' } } : {})}>
          <Button variant="plain" onClick={onClearButtonClick} aria-label="Clear input value">
            <TimesIcon />
          </Button>
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

MultiTypeaheadSelectBase.displayName = 'MultiTypeaheadSelectBase';

export const MultiTypeaheadSelect = React.forwardRef((props: MultiTypeaheadSelectProps, ref: React.Ref<any>) => (
  <MultiTypeaheadSelectBase {...props} innerRef={ref} />
));

MultiTypeaheadSelect.displayName = 'MultiTypeaheadSelect';
