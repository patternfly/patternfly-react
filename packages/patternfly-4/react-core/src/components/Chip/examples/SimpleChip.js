import React from 'react';
import { Chip } from '@patternfly/react-core';

class SimpleChip extends React.Component {
  state = {
    show: ['chip_one', 'chip_two']
  };
  deleteItem = id => {
    const { show } = this.state;
    const ix = show.indexOf(id);
    if (ix < 0) {
      return;
    }
    this.setState(() => ({
      show: [...show.slice(0, ix), ...show.slice(ix + 1, show.length)]
    }));
  };
  render() {
    const { show } = this.state
    return (
      <React.Fragment>
        {show.includes('chip_one') && (
          <Chip id="chip_one" onClick={() => this.deleteItem('chip_one')}>
            Chip
          </Chip>
        )}
        <br />
        <br />
        {show.includes('chip_two') && (
          <Chip id="chip_two" onClick={() => this.deleteItem('chip_two')}>
            Really long Chip that goes on and on
          </Chip>
        )}
        <br />
        <br />
        <Chip isOverflowChip={true}>4 more</Chip>
      </React.Fragment>
    );
  }
}

export default SimpleChip;
