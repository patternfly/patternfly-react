import React from 'react';

import {
  Menu,
  MenuContent,
  MenuList,
  MenuItem,
  Popper,
  MenuToggle,
  TextInputGroup,
  MenuItemProps,
  Button,
  TextInputGroupUtilities,
  TextInputGroupMain,
  MenuToggleElement
} from '@patternfly/react-core';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import TableIcon from '@patternfly/react-icons/dist/esm/icons/table-icon';

const intitalMenuItems: MenuItemProps[] = [
  { itemId: 'Option 1', children: 'Option 1' },
  { itemId: 'Option 2', children: 'Option 2' },
  { itemId: 'Option 3', children: 'Option 3', icon: <TableIcon aria-hidden /> }
];

export const ComposableTypeaheadSelect: React.FunctionComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState<string>('');
  const [menuItems, setMenuItems] = React.useState<MenuItemProps[]>(intitalMenuItems);
  const [focusedItemIndex, setFocusedItemIndex] = React.useState<number | null>(null);
  const [isSelected, setIsSelected] = React.useState(false);

  const menuToggleRef = React.useRef<MenuToggleElement>({} as MenuToggleElement);
  const textInputRef = React.useRef<HTMLInputElement>();

  React.useEffect(() => {
    let newMenuItems: MenuItemProps[] = intitalMenuItems;

    // Filter menu items based on the text input value when one exists
    if (inputValue) {
      newMenuItems = intitalMenuItems.filter(menuItem =>
        String(menuItem.children)
          .toLowerCase()
          .includes(inputValue.toLowerCase())
      );

      // When no options are found after filtering, display 'No results found'
      if (!newMenuItems.length) {
        newMenuItems = [{ isDisabled: true, children: 'No results found' }];
      }
    }

    setMenuItems(newMenuItems);
  }, [inputValue]);

  const focusOnInput = () => menuToggleRef.current?.querySelector('input')?.focus();

  const onMenuSelect = (event: React.MouseEvent | undefined, itemId: string | number | undefined) => {
    if (itemId) {
      setInputValue(itemId.toString());
      setIsSelected(true);
    }

    setIsMenuOpen(false);
    setFocusedItemIndex(null);
    focusOnInput();
  };

  const handleMenuArrowKeys = (key: string) => {
    let indexToFocus;

    if (isMenuOpen) {
      if (key === 'ArrowUp') {
        // When no index is set or at the first index, focus to the last, otherwise decrement focus index
        if (focusedItemIndex === null || focusedItemIndex === 0) {
          indexToFocus = menuItems.length - 1;
        } else {
          indexToFocus = focusedItemIndex - 1;
        }
      }

      if (key === 'ArrowDown') {
        // When no index is set or at the last index, focus to the first, otherwise increment focus index
        if (focusedItemIndex === null || focusedItemIndex === menuItems.length - 1) {
          indexToFocus = 0;
        } else {
          indexToFocus = focusedItemIndex + 1;
        }
      }

      setFocusedItemIndex(indexToFocus);
    }
  };

  const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const enabledMenuItems = menuItems.filter(menuItem => !menuItem.isDisabled);
    const [firstMenuItem] = enabledMenuItems;
    const focusedItem = focusedItemIndex ? enabledMenuItems[focusedItemIndex] : firstMenuItem;

    switch (event.key) {
      // Select the first available option
      case 'Enter':
        if (isMenuOpen) {
          setInputValue(String(focusedItem.children));
          setIsSelected(true);
        }

        setIsMenuOpen(prevIsOpen => !prevIsOpen);
        setFocusedItemIndex(null);
        focusOnInput();

        break;
      case 'Tab':
      case 'Escape':
        setIsMenuOpen(false);
        break;
      case 'ArrowUp':
      case 'ArrowDown':
        handleMenuArrowKeys(event.key);
        break;
      default:
        !isMenuOpen && setIsMenuOpen(true);
    }
  };

  // Close the menu when a click occurs outside of the menu toggle content
  const onDocumentClick = (event: MouseEvent | undefined) => {
    if (!menuToggleRef.current?.contains(event?.target as HTMLElement)) {
      setIsMenuOpen(false);
    }
  };

  const toggleMenuOpen = () => {
    setIsMenuOpen(prevIsOpen => !prevIsOpen);
    textInputRef.current?.focus();
  };

  const onTextInputChange = (_event: React.FormEvent<HTMLInputElement>, value: string) => {
    setInputValue(value);
    setIsSelected(false);
  };

  return (
    <Popper
      trigger={
        <MenuToggle
          variant="typeahead"
          onClick={toggleMenuOpen}
          innerRef={menuToggleRef}
          isExpanded={isMenuOpen}
          isFullWidth
        >
          <TextInputGroup isPlain>
            <TextInputGroupMain
              value={inputValue}
              onClick={toggleMenuOpen}
              onChange={onTextInputChange}
              onKeyDown={onInputKeyDown}
              id="typeahead-select-input"
              autoComplete="off"
              innerRef={textInputRef}
            />

            <TextInputGroupUtilities>
              {!!inputValue && (
                <Button variant="plain" onClick={() => setInputValue('')} aria-label="Clear input value">
                  <TimesIcon aria-hidden />
                </Button>
              )}
            </TextInputGroupUtilities>
          </TextInputGroup>
        </MenuToggle>
      }
      popper={
        <Menu id="select-menu" onSelect={onMenuSelect} selected={isSelected && inputValue}>
          <MenuContent>
            <MenuList>
              {menuItems.map((itemProps, index) => (
                <MenuItem
                  key={itemProps.itemId || itemProps.children}
                  isFocused={focusedItemIndex === index}
                  className={itemProps.className}
                  onClick={() => setIsSelected(true)}
                  {...itemProps}
                  ref={null}
                />
              ))}
            </MenuList>
          </MenuContent>
        </Menu>
      }
      isVisible={isMenuOpen}
      onDocumentClick={onDocumentClick}
    />
  );
};
