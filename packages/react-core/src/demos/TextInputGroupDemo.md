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

const KeyVaueFiltering = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [currentChips, setCurrentChips] = React.useState([]);
  const [selectedKey, setSelectedKey] = React.useState('');
  const keyNames = ['Action 1', 'Action 2', 'Action 3'];
  const [menuItemsText, setMenuItemsText] = React.useState(keyNames);
  const data = {
    'Action 1': ['name', 'status'],
    'Action 2': ['name', 'status'],
    'Action 3': ['name', 'status']
  };

  /** show the search icon only when there are no chips to prevent the chips from being displayed behind the icon */
  const showSearchIcon = !currentChips.length;

  /** callback for updating the inputValue state in this component so that the input can be controlled */
  const handleInputChange = event => {
    setInputValue(event.target.value);
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
            .slice(selectedKey.length + 2)
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

  const selectValue = selectedValueText => {
    setCurrentChips([...currentChips, `${selectedKey}: ${selectedValueText}`]);
    setSelectedKey('');
    setInputValue('');
    setMenuItemsText(keyNames)
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
  };

  const inputGroup = (
    <TextInputGroup>
      <TextInputGroupMain icon={showSearchIcon && <SearchIcon />} value={inputValue} onChange={handleInputChange}>
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
  );

  const menu = (
    <Menu onSelect={onSelect}>
      <MenuContent>
        <MenuList>{menuItems}</MenuList>
      </MenuContent>
    </Menu>
  );

  return <Popper trigger={inputGroup} popper={menu} isVisible={showClearButton} />;
};
```
