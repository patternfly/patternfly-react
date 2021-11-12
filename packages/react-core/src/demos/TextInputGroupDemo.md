---
id: Text input group
section: components
beta: true
---

import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';

## Demos

### Attribute-value filtering

This demo showcases the selection of attribute-value pairs based on a predefined set of data.

Available attributes are shown in a menu when focus is placed on the text input. Once an attribute is selected the values for that attribute will be shown in the menu. When a value is selected for the attribute the pair will be converted into a chip and placed into the chip group. Typing in the text input will filter the entries shown in the menu.

Attributes and values can both be selected by: 
- clicking the entry shown in the menu
- hitting the up or down arrows (while focused on the text input) to switch focus to the menu, navigating the menu using the arrow keys, and hitting `enter` on an entry
- hitting `enter` (while focused on the text input) to select the first entry shown in the menu at the time

Additionally, attributes can be selected by typing the full (case sensitive) name of an attribute, then typing `:`.

Attributes can be deselected (returning you to attribute selection mode) by hitting `escape`, or by hitting `backspace` when the only text in the text input is the attribute.

```js
import React from 'react';
import {
  TextInputGroup,
  TextInputGroupMain,
  TextInputGroupUtilities,
  Button,
  Menu,
  MenuContent,
  MenuList,
  MenuItem,
  Popper,
  Chip,
  ChipGroup,
  Divider
} from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';

export const KeyValueFiltering = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [selectedKey, setSelectedKey] = React.useState('');
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const [currentChips, setCurrentChips] = React.useState([]);

  /** key and value data to be shown in the menu */
  const data = {
    Cluster: ['acmeqe-managed-1', 'local-cluster'],
    Kind: ['Template', 'ReplicationController', 'ReplicaSet', 'Deployment'],
    Label: ['release', 'environment', 'partition'],
    Name: ['backup-1', 'backup-2', 'production-1', 'production-2', 'testing'],
    Namespace: ['default', 'public'],
    Status: ['running', 'idle', 'stopped']
  };
  const keyNames = ['Cluster', 'Kind', 'Label', 'Name', 'Namespace', 'Status'];
  const [menuItemsText, setMenuItemsText] = React.useState(keyNames);
  const [menuItems, setMenuItems] = React.useState([]);

  /** refs used to detect when clicks occur inside vs outside of the textInputGroup and menu popper */
  const menuRef = React.useRef();
  const textInputGroupRef = React.useRef();

  /** callback for updating the inputValue state in this component so that the input can be controlled */
  const handleInputChange = (value, _event) => {
    setInputValue(value);
  };

  /** callback for removing a chip from the chip selections */
  const deleteChip = chipToDelete => {
    const newChips = currentChips.filter(chip => !Object.is(chip, chipToDelete));
    setCurrentChips(newChips);
  };

  /** reset state hooks associated with key selection */
  const clearSelectedKey = () => {
    setInputValue('');
    setSelectedKey('');
    setMenuItemsText(keyNames);
  };

  /** callback for clearing all selected chips, the text input, and any selected keys */
  const clearChipsAndInput = () => {
    setCurrentChips([]);
    clearSelectedKey();
  };

  React.useEffect(() => {
    /** in the menu only show items that include the text in the input */
    const filteredMenuItems = menuItemsText
      .filter(
        item =>
          !inputValue ||
          item.toLowerCase().includes(
            inputValue
              .toString()
              .slice(selectedKey.length && selectedKey.length + 2)
              .toLowerCase()
          )
      )
      .map((currentValue, index) => (
        <MenuItem key={currentValue} itemId={index}>
          {currentValue}
        </MenuItem>
      ));

    /** in the menu show a disabled "no result" when all menu items are filtered out */
    if (filteredMenuItems.length === 0) {
      const noResultItem = (
        <MenuItem isDisabled key="no result">
          No results found
        </MenuItem>
      );
      setMenuItems([noResultItem]);
      return;
    }

    /** determine the menu heading text based on key selection; or lack thereof */
    const headingItem = (
      <MenuItem isDisabled key="heading">
        {selectedKey.length ? `${selectedKey} values` : 'Attributes'}
      </MenuItem>
    );

    const divider = <Divider key="divider" />;

    setMenuItems([headingItem, divider, ...filteredMenuItems]);
  }, [inputValue]);

  /** add selected key/value pair as a chip in the chip group */
  const selectValue = selectedValue => {
    setCurrentChips([...currentChips, `${selectedKey}: ${selectedValue}`]);
    clearSelectedKey();
  };

  /** update the input to show the selected key and the menu to show the values associated with that specific key */
  const selectKey = selectedText => {
    setInputValue(`${selectedText}: `);
    setSelectedKey(selectedText);
    setMenuItemsText(data[selectedText]);
  };

  const handleEnter = () => {
    /** do nothing if the menu contains no real results */
    if (menuItems.length === 1) {
      return;
    }

    /** perform the appropriate action based on key selection state */
    if (selectedKey.length) {
      selectValue(menuItems[2].props.children);
    } else {
      selectKey(menuItems[2].props.children);
    }
  };

  /** allow the user to backspace at the selected key name to drop the currently selected key */
  const handleBackspace = () => {
    if (selectedKey.length && inputValue === `${selectedKey}: `) {
      clearSelectedKey();
    }
  };

  /** allow the user to select a key by simply typing it and entering a colon, exact (case sensitive) matches only */
  const handleColon = () => {
    if (!selectedKey.length && keyNames.includes(inputValue)) {
      selectKey(inputValue);
      event.preventDefault();
    }
  };

  /** allow the user to focus on the menu and navigate using the arrow keys */
  const handleArrowKey = () => {
    if (menuRef.current) {
      const firstElement = menuRef.current.querySelector('li > button:not(:disabled)');
      firstElement && firstElement.focus();
    }
  };

  /** enable keyboard only usage */
  const handleTextInputKeyDown = event => {
    switch (event.key) {
      case 'Enter':
        handleEnter();
        break;
      case 'Escape':
        clearSelectedKey();
        break;
      case 'Backspace':
        handleBackspace();
        break;
      case ':':
        handleColon();
        break;
      case 'ArrowUp':
      case 'ArrowDown':
        handleArrowKey();
        break;
    }
  };

  /** perform the proper key or value selection when a menu item is selected */
  const onSelect = (event, _itemId) => {
    const selectedText = event.target.innerText;

    if (selectedKey.length) {
      selectValue(selectedText);
    } else {
      selectKey(selectedText);
    }
    event.stopPropagation();
    textInputGroupRef.current.querySelector('input').focus();
  };

  /** close the menu when a click occurs outside of the menu or text input group */
  const handleClick = event => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !textInputGroupRef.current.contains(event.target)
    ) {
      setMenuIsOpen(false);
    }
  };

  /** only show the search icon when no chips are selected */
  const showSearchIcon = !currentChips.length;

  /** only show the clear button when there is something that can be cleared */
  const showClearButton = inputValue || !!currentChips.length;

  const inputGroup = (
    <div ref={textInputGroupRef}>
      <TextInputGroup>
        <TextInputGroupMain
          icon={showSearchIcon && <SearchIcon />}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setMenuIsOpen(true)}
          onKeyDown={handleTextInputKeyDown}
        >
          <ChipGroup>
            {currentChips.map(currentChip => (
              <Chip key={currentChip} onClick={() => deleteChip(currentChip)}>
                {currentChip}
              </Chip>
            ))}
          </ChipGroup>
        </TextInputGroupMain>
        <TextInputGroupUtilities>
          {showClearButton && (
            <Button variant="plain" onClick={clearChipsAndInput} aria-label="Clear button and input">
              <TimesIcon />
            </Button>
          )}
        </TextInputGroupUtilities>
      </TextInputGroup>
    </div>
  );

  const menu = (
    <div ref={menuRef}>
      <Menu onSelect={onSelect}>
        <MenuContent>
          <MenuList>{menuItems}</MenuList>
        </MenuContent>
      </Menu>
    </div>
  );

  return <Popper trigger={inputGroup} popper={menu} isVisible={menuIsOpen} onDocumentClick={handleClick} />;
};
```
