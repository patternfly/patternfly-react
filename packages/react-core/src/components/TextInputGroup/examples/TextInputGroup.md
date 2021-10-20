---
id: Text input group
section: components
cssPrefix: pf-c-text-input-group
propComponents: ['TextInputGroup', 'TextInputGroupMain', 'TextInputGroupUtilities']
beta: true
---

import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';

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
import { TextInputGroup, TextInputGroupMain, TextInputGroupUtilities } from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';

const TextInputGroupWithIcons = () => (
  <TextInputGroup hasLeftIcon>
    <TextInputGroupMain inputIcon={<SearchIcon />} />
    <TextInputGroupUtilities clearSelection={() => {}} />
  </TextInputGroup>
);
```

### Filters

```js
import React from 'react';
import { TextInputGroup, TextInputGroupMain, TextInputGroupUtilities } from '@patternfly/react-core';
import { Chip, ChipGroup } from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';

const [chipGroupDefaultOpen, setChipGroupDefaultOpen] = React.useState(false);
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

const toggleDefault = () => {
  setChipGroupDefaultOpen(!chipGroupDefaultOpen);
};

/** callback for removing a chip from the chip selections */
const deleteChip = chipToDelete => {
  const newChips = currentChips.filter(chip => !Object.is(chip, chipToDelete));
  setCurrentChips(newChips);
};

/** callback for clearing all selected chips */
const clearAllChips = () => {
  setCurrentChips([]);
};

const TextInputGroupWithChips = () => (
  <TextInputGroup hasLeftIcon={showSearchIcon}>
    <TextInputGroupMain inputIcon={showSearchIcon && <SearchIcon />}>
      <ChipGroup defaultIsOpen={chipGroupDefaultOpen} onOverflowChipClick={toggleDefault}>
        {currentChips.map(currentChip => (
          <Chip key={currentChip} onClick={() => deleteChip(currentChip)}>
            {currentChip}
          </Chip>
        ))}
      </ChipGroup>
    </TextInputGroupMain>
    <TextInputGroupUtilities clearSelection={clearAllChips} />
  </TextInputGroup>
);
```
