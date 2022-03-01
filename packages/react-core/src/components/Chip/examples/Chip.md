---
id: Chip
section: components
cssPrefix: pf-c-chip
propComponents: ['Chip']
ouia: true
---

## Examples

### Default

```js
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
        name: 'Really long chip that goes on and on'
      },
      badgechip: {
        name: 'Chip',
        isRead: true,
        count: 7
      },
      readonlychip: {
        name: 'Read-only chip'
      },
      overflowchip: {
        name: 'Overflow chip'
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
          <Chip key="chip5" component="button" onClick={() => this.deleteItem('overflowchip')} isOverflowChip>
            {overflowchip.name}
          </Chip>
        )}
      </React.Fragment>
    );
  }
}
```
