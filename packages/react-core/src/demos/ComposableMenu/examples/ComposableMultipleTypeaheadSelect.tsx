import React from 'react';
import {
  Menu,
  MenuContent,
  MenuList,
  MenuItem,
  MenuItemProps,
  MenuToggle,
  MenuToggleElement,
  Popper,
  TextInputGroup,
  TextInputGroupMain,
  TextInputGroupUtilities,
  ChipGroup,
  Chip,
  Button
} from '@patternfly/react-core';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';

const intitalMenuItems = [
  { itemId: 'Option 1', children: 'Option 1' },
  { itemId: 'Option 2', children: 'Option 2' },
  { itemId: 'Option 3', children: 'Option 3' }
];

export const ComposableMultipleTypeaheadSelect: React.FunctionComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState<string>('');
  const [menuItems, setMenuItems] = React.useState<MenuItemProps[]>(intitalMenuItems);
  const [focusedItemIndex, setFocusedItemIndex] = React.useState<number | null>(null);
  const [selected, setSelected] = React.useState<string[]>([]);
  const containerRef = React.useRef<HTMLDivElement>();
  const menuToggleRef = React.useRef<MenuToggleElement>({} as MenuToggleElement);
  const textInputRef = React.useRef<HTMLInputElement>();
  const menuRef = React.useRef<HTMLDivElement>();

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
        if (!isMenuOpen) {
          setIsMenuOpen(prevIsOpen => !prevIsOpen);
        } else {
          onMenuSelect(focusedItem.itemId as string);
        }
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
  const onDocumentClick = (event: MouseEvent) => {
    if (
      isMenuOpen &&
      !menuToggleRef.current?.contains(event?.target as HTMLElement) &&
      !menuRef?.current?.contains(event.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  const toggleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
    textInputRef.current?.focus();
  };

  const onTextInputChange = (_event: React.FormEvent<HTMLInputElement>, value: string) => {
    setInputValue(value);
  };

  const onMenuSelect = (itemId: string) => {
    if (itemId) {
      setSelected(
        selected.includes(itemId) ? selected.filter(selection => selection !== itemId) : [...selected, itemId]
      );
    }
  };

  const toggle = (
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
        >
          <ChipGroup>
            {selected.map((selection, index) => (
              <Chip
                key={index}
                onClick={ev => {
                  ev.stopPropagation();
                  onMenuSelect(selection);
                }}
              >
                {selection}
              </Chip>
            ))}
          </ChipGroup>
        </TextInputGroupMain>
        <TextInputGroupUtilities>
          {selected.length > 0 && (
            <Button
              variant="plain"
              onClick={() => {
                setInputValue('');
                setSelected([]);
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
  const menu = (
    <Menu
      ref={menuRef as React.Ref<HTMLDivElement>}
      id="multiple-typeahead-select-menu"
      onSelect={(_ev, itemId) => onMenuSelect(itemId?.toString() as string)}
      selected={selected}
    >
      <MenuContent>
        <MenuList>
          {menuItems.map((itemProps, index) => (
            <MenuItem
              key={itemProps.itemId || itemProps.children}
              isFocused={focusedItemIndex === index}
              className={itemProps.className}
              {...itemProps}
              ref={null}
            />
          ))}
        </MenuList>
      </MenuContent>
    </Menu>
  );
  return (
    <div ref={containerRef as React.Ref<HTMLDivElement>}>
      <Popper
        trigger={toggle}
        popper={menu}
        appendTo={containerRef.current}
        isVisible={isMenuOpen}
        onDocumentClick={onDocumentClick}
      />
    </div>
  );
};
