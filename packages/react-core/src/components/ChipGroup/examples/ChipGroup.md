---
title: 'Chip group'
section: components
cssPrefix: 'pf-c-chip'
typescript: true
propComponents: ['Chip', 'ChipGroup']
---

import { Badge, Chip, ChipGroup } from '@patternfly/react-core';

## Examples
```js title=Single
import React from 'react';
import { Badge, Chip } from '@patternfly/react-core';

class SingleChip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chip: {
        name: 'Chip 1'
      },
      longchip: {
        name: 'Really long Chip that goes on and on'
      },
      badgechip: {
        name: 'Chip',
        isRead: true,
        count: 7
      },
      readonlychip: {
        name: 'Read-only Chip'
      },
      overflowchip: {
        name: 'Overflow Chip'
      }
    };
    this.deleteItem = id => {
      this.setState({ [id]: null });
    };
  }

  render() {
    const { chip, longchip, badgechip, readonlychip, overflowchip } = this.state;
    return (
      <React.Fragment>
        {chip && (
          <React.Fragment>
            <Chip key="chip1" onClick={() => this.deleteItem('chip')}>
              {chip.name}
            </Chip>
            <br /> <br />
          </React.Fragment>
        )}
        {longchip && (
          <React.Fragment>
            <Chip key="chip2" onClick={() => this.deleteItem('longchip')}>
              {longchip.name}
            </Chip>
            <br /> <br />
          </React.Fragment>
        )}
        {badgechip && (
          <React.Fragment>
            <Chip key="chip3" onClick={() => this.deleteItem('badgechip')}>
              {badgechip.name}
              <Badge isRead={badgechip.isRead}>{badgechip.count}</Badge>
            </Chip>
            <br /> <br />
          </React.Fragment>
        )}
        <Chip key="chip4" onClick={() => this.deleteItem('readonlychip')} isReadOnly>
          {readonlychip.name}
        </Chip>
        <br /> <br />
        {overflowchip && (
          <Chip key="chip5" component='button' onClick={() => this.deleteItem('overflowchip')} isOverflowChip>
            {overflowchip.name}
          </Chip>
        )}
      </React.Fragment>
    );
  }
}
```

```js title=Simple-inline-chip-group
import React from 'react';
import { Chip, ChipGroup } from '@patternfly/react-core';

class SimpleInlineChipGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chips: ['Chip one', 'Really long chip that goes on and on', 'Chip three', 'Chip four', 'Chip five']
    };

    this.deleteItem = id => {
      const copyOfChips = this.state.chips;
      const index = copyOfChips.indexOf(id);
      if (index !== -1) {
        copyOfChips.splice(index, 1);
        this.setState({ chips: copyOfChips });
      }
    };
  }

  render() {
    const { chips } = this.state;

    return (
      <ChipGroup>
        {chips.map(currentChip => (
          <Chip key={currentChip} onClick={() => this.deleteItem(currentChip)}>
            {currentChip}
          </Chip>
        ))}
      </ChipGroup>
    );
  }
}
```

```js title=Chip-groups-with-categories
import React from 'react';
import { Chip, ChipGroup } from '@patternfly/react-core';

class SimpleCategoryChipGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chips: ['Chip one', 'Chip two', 'Chip three', 'Chip four', 'Chip five']
    };
   this.deleteItem = id => {
      const copyOfChips = this.state.chips;
      const index = copyOfChips.indexOf(id);
      if (index !== -1) {
        copyOfChips.splice(index, 1);
        this.setState({ chips: copyOfChips });
      }
    };
  }

  render() {
    const { chips } = this.state;

    return (
      <ChipGroup categoryName="Category one">
        {chips.map(currentChip => (
          <Chip key={currentChip} onClick={() => this.deleteItem(currentChip)}>
            {currentChip}
          </Chip>
        ))}
      </ChipGroup>
    );
  }
}
```

```js title=Chip-groups-with-categories-removable
import React from 'react';
import { Chip, ChipGroup } from '@patternfly/react-core';

class CategoryChipGroupRemovable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chips: ['Chip one', 'Chip two', 'Chip three'],
      chips2: ['Chip one', 'Chip two', 'Chip three', 'Chip 4']
    };
   this.deleteItem = id => {
      const copyOfChips = this.state.chips;
      const index = copyOfChips.indexOf(id);
      if (index !== -1) {
        copyOfChips.splice(index, 1);
        this.setState({ chips: copyOfChips });
      }
    };

    this.deleteItem2 = id => {
      const copyOfChips = this.state.chips2;
      const index = copyOfChips.indexOf(id);
      if (index !== -1) {
        copyOfChips.splice(index, 1);
        this.setState({ chips2: copyOfChips });
      }
    };

    this.deleteCategory = () => {
      this.setState({ chips: [] });
    }

    this.deleteCategory2= () => {
      this.setState({ chips2: [] });
    }
  }

  render() {
    const { chips, chips2 } = this.state;

    return (
      <React.Fragment>
      <ChipGroup categoryName="Category one" isClosable onClick={this.deleteCategory}>
        {chips.map(currentChip => (
          <Chip key={currentChip} onClick={() => this.deleteItem(currentChip)}>
            {currentChip}
          </Chip>
        ))}
      </ChipGroup>
      <br /> <br />
      <ChipGroup categoryName="Category two has a very long name" isClosable onClick={this.deleteCategory2}>
        {chips2.map(currentChip => (
          <Chip key={currentChip} onClick={() => this.deleteItem2(currentChip)}>
            {currentChip}
          </Chip>
        ))}
      </ChipGroup>
      </React.Fragment>
    );
  }
}
```
