import React from 'react';
import { Select, SelectOption, SelectList, SelectOptionProps } from '@patternfly/react-core/next';
import {
  MenuToggle,
  MenuToggleElement,
  TextInputGroup,
  TextInputGroupMain,
  TextInputGroupUtilities,
  Button
} from '@patternfly/react-core';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';

const initialSelectOptions: SelectOptionProps[] = [
  { itemId: 'Alabama', children: 'Alabama' },
  { itemId: 'Florida', children: 'Florida' },
  { itemId: 'New Jersey', children: 'New Jersey' },
  { itemId: 'New Mexico', children: 'New Mexico' },
  { itemId: 'New York', children: 'New York' },
  { itemId: 'North Carolina', children: 'North Carolina' }
];

export const SelectBasic: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string>('');
  const [inputValue, setInputValue] = React.useState<string>('');
  const [filterValue, setFilterValue] = React.useState<string>('');
  const [selectOptions, setSelectOptions] = React.useState<SelectOptionProps[]>(initialSelectOptions);
  const [focusedItemIndex, setFocusedItemIndex] = React.useState<number | null>(null);

  const menuRef = React.useRef<HTMLDivElement>(null);
  const textInputRef = React.useRef<HTMLInputElement>();

  React.useEffect(() => {
    let newSelectOptions: SelectOptionProps[] = initialSelectOptions;

    // Filter menu items based on the text input value when one exists
    if (filterValue) {
      newSelectOptions = initialSelectOptions.filter(menuItem =>
        String(menuItem.children)
          .toLowerCase()
          .includes(filterValue.toLowerCase())
      );

      // When no options are found after filtering, display 'No results found'
      if (!newSelectOptions.length) {
        newSelectOptions = [{ isDisabled: true, children: 'No results found' }];
      }
    }

    setSelectOptions(newSelectOptions);
  }, [filterValue]);

  const onToggleClick = () => {
    setIsOpen(!isOpen);
  };

  const onSelect = (_event: React.MouseEvent<Element, MouseEvent> | undefined, itemId: string | number | undefined) => {
    // eslint-disable-next-line no-console
    console.log('selected', itemId);

    if (itemId) {
      setInputValue(itemId as string);
      setFilterValue(itemId as string);
      setSelected(itemId as string);
    }
    setIsOpen(false);
    setFocusedItemIndex(null);
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
    }
  };

  const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const enabledMenuItems = selectOptions.filter(menuItem => !menuItem.isDisabled);
    const [firstMenuItem] = enabledMenuItems;
    const focusedItem = focusedItemIndex ? enabledMenuItems[focusedItemIndex] : firstMenuItem;

    switch (event.key) {
      // Select the first available option
      case 'Enter':
        if (isOpen) {
          setInputValue(String(focusedItem.children));
          setSelected(String(focusedItem.children));
        }

        setIsOpen(prevIsOpen => !prevIsOpen);
        setFocusedItemIndex(null);

        break;
      case 'Tab':
      case 'Escape':
        setIsOpen(false);
        break;
      case 'ArrowUp':
      case 'ArrowDown':
        handleMenuArrowKeys(event.key);
        break;
      default:
        !isOpen && setIsOpen(true);
    }
  };

  const toggle = (toggleRef: React.Ref<MenuToggleElement>) => (
    <MenuToggle ref={toggleRef} variant="typeahead" onClick={onToggleClick} isExpanded={isOpen} isFullWidth>
      <TextInputGroup isPlain>
        <TextInputGroupMain
          value={inputValue}
          onClick={onToggleClick}
          onChange={onTextInputChange}
          onKeyDown={onInputKeyDown}
          id="typeahead-select-input"
          autoComplete="off"
          innerRef={textInputRef}
          placeholder="Select a state"
        />

        <TextInputGroupUtilities>
          {!!inputValue && (
            <Button
              variant="plain"
              onClick={() => {
                setSelected('');
                setInputValue('');
                setFilterValue('');
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
      ref={menuRef}
      isOpen={isOpen}
      selected={selected}
      onSelect={onSelect}
      onOpenChange={() => {
        setIsOpen(false);
        setFilterValue('');
      }}
      toggle={toggle}
    >
      <SelectList>
        {selectOptions.map((option, index) => (
          <SelectOption
            key={option.itemId || option.children}
            isFocused={focusedItemIndex === index}
            className={option.className}
            onClick={() => setSelected(option.itemId)}
            {...option}
            ref={null}
          />
        ))}
      </SelectList>
    </Select>
  );
};
