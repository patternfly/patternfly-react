---
id: Text input group
section: components
cssPrefix: pf-c-text-input-group
propComponents: ['TextInputGroup', 'TextInputGroupMain', 'TextInputGroupUtilities']
beta: true
---

import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';

## Examples

### Basic

```js
import React from 'react';
import { TextInputGroup, TextInputGroupMain, TextInputGroupUtilities } from '@patternfly/react-core';

const BasicTextInputGroup = () => (
  <TextInputGroup>
    <TextInputGroupMain />
    <TextInputGroupUtilities />
  </TextInputGroup>
);
```

### Utilities and icon

```js
import React from 'react';
import { TextInputGroup, TextInputGroupMain, TextInputGroupUtilities, Button } from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';

const TextInputGroupWithIcons = () => (
  <TextInputGroup hasLeftIcon>
    <TextInputGroupMain inputIcon={<SearchIcon />} />
    <TextInputGroupUtilities>
      <Button variant="plain" aria-label="Clear button and input">
        <TimesIcon />
      </Button>
    </TextInputGroupUtilities>
  </TextInputGroup>
);
```

### Filters

```js
import React from 'react';
import { TextInputGroup, TextInputGroupMain, TextInputGroupUtilities, Button } from '@patternfly/react-core';
import { Chip, ChipGroup } from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';

const TextInputGroupWithChips = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [currentChips, setCurrentChips] = React.useState([
    'chip one',
    'chip two',
    'chip three',
    'chip four',
    'chip five',
    'chip six',
    'chip seven',
    'chip eight',
    'chip nine',
    'chip ten',
    'chip eleven',
    'chip twelve',
    'chip thirteen',
    'chip fourteen'
  ]);

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

  /** hide the input/chip clearing button only when the input and chip group are both empty */
  const showClearButton = inputValue || !!currentChips.length;

  /** callback for clearing all selected chips */
  const clearChipsAndInput = () => {
    setCurrentChips([]);
    setInputValue('');
  };

  return (
    <TextInputGroup hasLeftIcon={showSearchIcon}>
      <TextInputGroupMain inputIcon={showSearchIcon && <SearchIcon />} value={inputValue} onChange={handleInputChange}>
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
};
```
