import React from 'react';
import { Chip, ChipGroup, ChipGroupToolbarItem } from '@patternfly/react-core';

class ToolbarChipGroup extends React.Component {
  state = {
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

  deleteItem = id => {
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

export default ToolbarChipGroup;
