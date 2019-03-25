import React from 'react';
import { Badge, Chip } from '@patternfly/react-core';

class SingleChip extends React.Component {
  state = {
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
    }
  };

  deleteItem = id => {
    this.setState({ [id]: null });
  };

  render() {
    const { chip, longchip, badgechip, readonlychip } = this.state;
    return (
      <React.Fragment>
        <Chip key="chip1" onClick={() => this.deleteItem('chip')}>
          {chip.name}
        </Chip>
        <br /> <br />
        <Chip key="chip2" onClick={() => this.deleteItem('longchip')}>
          {longchip.name}
        </Chip>
        <br /> <br />
        <Chip key="chip3" onClick={() => this.deleteItem('badgechip')}>
          {badgechip.name}
          <Badge isRead={badgechip.isRead}>{badgechip.count}</Badge>
        </Chip>
        <br /> <br />
        <Chip key="chip4" onClick={() => this.deleteItem('readonlychip')} isReadOnly>
          {readonlychip.name}
        </Chip>
      </React.Fragment>
    );
  }
}

export default SingleChip;
