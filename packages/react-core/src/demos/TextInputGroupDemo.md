---
id: Text input group
section: components
---

import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';

## Demos

### Key-value filtering

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
  Popper
} from '@patternfly/react-core';
import { Chip, ChipGroup } from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';

export const KeyValueFiltering = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [currentChips, setCurrentChips] = React.useState([]);
  const [selectedKey, setSelectedKey] = React.useState('');
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const menuRef = React.useRef();
  const textInputGrouopRef = React.useRef();
  const keyNames = ['Cluster', 'Kind', 'Label', 'Name', 'Namespace', 'Status'];
  const data = {
    Cluster: ['acmeqe-managed-1', 'local-cluster'],
    Kind: ['Template', 'ReplicationController', 'ReplicaSet', 'Deployment'],
    Label: ['release', 'environment', 'partition'],
    Name: ['backup-1', 'backup-2', 'production-1', 'production-2', 'testing'],
    Namespace: ['default', 'public'],
    Status: ['running', 'idle', 'stopped']
  };
  const [menuItemsText, setMenuItemsText] = React.useState(keyNames);

  /** show the search icon only when there are no chips to prevent the chips from being displayed behind the icon */
  const showSearchIcon = !currentChips.length;

  /** callback for updating the inputValue state in this component so that the input can be controlled */
  const handleInputChange = (value, _event) => {
    setInputValue(value);
  };

  /** callback for removing a chip from the chip selections */
  const deleteChip = chipToDelete => {
    const newChips = currentChips.filter(chip => !Object.is(chip, chipToDelete));
    setCurrentChips(newChips);
  };

  /** show the input/chip clearing button only when either the text input or chip group are not empty */
  const showClearButton = inputValue || !!currentChips.length;

  /** callback for clearing all selected chips and the text input */
  const clearChipsAndInput = () => {
    setCurrentChips([]);
    setInputValue('');
  };

  const menuItems = menuItemsText
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

  if (inputValue && menuItems.length === 0) {
    menuItems.push(
      <MenuItem isDisabled key="no result">
        No results found
      </MenuItem>
    );
  }

  const handleEnter = event => {
    if (event.key === 'Enter') {
      if (selectedKey.length) {
        selectValue(menuItems[0].props.children);
      } else {
        selectKey(menuItems[0].props.children);
      }
    }
  };

  const selectValue = selectedValueText => {
    setCurrentChips([...currentChips, `${selectedKey}: ${selectedValueText}`]);
    setSelectedKey('');
    setInputValue('');
    setMenuItemsText(keyNames);
  };

  const selectKey = selectedText => {
    setInputValue(`${selectedText}: `);
    setSelectedKey(selectedText);
    setMenuItemsText(data[selectedText]);
  };

  const onSelect = (event, itemId) => {
    if (selectedKey.length) {
      selectValue(data[selectedKey][itemId]);
    } else {
      selectKey(keyNames[itemId]);
    }
    event.stopPropagation();
  };

  const handleClick = event => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !textInputGrouopRef.current.contains(event.target)
    ) {
      setMenuIsOpen(false);
    }
  };

  const inputGroup = (
    <div ref={textInputGrouopRef}>
      <TextInputGroup>
        <TextInputGroupMain
          icon={showSearchIcon && <SearchIcon />}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setMenuIsOpen(true)}
          onKeyDown={handleEnter}
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
