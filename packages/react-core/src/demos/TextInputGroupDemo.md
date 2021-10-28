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
  const [activeItem, setActiveItem] = React.useState(0);
  const keyNames = ['Action 1', 'Action 2', 'Action 3'];

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

  const keyItems = keyNames
    .filter(item => !inputValue || item.toLowerCase().includes(inputValue.toString().toLowerCase()))
    .map((currentValue, index) => (
      <MenuItem key={currentValue} itemId={index}>
        {currentValue}
      </MenuItem>
    ));

  if (inputValue && keyItems.length === 0) {
    keyItems.push(
      <MenuItem isDisabled key="no result">
        No results found
      </MenuItem>
    );
  }

  const onSelect = (event, itemId) => {
    setInputValue(keyNames[itemId])
  }

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
    <Menu onSelect={onSelect} activeItemId={activeItem}>
      <MenuContent>
        <MenuList>
          {keyItems}
        </MenuList>
      </MenuContent>
    </Menu>
  );

  return <Popper trigger={inputGroup} popper={menu} isVisible={showClearButton} />;
};
```
