import React from 'react';
import { Chip, ChipGroup, ChipGroupItem } from '@patternfly/react-core';

class MultiSelectChipGroup extends React.Component {
  state = {
    chipObject: ['Chip 1', 'Really long chip that goes on and on', 'Chip 3', 'Chip 4']
  };

  deleteItem = id => {
    const copyOfChipObject = this.state.chipObject;
    const index = copyOfChipObject.indexOf(id);
    if (index !== -1) {
      copyOfChipObject.splice(index, 1);
      this.setState({ chipObject: copyOfChipObject });
    }
  };

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

export default MultiSelectChipGroup;
