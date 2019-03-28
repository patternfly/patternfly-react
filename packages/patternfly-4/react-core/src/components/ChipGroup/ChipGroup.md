---
title: "Chip Group"
cssPrefix: "pf-c-chip"
---
## Chip Group Toolbar
```js
import React from 'react';
import { Chip, ChipGroup, ChipGroupToolbarItem } from '@patternfly/react-core';

class ToolbarChipGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chipGroups: [
        {
          category: 'Category 1',
          chips: ['Chip 1', 'Chip 2']
        },
        {
          category: 'Category 2',
          chips: ['Chip 3', 'Chip 4']
        },
        {
          category: 'Category 3',
          chips: ['Chip 5', 'Chip 6', 'Chip 7', 'Chip 8']
        }
      ]
    };
    this.deleteItem = id => {
      const copyOfChipGroups = this.state.chipGroups;
      for (let i = 0; copyOfChipGroups.length > i; i++) {
        const index = copyOfChipGroups[i].chips.indexOf(id);
        if (index !== -1) {
          copyOfChipGroups[i].chips.splice(index, 1);
          // check if this is the last item in the group category
          if (copyOfChipGroups[i].chips.length === 0) {
            copyOfChipGroups.splice(i, 1);
            this.setState({ chipGroups: copyOfChipGroups });
          } else {
            this.setState({ chipGroups: copyOfChipGroups });
          }
        }
      }
    };
  }

  render() {
    const { chipGroups } = this.state;

    return (
      <ChipGroup withToolbar>
        {chipGroups.map(currentGroup => (
          <ChipGroupToolbarItem key={currentGroup.category} categoryName={currentGroup.category}>
            {currentGroup.chips.map(chip => (
              <Chip key={chip} onClick={() => this.deleteItem(chip)}>
                {chip}
              </Chip>
            ))}
          </ChipGroupToolbarItem>
        ))}
      </ChipGroup>
    );
  }
}
```

## Chip Group Multi-Select
```js
import React from 'react';
import { Chip, ChipGroup, ChipGroupItem } from '@patternfly/react-core';

class MultiSelectChipGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chipObject: ['Chip 1', 'Really long chip that goes on and on', 'Chip 3', 'Chip 4']
    };
    this.deleteItem = id => {
      const copyOfChipObject = this.state.chipObject;
      const index = copyOfChipObject.indexOf(id);
      if (index !== -1) {
        copyOfChipObject.splice(index, 1);
        this.setState({ chipObject: copyOfChipObject });
      }
    };
  }

  render() {
    const { chipObject } = this.state;
    return (
      <ChipGroup>
        {chipObject.map(currentChip => (
          <Chip key={currentChip} onClick={() => this.deleteItem(currentChip)}>
            {currentChip}
          </Chip>
        ))}
      </ChipGroup>
    );
  }
}
```

## Badge Chip Group
```js
import React from 'react';
import { Badge, ChipGroup, Chip } from '@patternfly/react-core';

class BadgeChip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      badgeChipArray: [
        {
          name: 'Lemons',
          isRead: true,
          count: 10
        },
        {
          name: 'Limes',
          isRead: true,
          count: 8
        }
      ]
    };
    this.deleteItem = id => {
      const copyOfbadgeChipArray = this.state.badgeChipArray;
      const index = copyOfbadgeChipArray.findIndex(chipObj => chipObj.name === id);

      if (index !== -1) {
        copyOfbadgeChipArray.splice(index, 1);
        this.setState({ badgeChipArray: copyOfbadgeChipArray });
      }
    };
  }

  render() {
    const { badgeChipArray } = this.state;
    return (
      <ChipGroup>
        {badgeChipArray.map(chip => (
          <Chip key={chip.name} onClick={() => this.deleteItem(chip.name)}>
            {chip.name}
            <Badge isRead={chip.isRead}>{chip.count}</Badge>
          </Chip>
        ))}
      </ChipGroup>
    );
  }
}
```